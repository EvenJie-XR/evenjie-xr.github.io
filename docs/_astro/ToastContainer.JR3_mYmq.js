import { j as t } from './jsx-runtime.CvXbGX33.js'
import { Q as r } from './react-toastify.esm.CfDUXWLA.js'
import './index.BFw_thZa.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './clsx.B-dksMZM.js'
function p() {
  return t.jsx(r, {
    position: 'bottom-right',
    autoClose: 3e3,
    hideProgressBar: !0,
    closeButton: e,
    toastClassName: '!bg-primary !text-primary text-sm border border-primary',
  })
}
function e({ closeToast: o }) {
  return t.jsx('button', {
    type: 'button',
    'aria-label': 'Close Toast',
    className: 'text-lg opacity-50 hover:opacity-100',
    onClick: o,
    children: t.jsx('i', { className: 'iconfont icon-close' }),
  })
}
export { p as ToastContainer }
