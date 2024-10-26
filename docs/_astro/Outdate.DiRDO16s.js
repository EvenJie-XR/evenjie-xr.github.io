import { j as e } from './jsx-runtime.CvXbGX33.js'
import { r } from './index.BFw_thZa.js'
import { g as o, a } from './date.Dfx-CKFM.js'
import { A as m } from './index.SJVN7jjm.js'
import { m as f } from './motion.UigYBGvC.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './SVGVisualElement.De6LOhF_.js'
function l({ lastMod: t }) {
  const [i, s] = r.useState(!1)
  return (
    r.useEffect(() => {
      o(t) > 30 && s(!0)
    }, [t]),
    e.jsx(m, {
      children:
        i &&
        e.jsx(f.div, {
          className:
            'flex justify-center text-sm p-4 rounded-lg bg-amber-300/10 border border-amber-300',
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: e.jsxs('span', {
            children: [
              '这篇文章最后修改于 ',
              a(t),
              '，部分内容可能已经不适用，如有疑问可联系作者。',
            ],
          }),
        }),
    })
  )
}
export { l as Outdate }
