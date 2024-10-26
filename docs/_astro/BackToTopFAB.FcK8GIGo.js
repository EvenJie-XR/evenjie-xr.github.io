import { j as o } from './jsx-runtime.CvXbGX33.js'
import { p as r } from './scrollInfo.CamQlM5f.js'
import { A as a } from './index.SJVN7jjm.js'
import { m as c } from './motion.UigYBGvC.js'
import { u as s } from './react.Ds3aoTLk.js'
import './index.BFw_thZa.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './SVGVisualElement.De6LOhF_.js'
function f() {
  const i = s(r) > 100
  return o.jsx('div', {
    className: 'fixed right-4 bottom-6 z-10',
    children: o.jsx(a, { children: i && o.jsx(e, {}) }),
  })
}
function e() {
  const t = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return o.jsx(c.button, {
    className:
      'size-10 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur',
    type: 'button',
    'aria-label': 'Back to top',
    onClick: t,
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
    children: o.jsx('i', { className: 'iconfont icon-rocket' }),
  })
}
export { f as BackToTopFAB }
