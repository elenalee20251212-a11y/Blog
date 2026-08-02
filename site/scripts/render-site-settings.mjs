import fs from 'node:fs'
import path from 'node:path'
import { CONTENT_ROOT, SITE_ROOT, readSite } from './site-lib.mjs'

const MOBILE_VIEWPORT = 390
const DESKTOP_VIEWPORT = 1440

export function fluidFontSize(mobile, desktop) {
  if (mobile === desktop) return `${mobile}px`
  const slope = ((desktop - mobile) / (DESKTOP_VIEWPORT - MOBILE_VIEWPORT)) * 100
  const intercept = mobile - (slope * MOBILE_VIEWPORT) / 100
  return `clamp(${mobile}px, calc(${intercept.toFixed(4)}px + ${slope.toFixed(4)}vw), ${desktop}px)`
}

export function renderSiteSettings({ quiet = false } = {}) {
  const site = readSite()
  const contentSize = site.typography?.contentSize ?? {}
  const contentExpression = fluidFontSize(
    Number(contentSize.mobile ?? 15),
    Number(contentSize.desktop ?? 16)
  )
  const homeSize = site.typography?.homeSize ?? {}
  const homeExpression = fluidFontSize(
    Number(homeSize.mobile ?? 16),
    Number(homeSize.desktop ?? 18)
  )

  const webFile = path.join(CONTENT_ROOT, '.vitepress', 'theme', 'site-settings.generated.css')
  const mpeFile = path.join(SITE_ROOT, '.crossnote', 'site-settings.generated.less')
  fs.writeFileSync(
    webFile,
    `:root { --site-content-font-size: ${contentExpression}; --site-home-font-size: ${homeExpression}; }\n`,
    'utf8'
  )
  fs.writeFileSync(mpeFile, `@site-content-font-size: ${contentExpression};\n`, 'utf8')
  if (!quiet) {
    console.log(`Site settings ready: content font ${contentExpression}; home font ${homeExpression}`)
  }
  return { contentExpression, homeExpression, webFile, mpeFile }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  renderSiteSettings()
}
