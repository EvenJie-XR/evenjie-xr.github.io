function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      '_astro/SwupA11yPlugin.BgTISWkK.js',
      '_astro/Swup.BPHaxb0p.js',
      '_astro/index.modern.CkIAsQri.js',
      '_astro/_commonjsHelpers.Cpj98o6Y.js',
      '_astro/SwupMorphPlugin.BFWF9OtS.js',
      '_astro/SwupPreloadPlugin.BNZoJAcv.js',
      '_astro/SwupScrollPlugin.Bu_zR7r_.js',
      '_astro/SwupBodyClassPlugin.aa8fLSdp.js',
      '_astro/SwupHeadPlugin.FjGODCox.js',
      '_astro/SwupScriptsPlugin.o5PkFIdr.js',
    ]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { _ as i } from './preload-helper.ygWHROA3.js'
function r(n) {
  return JSON.parse(n, l)
}
function l(n, t) {
  if (Array.isArray(t) && t.length === 2 && typeof t[1] == 'string') {
    const o = t[0]
    if (((t = t[1]), o === ':regex:')) {
      const u = t.match(/\/(.*?)\/([a-z]*)?$/i) || []
      return new RegExp(u[1], u[2] || '')
    }
    if (o === ':function:') return new Function(`return (${t}).apply(this, arguments);`)
  }
  return t
}
function _(n, { timeoutFallback: t = 1e3 } = {}) {
  'requestIdleCallback' in window ? window.requestIdleCallback(() => n()) : setTimeout(() => n(), t)
}
function w(n) {
  document.readyState === 'complete'
    ? setTimeout(() => n(), 0)
    : window.addEventListener('load', () => n())
}
function f(n, { delayAfterLoad: t = 0 } = {}) {
  w(() => {
    t > 0 ? setTimeout(() => _(n), t) : _(n)
  })
}
async function m() {
  const [n, t, o, u, s, d, a, p] = await Promise.all([
    i(() => import('./Swup.BPHaxb0p.js').then((e) => e.S), []).then((e) => e.default),
    i(() => import('./SwupA11yPlugin.BgTISWkK.js'), __vite__mapDeps([0, 1, 2, 3])).then(
      (e) => e.default,
    ),
    i(() => import('./SwupMorphPlugin.BFWF9OtS.js'), __vite__mapDeps([4, 1, 2])).then(
      (e) => e.default,
    ),
    i(() => import('./SwupPreloadPlugin.BNZoJAcv.js'), __vite__mapDeps([5, 2, 1])).then(
      (e) => e.default,
    ),
    i(() => import('./SwupScrollPlugin.Bu_zR7r_.js'), __vite__mapDeps([6, 2, 1])).then(
      (e) => e.default,
    ),
    i(() => import('./SwupBodyClassPlugin.aa8fLSdp.js'), __vite__mapDeps([7, 2])).then(
      (e) => e.default,
    ),
    i(() => import('./SwupHeadPlugin.FjGODCox.js'), __vite__mapDeps([8, 2])).then((e) => e.default),
    i(() => import('./SwupScriptsPlugin.o5PkFIdr.js'), __vite__mapDeps([9, 2])).then(
      (e) => e.default,
    ),
  ])
  new n({
    animationSelector: '[class*="swup-transition-"]',
    containers: ['main'],
    cache: !0,
    plugins: [
      new t(r('{}')),
      new o(r('{"containers":["[component-export=\\"Provider\\"]"]}')),
      new u(r('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),
      new s(r('{}')),
      new d(r('{}')),
      new a(r('{"awaitAssets":true}')),
      new p(r('{}')),
    ],
  })
}
f(m)
