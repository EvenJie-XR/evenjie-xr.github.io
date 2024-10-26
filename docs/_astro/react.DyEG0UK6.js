import { r as D, e as K } from './index.BFw_thZa.js'
let N = 0
function ae(e, u) {
  const f = `atom${++N}`,
    E = { toString: () => f }
  return (
    typeof e == 'function' ? (E.read = e) : ((E.init = e), (E.read = Y), (E.write = Z)),
    u && (E.write = u),
    E
  )
}
function Y(e) {
  return e(this)
}
function Z(e, u, f) {
  return u(this, typeof f == 'function' ? f(e(this)) : f)
}
const L = (e, u) => (e.unstable_is ? e.unstable_is(u) : u === e),
  x = (e) => 'init' in e,
  B = (e) => !!e.write,
  T = new WeakMap(),
  Q = (e, u) => {
    T.set(e, u), e.catch(() => {}).finally(() => T.delete(e))
  },
  X = (e, u) => {
    const f = T.get(e)
    f && (T.delete(e), f(u))
  },
  k = (e, u) => {
    ;(e.status = 'fulfilled'), (e.value = u)
  },
  C = (e, u) => {
    ;(e.status = 'rejected'), (e.reason = u)
  },
  ee = (e) => typeof e?.then == 'function',
  P = (e, u) => !!e && 'v' in e && 'v' in u && Object.is(e.v, u.v),
  W = (e, u) => !!e && 'e' in e && 'e' in u && Object.is(e.e, u.e),
  b = (e) => !!e && 'v' in e && e.v instanceof Promise,
  te = (e, u) => 'v' in e && 'v' in u && e.v.orig && e.v.orig === u.v.orig,
  y = (e) => {
    if ('e' in e) throw e.e
    return e.v
  },
  oe = () => {
    const e = new WeakMap(),
      u = new WeakMap(),
      f = [],
      E = new WeakMap()
    let w, j
    const p = (t) => e.get(t),
      v = (t, i) => {
        i.d.forEach((l, r) => {
          var s
          if (!E.has(r)) {
            const n = p(r)
            ;(s = f[f.length - 1]) == null || s.add(r), E.set(r, [n, new Set()]), n && v(r, n)
          }
          E.get(r)[1].add(t)
        })
      },
      R = (t, i) => {
        var l
        const r = p(t)
        if (
          (e.set(t, i),
          E.has(t) ||
            ((l = f[f.length - 1]) == null || l.add(t), E.set(t, [r, new Set()]), v(t, i)),
          b(r))
        ) {
          const s =
            'v' in i ? (i.v instanceof Promise ? i.v : Promise.resolve(i.v)) : Promise.reject(i.e)
          r.v !== s && X(r.v, s)
        }
      },
      g = (t, i, l, r) => {
        const s = new Map(r ? i.d : null)
        let n = !1
        l.forEach((o, d) => {
          !o && L(t, d) && (o = i), o && (s.set(d, o), i.d.get(d) !== o && (n = !0))
        }),
          (n || i.d.size !== s.size) && (i.d = s)
      },
      A = (t, i, l, r) => {
        const s = p(t),
          n = { d: s?.d || new Map(), v: i }
        if ((l && g(t, n, l, r), P(s, n) && s.d === n.d)) return s
        if (b(s) && b(n) && te(s, n)) {
          if (s.d === n.d) return s
          n.v = s.v
        }
        return R(t, n), n
      },
      U = (t, i, l, r) => {
        if (ee(i)) {
          let s
          const n = () => {
              const d = p(t)
              if (!b(d) || d.v !== o) return
              const a = A(t, o, l)
              u.has(t) && d.d !== a.d && F(t, a, d.d)
            },
            o = new Promise((d, a) => {
              let c = !1
              i.then(
                (S) => {
                  c || ((c = !0), k(o, S), d(S), n())
                },
                (S) => {
                  c || ((c = !0), C(o, S), a(S), n())
                },
              ),
                (s = (S) => {
                  c ||
                    ((c = !0),
                    S.then(
                      (h) => k(o, h),
                      (h) => C(o, h),
                    ),
                    d(S))
                })
            })
          return (
            (o.orig = i),
            (o.status = 'pending'),
            Q(o, (d) => {
              d && s(d), r?.()
            }),
            A(t, o, l, !0)
          )
        }
        return A(t, i, l)
      },
      J = (t, i, l) => {
        const r = p(t),
          s = { d: r?.d || new Map(), e: i }
        return l && g(t, s, l), W(r, s) && r.d === s.d ? r : (R(t, s), s)
      },
      _ = (t, i) => {
        const l = p(t)
        if (
          !i &&
          l &&
          (u.has(t) ||
            Array.from(l.d).every(([c, S]) => {
              if (c === t) return !0
              const h = _(c)
              return h === S || P(h, S)
            }))
        )
          return l
        const r = new Map()
        let s = !0
        const n = (c) => {
          if (L(t, c)) {
            const h = p(c)
            if (h) return r.set(c, h), y(h)
            if (x(c)) return r.set(c, void 0), c.init
            throw new Error('no atom init')
          }
          const S = _(c)
          return r.set(c, S), y(S)
        }
        let o, d
        const a = {
          get signal() {
            return o || (o = new AbortController()), o.signal
          },
          get setSelf() {
            return (
              !d &&
                B(t) &&
                (d = (...c) => {
                  if (!s) return O(t, ...c)
                }),
              d
            )
          },
        }
        try {
          const c = t.read(n, a)
          return U(t, c, r, () => o?.abort())
        } catch (c) {
          return J(t, c, r)
        } finally {
          s = !1
        }
      },
      $ = (t) => y(_(t)),
      G = (t) => {
        const i = (o) => {
            var d, a
            const c = new Set((d = u.get(o)) == null ? void 0 : d.t)
            return (
              (a = E.get(o)) == null ||
                a[1].forEach((S) => {
                  c.add(S)
                }),
              c
            )
          },
          l = new Array(),
          r = new Set(),
          s = (o) => {
            if (!r.has(o)) {
              r.add(o)
              for (const d of i(o)) o !== d && s(d)
              l.push(o)
            }
          }
        s(t)
        const n = new Set([t])
        for (let o = l.length - 1; o >= 0; --o) {
          const d = l[o],
            a = p(d)
          if (!a) continue
          let c = !1
          for (const S of a.d.keys())
            if (S !== d && n.has(S)) {
              c = !0
              break
            }
          if (c) {
            const S = _(d, !0)
            P(a, S) || n.add(d)
          }
        }
      },
      z = (t, ...i) => {
        const l = (n) => y(_(n)),
          r = (n, ...o) => {
            const d = f.length > 0
            d || f.push(new Set([n]))
            let a
            if (L(t, n)) {
              if (!x(n)) throw new Error('atom not writable')
              const c = p(n),
                S = U(n, o[0])
              P(c, S) || G(n)
            } else a = z(n, ...o)
            if (!d) {
              const c = M(f.pop())
            }
            return a
          }
        return t.write(l, r, ...i)
      },
      O = (t, ...i) => {
        f.push(new Set([t]))
        const l = z(t, ...i),
          r = M(f.pop())
        return l
      },
      I = (t, i, l) => {
        var r
        const s = u.get(t)
        if (s) return i && s.t.add(i), s
        const n = l || []
        ;(r = p(t)) == null ||
          r.d.forEach((d, a) => {
            a !== t && I(a, t, n)
          }),
          _(t)
        const o = { t: new Set(i && [i]), l: new Set() }
        if ((u.set(t, o), B(t) && t.onMount)) {
          const { onMount: d } = t
          n.push(() => {
            const a = d((...c) => O(t, ...c))
            a && (o.u = a)
          })
        }
        return l || n.forEach((d) => d()), o
      },
      H = (t, i) => !i.l.size && (!i.t.size || (i.t.size === 1 && i.t.has(t))),
      m = (t, i) => {
        if (!H(t, i)) return
        const l = i.u
        l && l(), u.delete(t)
        const r = p(t)
        r &&
          (b(r) && X(r.v),
          r.d.forEach((s, n) => {
            if (n !== t) {
              const o = u.get(n)
              o && (o.t.delete(t), m(n, o))
            }
          }))
      },
      F = (t, i, l) => {
        const r = new Set(i.d.keys()),
          s = new Set()
        l?.forEach((n, o) => {
          if (r.has(o)) {
            r.delete(o)
            return
          }
          s.add(o)
          const d = u.get(o)
          d && d.t.delete(t)
        }),
          r.forEach((n) => {
            I(n, t)
          }),
          s.forEach((n) => {
            const o = u.get(n)
            o && m(n, o)
          })
      },
      M = (t) => {
        let i
        const l = [],
          r = (s) => {
            var n
            if (!E.has(s)) return
            const [o, d] = E.get(s)
            E.delete(s),
              l.push([s, o]),
              d.forEach(r),
              (n = p(s)) == null || n.d.forEach((a, c) => r(c))
          }
        t.forEach(r),
          l.forEach(([s, n]) => {
            const o = p(s)
            if (o && o !== n) {
              const d = u.get(s)
              d && o.d !== n?.d && F(s, o, n?.d),
                d && !(!b(n) && (P(n, o) || W(n, o))) && d.l.forEach((a) => a())
            }
          })
      }
    return {
      get: $,
      set: O,
      sub: (t, i) => {
        const l = I(t),
          r = M([t]),
          s = l.l
        return (
          s.add(i),
          () => {
            s.delete(i), m(t, l)
          }
        )
      },
    }
  }
