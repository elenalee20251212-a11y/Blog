// Trial-only measurement. No data is sent anywhere.
window.__trialMetrics = { longTasks: [], layoutShifts: [], marks: [] };
try {
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries())
      window.__trialMetrics.longTasks.push({
        start: entry.startTime,
        duration: entry.duration,
      });
  }).observe({ type: "longtask", buffered: true });
} catch {}
try {
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries())
      if (!entry.hadRecentInput)
        window.__trialMetrics.layoutShifts.push(entry.value);
  }).observe({ type: "layout-shift", buffered: true });
} catch {}
function publish() {
  let output = document.querySelector('meta[name="trial-performance"]');
  if (!output) {
    output = document.createElement("meta");
    output.name = "trial-performance";
    document.head.appendChild(output);
  }
  const nav = performance.getEntriesByType("navigation")[0];
  output.setAttribute(
    "content",
    JSON.stringify({
      responseEnd: nav?.responseEnd,
      domContentLoaded: nav?.domContentLoadedEventEnd,
      load: nav?.loadEventEnd,
      serverTiming: nav?.serverTiming.map((v) => ({
        name: v.name,
        duration: v.duration,
      })),
      paint: performance
        .getEntriesByType("paint")
        .map((v) => ({ name: v.name, time: v.startTime })),
      longTasks: window.__trialMetrics.longTasks,
      cls: window.__trialMetrics.layoutShifts.reduce((a, b) => a + b, 0),
    }),
  );
}
window.addEventListener(
  "load",
  () => {
    window.__trialMetrics.marks.push({ name: "load", time: performance.now() });
    requestAnimationFrame(() => requestAnimationFrame(publish));
    document.fonts.ready.then(publish);
  },
  { once: true },
);
new PerformanceObserver(publish).observe({ type: "longtask", buffered: true });
