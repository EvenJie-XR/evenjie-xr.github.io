import { j as s } from './jsx-runtime.CvXbGX33.js'
import { r } from './index.BFw_thZa.js'
import { f as a } from './config.-o55578i.js'
import { g as n } from './date.Dfx-CKFM.js'
import './_commonjsHelpers.Cpj98o6Y.js'
function c() {
  const [t, o] = r.useState(0)
  return (
    r.useLayoutEffect(() => {
      const e = n(new Date(a.startTime))
      o(e)
    }, []),
    t < 0
      ? s.jsx('span', { children: 'Ops! 网站还没有发布' })
      : s.jsxs('span', { children: ['已经运行了 ', t, ' 天'] })
  )
}
export { c as RunningDays }