let V
const ne = () => (V || (V = oe()), V),
  se = ne,
  re = D.createContext(void 0),
  q = (e) => {
    const u = D.useContext(re)
    return e?.store || u || se()
  },
  ie = (e) => typeof e?.then == 'function',
  ue =
    K.use ||
    ((e) => {
      if (e.status === 'pending') throw e
      if (e.status === 'fulfilled') return e.value
      throw e.status === 'rejected'
        ? e.reason
        : ((e.status = 'pending'),
          e.then(
            (u) => {
              ;(e.status = 'fulfilled'), (e.value = u)
            },
            (u) => {
              ;(e.status = 'rejected'), (e.reason = u)
            },
          ),
          e)
    })
function de(e, u) {
  const f = q(u),
    [[E, w, j], p] = D.useReducer(
      (g) => {
        const A = f.get(e)
        return Object.is(g[0], A) && g[1] === f && g[2] === e ? g : [A, f, e]
      },
      void 0,
      () => [f.get(e), f, e],
    )
  let v = E
  ;(w !== f || j !== e) && (p(), (v = f.get(e)))
  const R = u?.delay
  return (
    D.useEffect(() => {
      const g = f.sub(e, () => {
        if (typeof R == 'number') {
          setTimeout(p, R)
          return
        }
        p()
      })
      return p(), g
    }, [f, e, R]),
    D.useDebugValue(v),
    ie(v) ? ue(v) : v
  )
}
function le(e, u) {
  const f = q(u)
  return D.useCallback((...w) => f.set(e, ...w), [f, e])
}
function Se(e, u) {
  return [de(e, u), le(e, u)]
}
export { le as a, ae as b, Se as c, de as u }
