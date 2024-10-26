import { j as e } from './jsx-runtime.CvXbGX33.js'
import { a as $, b as I, m as B, p as _, h as D } from './metaInfo.vp8RG1Kd.js'
import { p as b, a as L } from './scrollInfo.CamQlM5f.js'
import { i as E } from './viewport.C-PxkPIm.js'
import { f as P } from './floor.BMxdpmqZ.js'
import { u as o } from './react.Ds3aoTLk.js'
import { r } from './index.BFw_thZa.js'
import { m as k, b as V, s as O } from './config.-o55578i.js'
import { c as f } from './clsx.B-dksMZM.js'
import { r as R } from './index.CiZslDTt.js'
import { A as m } from './index.SJVN7jjm.js'
import { m as l } from './motion.UigYBGvC.js'
import { _ as Y } from './preload-helper.ygWHROA3.js'
import { u as K, a as T } from './hooks.CPYsRvJn.js'
import './context.TYX-_Ixy.js'
import { $ as F, d as X, a as Z, b as q, c as G } from './index.JCGM9l0T.js'
import './toNumber.DCaU3JdG.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './SVGVisualElement.De6LOhF_.js'
const x = 60
function J() {
  const t = o(b)
  return t >= x * 2 ? 1 : t <= x ? 0 : P((t - x) / x, 2)
}
function z() {
  return o(D)
}
function Q() {
  return o(b) < x
}
function C() {
  return o(E)
}
function N() {
  const t = z(),
    s = o(b)
  return t && s >= x
}
function U() {
  const t = o($),
    s = o(I),
    n = o(B)
  return { title: t, description: s, slug: n }
}
function W() {
  return o(_)
}
function ee() {
  const t = o(b),
    s = o(L)
  return z() && t >= 400 && s === 'up'
}
function te() {
  const t = J()
  return e.jsx('div', {
    className:
      'absolute inset-0 -z-1 border-b border-primary bg-white/70 dark:bg-zinc-800/70 backdrop-saturate-150 backdrop-blur-lg transform-gpu',
    style: { opacity: t },
  })
}
function se({ to: t = document.body, children: s }) {
  return R.createPortal(s, t)
}
function ne() {
  return e.jsxs(e.Fragment, { children: [e.jsx(ae, {}), e.jsx(re, {})] })
}
function ae() {
  const t = Q(),
    s = N()
  return e.jsx(m, {
    children:
      !s &&
      e.jsx(l.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: e.jsx(A, { isBgShow: t }),
      }),
  })
}
function re() {
  const t = ee()
  return e.jsx(se, {
    children: e.jsx(m, {
      children:
        t &&
        e.jsx(l.div, {
          className: 'fixed z-10 top-12 inset-x-0 flex justify-center pointer-events-none',
          initial: { y: -20 },
          animate: { y: 0 },
          exit: { y: -20, opacity: 0 },
          children: e.jsx(A, { isBgShow: !0 }),
        }),
    }),
  })
}
function A({ isBgShow: t }) {
  const s = W(),
    [n, i] = r.useState(0),
    [c, h] = r.useState(0),
    [p, g] = r.useState(0),
    y = `radial-gradient(${p}px circle at ${n}px ${c}px, rgb(var(--color-accent) / 0.12) 0%, transparent 65%)`,
    d = ({ clientX: a, clientY: v, currentTarget: w }) => {
      const u = w.getBoundingClientRect()
      i(a - u.left), h(v - u.top), g(Math.sqrt(u.width ** 2 + u.height ** 2) / 2.5)
    }
  return e.jsxs('nav', {
    className: f('relative rounded-full group pointer-events-auto duration-200', {
      'bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10':
        t,
    }),
    onMouseMove: d,
    children: [
      e.jsx('div', {
        className:
          'absolute -z-1 -inset-px rounded-full opacity-0 group-hover:opacity-100 duration-500',
        style: { background: y },
        'aria-hidden': !0,
      }),
      e.jsx('div', {
        className: 'text-sm px-4 flex',
        children: k.map((a) =>
          e.jsx(ie, { href: a.link, title: a.name, icon: a.icon, isActive: s === a.link }, a.name),
        ),
      }),
    ],
  })
}
function ie({ href: t, isActive: s, title: n, icon: i }) {
  return e.jsxs('a', {
    className: f('relative block px-4 py-1.5', s ? 'text-accent' : 'hover:text-accent'),
    href: t,
    children: [
      e.jsxs('div', {
        className: 'flex space-x-2',
        children: [
          s &&
            e.jsx(l.i, {
              className: f('iconfont', i),
              initial: { y: 10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }),
          e.jsx('span', { children: n }),
        ],
      }),
      s &&
        e.jsx('div', {
          className:
            'absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent',
        }),
    ],
  })
}
function oe(t, s) {
  const [n, i] = r.useState(t)
  return (
    r.useEffect(() => {
      const c = setTimeout(() => {
        i(t)
      }, s)
      return () => {
        clearTimeout(c)
      }
    }, [t, s]),
    n
  )
}
let j = null
async function ce() {
  if (!j) {
    const t = '/pagefind/pagefind.js'
    j = await Y(() => import(t), [])
  }
}
function le() {
  const { present: t } = K(),
    s = () => {
      t({ content: e.jsx(de, {}) })
    }
  return (
    ue({ onOpen: s }),
    e.jsx('button', {
      className:
        'size-9 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur',
      type: 'button',
      'aria-label': 'Search',
      onClick: s,
      children: e.jsx('i', { className: 'iconfont icon-search' }),
    })
  )
}
function de() {
  const [t, s] = r.useState(''),
    [n, i] = r.useState(!1),
    [c, h] = r.useState([]),
    p = oe(t, 350),
    { dismiss: g } = T()
  async function y(a) {
    if (!a) {
      h([])
      return
    }
    if ((i(!0), await ce(), j)) {
      const v = await j.search(a),
        w = await Promise.all(v.results.map((u) => u.data()))
      h(w)
    }
    i(!1)
  }
  r.useEffect(() => {
    y(p)
  }, [p])
  let d = null
  return (
    n
      ? (d = e.jsx('div', {
          className: 'h-full flex items-center justify-center',
          children: e.jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '2em',
            viewBox: '0 0 24 24',
            className: 'animate-spin',
            children: e.jsx('path', {
              fill: 'currentColor',
              d: 'M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 15a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7M7.67 14.5a1 1 0 0 1-.367 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366M20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17M7.67 9.5a1 1 0 0 1-1.367.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5',
            }),
          }),
        }))
      : t.length === 0
        ? (d = e.jsx('div', {
            className: 'h-full flex items-center justify-center',
            children: e.jsx('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '2em',
              viewBox: '0 0 24 24',
              children: e.jsx('path', {
                fill: 'currentColor',
                d: 'm18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z',
              }),
            }),
          }))
        : c.length === 0
          ? (d = e.jsx('div', {
              className: 'h-full flex items-center justify-center',
              children: e.jsxs('div', {
                className: 'flex flex-col items-center gap-2',
                children: [
                  e.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '2em',
                    viewBox: '0 0 24 24',
                    children: e.jsx('path', {
                      fill: 'currentColor',
                      d: 'M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z',
                    }),
                  }),
                  e.jsx('div', { children: '无内容' }),
                ],
              }),
            }))
          : (d = e.jsxs(e.Fragment, {
              children: [
                e.jsxs('div', {
                  className: 'text-sm px-3 mb-2',
                  children: ['找到以下 ', c.length, ' 条结果'],
                }),
                c.map((a) =>
                  e.jsxs(
                    'a',
                    {
                      href: a.url,
                      className: 'hover:bg-accent/10 rounded block px-3 py-2',
                      onClick: g,
                      children: [
                        e.jsx('div', { className: 'font-semibold', children: a.meta.title }),
                        e.jsx('p', {
                          className: 'text-sm',
                          dangerouslySetInnerHTML: { __html: a.excerpt },
                        }),
                      ],
                    },
                    a.url,
                  ),
                ),
              ],
            })),
    e.jsxs(l.div, {
      className:
        'bg-primary rounded-lg w-[90vw] h-[80vh] max-w-[680px] max-h-[480px] border border-primary flex flex-col',
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
      children: [
        e.jsx('input', {
          className: 'px-4 py-3 outline-none bg-transparent border-b border-primary',
          type: 'text',
          placeholder: 'Search...',
          maxLength: 64,
          value: t,
          onChange: (a) => s(a.target.value),
        }),
        e.jsx('div', { className: 'px-4 py-3 overflow-y-auto grow', children: d }),
        e.jsx('div', {
          className: 'px-3 py-2 flex justify-end',
          children: e.jsxs('a', {
            href: 'https://pagefind.app/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'flex items-center ',
            children: [
              e.jsx('span', { className: 'mr-2 text-xs', children: 'Search by' }),
              e.jsx('span', { className: 'font-semibold', children: 'pagefind' }),
            ],
          }),
        }),
      ],
    })
  )
}
function ue({ onOpen: t }) {
  r.useEffect(() => {
    function s(n) {
      n.key.toLowerCase() === 'k' && (n.metaKey || n.ctrlKey) && (n.preventDefault(), t())
    }
    return (
      window.addEventListener('keydown', s),
      () => {
        window.removeEventListener('keydown', s)
      }
    )
  }, [t])
}
function M() {
  const t = C(),
    s = N()
  return t
    ? e.jsx(m, {
        children:
          !s &&
          e.jsx(l.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: e.jsx(S, {}),
          }),
      })
    : e.jsx(S, {})
}
function S() {
  return e.jsx('a', {
    className: 'block',
    href: '/',
    title: 'Nav to home',
    children: e.jsx('img', {
      className: 'size-[40px] select-none object-cover rounded-2xl',
      src: V.avatar,
      alt: 'Site owner avatar',
    }),
  })
}
function xe() {
  const { title: t, description: s, slug: n } = U(),
    i = N()
  return e.jsx(m, {
    children:
      i &&
      e.jsxs(l.div, {
        className: 'absolute inset-0 z-1 flex items-center justify-between md:px-10',
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        children: [
          e.jsxs('div', {
            className: 'grow min-w-0',
            children: [
              e.jsx('div', { className: 'text-secondary text-xs truncate', children: s }),
              e.jsx('h2', { className: 'truncate text-lg', children: t }),
            ],
          }),
          e.jsxs('div', {
            className: 'hidden md:block min-w-0 text-right',
            children: [
              e.jsx('div', { className: 'text-secondary text-xs truncate', children: n }),
              e.jsx('div', { children: O.title }),
            ],
          }),
        ],
      }),
  })
}
const me = {
    hidden: { x: '-100%', transition: { duration: 0.2, ease: 'easeOut' } },
    visible: {
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1, duration: 0.2, ease: 'easeOut' },
    },
  },
  he = { hidden: { opacity: 0, x: '-100%' }, visible: { opacity: 1, x: 0 } }
