import './index.BFw_thZa.js'
import { C as x, m as n } from './context.DnuEp7hM.js'
import { j as e } from './jsx-runtime.CvXbGX33.js'
import { $ as l, a as p, b as f, c as b } from './index.JCGM9l0T.js'
import { m as u } from './motion.UigYBGvC.js'
import { a as $, u as j } from './react.BMyoJHg8.js'
import { A as y } from './index.SJVN7jjm.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './index.CiZslDTt.js'
import './SVGVisualElement.De6LOhF_.js'
function h({ children: s, index: t, id: i }) {
  const a = 1e3 + t,
    c = 1e3 + t + 1,
    d = $(n),
    r = () => {
      d((o) => o.filter((m) => m.id !== i))
    }
  return e.jsx(l, {
    open: !0,
    onOpenChange: (o) => {
      o || r()
    },
    children: e.jsxs(p, {
      children: [
        e.jsx(f, {
          asChild: !0,
          children: e.jsx(u.div, {
            className: 'fixed inset-0 bg-gray-800/40',
            style: { zIndex: a },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { delay: 0.1 } },
          }),
        }),
        e.jsx(b, {
          className: 'fixed inset-0 flex items-center justify-center',
          style: { zIndex: c },
          onClick: (o) => {
            o.target === o.currentTarget && r()
          },
          children: e.jsx(x.Provider, { value: { dismiss: r }, children: s }),
        }),
      ],
    }),
  })
}
function P() {
  const s = j(n)
  return e.jsx(y, {
    children: s.map((t, i) => e.jsx(h, { index: i, id: t.id, children: t.content }, t.id)),
  })
}
export { P as ModalStack }
