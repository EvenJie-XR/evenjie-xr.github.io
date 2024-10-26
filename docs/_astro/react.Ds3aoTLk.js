import { r as m, e as K } from './index.BFw_thZa.js'
let N = 0
function ae(e, i) {
  const f = `atom${++N}`,
    E = { toString: () => f }
  return (
    typeof e == 'function' ? (E.read = e) : ((E.init = e), (E.read = Y), (E.write = Z)),
    i && (E.write = i),
    E
  )
}
function Y(e) {
  return e(this)
}
function Z(e, i, f) {
  return i(this, typeof f == 'function' ? f(e(this)) : f)
}
const L = (e, i) => (e.unstable_is ? e.unstable_is(i) : i === e),
  B = (e) => 'init' in e,
  X = (e) => !!e.write,
  T = new WeakMap(),
  Q = (e, i) => {
    T.set(e, i), e.catch(() => {}).finally(() => T.delete(e))
  },
  k = (e, i) => {
    const f = T.get(e)
    f && (T.delete(e), f(i))
  },
  j = (e, i) => {
    ;(e.status = 'fulfilled'), (e.value = i)
  },
  C = (e, i) => {
    ;(e.status = 'rejected'), (e.reason = i)
  },
  ee = (e) => typeof e?.then == 'function',
  P = (e, i) => !!e && 'v' in e && 'v' in i && Object.is(e.v, i.v),
  W = (e, i) => !!e && 'e' in e && 'e' in i && Object.is(e.e, i.e),
  D = (e) => !!e && 'v' in e && e.v instanceof Promise,
  te = (e, i) => 'v' in e && 'v' in i && e.v.orig && e.v.orig === i.v.orig,
  y = (e) => {
    if ('e' in e) throw e.e
    return e.v
  },
  ne = () => {
    const e = new WeakMap(),
      i = new WeakMap(),
      f = [],
      E = new WeakMap()
    let w, U
    const p = (t) => e.get(t),
      R = (t, u) => {
        u.d.forEach((d, r) => {
          var s
          if (!E.has(r)) {
            const o = p(r)
            ;(s = f[f.length - 1]) == null || s.add(r), E.set(r, [o, new Set()]), o && R(r, o)
          }
          E.get(r)[1].add(t)
        })
      },
      A = (t, u) => {
        var d
        const r = p(t)
        if (
          (e.set(t, u),
          E.has(t) ||
            ((d = f[f.length - 1]) == null || d.add(t), E.set(t, [r, new Set()]), R(t, u)),
          D(r))
        ) {
          const s =
            'v' in u ? (u.v instanceof Promise ? u.v : Promise.resolve(u.v)) : Promise.reject(u.e)
          r.v !== s && k(r.v, s)
        }
      },
      v = (t, u, d, r) => {
        const s = new Map(r ? u.d : null)
        let o = !1
        d.forEach((n, c) => {
          !n && L(t, c) && (n = u), n && (s.set(c, n), u.d.get(c) !== n && (o = !0))
        }),
          (o || u.d.size !== s.size) && (u.d = s)
      },
      _ = (t, u, d, r) => {
        const s = p(t),
          o = { d: s?.d || new Map(), v: u }
        if ((d && v(t, o, d, r), P(s, o) && s.d === o.d)) return s
        if (D(s) && D(o) && te(s, o)) {
          if (s.d === o.d) return s
          o.v = s.v
        }
        return A(t, o), o
      },
      z = (t, u, d, r) => {
        if (ee(u)) {
          let s
          const o = () => {
              const c = p(t)
              if (!D(c) || c.v !== n) return
              const a = _(t, n, d)
              i.has(t) && c.d !== a.d && x(t, a, c.d)
            },
            n = new Promise((c, a) => {
              let l = !1
              u.then(
                (S) => {
                  l || ((l = !0), j(n, S), c(S), o())
                },
                (S) => {
                  l || ((l = !0), C(n, S), a(S), o())
                },
              ),
                (s = (S) => {
                  l ||
                    ((l = !0),
                    S.then(
                      (h) => j(n, h),
                      (h) => C(n, h),
                    ),
                    c(S))
                })
            })
          return (
            (n.orig = u),
            (n.status = 'pending'),
            Q(n, (c) => {
              c && s(c), r?.()
            }),
            _(t, n, d, !0)
          )
        }
        return _(t, u, d)
      },
      J = (t, u, d) => {
        const r = p(t),
          s = { d: r?.d || new Map(), e: u }
        return d && v(t, s, d), W(r, s) && r.d === s.d ? r : (A(t, s), s)
      },
      g = (t, u) => {
        const d = p(t)
        if (
          !u &&
          d &&
          (i.has(t) ||
            Array.from(d.d).every(([l, S]) => {
              if (l === t) return !0
              const h = g(l)
              return h === S || P(h, S)
            }))
        )
          return d
        const r = new Map()
        let s = !0
        const o = (l) => {
          if (L(t, l)) {
            const h = p(l)
            if (h) return r.set(l, h), y(h)
            if (B(l)) return r.set(l, void 0), l.init
            throw new Error('no atom init')
          }
          const S = g(l)
          return r.set(l, S), y(S)
        }
        let n, c
        const a = {
          get signal() {
            return n || (n = new AbortController()), n.signal
          },
          get setSelf() {
            return (
              !c &&
                X(t) &&
                (c = (...l) => {
                  if (!s) return O(t, ...l)
                }),
              c
            )
          },
        }
        try {
          const l = t.read(o, a)
          return z(t, l, r, () => n?.abort())
        } catch (l) {
          return J(t, l, r)
        } finally {
          s = !1
        }
      },
      $ = (t) => y(g(t)),
      G = (t) => {
        const u = (n) => {
            var c, a
            const l = new Set((c = i.get(n)) == null ? void 0 : c.t)
            return (
              (a = E.get(n)) == null ||
                a[1].forEach((S) => {
                  l.add(S)
                }),
              l
            )
          },
          d = new Array(),
          r = new Set(),
          s = (n) => {
            if (!r.has(n)) {
              r.add(n)
              for (const c of u(n)) n !== c && s(c)
              d.push(n)
            }
          }
        s(t)
        const o = new Set([t])
        for (let n = d.length - 1; n >= 0; --n) {
          const c = d[n],
            a = p(c)
          if (!a) continue
          let l = !1
          for (const S of a.d.keys())
            if (S !== c && o.has(S)) {
              l = !0
              break
            }
          if (l) {
            const S = g(c, !0)
            P(a, S) || o.add(c)
          }
        }
      },
      F = (t, ...u) => {
        const d = (o) => y(g(o)),
          r = (o, ...n) => {
            const c = f.length > 0
            c || f.push(new Set([o]))
            let a
            if (L(t, o)) {
              if (!B(o)) throw new Error('atom not writable')
              const l = p(o),
                S = z(o, n[0])
              P(l, S) || G(o)
            } else a = F(o, ...n)
            if (!c) {
              const l = M(f.pop())
            }
            return a
          }
        return t.write(d, r, ...u)
      },
      O = (t, ...u) => {
        f.push(new Set([t]))
        const d = F(t, ...u),
          r = M(f.pop())
        return d
      },
      I = (t, u, d) => {
        var r
        const s = i.get(t)
        if (s) return u && s.t.add(u), s
        const o = d || []
        ;(r = p(t)) == null ||
          r.d.forEach((c, a) => {
            a !== t && I(a, t, o)
          }),
          g(t)
        const n = { t: new Set(u && [u]), l: new Set() }
        if ((i.set(t, n), X(t) && t.onMount)) {
          const { onMount: c } = t
          o.push(() => {
            const a = c((...l) => O(t, ...l))
            a && (n.u = a)
          })
        }
        return d || o.forEach((c) => c()), n
      },
      H = (t, u) => !u.l.size && (!u.t.size || (u.t.size === 1 && u.t.has(t))),
      b = (t, u) => {
        if (!H(t, u)) return
        const d = u.u
        d && d(), i.delete(t)
        const r = p(t)
        r &&
          (D(r) && k(r.v),
          r.d.forEach((s, o) => {
            if (o !== t) {
              const n = i.get(o)
              n && (n.t.delete(t), b(o, n))
            }
          }))
      },
      x = (t, u, d) => {
        const r = new Set(u.d.keys()),
          s = new Set()
        d?.forEach((o, n) => {
          if (r.has(n)) {
            r.delete(n)
            return
          }
          s.add(n)
          const c = i.get(n)
          c && c.t.delete(t)
        }),
          r.forEach((o) => {
            I(o, t)
          }),
          s.forEach((o) => {
            const n = i.get(o)
            n && b(o, n)
          })
      },
      M = (t) => {
        let u
        const d = [],
          r = (s) => {
            var o
            if (!E.has(s)) return
            const [n, c] = E.get(s)
            E.delete(s),
              d.push([s, n]),
              c.forEach(r),
              (o = p(s)) == null || o.d.forEach((a, l) => r(l))
          }
        t.forEach(r),
          d.forEach(([s, o]) => {
            const n = p(s)
            if (n && n !== o) {
              const c = i.get(s)
              c && n.d !== o?.d && x(s, n, o?.d),
                c && !(!D(o) && (P(o, n) || W(o, n))) && c.l.forEach((a) => a())
            }
          })
      }
    return {
      get: $,
      set: O,
      sub: (t, u) => {
        const d = I(t),
          r = M([t]),
          s = d.l
        return (
          s.add(u),
          () => {
            s.delete(u), b(t, d)
          }
        )
      },
    }
  }
