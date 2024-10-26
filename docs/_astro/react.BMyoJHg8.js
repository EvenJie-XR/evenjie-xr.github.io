import { r as P, e as K } from './index.BFw_thZa.js'
let N = 0
function Se(e, u) {
  const l = `atom${++N}`,
    E = { toString: () => l }
  return (
    typeof e == 'function' ? (E.read = e) : ((E.init = e), (E.read = Y), (E.write = Z)),
    u && (E.write = u),
    E
  )
}
function Y(e) {
  return e(this)
}
function Z(e, u, l) {
  return u(this, typeof l == 'function' ? l(e(this)) : l)
}
const L = (e, u) => (e.unstable_is ? e.unstable_is(u) : u === e),
  B = (e) => 'init' in e,
  X = (e) => !!e.write,
  O = new WeakMap(),
  Q = (e, u) => {
    O.set(e, u), e.catch(() => {}).finally(() => O.delete(e))
  },
  k = (e, u) => {
    const l = O.get(e)
    l && (O.delete(e), l(u))
  },
  C = (e, u) => {
    ;(e.status = 'fulfilled'), (e.value = u)
  },
  W = (e, u) => {
    ;(e.status = 'rejected'), (e.reason = u)
  },
  ee = (e) => typeof e?.then == 'function',
  b = (e, u) => !!e && 'v' in e && 'v' in u && Object.is(e.v, u.v),
  z = (e, u) => !!e && 'e' in e && 'e' in u && Object.is(e.e, u.e),
  D = (e) => !!e && 'v' in e && e.v instanceof Promise,
  te = (e, u) => 'v' in e && 'v' in u && e.v.orig && e.v.orig === u.v.orig,
  T = (e) => {
    if ('e' in e) throw e.e
    return e.v
  },
  ne = () => {
    const e = new WeakMap(),
      u = new WeakMap(),
      l = [],
      E = new WeakMap()
    let w, j
    const h = (t) => e.get(t),
      R = (t, r) => {
        r.d.forEach((c, i) => {
          var s
          if (!E.has(i)) {
            const o = h(i)
            ;(s = l[l.length - 1]) == null || s.add(i), E.set(i, [o, new Set()]), o && R(i, o)
          }
          E.get(i)[1].add(t)
        })
      },
      A = (t, r) => {
        var c
        const i = h(t)
        if (
          (e.set(t, r),
          E.has(t) ||
            ((c = l[l.length - 1]) == null || c.add(t), E.set(t, [i, new Set()]), R(t, r)),
          D(i))
        ) {
          const s =
            'v' in r ? (r.v instanceof Promise ? r.v : Promise.resolve(r.v)) : Promise.reject(r.e)
          i.v !== s && k(i.v, s)
        }
      },
      p = (t, r, c, i) => {
        const s = new Map(i ? r.d : null)
        let o = !1
        c.forEach((n, d) => {
          !n && L(t, d) && (n = r), n && (s.set(d, n), r.d.get(d) !== n && (o = !0))
        }),
          (o || r.d.size !== s.size) && (r.d = s)
      },
      _ = (t, r, c, i) => {
        const s = h(t),
          o = { d: s?.d || new Map(), v: r }
        if ((c && p(t, o, c, i), b(s, o) && s.d === o.d)) return s
        if (D(s) && D(o) && te(s, o)) {
          if (s.d === o.d) return s
          o.v = s.v
        }
        return A(t, o), o
      },
      U = (t, r, c, i) => {
        if (ee(r)) {
          let s
          const o = () => {
              const d = h(t)
              if (!D(d) || d.v !== n) return
              const S = _(t, n, c)
              u.has(t) && d.d !== S.d && x(t, S, d.d)
            },
            n = new Promise((d, S) => {
              let f = !1
              r.then(
                (a) => {
                  f || ((f = !0), C(n, a), d(a), o())
                },
                (a) => {
                  f || ((f = !0), W(n, a), S(a), o())
                },
              ),
                (s = (a) => {
                  f ||
                    ((f = !0),
                    a.then(
                      (v) => C(n, v),
                      (v) => W(n, v),
                    ),
                    d(a))
                })
            })
          return (
            (n.orig = r),
            (n.status = 'pending'),
            Q(n, (d) => {
              d && s(d), i?.()
            }),
            _(t, n, c, !0)
          )
        }
        return _(t, r, c)
      },
      J = (t, r, c) => {
        const i = h(t),
          s = { d: i?.d || new Map(), e: r }
        return c && p(t, s, c), z(i, s) && i.d === s.d ? i : (A(t, s), s)
      },
      g = (t, r) => {
        const c = h(t)
        if (
          !r &&
          c &&
          (u.has(t) ||
            Array.from(c.d).every(([f, a]) => {
              if (f === t) return !0
              const v = g(f)
              return v === a || b(v, a)
            }))
        )
          return c
        const i = new Map()
        let s = !0
        const o = (f) => {
          if (L(t, f)) {
            const v = h(f)
            if (v) return i.set(f, v), T(v)
            if (B(f)) return i.set(f, void 0), f.init
            throw new Error('no atom init')
          }
          const a = g(f)
          return i.set(f, a), T(a)
        }
        let n, d
        const S = {
          get signal() {
            return n || (n = new AbortController()), n.signal
          },
          get setSelf() {
            return (
              !d &&
                X(t) &&
                (d = (...f) => {
                  if (!s) return I(t, ...f)
                }),
              d
            )
          },
        }
        try {
          const f = t.read(o, S)
          return U(t, f, i, () => n?.abort())
        } catch (f) {
          return J(t, f, i)
        } finally {
          s = !1
        }
      },
      $ = (t) => T(g(t)),
      G = (t) => {
        const r = (n) => {
            var d, S
            const f = new Set((d = u.get(n)) == null ? void 0 : d.t)
            return (
              (S = E.get(n)) == null ||
                S[1].forEach((a) => {
                  f.add(a)
                }),
              f
            )
          },
          c = new Array(),
          i = new Set(),
          s = (n) => {
            if (!i.has(n)) {
              i.add(n)
              for (const d of r(n)) n !== d && s(d)
              c.push(n)
            }
          }
        s(t)
        const o = new Set([t])
        for (let n = c.length - 1; n >= 0; --n) {
          const d = c[n],
            S = h(d)
          if (!S) continue
          let f = !1
          for (const a of S.d.keys())
            if (a !== d && o.has(a)) {
              f = !0
              break
            }
          if (f) {
            const a = g(d, !0)
            b(S, a) || o.add(d)
          }
        }
      },
      F = (t, ...r) => {
        const c = (o) => T(g(o)),
          i = (o, ...n) => {
            const d = l.length > 0
            d || l.push(new Set([o]))
            let S
            if (L(t, o)) {
              if (!B(o)) throw new Error('atom not writable')
              const f = h(o),
                a = U(o, n[0])
              b(f, a) || G(o)
            } else S = F(o, ...n)
            if (!d) {
              const f = y(l.pop())
            }
            return S
          }
        return t.write(c, i, ...r)
      },
      I = (t, ...r) => {
        l.push(new Set([t]))
        const c = F(t, ...r),
          i = y(l.pop())
        return c
      },
      m = (t, r, c) => {
        var i
        const s = u.get(t)
        if (s) return r && s.t.add(r), s
        const o = c || []
        ;(i = h(t)) == null ||
          i.d.forEach((d, S) => {
            S !== t && m(S, t, o)
          }),
          g(t)
        const n = { t: new Set(r && [r]), l: new Set() }
        if ((u.set(t, n), X(t) && t.onMount)) {
          const { onMount: d } = t
          o.push(() => {
            const S = d((...f) => I(t, ...f))
            S && (n.u = S)
          })
        }
        return c || o.forEach((d) => d()), n
      },
      H = (t, r) => !r.l.size && (!r.t.size || (r.t.size === 1 && r.t.has(t))),
      M = (t, r) => {
        if (!H(t, r)) return
        const c = r.u
        c && c(), u.delete(t)
        const i = h(t)
        i &&
          (D(i) && k(i.v),
          i.d.forEach((s, o) => {
            if (o !== t) {
              const n = u.get(o)
              n && (n.t.delete(t), M(o, n))
            }
          }))
      },
      x = (t, r, c) => {
        const i = new Set(r.d.keys()),
          s = new Set()
        c?.forEach((o, n) => {
          if (i.has(n)) {
            i.delete(n)
            return
          }
          s.add(n)
          const d = u.get(n)
          d && d.t.delete(t)
        }),
          i.forEach((o) => {
            m(o, t)
          }),
          s.forEach((o) => {
            const n = u.get(o)
            n && M(o, n)
          })
      },
      y = (t) => {
        let r
        const c = [],
          i = (s) => {
            var o
            if (!E.has(s)) return
            const [n, d] = E.get(s)
            E.delete(s),
              c.push([s, n]),
              d.forEach(i),
              (o = h(s)) == null || o.d.forEach((S, f) => i(f))
          }
        t.forEach(i),
          c.forEach(([s, o]) => {
            const n = h(s)
            if (n && n !== o) {
              const d = u.get(s)
              d && n.d !== o?.d && x(s, n, o?.d),
                d && !(!D(o) && (b(o, n) || z(o, n))) && d.l.forEach((S) => S())
            }
          })
      }
    return {
      get: $,
      set: I,
      sub: (t, r) => {
        const c = m(t),
          i = y([t]),
          s = c.l
        return (
          s.add(r),
          () => {
            s.delete(r), M(t, c)
          }
        )
      },
    }
  }
let V
const oe = () => (V || (V = ne()), V),
  se = oe,
  ie = P.createContext(void 0),
  q = (e) => {
    const u = P.useContext(ie)
    return e?.store || u || se()
  },
  re = (e) => typeof e?.then == 'function',
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
  const l = q(u),
    [[E, w, j], h] = P.useReducer(
      (p) => {
        const _ = l.get(e)
        return Object.is(p[0], _) && p[1] === l && p[2] === e ? p : [_, l, e]
      },
      void 0,
      () => [l.get(e), l, e],
    )
  let R = E
  ;(w !== l || j !== e) && (h(), (R = l.get(e)))
  const A = u?.delay
  return (
    P.useEffect(() => {
      const p = l.sub(e, () => {
        if (typeof A == 'number') {
          setTimeout(h, A)
          return
        }
        h()
      })
      return h(), p
    }, [l, e, A]),
    P.useDebugValue(R),
    re(R) ? ue(R) : R
  )
}
function ce(e, u) {
  const l = q(u)
  return P.useCallback((...w) => l.set(e, ...w), [l, e])
}
function ae(e, u) {
  return [de(e, u), ce(e, u)]
}
export { ce as a, Se as b, ae as c, de as u }
