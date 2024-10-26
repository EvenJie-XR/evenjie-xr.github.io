import { j as s } from './jsx-runtime.CvXbGX33.js'
import { r as i } from './index.BFw_thZa.js'
import { p as a } from './scrollInfo.CtKlQEWa.js'
import { f } from './floor.BMxdpmqZ.js'
import { u as p } from './react.DyEG0UK6.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './toNumber.DCaU3JdG.js'
function w() {
  const [n, e] = i.useState(0),
    t = p(a)
  return (
    i.useEffect(() => {
      const o = document.querySelector('#markdown-wrapper')
      if (!o) return
      const { offsetHeight: c, offsetTop: m } = o,
        r = c + m - window.innerHeight
      t > r ? e(100) : e(f((t / r) * 100))
    }, [t]),
    s.jsx('div', {
      children: s.jsxs('span', { className: 'text-sm', children: ['进度 ', n, '%'] }),
    })
  )
}
export { w as ReadingProgress }
