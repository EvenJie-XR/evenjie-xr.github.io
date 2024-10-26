const v = 'modulepreload',
  p = function (i) {
    return '/astro-gyoza-personal-blog/' + i
  },
  f = {},
  g = function (d, l, h) {
    let a = Promise.resolve()
    if (l && l.length > 0) {
      const r = document.getElementsByTagName('link'),
        n = document.querySelector('meta[property=csp-nonce]'),
        u = n?.nonce || n?.getAttribute('nonce')
      a = Promise.all(
        l.map((e) => {
          if (((e = p(e)), e in f)) return
          f[e] = !0
          const o = e.endsWith('.css'),
            m = o ? '[rel="stylesheet"]' : ''
          if (!!h)
            for (let s = r.length - 1; s >= 0; s--) {
              const c = r[s]
              if (c.href === e && (!o || c.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${e}"]${m}`)) return
          const t = document.createElement('link')
          if (
            ((t.rel = o ? 'stylesheet' : v),
            o || ((t.as = 'script'), (t.crossOrigin = '')),
            (t.href = e),
            u && t.setAttribute('nonce', u),
            document.head.appendChild(t),
            o)
          )
            return new Promise((s, c) => {
              t.addEventListener('load', s),
                t.addEventListener('error', () => c(new Error(`Unable to preload CSS for ${e}`)))
            })
        }),
      )
    }
    return a
      .then(() => d())
      .catch((r) => {
        const n = new Event('vite:preloadError', { cancelable: !0 })
        if (((n.payload = r), window.dispatchEvent(n), !n.defaultPrevented)) throw r
      })
  }
export { g as _ }
