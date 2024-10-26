import { m as ie } from './Swup.BPHaxb0p.js'
import { e as se } from './index.modern.CkIAsQri.js'
var $ = 11
function ue(e, a) {
  var t = a.attributes,
    n,
    r,
    l,
    f,
    p
  if (!(a.nodeType === $ || e.nodeType === $)) {
    for (var A = t.length - 1; A >= 0; A--)
      (n = t[A]),
        (r = n.name),
        (l = n.namespaceURI),
        (f = n.value),
        l
          ? ((r = n.localName || r),
            (p = e.getAttributeNS(l, r)),
            p !== f && (n.prefix === 'xmlns' && (r = n.name), e.setAttributeNS(l, r, f)))
          : ((p = e.getAttribute(r)), p !== f && e.setAttribute(r, f))
    for (var b = e.attributes, w = b.length - 1; w >= 0; w--)
      (n = b[w]),
        (r = n.name),
        (l = n.namespaceURI),
        l
          ? ((r = n.localName || r), a.hasAttributeNS(l, r) || e.removeAttributeNS(l, r))
          : a.hasAttribute(r) || e.removeAttribute(r)
  }
}
var V,
  le = 'http://www.w3.org/1999/xhtml',
  o = typeof document > 'u' ? void 0 : document,
  ce = !!o && 'content' in o.createElement('template'),
  fe = !!o && o.createRange && 'createContextualFragment' in o.createRange()
function de(e) {
  var a = o.createElement('template')
  return (a.innerHTML = e), a.content.childNodes[0]
}
function ve(e) {
  V || ((V = o.createRange()), V.selectNode(o.body))
  var a = V.createContextualFragment(e)
  return a.childNodes[0]
}
function oe(e) {
  var a = o.createElement('body')
  return (a.innerHTML = e), a.childNodes[0]
}
function pe(e) {
  return (e = e.trim()), ce ? de(e) : fe ? ve(e) : oe(e)
}
function _(e, a) {
  var t = e.nodeName,
    n = a.nodeName,
    r,
    l
  return t === n
    ? !0
    : ((r = t.charCodeAt(0)),
      (l = n.charCodeAt(0)),
      r <= 90 && l >= 97 ? t === n.toUpperCase() : l <= 90 && r >= 97 ? n === t.toUpperCase() : !1)
}
function he(e, a) {
  return !a || a === le ? o.createElement(e) : o.createElementNS(a, e)
}
function ge(e, a) {
  for (var t = e.firstChild; t; ) {
    var n = t.nextSibling
    a.appendChild(t), (t = n)
  }
  return a
}
function X(e, a, t) {
  e[t] !== a[t] && ((e[t] = a[t]), e[t] ? e.setAttribute(t, '') : e.removeAttribute(t))
}
var W = {
    OPTION: function (e, a) {
      var t = e.parentNode
      if (t) {
        var n = t.nodeName.toUpperCase()
        n === 'OPTGROUP' && ((t = t.parentNode), (n = t && t.nodeName.toUpperCase())),
          n === 'SELECT' &&
            !t.hasAttribute('multiple') &&
            (e.hasAttribute('selected') &&
              !a.selected &&
              (e.setAttribute('selected', 'selected'), e.removeAttribute('selected')),
            (t.selectedIndex = -1))
      }
      X(e, a, 'selected')
    },
    INPUT: function (e, a) {
      X(e, a, 'checked'),
        X(e, a, 'disabled'),
        e.value !== a.value && (e.value = a.value),
        a.hasAttribute('value') || e.removeAttribute('value')
    },
    TEXTAREA: function (e, a) {
      var t = a.value
      e.value !== t && (e.value = t)
      var n = e.firstChild
      if (n) {
        var r = n.nodeValue
        if (r == t || (!t && r == e.placeholder)) return
        n.nodeValue = t
      }
    },
    SELECT: function (e, a) {
      if (!a.hasAttribute('multiple')) {
        for (var t = -1, n = 0, r = e.firstChild, l, f; r; )
          if (((f = r.nodeName && r.nodeName.toUpperCase()), f === 'OPTGROUP'))
            (l = r), (r = l.firstChild)
          else {
            if (f === 'OPTION') {
              if (r.hasAttribute('selected')) {
                t = n
                break
              }
              n++
            }
            ;(r = r.nextSibling), !r && l && ((r = l.nextSibling), (l = null))
          }
        e.selectedIndex = t
      }
    },
  },
  O = 1,
  Y = 11,
  J = 3,
  Q = 8