function pe({ zIndex: t = 999 }) {
  const [s, n] = r.useState(!1),
    i = t - 1,
    c = t
  return e.jsxs(F, {
    open: s,
    onOpenChange: n,
    children: [
      e.jsx(X, { asChild: !0, children: e.jsx(fe, {}) }),
      e.jsx(m, {
        children:
          s &&
          e.jsxs(Z, {
            forceMount: !0,
            children: [
              e.jsx(q, {
                asChild: !0,
                children: e.jsx(l.div, {
                  className: 'fixed inset-0 bg-gray-800/40',
                  style: { zIndex: i },
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, transition: { delay: 0.1 } },
                }),
              }),
              e.jsx(G, {
                asChild: !0,
                children: e.jsx(l.div, {
                  className:
                    'fixed left-0 inset-y-0 h-full bg-primary rounded-r-lg p-4 flex flex-col justify-center w-[260px] max-w-[80%]',
                  style: { zIndex: c },
                  variants: me,
                  initial: 'hidden',
                  animate: 'visible',
                  exit: 'hidden',
                  children: e.jsx(H.Provider, {
                    value: {
                      dismiss() {
                        n(!1)
                      },
                    },
                    children: e.jsx(je, {}),
                  }),
                }),
              }),
            ],
          }),
      }),
    ],
  })
}
const fe = r.forwardRef((t, s) =>
  e.jsx('button', {
    ref: s,
    className:
      'size-9 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur',
    type: 'button',
    'aria-label': 'Open menu',
    ...t,
    children: e.jsx('i', { className: 'iconfont icon-menu' }),
  }),
)
function je() {
  const { dismiss: t } = r.useContext(H)
  return e.jsx('ul', {
    className: 'mt-8 pb-8 overflow-y-auto overflow-x-hidden min-h-0',
    children: k.map((s) =>
      e.jsx(
        l.li,
        {
          variants: he,
          children: e.jsxs('a', {
            className: 'inline-flex p-2 space-x-4',
            href: s.link,
            onClick: t,
            children: [
              e.jsx('i', { className: f('iconfont', s.icon) }),
              e.jsx('span', { children: s.name }),
            ],
          }),
        },
        s.name,
      ),
    ),
  })
}
const H = r.createContext(null)
function Ee() {
  const t = C()
  return e.jsxs('header', {
    className: 'fixed top-0 inset-x-0 h-[64px] z-10 overflow-hidden',
    children: [
      e.jsx(te, {}),
      e.jsxs('div', {
        className: 'max-w-[1100px] h-full md:px-4 mx-auto grid grid-cols-[64px_auto_64px]',
        children: [
          e.jsx('div', {
            className: 'flex items-center justify-center',
            children: t ? e.jsx(pe, {}) : e.jsx(M, {}),
          }),
          e.jsxs('div', {
            className: 'relative flex items-center justify-center',
            children: [t ? e.jsx(M, {}) : e.jsx(ne, {}), e.jsx(xe, {})],
          }),
          e.jsx('div', { className: 'flex items-center justify-center', children: e.jsx(le, {}) }),
        ],
      }),
    ],
  })
}
export { Ee as Header }