let V
const oe = () => (V || (V = ne()), V),
  se = oe,
  re = m.createContext(void 0),
  q = (e) => {
    const i = m.useContext(re)
    return e?.store || i || se()
  },
  ue = (e) => typeof e?.then == 'function',
  ie =
    K.use ||
    ((e) => {
      if (e.status === 'pending') throw e
      if (e.status === 'fulfilled') return e.value
      throw e.status === 'rejected'
        ? e.reason
        : ((e.status = 'pending'),
          e.then(
            (i) => {
              ;(e.status = 'fulfilled'), (e.value = i)
            },
            (i) => {
              ;(e.status = 'rejected'), (e.reason = i)
            },
          ),
          e)
    })
function ce(e, i) {
  const f = q(i),
    [[E, w, U], p] = m.useReducer(
      (v) => {
        const _ = f.get(e)
        return Object.is(v[0], _) && v[1] === f && v[2] === e ? v : [_, f, e]
      },
      void 0,
      () => [f.get(e), f, e],
    )
  let R = E
  ;(w !== f || U !== e) && (p(), (R = f.get(e)))
  const A = i?.delay
  return (
    m.useEffect(() => {
      const v = f.sub(e, () => {
        if (typeof A == 'number') {
          setTimeout(p, A)
          return
        }
        p()
      })
      return p(), v
    }, [f, e, A]),
    m.useDebugValue(R),
    ue(R) ? ie(R) : R
  )
}
function de(e, i) {
  const f = q(i)
  return m.useCallback((...w) => f.set(e, ...w), [f, e])
}
function Se(e, i) {
  return [ce(e, i), de(e, i)]
}
export { de as a, ae as b, Se as c, ce as u }
