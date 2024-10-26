import { r as o } from './index.BFw_thZa.js'
import { m as c, C as m } from './context.DnuEp7hM.js'
import { a as i } from './react.BMyoJHg8.js'
function p() {
  const s = o.useId(),
    a = o.useRef(0),
    r = i(c)
  return {
    present(e) {
      const u = `${s}-${a.current++}`,
        n = { ...e, id: e.id ?? u }
      return (
        r((t) => [...t, n]),
        () => {
          r((t) => t.filter((d) => d.id !== n.id))
        }
      )
    },
  }
}
function x() {
  return o.useContext(m)
}
export { x as a, p as u }
