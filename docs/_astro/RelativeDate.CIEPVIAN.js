import { j as s } from './jsx-runtime.CvXbGX33.js'
import { a as i, b as m } from './date.Dfx-CKFM.js'
import { r } from './index.BFw_thZa.js'
import './_commonjsHelpers.Cpj98o6Y.js'
function u({ date: t }) {
  const [a, o] = r.useState(i(t))
  return (
    r.useEffect(() => {
      const e = m(t)
      e && o(e)
    }, [t]),
    s.jsx('span', { children: a })
  )
}
export { u as RelativeDate }