function m() {}
function Te(e) {
  if (e) return (e.getAttribute && e.getAttribute('id')) || e.id
}
function me(e) {
  return function (t, n, r) {
    if ((r || (r = {}), typeof n == 'string'))
      if (t.nodeName === '#document' || t.nodeName === 'HTML' || t.nodeName === 'BODY') {
        var l = n
        ;(n = o.createElement('html')), (n.innerHTML = l)
      } else n = pe(n)
    else n.nodeType === Y && (n = n.firstElementChild)
    var f = r.getNodeKey || Te,
      p = r.onBeforeNodeAdded || m,
      A = r.onNodeAdded || m,
      b = r.onBeforeElUpdated || m,
      w = r.onElUpdated || m,
      Z = r.onBeforeNodeDiscarded || m,
      C = r.onNodeDiscarded || m,
      ee = r.onBeforeElChildrenUpdated || m,
      te = r.skipFromChildren || m,
      G =
        r.addChild ||
        function (i, s) {
          return i.appendChild(s)
        },
      B = r.childrenOnly === !0,
      S = Object.create(null),
      x = []
    function U(i) {
      x.push(i)
    }
    function K(i, s) {
      if (i.nodeType === O)
        for (var d = i.firstChild; d; ) {
          var u = void 0
          s && (u = f(d)) ? U(u) : (C(d), d.firstChild && K(d, s)), (d = d.nextSibling)
        }
    }
    function P(i, s, d) {
      Z(i) !== !1 && (s && s.removeChild(i), C(i), K(i, d))
    }
    function E(i) {
      if (i.nodeType === O || i.nodeType === Y)
        for (var s = i.firstChild; s; ) {
          var d = f(s)
          d && (S[d] = s), E(s), (s = s.nextSibling)
        }
    }
    E(t)
    function H(i) {
      A(i)
      for (var s = i.firstChild; s; ) {
        var d = s.nextSibling,
          u = f(s)
        if (u) {
          var c = S[u]
          c && _(s, c) ? (s.parentNode.replaceChild(c, s), M(c, s)) : H(s)
        } else H(s)
        s = d
      }
    }
    function ne(i, s, d) {
      for (; s; ) {
        var u = s.nextSibling
        ;(d = f(s)) ? U(d) : P(s, i, !0), (s = u)
      }
    }
    function M(i, s, d) {
      var u = f(s)
      if ((u && delete S[u], !d)) {
        var c = b(i, s)
        if (
          c === !1 ||
          (c instanceof HTMLElement && ((i = c), E(i)), e(i, s), w(i), ee(i, s) === !1)
        )
          return
      }
      i.nodeName !== 'TEXTAREA' ? ae(i, s) : W.TEXTAREA(i, s)
    }
    function ae(i, s) {
      var d = te(i, s),
        u = s.firstChild,
        c = i.firstChild,
        N,
        h,
        y,
        R,
        g
      e: for (; u; ) {
        for (R = u.nextSibling, N = f(u); !d && c; ) {
          if (((y = c.nextSibling), u.isSameNode && u.isSameNode(c))) {
            ;(u = R), (c = y)
            continue e
          }
          h = f(c)
          var L = c.nodeType,
            T = void 0
          if (
            (L === u.nodeType &&
              (L === O
                ? (N
                    ? N !== h &&
                      ((g = S[N])
                        ? y === g
                          ? (T = !1)
                          : (i.insertBefore(g, c), h ? U(h) : P(c, i, !0), (c = g), (h = f(c)))
                        : (T = !1))
                    : h && (T = !1),
                  (T = T !== !1 && _(c, u)),
                  T && M(c, u))
                : (L === J || L == Q) &&
                  ((T = !0), c.nodeValue !== u.nodeValue && (c.nodeValue = u.nodeValue))),
            T)
          ) {
            ;(u = R), (c = y)
            continue e
          }
          h ? U(h) : P(c, i, !0), (c = y)
        }
        if (N && (g = S[N]) && _(g, u)) d || G(i, g), M(g, u)
        else {
          var F = p(u)
          F !== !1 &&
            (F && (u = F), u.actualize && (u = u.actualize(i.ownerDocument || o)), G(i, u), H(u))
        }
        ;(u = R), (c = y)
      }
      ne(i, c, h)
      var z = W[i.nodeName]
      z && z(i, s)
    }
    var v = t,
      D = v.nodeType,
      j = n.nodeType
    if (!B) {
      if (D === O)
        j === O ? _(t, n) || (C(t), (v = ge(t, he(n.nodeName, n.namespaceURI)))) : (v = n)
      else if (D === J || D === Q) {
        if (j === D) return v.nodeValue !== n.nodeValue && (v.nodeValue = n.nodeValue), v
        v = n
      }
    }
    if (v === n) C(t)
    else {
      if (n.isSameNode && n.isSameNode(v)) return
      if ((M(v, n, B), x))
        for (var I = 0, re = x.length; I < re; I++) {
          var k = S[x[I]]
          k && P(k, k.parentNode, !1)
        }
    }
    return (
      !B &&
        v !== t &&
        t.parentNode &&
        (v.actualize && (v = v.actualize(t.ownerDocument || o)), t.parentNode.replaceChild(v, t)),
      v
    )
  }
}
var Ae = me(ue)
function q() {
  return (
    (q = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a]
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
    q.apply(this, arguments)
  )
}
const be = { INPUT: !0, TEXTAREA: !0, SELECT: !0 },
  Se = { INPUT: !0, TEXTAREA: !0, OPTION: !0 },
  Ne = {
    'datetime-local': !0,
    'select-multiple': !0,
    'select-one': !0,
    color: !0,
    date: !0,
    datetime: !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    textarea: !0,
    time: !0,
    url: !0,
    week: !0,
  },
  ye = [
    function (e, a) {
      return !(!Se[e.tagName] && e.isEqualNode(a))
    },
    function (e, a) {
      const t = e.closest('[data-morph-persist]')
      if (!t && be[(n = e).tagName] && Ne[n.type] && e === document.activeElement) {
        const r = { value: !0 }
        return (
          Array.from(a.attributes).forEach((l) => {
            r[l.name] || e.setAttribute(l.name, l.value)
          }),
          !1
        )
      }
      var n
      return !t
    },
    function (e, a) {
      return e !== document.activeElement || !e.isContentEditable
    },
  ]
