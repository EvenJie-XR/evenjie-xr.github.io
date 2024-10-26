import { c as Cu, g as Nu } from './_commonjsHelpers.Cpj98o6Y.js'
import { c as Y } from './config.CbhC5vfi.js'
import { g as Fu, a as Eu, c as He } from './theme.BxgT0uNq.js'
var Xe = { exports: {} }
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */ ;(function (D, K) {
  ;(function (tr, yr) {
    D.exports = yr()
  })(Cu, function () {
    for (
      var tr = function (r, a, e) {
          return a === void 0 && (a = 0), e === void 0 && (e = 1), r < a ? a : r > e ? e : r
        },
        yr = tr,
        Ue = function (r) {
          ;(r._clipped = !1), (r._unclipped = r.slice(0))
          for (var a = 0; a <= 3; a++)
            a < 3
              ? ((r[a] < 0 || r[a] > 255) && (r._clipped = !0), (r[a] = yr(r[a], 0, 255)))
              : a === 3 && (r[a] = yr(r[a], 0, 1))
          return r
        },
        la = {},
        Lr = 0,
        oa = [
          'Boolean',
          'Number',
          'String',
          'Function',
          'Array',
          'Date',
          'RegExp',
          'Undefined',
          'Null',
        ];
      Lr < oa.length;
      Lr += 1
    ) {
      var ca = oa[Lr]
      la['[object ' + ca + ']'] = ca.toLowerCase()
    }
    var wr = function (r) {
        return la[Object.prototype.toString.call(r)] || 'object'
      },
      Ve = wr,
      Ze = function (r, a) {
        return (
          a === void 0 && (a = null),
          r.length >= 3
            ? Array.prototype.slice.call(r)
            : Ve(r[0]) == 'object' && a
              ? a
                  .split('')
                  .filter(function (e) {
                    return r[0][e] !== void 0
                  })
                  .map(function (e) {
                    return r[0][e]
                  })
              : r[0]
        )
      },
      je = wr,
      Je = function (r) {
        if (r.length < 2) return null
        var a = r.length - 1
        return je(r[a]) == 'string' ? r[a].toLowerCase() : null
      },
      br = Math.PI,
      g = {
        clip_rgb: Ue,
        limit: tr,
        type: wr,
        unpack: Ze,
        last: Je,
        PI: br,
        TWOPI: br * 2,
        PITHIRD: br / 3,
        DEG2RAD: br / 180,
        RAD2DEG: 180 / br,
      },
      z = { format: {}, autodetect: [] },
      Qe = g.last,
      Ke = g.clip_rgb,
      ia = g.type,
      rr = z,
      sa = function () {
        for (var a = [], e = arguments.length; e--; ) a[e] = arguments[e]
        var n = this
        if (ia(a[0]) === 'object' && a[0].constructor && a[0].constructor === this.constructor)
          return a[0]
        var f = Qe(a),
          u = !1
        if (!f) {
          ;(u = !0),
            rr.sorted ||
              ((rr.autodetect = rr.autodetect.sort(function (c, h) {
                return h.p - c.p
              })),
              (rr.sorted = !0))
          for (var t = 0, v = rr.autodetect; t < v.length; t += 1) {
            var l = v[t]
            if (((f = l.test.apply(l, a)), f)) break
          }
        }
        if (rr.format[f]) {
          var o = rr.format[f].apply(null, u ? a : a.slice(0, -1))
          n._rgb = Ke(o)
        } else throw new Error('unknown format: ' + a)
        n._rgb.length === 3 && n._rgb.push(1)
      }
    sa.prototype.toString = function () {
      return ia(this.hex) == 'function' ? this.hex() : '[' + this._rgb.join(',') + ']'
    }
    var m = sa,
      kr = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(kr.Color, [null].concat(r)))()
      }
    ;(kr.Color = m), (kr.version = '2.4.2')
    var L = kr,
      rn = g.unpack,
      ga = Math.max,
      an = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = rn(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2]
        ;(n = n / 255), (f = f / 255), (u = u / 255)
        var t = 1 - ga(n, ga(f, u)),
          v = t < 1 ? 1 / (1 - t) : 0,
          l = (1 - n - t) * v,
          o = (1 - f - t) * v,
          c = (1 - u - t) * v
        return [l, o, c, t]
      },
      en = an,
      nn = g.unpack,
      tn = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = nn(r, 'cmyk')
        var e = r[0],
          n = r[1],
          f = r[2],
          u = r[3],
          t = r.length > 4 ? r[4] : 1
        return u === 1
          ? [0, 0, 0, t]
          : [
              e >= 1 ? 0 : 255 * (1 - e) * (1 - u),
              n >= 1 ? 0 : 255 * (1 - n) * (1 - u),
              f >= 1 ? 0 : 255 * (1 - f) * (1 - u),
              t,
            ]
      },
      fn = tn,
      un = L,
      ha = m,
      ba = z,
      vn = g.unpack,
      ln = g.type,
      on = en
    ;(ha.prototype.cmyk = function () {
      return on(this._rgb)
    }),
      (un.cmyk = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(ha, [null].concat(r, ['cmyk'])))()
      }),
      (ba.format.cmyk = fn),
      ba.autodetect.push({
        p: 2,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = vn(r, 'cmyk')), ln(r) === 'array' && r.length === 4)) return 'cmyk'
        },
      })
    var cn = g.unpack,
      sn = g.last,
      Rr = function (r) {
        return Math.round(r * 100) / 100
      },
      gn = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = cn(r, 'hsla'),
          n = sn(r) || 'lsa'
        return (
          (e[0] = Rr(e[0] || 0)),
          (e[1] = Rr(e[1] * 100) + '%'),
          (e[2] = Rr(e[2] * 100) + '%'),
          n === 'hsla' || (e.length > 3 && e[3] < 1)
            ? ((e[3] = e.length > 3 ? e[3] : 1), (n = 'hsla'))
            : (e.length = 3),
          n + '(' + e.join(',') + ')'
        )
      },
      hn = gn,
      bn = g.unpack,
      dn = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = bn(r, 'rgba')
        var e = r[0],
          n = r[1],
          f = r[2]
        ;(e /= 255), (n /= 255), (f /= 255)
        var u = Math.min(e, n, f),
          t = Math.max(e, n, f),
          v = (t + u) / 2,
          l,
          o
        return (
          t === u
            ? ((l = 0), (o = Number.NaN))
            : (l = v < 0.5 ? (t - u) / (t + u) : (t - u) / (2 - t - u)),
          e == t
            ? (o = (n - f) / (t - u))
            : n == t
              ? (o = 2 + (f - e) / (t - u))
              : f == t && (o = 4 + (e - n) / (t - u)),
          (o *= 60),
          o < 0 && (o += 360),
          r.length > 3 && r[3] !== void 0 ? [o, l, v, r[3]] : [o, l, v]
        )
      },
      da = dn,
      pn = g.unpack,
      mn = g.last,
      yn = hn,
      wn = da,
      zr = Math.round,
      kn = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = pn(r, 'rgba'),
          n = mn(r) || 'rgb'
        return n.substr(0, 3) == 'hsl'
          ? yn(wn(e), n)
          : ((e[0] = zr(e[0])),
            (e[1] = zr(e[1])),
            (e[2] = zr(e[2])),
            (n === 'rgba' || (e.length > 3 && e[3] < 1)) &&
              ((e[3] = e.length > 3 ? e[3] : 1), (n = 'rgba')),
            n + '(' + e.slice(0, n === 'rgb' ? 3 : 4).join(',') + ')')
      },
      $n = kn,
      _n = g.unpack,
      Pr = Math.round,
      xn = function () {
        for (var r, a = [], e = arguments.length; e--; ) a[e] = arguments[e]
        a = _n(a, 'hsl')
        var n = a[0],
          f = a[1],
          u = a[2],
          t,
          v,
          l
        if (f === 0) t = v = l = u * 255
        else {
          var o = [0, 0, 0],
            c = [0, 0, 0],
            h = u < 0.5 ? u * (1 + f) : u + f - u * f,
            i = 2 * u - h,
            d = n / 360
          ;(o[0] = d + 1 / 3), (o[1] = d), (o[2] = d - 1 / 3)
          for (var b = 0; b < 3; b++)
            o[b] < 0 && (o[b] += 1),
              o[b] > 1 && (o[b] -= 1),
              6 * o[b] < 1
                ? (c[b] = i + (h - i) * 6 * o[b])
                : 2 * o[b] < 1
                  ? (c[b] = h)
                  : 3 * o[b] < 2
                    ? (c[b] = i + (h - i) * (2 / 3 - o[b]) * 6)
                    : (c[b] = i)
          ;(r = [Pr(c[0] * 255), Pr(c[1] * 255), Pr(c[2] * 255)]),
            (t = r[0]),
            (v = r[1]),
            (l = r[2])
        }
        return a.length > 3 ? [t, v, l, a[3]] : [t, v, l, 1]
      },
      pa = xn,
      ma = pa,
      ya = z,
      wa = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      ka = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      $a = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      _a =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      xa = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Ma =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Ca = Math.round,
      Na = function (r) {
        r = r.toLowerCase().trim()
        var a
        if (ya.format.named)
          try {
            return ya.format.named(r)
          } catch {}
        if ((a = r.match(wa))) {
          for (var e = a.slice(1, 4), n = 0; n < 3; n++) e[n] = +e[n]
          return (e[3] = 1), e
        }
        if ((a = r.match(ka))) {
          for (var f = a.slice(1, 5), u = 0; u < 4; u++) f[u] = +f[u]
          return f
        }
        if ((a = r.match($a))) {
          for (var t = a.slice(1, 4), v = 0; v < 3; v++) t[v] = Ca(t[v] * 2.55)
          return (t[3] = 1), t
        }
        if ((a = r.match(_a))) {
          for (var l = a.slice(1, 5), o = 0; o < 3; o++) l[o] = Ca(l[o] * 2.55)
          return (l[3] = +l[3]), l
        }
        if ((a = r.match(xa))) {
          var c = a.slice(1, 4)
          ;(c[1] *= 0.01), (c[2] *= 0.01)
          var h = ma(c)
          return (h[3] = 1), h
        }
        if ((a = r.match(Ma))) {
          var i = a.slice(1, 4)
          ;(i[1] *= 0.01), (i[2] *= 0.01)
          var d = ma(i)
          return (d[3] = +a[4]), d
        }
      }
    Na.test = function (r) {
      return wa.test(r) || ka.test(r) || $a.test(r) || _a.test(r) || xa.test(r) || Ma.test(r)
    }
    var Mn = Na,
      Cn = L,
      Fa = m,
      Ea = z,
      Nn = g.type,
      Fn = $n,
      Aa = Mn
    ;(Fa.prototype.css = function (r) {
      return Fn(this._rgb, r)
    }),
      (Cn.css = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Fa, [null].concat(r, ['css'])))()
      }),
      (Ea.format.css = Aa),
      Ea.autodetect.push({
        p: 5,
        test: function (r) {
          for (var a = [], e = arguments.length - 1; e-- > 0; ) a[e] = arguments[e + 1]
          if (!a.length && Nn(r) === 'string' && Aa.test(r)) return 'css'
        },
      })
    var La = m,
      En = L,
      An = z,
      Ln = g.unpack
    ;(An.format.gl = function () {
      for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
      var e = Ln(r, 'rgba')
      return (e[0] *= 255), (e[1] *= 255), (e[2] *= 255), e
    }),
      (En.gl = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(La, [null].concat(r, ['gl'])))()
      }),
      (La.prototype.gl = function () {
        var r = this._rgb
        return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]]
      })
    var Rn = g.unpack,
      zn = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Rn(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = Math.min(n, f, u),
          v = Math.max(n, f, u),
          l = v - t,
          o = (l * 100) / 255,
          c = (t / (255 - l)) * 100,
          h
        return (
          l === 0
            ? (h = Number.NaN)
            : (n === v && (h = (f - u) / l),
              f === v && (h = 2 + (u - n) / l),
              u === v && (h = 4 + (n - f) / l),
              (h *= 60),
              h < 0 && (h += 360)),
          [h, o, c]
        )
      },
      Pn = zn,
      Tn = g.unpack,
      Gn = Math.floor,
      In = function () {
        for (var r, a, e, n, f, u, t = [], v = arguments.length; v--; ) t[v] = arguments[v]
        t = Tn(t, 'hcg')
        var l = t[0],
          o = t[1],
          c = t[2],
          h,
          i,
          d
        c = c * 255
        var b = o * 255
        if (o === 0) h = i = d = c
        else {
          l === 360 && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360), (l /= 60)
          var y = Gn(l),
            $ = l - y,
            x = c * (1 - o),
            C = x + b * (1 - $),
            G = x + b * $,
            T = x + b
          switch (y) {
            case 0:
              ;(r = [T, G, x]), (h = r[0]), (i = r[1]), (d = r[2])
              break
            case 1:
              ;(a = [C, T, x]), (h = a[0]), (i = a[1]), (d = a[2])
              break
            case 2:
              ;(e = [x, T, G]), (h = e[0]), (i = e[1]), (d = e[2])
              break
            case 3:
              ;(n = [x, C, T]), (h = n[0]), (i = n[1]), (d = n[2])
              break
            case 4:
              ;(f = [G, x, T]), (h = f[0]), (i = f[1]), (d = f[2])
              break
            case 5:
              ;(u = [T, x, C]), (h = u[0]), (i = u[1]), (d = u[2])
              break
          }
        }
        return [h, i, d, t.length > 3 ? t[3] : 1]
      },
      Dn = In,
      On = g.unpack,
      Sn = g.type,
      qn = L,
      Ra = m,
      za = z,
      Bn = Pn
    ;(Ra.prototype.hcg = function () {
      return Bn(this._rgb)
    }),
      (qn.hcg = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Ra, [null].concat(r, ['hcg'])))()
      }),
      (za.format.hcg = Dn),
      za.autodetect.push({
        p: 1,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = On(r, 'hcg')), Sn(r) === 'array' && r.length === 3)) return 'hcg'
        },
      })
    var Yn = g.unpack,
      Hn = g.last,
      $r = Math.round,
      Xn = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Yn(r, 'rgba'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = e[3],
          v = Hn(r) || 'auto'
        t === void 0 && (t = 1),
          v === 'auto' && (v = t < 1 ? 'rgba' : 'rgb'),
          (n = $r(n)),
          (f = $r(f)),
          (u = $r(u))
        var l = (n << 16) | (f << 8) | u,
          o = '000000' + l.toString(16)
        o = o.substr(o.length - 6)
        var c = '0' + $r(t * 255).toString(16)
        switch (((c = c.substr(c.length - 2)), v.toLowerCase())) {
          case 'rgba':
            return '#' + o + c
          case 'argb':
            return '#' + c + o
          default:
            return '#' + o
        }
      },
      Pa = Xn,
      Wn = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      Un = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      Vn = function (r) {
        if (r.match(Wn)) {
          ;(r.length === 4 || r.length === 7) && (r = r.substr(1)),
            r.length === 3 && ((r = r.split('')), (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]))
          var a = parseInt(r, 16),
            e = a >> 16,
            n = (a >> 8) & 255,
            f = a & 255
          return [e, n, f, 1]
        }
        if (r.match(Un)) {
          ;(r.length === 5 || r.length === 9) && (r = r.substr(1)),
            r.length === 4 &&
              ((r = r.split('')), (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]))
          var u = parseInt(r, 16),
            t = (u >> 24) & 255,
            v = (u >> 16) & 255,
            l = (u >> 8) & 255,
            o = Math.round(((u & 255) / 255) * 100) / 100
          return [t, v, l, o]
        }
        throw new Error('unknown hex color: ' + r)
      },
      Ta = Vn,
      Zn = L,
      Ga = m,
      jn = g.type,
      Ia = z,
      Jn = Pa
    ;(Ga.prototype.hex = function (r) {
      return Jn(this._rgb, r)
    }),
      (Zn.hex = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Ga, [null].concat(r, ['hex'])))()
      }),
      (Ia.format.hex = Ta),
      Ia.autodetect.push({
        p: 4,
        test: function (r) {
          for (var a = [], e = arguments.length - 1; e-- > 0; ) a[e] = arguments[e + 1]
          if (!a.length && jn(r) === 'string' && [3, 4, 5, 6, 7, 8, 9].indexOf(r.length) >= 0)
            return 'hex'
        },
      })
    var Qn = g.unpack,
      Da = g.TWOPI,
      Kn = Math.min,
      rt = Math.sqrt,
      at = Math.acos,
      et = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Qn(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2]
        ;(n /= 255), (f /= 255), (u /= 255)
        var t,
          v = Kn(n, f, u),
          l = (n + f + u) / 3,
          o = l > 0 ? 1 - v / l : 0
        return (
          o === 0
            ? (t = NaN)
            : ((t = (n - f + (n - u)) / 2),
              (t /= rt((n - f) * (n - f) + (n - u) * (f - u))),
              (t = at(t)),
              u > f && (t = Da - t),
              (t /= Da)),
          [t * 360, o, l]
        )
      },
      nt = et,
      tt = g.unpack,
      Tr = g.limit,
      fr = g.TWOPI,
      Gr = g.PITHIRD,
      ur = Math.cos,
      ft = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = tt(r, 'hsi')
        var e = r[0],
          n = r[1],
          f = r[2],
          u,
          t,
          v
        return (
          isNaN(e) && (e = 0),
          isNaN(n) && (n = 0),
          e > 360 && (e -= 360),
          e < 0 && (e += 360),
          (e /= 360),
          e < 1 / 3
            ? ((v = (1 - n) / 3),
              (u = (1 + (n * ur(fr * e)) / ur(Gr - fr * e)) / 3),
              (t = 1 - (v + u)))
            : e < 2 / 3
              ? ((e -= 1 / 3),
                (u = (1 - n) / 3),
                (t = (1 + (n * ur(fr * e)) / ur(Gr - fr * e)) / 3),
                (v = 1 - (u + t)))
              : ((e -= 2 / 3),
                (t = (1 - n) / 3),
                (v = (1 + (n * ur(fr * e)) / ur(Gr - fr * e)) / 3),
                (u = 1 - (t + v))),
          (u = Tr(f * u * 3)),
          (t = Tr(f * t * 3)),
          (v = Tr(f * v * 3)),
          [u * 255, t * 255, v * 255, r.length > 3 ? r[3] : 1]
        )
      },
      ut = ft,
      vt = g.unpack,
      lt = g.type,
      ot = L,
      Oa = m,
      Sa = z,
      ct = nt
    ;(Oa.prototype.hsi = function () {
      return ct(this._rgb)
    }),
      (ot.hsi = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Oa, [null].concat(r, ['hsi'])))()
      }),
      (Sa.format.hsi = ut),
      Sa.autodetect.push({
        p: 2,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = vt(r, 'hsi')), lt(r) === 'array' && r.length === 3)) return 'hsi'
        },
      })
    var it = g.unpack,
      st = g.type,
      gt = L,
      qa = m,
      Ba = z,
      ht = da
    ;(qa.prototype.hsl = function () {
      return ht(this._rgb)
    }),
      (gt.hsl = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(qa, [null].concat(r, ['hsl'])))()
      }),
      (Ba.format.hsl = pa),
      Ba.autodetect.push({
        p: 2,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = it(r, 'hsl')), st(r) === 'array' && r.length === 3)) return 'hsl'
        },
      })
    var bt = g.unpack,
      dt = Math.min,
      pt = Math.max,
      mt = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = bt(r, 'rgb')
        var e = r[0],
          n = r[1],
          f = r[2],
          u = dt(e, n, f),
          t = pt(e, n, f),
          v = t - u,
          l,
          o,
          c
        return (
          (c = t / 255),
          t === 0
            ? ((l = Number.NaN), (o = 0))
            : ((o = v / t),
              e === t && (l = (n - f) / v),
              n === t && (l = 2 + (f - e) / v),
              f === t && (l = 4 + (e - n) / v),
              (l *= 60),
              l < 0 && (l += 360)),
          [l, o, c]
        )
      },
      yt = mt,
      wt = g.unpack,
      kt = Math.floor,
      $t = function () {
        for (var r, a, e, n, f, u, t = [], v = arguments.length; v--; ) t[v] = arguments[v]
        t = wt(t, 'hsv')
        var l = t[0],
          o = t[1],
          c = t[2],
          h,
          i,
          d
        if (((c *= 255), o === 0)) h = i = d = c
        else {
          l === 360 && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360), (l /= 60)
          var b = kt(l),
            y = l - b,
            $ = c * (1 - o),
            x = c * (1 - o * y),
            C = c * (1 - o * (1 - y))
          switch (b) {
            case 0:
              ;(r = [c, C, $]), (h = r[0]), (i = r[1]), (d = r[2])
              break
            case 1:
              ;(a = [x, c, $]), (h = a[0]), (i = a[1]), (d = a[2])
              break
            case 2:
              ;(e = [$, c, C]), (h = e[0]), (i = e[1]), (d = e[2])
              break
            case 3:
              ;(n = [$, x, c]), (h = n[0]), (i = n[1]), (d = n[2])
              break
            case 4:
              ;(f = [C, $, c]), (h = f[0]), (i = f[1]), (d = f[2])
              break
            case 5:
              ;(u = [c, $, x]), (h = u[0]), (i = u[1]), (d = u[2])
              break
          }
        }
        return [h, i, d, t.length > 3 ? t[3] : 1]
      },
      _t = $t,
      xt = g.unpack,
      Mt = g.type,
      Ct = L,
      Ya = m,
      Ha = z,
      Nt = yt
    ;(Ya.prototype.hsv = function () {
      return Nt(this._rgb)
    }),
      (Ct.hsv = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Ya, [null].concat(r, ['hsv'])))()
      }),
      (Ha.format.hsv = _t),
      Ha.autodetect.push({
        p: 2,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = xt(r, 'hsv')), Mt(r) === 'array' && r.length === 3)) return 'hsv'
        },
      })
    var _r = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      vr = _r,
      Ft = g.unpack,
      Xa = Math.pow,
      Et = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Ft(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = At(n, f, u),
          v = t[0],
          l = t[1],
          o = t[2],
          c = 116 * l - 16
        return [c < 0 ? 0 : c, 500 * (v - l), 200 * (l - o)]
      },
      Ir = function (r) {
        return (r /= 255) <= 0.04045 ? r / 12.92 : Xa((r + 0.055) / 1.055, 2.4)
      },
      Dr = function (r) {
        return r > vr.t3 ? Xa(r, 1 / 3) : r / vr.t2 + vr.t0
      },
      At = function (r, a, e) {
        ;(r = Ir(r)), (a = Ir(a)), (e = Ir(e))
        var n = Dr((0.4124564 * r + 0.3575761 * a + 0.1804375 * e) / vr.Xn),
          f = Dr((0.2126729 * r + 0.7151522 * a + 0.072175 * e) / vr.Yn),
          u = Dr((0.0193339 * r + 0.119192 * a + 0.9503041 * e) / vr.Zn)
        return [n, f, u]
      },
      Wa = Et,
      lr = _r,
      Lt = g.unpack,
      Rt = Math.pow,
      zt = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = Lt(r, 'lab')
        var e = r[0],
          n = r[1],
          f = r[2],
          u,
          t,
          v,
          l,
          o,
          c
        return (
          (t = (e + 16) / 116),
          (u = isNaN(n) ? t : t + n / 500),
          (v = isNaN(f) ? t : t - f / 200),
          (t = lr.Yn * Sr(t)),
          (u = lr.Xn * Sr(u)),
          (v = lr.Zn * Sr(v)),
          (l = Or(3.2404542 * u - 1.5371385 * t - 0.4985314 * v)),
          (o = Or(-0.969266 * u + 1.8760108 * t + 0.041556 * v)),
          (c = Or(0.0556434 * u - 0.2040259 * t + 1.0572252 * v)),
          [l, o, c, r.length > 3 ? r[3] : 1]
        )
      },
      Or = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * Rt(r, 1 / 2.4) - 0.055)
      },
      Sr = function (r) {
        return r > lr.t1 ? r * r * r : lr.t2 * (r - lr.t0)
      },
      Ua = zt,
      Pt = g.unpack,
      Tt = g.type,
      Gt = L,
      Va = m,
      Za = z,
      It = Wa
    ;(Va.prototype.lab = function () {
      return It(this._rgb)
    }),
      (Gt.lab = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Va, [null].concat(r, ['lab'])))()
      }),
      (Za.format.lab = Ua),
      Za.autodetect.push({
        p: 2,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = Pt(r, 'lab')), Tt(r) === 'array' && r.length === 3)) return 'lab'
        },
      })
    var Dt = g.unpack,
      Ot = g.RAD2DEG,
      St = Math.sqrt,
      qt = Math.atan2,
      Bt = Math.round,
      Yt = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Dt(r, 'lab'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = St(f * f + u * u),
          v = (qt(u, f) * Ot + 360) % 360
        return Bt(t * 1e4) === 0 && (v = Number.NaN), [n, t, v]
      },
      ja = Yt,
      Ht = g.unpack,
      Xt = Wa,
      Wt = ja,
      Ut = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Ht(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = Xt(n, f, u),
          v = t[0],
          l = t[1],
          o = t[2]
        return Wt(v, l, o)
      },
      Vt = Ut,
      Zt = g.unpack,
      jt = g.DEG2RAD,
      Jt = Math.sin,
      Qt = Math.cos,
      Kt = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Zt(r, 'lch'),
          n = e[0],
          f = e[1],
          u = e[2]
        return isNaN(u) && (u = 0), (u = u * jt), [n, Qt(u) * f, Jt(u) * f]
      },
      Ja = Kt,
      rf = g.unpack,
      af = Ja,
      ef = Ua,
      nf = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = rf(r, 'lch')
        var e = r[0],
          n = r[1],
          f = r[2],
          u = af(e, n, f),
          t = u[0],
          v = u[1],
          l = u[2],
          o = ef(t, v, l),
          c = o[0],
          h = o[1],
          i = o[2]
        return [c, h, i, r.length > 3 ? r[3] : 1]
      },
      Qa = nf,
      tf = g.unpack,
      ff = Qa,
      uf = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = tf(r, 'hcl').reverse()
        return ff.apply(void 0, e)
      },
      vf = uf,
      lf = g.unpack,
      of = g.type,
      Ka = L,
      xr = m,
      qr = z,
      re = Vt
    ;(xr.prototype.lch = function () {
      return re(this._rgb)
    }),
      (xr.prototype.hcl = function () {
        return re(this._rgb).reverse()
      }),
      (Ka.lch = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(xr, [null].concat(r, ['lch'])))()
      }),
      (Ka.hcl = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(xr, [null].concat(r, ['hcl'])))()
      }),
      (qr.format.lch = Qa),
      (qr.format.hcl = vf),
      ['lch', 'hcl'].forEach(function (r) {
        return qr.autodetect.push({
          p: 2,
          test: function () {
            for (var a = [], e = arguments.length; e--; ) a[e] = arguments[e]
            if (((a = lf(a, r)), of(a) === 'array' && a.length === 3)) return r
          },
        })
      })
    var cf = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
      },
      ae = cf,
      sf = m,
      ee = z,
      gf = g.type,
      dr = ae,
      hf = Ta,
      bf = Pa
    ;(sf.prototype.name = function () {
      for (var r = bf(this._rgb, 'rgb'), a = 0, e = Object.keys(dr); a < e.length; a += 1) {
        var n = e[a]
        if (dr[n] === r) return n.toLowerCase()
      }
      return r
    }),
      (ee.format.named = function (r) {
        if (((r = r.toLowerCase()), dr[r])) return hf(dr[r])
        throw new Error('unknown color name: ' + r)
      }),
      ee.autodetect.push({
        p: 5,
        test: function (r) {
          for (var a = [], e = arguments.length - 1; e-- > 0; ) a[e] = arguments[e + 1]
          if (!a.length && gf(r) === 'string' && dr[r.toLowerCase()]) return 'named'
        },
      })
    var df = g.unpack,
      pf = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = df(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2]
        return (n << 16) + (f << 8) + u
      },
      mf = pf,
      yf = g.type,
      wf = function (r) {
        if (yf(r) == 'number' && r >= 0 && r <= 16777215) {
          var a = r >> 16,
            e = (r >> 8) & 255,
            n = r & 255
          return [a, e, n, 1]
        }
        throw new Error('unknown num color: ' + r)
      },
      kf = wf,
      $f = L,
      ne = m,
      te = z,
      _f = g.type,
      xf = mf
    ;(ne.prototype.num = function () {
      return xf(this._rgb)
    }),
      ($f.num = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(ne, [null].concat(r, ['num'])))()
      }),
      (te.format.num = kf),
      te.autodetect.push({
        p: 5,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (r.length === 1 && _f(r[0]) === 'number' && r[0] >= 0 && r[0] <= 16777215) return 'num'
        },
      })
    var Mf = L,
      Br = m,
      fe = z,
      ue = g.unpack,
      ve = g.type,
      le = Math.round
    ;(Br.prototype.rgb = function (r) {
      return (
        r === void 0 && (r = !0), r === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(le)
      )
    }),
      (Br.prototype.rgba = function (r) {
        return (
          r === void 0 && (r = !0),
          this._rgb.slice(0, 4).map(function (a, e) {
            return e < 3 ? (r === !1 ? a : le(a)) : a
          })
        )
      }),
      (Mf.rgb = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(Br, [null].concat(r, ['rgb'])))()
      }),
      (fe.format.rgb = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = ue(r, 'rgba')
        return e[3] === void 0 && (e[3] = 1), e
      }),
      fe.autodetect.push({
        p: 3,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (
            ((r = ue(r, 'rgba')),
            ve(r) === 'array' &&
              (r.length === 3 ||
                (r.length === 4 && ve(r[3]) == 'number' && r[3] >= 0 && r[3] <= 1)))
          )
            return 'rgb'
        },
      })
    var Mr = Math.log,
      Cf = function (r) {
        var a = r / 100,
          e,
          n,
          f
        return (
          a < 66
            ? ((e = 255),
              (n =
                a < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (n = a - 2) +
                    104.49216199393888 * Mr(n)),
              (f =
                a < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (f = a - 10) +
                    115.67994401066147 * Mr(f)))
            : ((e =
                351.97690566805693 + 0.114206453784165 * (e = a - 55) - 40.25366309332127 * Mr(e)),
              (n =
                325.4494125711974 + 0.07943456536662342 * (n = a - 50) - 28.0852963507957 * Mr(n)),
              (f = 255)),
          [e, n, f, 1]
        )
      },
      oe = Cf,
      Nf = oe,
      Ff = g.unpack,
      Ef = Math.round,
      Af = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        for (var e = Ff(r, 'rgb'), n = e[0], f = e[2], u = 1e3, t = 4e4, v = 0.4, l; t - u > v; ) {
          l = (t + u) * 0.5
          var o = Nf(l)
          o[2] / o[0] >= f / n ? (t = l) : (u = l)
        }
        return Ef(l)
      },
      Lf = Af,
      Yr = L,
      Cr = m,
      Hr = z,
      Rf = Lf
    ;(Cr.prototype.temp =
      Cr.prototype.kelvin =
      Cr.prototype.temperature =
        function () {
          return Rf(this._rgb)
        }),
      (Yr.temp =
        Yr.kelvin =
        Yr.temperature =
          function () {
            for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
            return new (Function.prototype.bind.apply(Cr, [null].concat(r, ['temp'])))()
          }),
      (Hr.format.temp = Hr.format.kelvin = Hr.format.temperature = oe)
    var zf = g.unpack,
      Xr = Math.cbrt,
      Pf = Math.pow,
      Tf = Math.sign,
      Gf = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = zf(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = [Wr(n / 255), Wr(f / 255), Wr(u / 255)],
          v = t[0],
          l = t[1],
          o = t[2],
          c = Xr(0.4122214708 * v + 0.5363325363 * l + 0.0514459929 * o),
          h = Xr(0.2119034982 * v + 0.6806995451 * l + 0.1073969566 * o),
          i = Xr(0.0883024619 * v + 0.2817188376 * l + 0.6299787005 * o)
        return [
          0.2104542553 * c + 0.793617785 * h - 0.0040720468 * i,
          1.9779984951 * c - 2.428592205 * h + 0.4505937099 * i,
          0.0259040371 * c + 0.7827717662 * h - 0.808675766 * i,
        ]
      },
      ce = Gf
    function Wr(r) {
      var a = Math.abs(r)
      return a < 0.04045 ? r / 12.92 : (Tf(r) || 1) * Pf((a + 0.055) / 1.055, 2.4)
    }
    var If = g.unpack,
      Nr = Math.pow,
      Df = Math.sign,
      Of = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = If(r, 'lab')
        var e = r[0],
          n = r[1],
          f = r[2],
          u = Nr(e + 0.3963377774 * n + 0.2158037573 * f, 3),
          t = Nr(e - 0.1055613458 * n - 0.0638541728 * f, 3),
          v = Nr(e - 0.0894841775 * n - 1.291485548 * f, 3)
        return [
          255 * Ur(4.0767416621 * u - 3.3077115913 * t + 0.2309699292 * v),
          255 * Ur(-1.2684380046 * u + 2.6097574011 * t - 0.3413193965 * v),
          255 * Ur(-0.0041960863 * u - 0.7034186147 * t + 1.707614701 * v),
          r.length > 3 ? r[3] : 1,
        ]
      },
      ie = Of
    function Ur(r) {
      var a = Math.abs(r)
      return a > 0.0031308 ? (Df(r) || 1) * (1.055 * Nr(a, 1 / 2.4) - 0.055) : r * 12.92
    }
    var Sf = g.unpack,
      qf = g.type,
      Bf = L,
      se = m,
      ge = z,
      Yf = ce
    ;(se.prototype.oklab = function () {
      return Yf(this._rgb)
    }),
      (Bf.oklab = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(se, [null].concat(r, ['oklab'])))()
      }),
      (ge.format.oklab = ie),
      ge.autodetect.push({
        p: 3,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = Sf(r, 'oklab')), qf(r) === 'array' && r.length === 3)) return 'oklab'
        },
      })
    var Hf = g.unpack,
      Xf = ce,
      Wf = ja,
      Uf = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        var e = Hf(r, 'rgb'),
          n = e[0],
          f = e[1],
          u = e[2],
          t = Xf(n, f, u),
          v = t[0],
          l = t[1],
          o = t[2]
        return Wf(v, l, o)
      },
      Vf = Uf,
      Zf = g.unpack,
      jf = Ja,
      Jf = ie,
      Qf = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        r = Zf(r, 'lch')
        var e = r[0],
          n = r[1],
          f = r[2],
          u = jf(e, n, f),
          t = u[0],
          v = u[1],
          l = u[2],
          o = Jf(t, v, l),
          c = o[0],
          h = o[1],
          i = o[2]
        return [c, h, i, r.length > 3 ? r[3] : 1]
      },
      Kf = Qf,
      r0 = g.unpack,
      a0 = g.type,
      e0 = L,
      he = m,
      be = z,
      n0 = Vf
    ;(he.prototype.oklch = function () {
      return n0(this._rgb)
    }),
      (e0.oklch = function () {
        for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
        return new (Function.prototype.bind.apply(he, [null].concat(r, ['oklch'])))()
      }),
      (be.format.oklch = Kf),
      be.autodetect.push({
        p: 3,
        test: function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          if (((r = r0(r, 'oklch')), a0(r) === 'array' && r.length === 3)) return 'oklch'
        },
      })
    var de = m,
      t0 = g.type
    de.prototype.alpha = function (r, a) {
      return (
        a === void 0 && (a = !1),
        r !== void 0 && t0(r) === 'number'
          ? a
            ? ((this._rgb[3] = r), this)
            : new de([this._rgb[0], this._rgb[1], this._rgb[2], r], 'rgb')
          : this._rgb[3]
      )
    }
    var f0 = m
    f0.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var ar = m,
      u0 = _r
    ;(ar.prototype.darken = function (r) {
      r === void 0 && (r = 1)
      var a = this,
        e = a.lab()
      return (e[0] -= u0.Kn * r), new ar(e, 'lab').alpha(a.alpha(), !0)
    }),
      (ar.prototype.brighten = function (r) {
        return r === void 0 && (r = 1), this.darken(-r)
      }),
      (ar.prototype.darker = ar.prototype.darken),
      (ar.prototype.brighter = ar.prototype.brighten)
    var v0 = m
    v0.prototype.get = function (r) {
      var a = r.split('.'),
        e = a[0],
        n = a[1],
        f = this[e]()
      if (n) {
        var u = e.indexOf(n) - (e.substr(0, 2) === 'ok' ? 2 : 0)
        if (u > -1) return f[u]
        throw new Error('unknown channel ' + n + ' in mode ' + e)
      } else return f
    }
    var or = m,
      l0 = g.type,
      o0 = Math.pow,
      c0 = 1e-7,
      i0 = 20
    or.prototype.luminance = function (r) {
      if (r !== void 0 && l0(r) === 'number') {
        if (r === 0) return new or([0, 0, 0, this._rgb[3]], 'rgb')
        if (r === 1) return new or([255, 255, 255, this._rgb[3]], 'rgb')
        var a = this.luminance(),
          e = 'rgb',
          n = i0,
          f = function (t, v) {
            var l = t.interpolate(v, 0.5, e),
              o = l.luminance()
            return Math.abs(r - o) < c0 || !n-- ? l : o > r ? f(t, l) : f(l, v)
          },
          u = (a > r ? f(new or([0, 0, 0]), this) : f(this, new or([255, 255, 255]))).rgb()
        return new or(u.concat([this._rgb[3]]))
      }
      return s0.apply(void 0, this._rgb.slice(0, 3))
    }
    var s0 = function (r, a, e) {
        return (r = Vr(r)), (a = Vr(a)), (e = Vr(e)), 0.2126 * r + 0.7152 * a + 0.0722 * e
      },
      Vr = function (r) {
        return (r /= 255), r <= 0.03928 ? r / 12.92 : o0((r + 0.055) / 1.055, 2.4)
      },
      B = {},
      pe = m,
      me = g.type,
      Fr = B,
      ye = function (r, a, e) {
        e === void 0 && (e = 0.5)
        for (var n = [], f = arguments.length - 3; f-- > 0; ) n[f] = arguments[f + 3]
        var u = n[0] || 'lrgb'
        if ((!Fr[u] && !n.length && (u = Object.keys(Fr)[0]), !Fr[u]))
          throw new Error('interpolation mode ' + u + ' is not defined')
        return (
          me(r) !== 'object' && (r = new pe(r)),
          me(a) !== 'object' && (a = new pe(a)),
          Fr[u](r, a, e).alpha(r.alpha() + e * (a.alpha() - r.alpha()))
        )
      },
      we = m,
      g0 = ye
    we.prototype.mix = we.prototype.interpolate = function (r, a) {
      a === void 0 && (a = 0.5)
      for (var e = [], n = arguments.length - 2; n-- > 0; ) e[n] = arguments[n + 2]
      return g0.apply(void 0, [this, r, a].concat(e))
    }
    var ke = m
    ke.prototype.premultiply = function (r) {
      r === void 0 && (r = !1)
      var a = this._rgb,
        e = a[3]
      return r
        ? ((this._rgb = [a[0] * e, a[1] * e, a[2] * e, e]), this)
        : new ke([a[0] * e, a[1] * e, a[2] * e, e], 'rgb')
    }
    var Zr = m,
      h0 = _r
    ;(Zr.prototype.saturate = function (r) {
      r === void 0 && (r = 1)
      var a = this,
        e = a.lch()
      return (e[1] += h0.Kn * r), e[1] < 0 && (e[1] = 0), new Zr(e, 'lch').alpha(a.alpha(), !0)
    }),
      (Zr.prototype.desaturate = function (r) {
        return r === void 0 && (r = 1), this.saturate(-r)
      })
    var $e = m,
      _e = g.type
    $e.prototype.set = function (r, a, e) {
      e === void 0 && (e = !1)
      var n = r.split('.'),
        f = n[0],
        u = n[1],
        t = this[f]()
      if (u) {
        var v = f.indexOf(u) - (f.substr(0, 2) === 'ok' ? 2 : 0)
        if (v > -1) {
          if (_e(a) == 'string')
            switch (a.charAt(0)) {
              case '+':
                t[v] += +a
                break
              case '-':
                t[v] += +a
                break
              case '*':
                t[v] *= +a.substr(1)
                break
              case '/':
                t[v] /= +a.substr(1)
                break
              default:
                t[v] = +a
            }
          else if (_e(a) === 'number') t[v] = a
          else throw new Error('unsupported value for Color.set')
          var l = new $e(t, f)
          return e ? ((this._rgb = l._rgb), this) : l
        }
        throw new Error('unknown channel ' + u + ' in mode ' + f)
      } else return t
    }
    var b0 = m,
      d0 = function (r, a, e) {
        var n = r._rgb,
          f = a._rgb
        return new b0(
          n[0] + e * (f[0] - n[0]),
          n[1] + e * (f[1] - n[1]),
          n[2] + e * (f[2] - n[2]),
          'rgb',
        )
      }
    B.rgb = d0
    var p0 = m,
      jr = Math.sqrt,
      cr = Math.pow,
      m0 = function (r, a, e) {
        var n = r._rgb,
          f = n[0],
          u = n[1],
          t = n[2],
          v = a._rgb,
          l = v[0],
          o = v[1],
          c = v[2]
        return new p0(
          jr(cr(f, 2) * (1 - e) + cr(l, 2) * e),
          jr(cr(u, 2) * (1 - e) + cr(o, 2) * e),
          jr(cr(t, 2) * (1 - e) + cr(c, 2) * e),
          'rgb',
        )
      }
    B.lrgb = m0
    var y0 = m,
      w0 = function (r, a, e) {
        var n = r.lab(),
          f = a.lab()
        return new y0(
          n[0] + e * (f[0] - n[0]),
          n[1] + e * (f[1] - n[1]),
          n[2] + e * (f[2] - n[2]),
          'lab',
        )
      }
    B.lab = w0
    var xe = m,
      ir = function (r, a, e, n) {
        var f, u, t, v
        n === 'hsl'
          ? ((t = r.hsl()), (v = a.hsl()))
          : n === 'hsv'
            ? ((t = r.hsv()), (v = a.hsv()))
            : n === 'hcg'
              ? ((t = r.hcg()), (v = a.hcg()))
              : n === 'hsi'
                ? ((t = r.hsi()), (v = a.hsi()))
                : n === 'lch' || n === 'hcl'
                  ? ((n = 'hcl'), (t = r.hcl()), (v = a.hcl()))
                  : n === 'oklch' && ((t = r.oklch().reverse()), (v = a.oklch().reverse()))
        var l, o, c, h, i, d
        ;(n.substr(0, 1) === 'h' || n === 'oklch') &&
          ((f = t), (l = f[0]), (c = f[1]), (i = f[2]), (u = v), (o = u[0]), (h = u[1]), (d = u[2]))
        var b, y, $, x
        return (
          !isNaN(l) && !isNaN(o)
            ? (o > l && o - l > 180
                ? (x = o - (l + 360))
                : o < l && l - o > 180
                  ? (x = o + 360 - l)
                  : (x = o - l),
              (y = l + e * x))
            : isNaN(l)
              ? isNaN(o)
                ? (y = Number.NaN)
                : ((y = o), (i == 1 || i == 0) && n != 'hsv' && (b = h))
              : ((y = l), (d == 1 || d == 0) && n != 'hsv' && (b = c)),
          b === void 0 && (b = c + e * (h - c)),
          ($ = i + e * (d - i)),
          n === 'oklch' ? new xe([$, b, y], n) : new xe([y, b, $], n)
        )
      },
      k0 = ir,
      Me = function (r, a, e) {
        return k0(r, a, e, 'lch')
      }
    ;(B.lch = Me), (B.hcl = Me)
    var $0 = m,
      _0 = function (r, a, e) {
        var n = r.num(),
          f = a.num()
        return new $0(n + e * (f - n), 'num')
      }
    B.num = _0
    var x0 = ir,
      M0 = function (r, a, e) {
        return x0(r, a, e, 'hcg')
      }
    B.hcg = M0
    var C0 = ir,
      N0 = function (r, a, e) {
        return C0(r, a, e, 'hsi')
      }
    B.hsi = N0
    var F0 = ir,
      E0 = function (r, a, e) {
        return F0(r, a, e, 'hsl')
      }
    B.hsl = E0
    var A0 = ir,
      L0 = function (r, a, e) {
        return A0(r, a, e, 'hsv')
      }
    B.hsv = L0
    var R0 = m,
      z0 = function (r, a, e) {
        var n = r.oklab(),
          f = a.oklab()
        return new R0(
          n[0] + e * (f[0] - n[0]),
          n[1] + e * (f[1] - n[1]),
          n[2] + e * (f[2] - n[2]),
          'oklab',
        )
      }
    B.oklab = z0
    var P0 = ir,
      T0 = function (r, a, e) {
        return P0(r, a, e, 'oklch')
      }
    B.oklch = T0
    var Jr = m,
      G0 = g.clip_rgb,
      Qr = Math.pow,
      Kr = Math.sqrt,
      ra = Math.PI,
      Ce = Math.cos,
      Ne = Math.sin,
      I0 = Math.atan2,
      D0 = function (r, a, e) {
        a === void 0 && (a = 'lrgb'), e === void 0 && (e = null)
        var n = r.length
        e ||
          (e = Array.from(new Array(n)).map(function () {
            return 1
          }))
        var f =
          n /
          e.reduce(function (y, $) {
            return y + $
          })
        if (
          (e.forEach(function (y, $) {
            e[$] *= f
          }),
          (r = r.map(function (y) {
            return new Jr(y)
          })),
          a === 'lrgb')
        )
          return O0(r, e)
        for (var u = r.shift(), t = u.get(a), v = [], l = 0, o = 0, c = 0; c < t.length; c++)
          if (
            ((t[c] = (t[c] || 0) * e[0]),
            v.push(isNaN(t[c]) ? 0 : e[0]),
            a.charAt(c) === 'h' && !isNaN(t[c]))
          ) {
            var h = (t[c] / 180) * ra
            ;(l += Ce(h) * e[0]), (o += Ne(h) * e[0])
          }
        var i = u.alpha() * e[0]
        r.forEach(function (y, $) {
          var x = y.get(a)
          i += y.alpha() * e[$ + 1]
          for (var C = 0; C < t.length; C++)
            if (!isNaN(x[C]))
              if (((v[C] += e[$ + 1]), a.charAt(C) === 'h')) {
                var G = (x[C] / 180) * ra
                ;(l += Ce(G) * e[$ + 1]), (o += Ne(G) * e[$ + 1])
              } else t[C] += x[C] * e[$ + 1]
        })
        for (var d = 0; d < t.length; d++)
          if (a.charAt(d) === 'h') {
            for (var b = (I0(o / v[d], l / v[d]) / ra) * 180; b < 0; ) b += 360
            for (; b >= 360; ) b -= 360
            t[d] = b
          } else t[d] = t[d] / v[d]
        return (i /= n), new Jr(t, a).alpha(i > 0.99999 ? 1 : i, !0)
      },
      O0 = function (r, a) {
        for (var e = r.length, n = [0, 0, 0, 0], f = 0; f < r.length; f++) {
          var u = r[f],
            t = a[f] / e,
            v = u._rgb
          ;(n[0] += Qr(v[0], 2) * t),
            (n[1] += Qr(v[1], 2) * t),
            (n[2] += Qr(v[2], 2) * t),
            (n[3] += v[3] * t)
        }
        return (
          (n[0] = Kr(n[0])),
          (n[1] = Kr(n[1])),
          (n[2] = Kr(n[2])),
          n[3] > 0.9999999 && (n[3] = 1),
          new Jr(G0(n))
        )
      },
      H = L,
      sr = g.type,
      S0 = Math.pow,
      aa = function (r) {
        var a = 'rgb',
          e = H('#ccc'),
          n = 0,
          f = [0, 1],
          u = [],
          t = [0, 0],
          v = !1,
          l = [],
          o = !1,
          c = 0,
          h = 1,
          i = !1,
          d = {},
          b = !0,
          y = 1,
          $ = function (s) {
            if (
              ((s = s || ['#fff', '#000']),
              s &&
                sr(s) === 'string' &&
                H.brewer &&
                H.brewer[s.toLowerCase()] &&
                (s = H.brewer[s.toLowerCase()]),
              sr(s) === 'array')
            ) {
              s.length === 1 && (s = [s[0], s[0]]), (s = s.slice(0))
              for (var p = 0; p < s.length; p++) s[p] = H(s[p])
              u.length = 0
              for (var k = 0; k < s.length; k++) u.push(k / (s.length - 1))
            }
            return O(), (l = s)
          },
          x = function (s) {
            if (v != null) {
              for (var p = v.length - 1, k = 0; k < p && s >= v[k]; ) k++
              return k - 1
            }
            return 0
          },
          C = function (s) {
            return s
          },
          G = function (s) {
            return s
          },
          T = function (s, p) {
            var k, w
            if ((p == null && (p = !1), isNaN(s) || s === null)) return e
            if (p) w = s
            else if (v && v.length > 2) {
              var I = x(s)
              w = I / (v.length - 2)
            } else h !== c ? (w = (s - c) / (h - c)) : (w = 1)
            ;(w = G(w)),
              p || (w = C(w)),
              y !== 1 && (w = S0(w, y)),
              (w = t[0] + w * (1 - t[0] - t[1])),
              (w = Math.min(1, Math.max(0, w)))
            var A = Math.floor(w * 1e4)
            if (b && d[A]) k = d[A]
            else {
              if (sr(l) === 'array')
                for (var M = 0; M < u.length; M++) {
                  var N = u[M]
                  if (w <= N) {
                    k = l[M]
                    break
                  }
                  if (w >= N && M === u.length - 1) {
                    k = l[M]
                    break
                  }
                  if (w > N && w < u[M + 1]) {
                    ;(w = (w - N) / (u[M + 1] - N)), (k = H.interpolate(l[M], l[M + 1], w, a))
                    break
                  }
                }
              else sr(l) === 'function' && (k = l(w))
              b && (d[A] = k)
            }
            return k
          },
          O = function () {
            return (d = {})
          }
        $(r)
        var _ = function (s) {
          var p = H(T(s))
          return o && p[o] ? p[o]() : p
        }
        return (
          (_.classes = function (s) {
            if (s != null) {
              if (sr(s) === 'array') (v = s), (f = [s[0], s[s.length - 1]])
              else {
                var p = H.analyze(f)
                s === 0 ? (v = [p.min, p.max]) : (v = H.limits(p, 'e', s))
              }
              return _
            }
            return v
          }),
          (_.domain = function (s) {
            if (!arguments.length) return f
            ;(c = s[0]), (h = s[s.length - 1]), (u = [])
            var p = l.length
            if (s.length === p && c !== h)
              for (var k = 0, w = Array.from(s); k < w.length; k += 1) {
                var I = w[k]
                u.push((I - c) / (h - c))
              }
            else {
              for (var A = 0; A < p; A++) u.push(A / (p - 1))
              if (s.length > 2) {
                var M = s.map(function (F, E) {
                    return E / (s.length - 1)
                  }),
                  N = s.map(function (F) {
                    return (F - c) / (h - c)
                  })
                N.every(function (F, E) {
                  return M[E] === F
                }) ||
                  (G = function (F) {
                    if (F <= 0 || F >= 1) return F
                    for (var E = 0; F >= N[E + 1]; ) E++
                    var W = (F - N[E]) / (N[E + 1] - N[E]),
                      J = M[E] + W * (M[E + 1] - M[E])
                    return J
                  })
              }
            }
            return (f = [c, h]), _
          }),
          (_.mode = function (s) {
            return arguments.length ? ((a = s), O(), _) : a
          }),
          (_.range = function (s, p) {
            return $(s), _
          }),
          (_.out = function (s) {
            return (o = s), _
          }),
          (_.spread = function (s) {
            return arguments.length ? ((n = s), _) : n
          }),
          (_.correctLightness = function (s) {
            return (
              s == null && (s = !0),
              (i = s),
              O(),
              i
                ? (C = function (p) {
                    for (
                      var k = T(0, !0).lab()[0],
                        w = T(1, !0).lab()[0],
                        I = k > w,
                        A = T(p, !0).lab()[0],
                        M = k + (w - k) * p,
                        N = A - M,
                        F = 0,
                        E = 1,
                        W = 20;
                      Math.abs(N) > 0.01 && W-- > 0;

                    )
                      (function () {
                        return (
                          I && (N *= -1),
                          N < 0 ? ((F = p), (p += (E - p) * 0.5)) : ((E = p), (p += (F - p) * 0.5)),
                          (A = T(p, !0).lab()[0]),
                          (N = A - M)
                        )
                      })()
                    return p
                  })
                : (C = function (p) {
                    return p
                  }),
              _
            )
          }),
          (_.padding = function (s) {
            return s != null ? (sr(s) === 'number' && (s = [s, s]), (t = s), _) : t
          }),
          (_.colors = function (s, p) {
            arguments.length < 2 && (p = 'hex')
            var k = []
            if (arguments.length === 0) k = l.slice(0)
            else if (s === 1) k = [_(0.5)]
            else if (s > 1) {
              var w = f[0],
                I = f[1] - w
              k = q0(0, s, !1).map(function (E) {
                return _(w + (E / (s - 1)) * I)
              })
            } else {
              r = []
              var A = []
              if (v && v.length > 2)
                for (var M = 1, N = v.length, F = 1 <= N; F ? M < N : M > N; F ? M++ : M--)
                  A.push((v[M - 1] + v[M]) * 0.5)
              else A = f
              k = A.map(function (E) {
                return _(E)
              })
            }
            return (
              H[p] &&
                (k = k.map(function (E) {
                  return E[p]()
                })),
              k
            )
          }),
          (_.cache = function (s) {
            return s != null ? ((b = s), _) : b
          }),
          (_.gamma = function (s) {
            return s != null ? ((y = s), _) : y
          }),
          (_.nodata = function (s) {
            return s != null ? ((e = H(s)), _) : e
          }),
          _
        )
      }
    function q0(r, a, e) {
      for (
        var n = [], f = r < a, u = e ? (f ? a + 1 : a - 1) : a, t = r;
        f ? t < u : t > u;
        f ? t++ : t--
      )
        n.push(t)
      return n
    }
    var pr = m,
      B0 = aa,
      Y0 = function (r) {
        for (var a = [1, 1], e = 1; e < r; e++) {
          for (var n = [1], f = 1; f <= a.length; f++) n[f] = (a[f] || 0) + a[f - 1]
          a = n
        }
        return a
      },
      H0 = function (r) {
        var a, e, n, f, u, t, v
        if (
          ((r = r.map(function (i) {
            return new pr(i)
          })),
          r.length === 2)
        )
          (a = r.map(function (i) {
            return i.lab()
          })),
            (u = a[0]),
            (t = a[1]),
            (f = function (i) {
              var d = [0, 1, 2].map(function (b) {
                return u[b] + i * (t[b] - u[b])
              })
              return new pr(d, 'lab')
            })
        else if (r.length === 3)
          (e = r.map(function (i) {
            return i.lab()
          })),
            (u = e[0]),
            (t = e[1]),
            (v = e[2]),
            (f = function (i) {
              var d = [0, 1, 2].map(function (b) {
                return (1 - i) * (1 - i) * u[b] + 2 * (1 - i) * i * t[b] + i * i * v[b]
              })
              return new pr(d, 'lab')
            })
        else if (r.length === 4) {
          var l
          ;(n = r.map(function (i) {
            return i.lab()
          })),
            (u = n[0]),
            (t = n[1]),
            (v = n[2]),
            (l = n[3]),
            (f = function (i) {
              var d = [0, 1, 2].map(function (b) {
                return (
                  (1 - i) * (1 - i) * (1 - i) * u[b] +
                  3 * (1 - i) * (1 - i) * i * t[b] +
                  3 * (1 - i) * i * i * v[b] +
                  i * i * i * l[b]
                )
              })
              return new pr(d, 'lab')
            })
        } else if (r.length >= 5) {
          var o, c, h
          ;(o = r.map(function (i) {
            return i.lab()
          })),
            (h = r.length - 1),
            (c = Y0(h)),
            (f = function (i) {
              var d = 1 - i,
                b = [0, 1, 2].map(function (y) {
                  return o.reduce(function ($, x, C) {
                    return $ + c[C] * Math.pow(d, h - C) * Math.pow(i, C) * x[y]
                  }, 0)
                })
              return new pr(b, 'lab')
            })
        } else throw new RangeError('No point in running bezier with only one color.')
        return f
      },
      X0 = function (r) {
        var a = H0(r)
        return (
          (a.scale = function () {
            return B0(a)
          }),
          a
        )
      },
      ea = L,
      X = function (r, a, e) {
        if (!X[e]) throw new Error('unknown blend mode ' + e)
        return X[e](r, a)
      },
      Z = function (r) {
        return function (a, e) {
          var n = ea(e).rgb(),
            f = ea(a).rgb()
          return ea.rgb(r(n, f))
        }
      },
      j = function (r) {
        return function (a, e) {
          var n = []
          return (n[0] = r(a[0], e[0])), (n[1] = r(a[1], e[1])), (n[2] = r(a[2], e[2])), n
        }
      },
      W0 = function (r) {
        return r
      },
      U0 = function (r, a) {
        return (r * a) / 255
      },
      V0 = function (r, a) {
        return r > a ? a : r
      },
      Z0 = function (r, a) {
        return r > a ? r : a
      },
      j0 = function (r, a) {
        return 255 * (1 - (1 - r / 255) * (1 - a / 255))
      },
      J0 = function (r, a) {
        return a < 128 ? (2 * r * a) / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - a / 255))
      },
      Q0 = function (r, a) {
        return 255 * (1 - (1 - a / 255) / (r / 255))
      },
      K0 = function (r, a) {
        return r === 255 ? 255 : ((r = (255 * (a / 255)) / (1 - r / 255)), r > 255 ? 255 : r)
      }
    ;(X.normal = Z(j(W0))),
      (X.multiply = Z(j(U0))),
      (X.screen = Z(j(j0))),
      (X.overlay = Z(j(J0))),
      (X.darken = Z(j(V0))),
      (X.lighten = Z(j(Z0))),
      (X.dodge = Z(j(K0))),
      (X.burn = Z(j(Q0)))
    for (
      var ru = X,
        na = g.type,
        au = g.clip_rgb,
        eu = g.TWOPI,
        nu = Math.pow,
        tu = Math.sin,
        fu = Math.cos,
        Fe = L,
        uu = function (r, a, e, n, f) {
          r === void 0 && (r = 300),
            a === void 0 && (a = -1.5),
            e === void 0 && (e = 1),
            n === void 0 && (n = 1),
            f === void 0 && (f = [0, 1])
          var u = 0,
            t
          na(f) === 'array' ? (t = f[1] - f[0]) : ((t = 0), (f = [f, f]))
          var v = function (l) {
            var o = eu * ((r + 120) / 360 + a * l),
              c = nu(f[0] + t * l, n),
              h = u !== 0 ? e[0] + l * u : e,
              i = (h * c * (1 - c)) / 2,
              d = fu(o),
              b = tu(o),
              y = c + i * (-0.14861 * d + 1.78277 * b),
              $ = c + i * (-0.29227 * d - 0.90649 * b),
              x = c + i * (1.97294 * d)
            return Fe(au([y * 255, $ * 255, x * 255, 1]))
          }
          return (
            (v.start = function (l) {
              return l == null ? r : ((r = l), v)
            }),
            (v.rotations = function (l) {
              return l == null ? a : ((a = l), v)
            }),
            (v.gamma = function (l) {
              return l == null ? n : ((n = l), v)
            }),
            (v.hue = function (l) {
              return l == null
                ? e
                : ((e = l),
                  na(e) === 'array' ? ((u = e[1] - e[0]), u === 0 && (e = e[1])) : (u = 0),
                  v)
            }),
            (v.lightness = function (l) {
              return l == null
                ? f
                : (na(l) === 'array' ? ((f = l), (t = l[1] - l[0])) : ((f = [l, l]), (t = 0)), v)
            }),
            (v.scale = function () {
              return Fe.scale(v)
            }),
            v.hue(e),
            v
          )
        },
        vu = m,
        lu = '0123456789abcdef',
        ou = Math.floor,
        cu = Math.random,
        iu = function () {
          for (var r = '#', a = 0; a < 6; a++) r += lu.charAt(ou(cu() * 16))
          return new vu(r, 'hex')
        },
        ta = wr,
        Ee = Math.log,
        su = Math.pow,
        gu = Math.floor,
        hu = Math.abs,
        Ae = function (r, a) {
          a === void 0 && (a = null)
          var e = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            ta(r) === 'object' && (r = Object.values(r)),
            r.forEach(function (n) {
              a && ta(n) === 'object' && (n = n[a]),
                n != null &&
                  !isNaN(n) &&
                  (e.values.push(n),
                  (e.sum += n),
                  n < e.min && (e.min = n),
                  n > e.max && (e.max = n),
                  (e.count += 1))
            }),
            (e.domain = [e.min, e.max]),
            (e.limits = function (n, f) {
              return Le(e, n, f)
            }),
            e
          )
        },
        Le = function (r, a, e) {
          a === void 0 && (a = 'equal'), e === void 0 && (e = 7), ta(r) == 'array' && (r = Ae(r))
          var n = r.min,
            f = r.max,
            u = r.values.sort(function (ua, va) {
              return ua - va
            })
          if (e === 1) return [n, f]
          var t = []
          if ((a.substr(0, 1) === 'c' && (t.push(n), t.push(f)), a.substr(0, 1) === 'e')) {
            t.push(n)
            for (var v = 1; v < e; v++) t.push(n + (v / e) * (f - n))
            t.push(f)
          } else if (a.substr(0, 1) === 'l') {
            if (n <= 0) throw new Error('Logarithmic scales are only possible for values > 0')
            var l = Math.LOG10E * Ee(n),
              o = Math.LOG10E * Ee(f)
            t.push(n)
            for (var c = 1; c < e; c++) t.push(su(10, l + (c / e) * (o - l)))
            t.push(f)
          } else if (a.substr(0, 1) === 'q') {
            t.push(n)
            for (var h = 1; h < e; h++) {
              var i = ((u.length - 1) * h) / e,
                d = gu(i)
              if (d === i) t.push(u[d])
              else {
                var b = i - d
                t.push(u[d] * (1 - b) + u[d + 1] * b)
              }
            }
            t.push(f)
          } else if (a.substr(0, 1) === 'k') {
            var y,
              $ = u.length,
              x = new Array($),
              C = new Array(e),
              G = !0,
              T = 0,
              O = null
            ;(O = []), O.push(n)
            for (var _ = 1; _ < e; _++) O.push(n + (_ / e) * (f - n))
            for (O.push(f); G; ) {
              for (var s = 0; s < e; s++) C[s] = 0
              for (var p = 0; p < $; p++)
                for (var k = u[p], w = Number.MAX_VALUE, I = void 0, A = 0; A < e; A++) {
                  var M = hu(O[A] - k)
                  M < w && ((w = M), (I = A)), C[I]++, (x[p] = I)
                }
              for (var N = new Array(e), F = 0; F < e; F++) N[F] = null
              for (var E = 0; E < $; E++) (y = x[E]), N[y] === null ? (N[y] = u[E]) : (N[y] += u[E])
              for (var W = 0; W < e; W++) N[W] *= 1 / C[W]
              G = !1
              for (var J = 0; J < e; J++)
                if (N[J] !== O[J]) {
                  G = !0
                  break
                }
              ;(O = N), T++, T > 200 && (G = !1)
            }
            for (var Q = {}, gr = 0; gr < e; gr++) Q[gr] = []
            for (var hr = 0; hr < $; hr++) (y = x[hr]), Q[y].push(u[hr])
            for (var V = [], er = 0; er < e; er++) V.push(Q[er][0]), V.push(Q[er][Q[er].length - 1])
            ;(V = V.sort(function (ua, va) {
              return ua - va
            })),
              t.push(V[0])
            for (var mr = 1; mr < V.length; mr += 2) {
              var nr = V[mr]
              !isNaN(nr) && t.indexOf(nr) === -1 && t.push(nr)
            }
          }
          return t
        },
        Re = { analyze: Ae, limits: Le },
        ze = m,
        bu = function (r, a) {
          ;(r = new ze(r)), (a = new ze(a))
          var e = r.luminance(),
            n = a.luminance()
          return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05)
        },
        Pe = m,
        U = Math.sqrt,
        R = Math.pow,
        du = Math.min,
        pu = Math.max,
        Te = Math.atan2,
        Ge = Math.abs,
        Er = Math.cos,
        Ie = Math.sin,
        mu = Math.exp,
        De = Math.PI,
        yu = function (r, a, e, n, f) {
          e === void 0 && (e = 1), n === void 0 && (n = 1), f === void 0 && (f = 1)
          var u = function (nr) {
              return (360 * nr) / (2 * De)
            },
            t = function (nr) {
              return (2 * De * nr) / 360
            }
          ;(r = new Pe(r)), (a = new Pe(a))
          var v = Array.from(r.lab()),
            l = v[0],
            o = v[1],
            c = v[2],
            h = Array.from(a.lab()),
            i = h[0],
            d = h[1],
            b = h[2],
            y = (l + i) / 2,
            $ = U(R(o, 2) + R(c, 2)),
            x = U(R(d, 2) + R(b, 2)),
            C = ($ + x) / 2,
            G = 0.5 * (1 - U(R(C, 7) / (R(C, 7) + R(25, 7)))),
            T = o * (1 + G),
            O = d * (1 + G),
            _ = U(R(T, 2) + R(c, 2)),
            s = U(R(O, 2) + R(b, 2)),
            p = (_ + s) / 2,
            k = u(Te(c, T)),
            w = u(Te(b, O)),
            I = k >= 0 ? k : k + 360,
            A = w >= 0 ? w : w + 360,
            M = Ge(I - A) > 180 ? (I + A + 360) / 2 : (I + A) / 2,
            N =
              1 -
              0.17 * Er(t(M - 30)) +
              0.24 * Er(t(2 * M)) +
              0.32 * Er(t(3 * M + 6)) -
              0.2 * Er(t(4 * M - 63)),
            F = A - I
          ;(F = Ge(F) <= 180 ? F : A <= I ? F + 360 : F - 360), (F = 2 * U(_ * s) * Ie(t(F) / 2))
          var E = i - l,
            W = s - _,
            J = 1 + (0.015 * R(y - 50, 2)) / U(20 + R(y - 50, 2)),
            Q = 1 + 0.045 * p,
            gr = 1 + 0.015 * p * N,
            hr = 30 * mu(-R((M - 275) / 25, 2)),
            V = 2 * U(R(p, 7) / (R(p, 7) + R(25, 7))),
            er = -V * Ie(2 * t(hr)),
            mr = U(
              R(E / (e * J), 2) +
                R(W / (n * Q), 2) +
                R(F / (f * gr), 2) +
                er * (W / (n * Q)) * (F / (f * gr)),
            )
          return pu(0, du(100, mr))
        },
        Oe = m,
        wu = function (r, a, e) {
          e === void 0 && (e = 'lab'), (r = new Oe(r)), (a = new Oe(a))
          var n = r.get(e),
            f = a.get(e),
            u = 0
          for (var t in n) {
            var v = (n[t] || 0) - (f[t] || 0)
            u += v * v
          }
          return Math.sqrt(u)
        },
        ku = m,
        $u = function () {
          for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a]
          try {
            return new (Function.prototype.bind.apply(ku, [null].concat(r)))(), !0
          } catch {
            return !1
          }
        },
        Se = L,
        qe = aa,
        _u = {
          cool: function () {
            return qe([Se.hsl(180, 1, 0.9), Se.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return qe(['#000', '#f00', '#ff0', '#fff']).mode('rgb')
          },
        },
        Ar = {
          OrRd: [
            '#fff7ec',
            '#fee8c8',
            '#fdd49e',
            '#fdbb84',
            '#fc8d59',
            '#ef6548',
            '#d7301f',
            '#b30000',
            '#7f0000',
          ],
          PuBu: [
            '#fff7fb',
            '#ece7f2',
            '#d0d1e6',
            '#a6bddb',
            '#74a9cf',
            '#3690c0',
            '#0570b0',
            '#045a8d',
            '#023858',
          ],
          BuPu: [
            '#f7fcfd',
            '#e0ecf4',
            '#bfd3e6',
            '#9ebcda',
            '#8c96c6',
            '#8c6bb1',
            '#88419d',
            '#810f7c',
            '#4d004b',
          ],
          Oranges: [
            '#fff5eb',
            '#fee6ce',
            '#fdd0a2',
            '#fdae6b',
            '#fd8d3c',
            '#f16913',
            '#d94801',
            '#a63603',
            '#7f2704',
          ],
          BuGn: [
            '#f7fcfd',
            '#e5f5f9',
            '#ccece6',
            '#99d8c9',
            '#66c2a4',
            '#41ae76',
            '#238b45',
            '#006d2c',
            '#00441b',
          ],
          YlOrBr: [
            '#ffffe5',
            '#fff7bc',
            '#fee391',
            '#fec44f',
            '#fe9929',
            '#ec7014',
            '#cc4c02',
            '#993404',
            '#662506',
          ],
          YlGn: [
            '#ffffe5',
            '#f7fcb9',
            '#d9f0a3',
            '#addd8e',
            '#78c679',
            '#41ab5d',
            '#238443',
            '#006837',
            '#004529',
          ],
          Reds: [
            '#fff5f0',
            '#fee0d2',
            '#fcbba1',
            '#fc9272',
            '#fb6a4a',
            '#ef3b2c',
            '#cb181d',
            '#a50f15',
            '#67000d',
          ],
          RdPu: [
            '#fff7f3',
            '#fde0dd',
            '#fcc5c0',
            '#fa9fb5',
            '#f768a1',
            '#dd3497',
            '#ae017e',
            '#7a0177',
            '#49006a',
          ],
          Greens: [
            '#f7fcf5',
            '#e5f5e0',
            '#c7e9c0',
            '#a1d99b',
            '#74c476',
            '#41ab5d',
            '#238b45',
            '#006d2c',
            '#00441b',
          ],
          YlGnBu: [
            '#ffffd9',
            '#edf8b1',
            '#c7e9b4',
            '#7fcdbb',
            '#41b6c4',
            '#1d91c0',
            '#225ea8',
            '#253494',
            '#081d58',
          ],
          Purples: [
            '#fcfbfd',
            '#efedf5',
            '#dadaeb',
            '#bcbddc',
            '#9e9ac8',
            '#807dba',
            '#6a51a3',
            '#54278f',
            '#3f007d',
          ],
          GnBu: [
            '#f7fcf0',
            '#e0f3db',
            '#ccebc5',
            '#a8ddb5',
            '#7bccc4',
            '#4eb3d3',
            '#2b8cbe',
            '#0868ac',
            '#084081',
          ],
          Greys: [
            '#ffffff',
            '#f0f0f0',
            '#d9d9d9',
            '#bdbdbd',
            '#969696',
            '#737373',
            '#525252',
            '#252525',
            '#000000',
          ],
          YlOrRd: [
            '#ffffcc',
            '#ffeda0',
            '#fed976',
            '#feb24c',
            '#fd8d3c',
            '#fc4e2a',
            '#e31a1c',
            '#bd0026',
            '#800026',
          ],
          PuRd: [
            '#f7f4f9',
            '#e7e1ef',
            '#d4b9da',
            '#c994c7',
            '#df65b0',
            '#e7298a',
            '#ce1256',
            '#980043',
            '#67001f',
          ],
          Blues: [
            '#f7fbff',
            '#deebf7',
            '#c6dbef',
            '#9ecae1',
            '#6baed6',
            '#4292c6',
            '#2171b5',
            '#08519c',
            '#08306b',
          ],
          PuBuGn: [
            '#fff7fb',
            '#ece2f0',
            '#d0d1e6',
            '#a6bddb',
            '#67a9cf',
            '#3690c0',
            '#02818a',
            '#016c59',
            '#014636',
          ],
          Viridis: [
            '#440154',
            '#482777',
            '#3f4a8a',
            '#31678e',
            '#26838f',
            '#1f9d8a',
            '#6cce5a',
            '#b6de2b',
            '#fee825',
          ],
          Spectral: [
            '#9e0142',
            '#d53e4f',
            '#f46d43',
            '#fdae61',
            '#fee08b',
            '#ffffbf',
            '#e6f598',
            '#abdda4',
            '#66c2a5',
            '#3288bd',
            '#5e4fa2',
          ],
          RdYlGn: [
            '#a50026',
            '#d73027',
            '#f46d43',
            '#fdae61',
            '#fee08b',
            '#ffffbf',
            '#d9ef8b',
            '#a6d96a',
            '#66bd63',
            '#1a9850',
            '#006837',
          ],
          RdBu: [
            '#67001f',
            '#b2182b',
            '#d6604d',
            '#f4a582',
            '#fddbc7',
            '#f7f7f7',
            '#d1e5f0',
            '#92c5de',
            '#4393c3',
            '#2166ac',
            '#053061',
          ],
          PiYG: [
            '#8e0152',
            '#c51b7d',
            '#de77ae',
            '#f1b6da',
            '#fde0ef',
            '#f7f7f7',
            '#e6f5d0',
            '#b8e186',
            '#7fbc41',
            '#4d9221',
            '#276419',
          ],
          PRGn: [
            '#40004b',
            '#762a83',
            '#9970ab',
            '#c2a5cf',
            '#e7d4e8',
            '#f7f7f7',
            '#d9f0d3',
            '#a6dba0',
            '#5aae61',
            '#1b7837',
            '#00441b',
          ],
          RdYlBu: [
            '#a50026',
            '#d73027',
            '#f46d43',
            '#fdae61',
            '#fee090',
            '#ffffbf',
            '#e0f3f8',
            '#abd9e9',
            '#74add1',
            '#4575b4',
            '#313695',
          ],
          BrBG: [
            '#543005',
            '#8c510a',
            '#bf812d',
            '#dfc27d',
            '#f6e8c3',
            '#f5f5f5',
            '#c7eae5',
            '#80cdc1',
            '#35978f',
            '#01665e',
            '#003c30',
          ],
          RdGy: [
            '#67001f',
            '#b2182b',
            '#d6604d',
            '#f4a582',
            '#fddbc7',
            '#ffffff',
            '#e0e0e0',
            '#bababa',
            '#878787',
            '#4d4d4d',
            '#1a1a1a',
          ],
          PuOr: [
            '#7f3b08',
            '#b35806',
            '#e08214',
            '#fdb863',
            '#fee0b6',
            '#f7f7f7',
            '#d8daeb',
            '#b2abd2',
            '#8073ac',
            '#542788',
            '#2d004b',
          ],
          Set2: [
            '#66c2a5',
            '#fc8d62',
            '#8da0cb',
            '#e78ac3',
            '#a6d854',
            '#ffd92f',
            '#e5c494',
            '#b3b3b3',
          ],
          Accent: [
            '#7fc97f',
            '#beaed4',
            '#fdc086',
            '#ffff99',
            '#386cb0',
            '#f0027f',
            '#bf5b17',
            '#666666',
          ],
          Set1: [
            '#e41a1c',
            '#377eb8',
            '#4daf4a',
            '#984ea3',
            '#ff7f00',
            '#ffff33',
            '#a65628',
            '#f781bf',
            '#999999',
          ],
          Set3: [
            '#8dd3c7',
            '#ffffb3',
            '#bebada',
            '#fb8072',
            '#80b1d3',
            '#fdb462',
            '#b3de69',
            '#fccde5',
            '#d9d9d9',
            '#bc80bd',
            '#ccebc5',
            '#ffed6f',
          ],
          Dark2: [
            '#1b9e77',
            '#d95f02',
            '#7570b3',
            '#e7298a',
            '#66a61e',
            '#e6ab02',
            '#a6761d',
            '#666666',
          ],
          Paired: [
            '#a6cee3',
            '#1f78b4',
            '#b2df8a',
            '#33a02c',
            '#fb9a99',
            '#e31a1c',
            '#fdbf6f',
            '#ff7f00',
            '#cab2d6',
            '#6a3d9a',
            '#ffff99',
            '#b15928',
          ],
          Pastel2: [
            '#b3e2cd',
            '#fdcdac',
            '#cbd5e8',
            '#f4cae4',
            '#e6f5c9',
            '#fff2ae',
            '#f1e2cc',
            '#cccccc',
          ],
          Pastel1: [
            '#fbb4ae',
            '#b3cde3',
            '#ccebc5',
            '#decbe4',
            '#fed9a6',
            '#ffffcc',
            '#e5d8bd',
            '#fddaec',
            '#f2f2f2',
          ],
        },
        fa = 0,
        Be = Object.keys(Ar);
      fa < Be.length;
      fa += 1
    ) {
      var Ye = Be[fa]
      Ar[Ye.toLowerCase()] = Ar[Ye]
    }
    var xu = Ar,
      P = L
    ;(P.average = D0),
      (P.bezier = X0),
      (P.blend = ru),
      (P.cubehelix = uu),
      (P.mix = P.interpolate = ye),
      (P.random = iu),
      (P.scale = aa),
      (P.analyze = Re.analyze),
      (P.contrast = bu),
      (P.deltaE = yu),
      (P.distance = wu),
      (P.limits = Re.limits),
      (P.valid = $u),
      (P.scales = _u),
      (P.colors = ae),
      (P.brewer = xu)
    var Mu = P
    return Mu
  })
})(Xe)
var Au = Xe.exports
const S = Nu(Au)
function Lu() {
  const D = (Math.random() * Y.accent.length) | 0
  return Y.accent[D]
}
function q(D) {
  return D.rgb().join(' ')
}
function We() {
  const D = Lu(),
    K = {
      light: S.mix('rgb(250,250,250)', D.light, 0.05, 'rgb'),
      dark: S.mix('rgb(0,2,18)', D.dark, 0.12, 'rgb'),
    },
    tr = document.createElement('style')
  ;(tr.textContent = `html {
  --color-accent: ${q(S(D.light))};
  --color-bg-root: ${q(K.light)};
  --color-bg-primary: ${q(S(Y.bg.primary.light))};
  --color-bg-secondary: ${q(S(Y.bg.secondary.light))};
  --color-text-primary: ${q(S(Y.text.primary.light))};
  --color-text-secondary: ${q(S(Y.text.secondary.light))};
  --color-border-primary: ${q(S(Y.border.primary.light))};
}
[data-theme='dark'] {
  --color-accent: ${q(S(D.dark))};
  --color-bg-root: ${q(K.dark)};
  --color-bg-primary: ${q(S(Y.bg.primary.dark))};
  --color-bg-secondary: ${q(S(Y.bg.secondary.dark))};
  --color-text-primary: ${q(S(Y.text.primary.dark))};
  --color-text-secondary: ${q(S(Y.text.secondary.dark))};
  --color-border-primary: ${q(S(Y.border.primary.dark))};
}`),
    document.head.appendChild(tr)
}
We()
document.addEventListener('swup:content:replace', We)
const Ru = '0.0.1'
console.log(
  `%c Gyoza ${Ru} %c https://gyoza.lxchapu.com `,
  'color: #fff; margin: 1em 0; padding: 5px 0; background: #ef8f99;',
  'margin: 1em 0; padding: 5px 0; background: #efefef;',
)
const zu = ['4-4', '5-12', '7-7', '9-18', '12-13']
function Pu() {
  const D = new Date(),
    K = `${D.getMonth() + 1}-${D.getDate()}`
  return zu.includes(K)
}
function Tu() {
  const D = Fu(),
    K = Eu()
  D === 'system' ? He(K) : He(D), Pu() && document.documentElement.classList.add('gray')
}
Tu()