function we(e, a, t = []) {
  const n = [...ye, ...t]
  return Ae(e, a, {
    onBeforeElUpdated: (r, l) =>
      (function (f, p, A) {
        return !A.map((b) => typeof b != 'function' || b(f, p)).includes(!1)
      })(r, l, n),
  })
}
class xe extends se {
  constructor(a = {}) {
    super(),
      (this.name = 'SwupMorphPlugin'),
      (this.requires = { swup: '>=4.6' }),
      (this.defaults = { containers: [], updateCallbacks: [] }),
      (this.options = void 0),
      (this.validateContainers = (t) => {
        t.containers = t.containers.filter((n) => !this.options.containers.includes(n))
      }),
      (this.morphContainers = (t) => {
        const n = this.getContainers(document, t.to.document),
          r = this.options.updateCallbacks || []
        for (const { selector: l, outgoing: f, incoming: p } of n)
          f && p
            ? we(f, p, r)
            : this.options.containers.includes(l) &&
              console.warn(`SwupMorphPlugin: No container found for selector: ${l}`)
      }),
      (this.options = q({}, this.defaults, a))
  }
  mount() {
    this.before('content:replace', this.validateContainers, { priority: 1 }),
      this.on('content:replace', this.morphContainers)
  }
  getContainers(a, t) {
    return this.getContainerSelectors().map((n) => ({
      selector: n,
      outgoing: a.querySelector(n),
      incoming: t.querySelector(n),
    }))
  }
  getContainerSelectors() {
    const a = this.options.containers,
      t = ie('[data-swup-morph]:not([data-swup-morph=""])').map(
        (n) => `[data-swup-morph='${n.dataset.swupMorph}']`,
      )
    return this.uniq([...a, ...t])
  }
  uniq(a) {
    return [...new Set(a)]
  }
}
export { xe as default }
