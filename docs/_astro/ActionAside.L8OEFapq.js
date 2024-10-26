import { j as g } from './jsx-runtime.CvXbGX33.js'
import { s as x, a as z } from './config.CbhC5vfi.js'
import { e as y } from './index.BFw_thZa.js'
import { m as D, a as T } from './metaInfo.C8JaPqGR.js'
import { c as U } from './clsx.B-dksMZM.js'
import { B as j } from './react-toastify.esm.CfDUXWLA.js'
import { u as I } from './hooks.BbANkhPI.js'
import './context.DnuEp7hM.js'
import { m as S } from './motion.UigYBGvC.js'
import { u as b } from './react.BMyoJHg8.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './SVGVisualElement.De6LOhF_.js'
var k = Object.defineProperty,
  P = Object.getOwnPropertySymbols,
  L = Object.prototype.hasOwnProperty,
  O = Object.prototype.propertyIsEnumerable,
  v = (c, r, l) =>
    r in c ? k(c, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (c[r] = l),
  $ = (c, r) => {
    for (var l in r || (r = {})) L.call(r, l) && v(c, l, r[l])
    if (P) for (var l of P(r)) O.call(r, l) && v(c, l, r[l])
    return c
  },
  Q = (c, r) => {
    var l = {}
    for (var i in c) L.call(c, i) && r.indexOf(i) < 0 && (l[i] = c[i])
    if (c != null && P) for (var i of P(c)) r.indexOf(i) < 0 && O.call(c, i) && (l[i] = c[i])
    return l
  }
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var N
;((c) => {
  const r = class {
    constructor(t, e, o, n) {
      if (
        ((this.version = t),
        (this.errorCorrectionLevel = e),
        (this.modules = []),
        (this.isFunction = []),
        t < r.MIN_VERSION || t > r.MAX_VERSION)
      )
        throw new RangeError('Version value out of range')
      if (n < -1 || n > 7) throw new RangeError('Mask value out of range')
      this.size = t * 4 + 17
      let s = []
      for (let a = 0; a < this.size; a++) s.push(!1)
      for (let a = 0; a < this.size; a++)
        this.modules.push(s.slice()), this.isFunction.push(s.slice())
      this.drawFunctionPatterns()
      const h = this.addEccAndInterleave(o)
      if ((this.drawCodewords(h), n == -1)) {
        let a = 1e9
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m)
          const f = this.getPenaltyScore()
          f < a && ((n = m), (a = f)), this.applyMask(m)
        }
      }
      u(0 <= n && n <= 7),
        (this.mask = n),
        this.applyMask(n),
        this.drawFormatBits(n),
        (this.isFunction = [])
    }
    static encodeText(t, e) {
      const o = c.QrSegment.makeSegments(t)
      return r.encodeSegments(o, e)
    }
    static encodeBinary(t, e) {
      const o = c.QrSegment.makeBytes(t)
      return r.encodeSegments([o], e)
    }
    static encodeSegments(t, e, o = 1, n = 40, s = -1, h = !0) {
      if (!(r.MIN_VERSION <= o && o <= n && n <= r.MAX_VERSION) || s < -1 || s > 7)
        throw new RangeError('Invalid value')
      let a, m
      for (a = o; ; a++) {
        const E = r.getNumDataCodewords(a, e) * 8,
          w = C.getTotalBits(t, a)
        if (w <= E) {
          m = w
          break
        }
        if (a >= n) throw new RangeError('Data too long')
      }
      for (const E of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH])
        h && m <= r.getNumDataCodewords(a, E) * 8 && (e = E)
      let f = []
      for (const E of t) {
        i(E.mode.modeBits, 4, f), i(E.numChars, E.mode.numCharCountBits(a), f)
        for (const w of E.getData()) f.push(w)
      }
      u(f.length == m)
      const A = r.getNumDataCodewords(a, e) * 8
      u(f.length <= A),
        i(0, Math.min(4, A - f.length), f),
        i(0, (8 - (f.length % 8)) % 8, f),
        u(f.length % 8 == 0)
      for (let E = 236; f.length < A; E ^= 253) i(E, 8, f)
      let M = []
      for (; M.length * 8 < f.length; ) M.push(0)
      return f.forEach((E, w) => (M[w >>> 3] |= E << (7 - (w & 7)))), new r(a, e, M, s)
    }
    getModule(t, e) {
      return 0 <= t && t < this.size && 0 <= e && e < this.size && this.modules[e][t]
    }
    getModules() {
      return this.modules
    }
    drawFunctionPatterns() {
      for (let o = 0; o < this.size; o++)
        this.setFunctionModule(6, o, o % 2 == 0), this.setFunctionModule(o, 6, o % 2 == 0)
      this.drawFinderPattern(3, 3),
        this.drawFinderPattern(this.size - 4, 3),
        this.drawFinderPattern(3, this.size - 4)
      const t = this.getAlignmentPatternPositions(),
        e = t.length
      for (let o = 0; o < e; o++)
        for (let n = 0; n < e; n++)
          (o == 0 && n == 0) ||
            (o == 0 && n == e - 1) ||
            (o == e - 1 && n == 0) ||
            this.drawAlignmentPattern(t[o], t[n])
      this.drawFormatBits(0), this.drawVersion()
    }
    drawFormatBits(t) {
      const e = (this.errorCorrectionLevel.formatBits << 3) | t
      let o = e
      for (let s = 0; s < 10; s++) o = (o << 1) ^ ((o >>> 9) * 1335)
      const n = ((e << 10) | o) ^ 21522
      u(n >>> 15 == 0)
      for (let s = 0; s <= 5; s++) this.setFunctionModule(8, s, p(n, s))
      this.setFunctionModule(8, 7, p(n, 6)),
        this.setFunctionModule(8, 8, p(n, 7)),
        this.setFunctionModule(7, 8, p(n, 8))
      for (let s = 9; s < 15; s++) this.setFunctionModule(14 - s, 8, p(n, s))
      for (let s = 0; s < 8; s++) this.setFunctionModule(this.size - 1 - s, 8, p(n, s))
      for (let s = 8; s < 15; s++) this.setFunctionModule(8, this.size - 15 + s, p(n, s))
      this.setFunctionModule(8, this.size - 8, !0)
    }
    drawVersion() {
      if (this.version < 7) return
      let t = this.version
      for (let o = 0; o < 12; o++) t = (t << 1) ^ ((t >>> 11) * 7973)
      const e = (this.version << 12) | t
      u(e >>> 18 == 0)
      for (let o = 0; o < 18; o++) {
        const n = p(e, o),
          s = this.size - 11 + (o % 3),
          h = Math.floor(o / 3)
        this.setFunctionModule(s, h, n), this.setFunctionModule(h, s, n)
      }
    }
    drawFinderPattern(t, e) {
      for (let o = -4; o <= 4; o++)
        for (let n = -4; n <= 4; n++) {
          const s = Math.max(Math.abs(n), Math.abs(o)),
            h = t + n,
            a = e + o
          0 <= h &&
            h < this.size &&
            0 <= a &&
            a < this.size &&
            this.setFunctionModule(h, a, s != 2 && s != 4)
        }
    }
    drawAlignmentPattern(t, e) {
      for (let o = -2; o <= 2; o++)
        for (let n = -2; n <= 2; n++)
          this.setFunctionModule(t + n, e + o, Math.max(Math.abs(n), Math.abs(o)) != 1)
    }
    setFunctionModule(t, e, o) {
      ;(this.modules[e][t] = o), (this.isFunction[e][t] = !0)
    }
    addEccAndInterleave(t) {
      const e = this.version,
        o = this.errorCorrectionLevel
      if (t.length != r.getNumDataCodewords(e, o)) throw new RangeError('Invalid argument')
      const n = r.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][e],
        s = r.ECC_CODEWORDS_PER_BLOCK[o.ordinal][e],
        h = Math.floor(r.getNumRawDataModules(e) / 8),
        a = n - (h % n),
        m = Math.floor(h / n)
      let f = []
      const A = r.reedSolomonComputeDivisor(s)
      for (let E = 0, w = 0; E < n; E++) {
        let R = t.slice(w, w + m - s + (E < a ? 0 : 1))
        w += R.length
        const F = r.reedSolomonComputeRemainder(R, A)
        E < a && R.push(0), f.push(R.concat(F))
      }
      let M = []
      for (let E = 0; E < f[0].length; E++)
        f.forEach((w, R) => {
          ;(E != m - s || R >= a) && M.push(w[E])
        })
      return u(M.length == h), M
    }
    drawCodewords(t) {
      if (t.length != Math.floor(r.getNumRawDataModules(this.version) / 8))
        throw new RangeError('Invalid argument')
      let e = 0
      for (let o = this.size - 1; o >= 1; o -= 2) {
        o == 6 && (o = 5)
        for (let n = 0; n < this.size; n++)
          for (let s = 0; s < 2; s++) {
            const h = o - s,
              m = ((o + 1) & 2) == 0 ? this.size - 1 - n : n
            !this.isFunction[m][h] &&
              e < t.length * 8 &&
              ((this.modules[m][h] = p(t[e >>> 3], 7 - (e & 7))), e++)
          }
      }
      u(e == t.length * 8)
    }
    applyMask(t) {
      if (t < 0 || t > 7) throw new RangeError('Mask value out of range')
      for (let e = 0; e < this.size; e++)
        for (let o = 0; o < this.size; o++) {
          let n
          switch (t) {
            case 0:
              n = (o + e) % 2 == 0
              break
            case 1:
              n = e % 2 == 0
              break
            case 2:
              n = o % 3 == 0
              break
            case 3:
              n = (o + e) % 3 == 0
              break
            case 4:
              n = (Math.floor(o / 3) + Math.floor(e / 2)) % 2 == 0
              break
            case 5:
              n = ((o * e) % 2) + ((o * e) % 3) == 0
              break
            case 6:
              n = (((o * e) % 2) + ((o * e) % 3)) % 2 == 0
              break
            case 7:
              n = (((o + e) % 2) + ((o * e) % 3)) % 2 == 0
              break
            default:
              throw new Error('Unreachable')
          }
          !this.isFunction[e][o] && n && (this.modules[e][o] = !this.modules[e][o])
        }
    }
    getPenaltyScore() {
      let t = 0
      for (let s = 0; s < this.size; s++) {
        let h = !1,
          a = 0,
          m = [0, 0, 0, 0, 0, 0, 0]
        for (let f = 0; f < this.size; f++)
          this.modules[s][f] == h
            ? (a++, a == 5 ? (t += r.PENALTY_N1) : a > 5 && t++)
            : (this.finderPenaltyAddHistory(a, m),
              h || (t += this.finderPenaltyCountPatterns(m) * r.PENALTY_N3),
              (h = this.modules[s][f]),
              (a = 1))
        t += this.finderPenaltyTerminateAndCount(h, a, m) * r.PENALTY_N3
      }
      for (let s = 0; s < this.size; s++) {
        let h = !1,
          a = 0,
          m = [0, 0, 0, 0, 0, 0, 0]
        for (let f = 0; f < this.size; f++)
          this.modules[f][s] == h
            ? (a++, a == 5 ? (t += r.PENALTY_N1) : a > 5 && t++)
            : (this.finderPenaltyAddHistory(a, m),
              h || (t += this.finderPenaltyCountPatterns(m) * r.PENALTY_N3),
              (h = this.modules[f][s]),
              (a = 1))
        t += this.finderPenaltyTerminateAndCount(h, a, m) * r.PENALTY_N3
      }
      for (let s = 0; s < this.size - 1; s++)
        for (let h = 0; h < this.size - 1; h++) {
          const a = this.modules[s][h]
          a == this.modules[s][h + 1] &&
            a == this.modules[s + 1][h] &&
            a == this.modules[s + 1][h + 1] &&
            (t += r.PENALTY_N2)
        }
      let e = 0
      for (const s of this.modules) e = s.reduce((h, a) => h + (a ? 1 : 0), e)
      const o = this.size * this.size,
        n = Math.ceil(Math.abs(e * 20 - o * 10) / o) - 1
      return u(0 <= n && n <= 9), (t += n * r.PENALTY_N4), u(0 <= t && t <= 2568888), t
    }
    getAlignmentPatternPositions() {
      if (this.version == 1) return []
      {
        const t = Math.floor(this.version / 7) + 2,
          e = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (t * 2 - 2)) * 2
        let o = [6]
        for (let n = this.size - 7; o.length < t; n -= e) o.splice(1, 0, n)
        return o
      }
    }
    static getNumRawDataModules(t) {
      if (t < r.MIN_VERSION || t > r.MAX_VERSION)
        throw new RangeError('Version number out of range')
      let e = (16 * t + 128) * t + 64
      if (t >= 2) {
        const o = Math.floor(t / 7) + 2
        ;(e -= (25 * o - 10) * o - 55), t >= 7 && (e -= 36)
      }
      return u(208 <= e && e <= 29648), e
    }
    static getNumDataCodewords(t, e) {
      return (
        Math.floor(r.getNumRawDataModules(t) / 8) -
        r.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t] * r.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]
      )
    }
    static reedSolomonComputeDivisor(t) {
      if (t < 1 || t > 255) throw new RangeError('Degree out of range')
      let e = []
      for (let n = 0; n < t - 1; n++) e.push(0)
      e.push(1)
      let o = 1
      for (let n = 0; n < t; n++) {
        for (let s = 0; s < e.length; s++)
          (e[s] = r.reedSolomonMultiply(e[s], o)), s + 1 < e.length && (e[s] ^= e[s + 1])
        o = r.reedSolomonMultiply(o, 2)
      }
      return e
    }
    static reedSolomonComputeRemainder(t, e) {
      let o = e.map((n) => 0)
      for (const n of t) {
        const s = n ^ o.shift()
        o.push(0), e.forEach((h, a) => (o[a] ^= r.reedSolomonMultiply(h, s)))
      }
      return o
    }
    static reedSolomonMultiply(t, e) {
      if (t >>> 8 || e >>> 8) throw new RangeError('Byte out of range')
      let o = 0
      for (let n = 7; n >= 0; n--) (o = (o << 1) ^ ((o >>> 7) * 285)), (o ^= ((e >>> n) & 1) * t)
      return u(o >>> 8 == 0), o
    }
    finderPenaltyCountPatterns(t) {
      const e = t[1]
      u(e <= this.size * 3)
      const o = e > 0 && t[2] == e && t[3] == e * 3 && t[4] == e && t[5] == e
      return (o && t[0] >= e * 4 && t[6] >= e ? 1 : 0) + (o && t[6] >= e * 4 && t[0] >= e ? 1 : 0)
    }
    finderPenaltyTerminateAndCount(t, e, o) {
      return (
        t && (this.finderPenaltyAddHistory(e, o), (e = 0)),
        (e += this.size),
        this.finderPenaltyAddHistory(e, o),
        this.finderPenaltyCountPatterns(o)
      )
    }
    finderPenaltyAddHistory(t, e) {
      e[0] == 0 && (t += this.size), e.pop(), e.unshift(t)
    }
  }
  let l = r
  ;(l.MIN_VERSION = 1),
    (l.MAX_VERSION = 40),
    (l.PENALTY_N1 = 3),
    (l.PENALTY_N2 = 3),
    (l.PENALTY_N3 = 40),
    (l.PENALTY_N4 = 10),
    (l.ECC_CODEWORDS_PER_BLOCK = [
      [
        -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28,
        30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      ],
      [
        -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
      ],
      [
        -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30,
        30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      ],
      [
        -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24,
        30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      ],
    ]),
    (l.NUM_ERROR_CORRECTION_BLOCKS = [
      [
        -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13,
        14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
      ],
      [
        -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21,
        23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49,
      ],
      [
        -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29,
        34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68,
      ],
      [
        -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32,
        35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81,
      ],
    ]),
    (c.QrCode = l)
  function i(t, e, o) {
    if (e < 0 || e > 31 || t >>> e) throw new RangeError('Value out of range')
    for (let n = e - 1; n >= 0; n--) o.push((t >>> n) & 1)
  }
  function p(t, e) {
    return ((t >>> e) & 1) != 0
  }
  function u(t) {
    if (!t) throw new Error('Assertion error')
  }
  const d = class {
    constructor(t, e, o) {
      if (((this.mode = t), (this.numChars = e), (this.bitData = o), e < 0))
        throw new RangeError('Invalid argument')
      this.bitData = o.slice()
    }
    static makeBytes(t) {
      let e = []
      for (const o of t) i(o, 8, e)
      return new d(d.Mode.BYTE, t.length, e)
    }
    static makeNumeric(t) {
      if (!d.isNumeric(t)) throw new RangeError('String contains non-numeric characters')
      let e = []
      for (let o = 0; o < t.length; ) {
        const n = Math.min(t.length - o, 3)
        i(parseInt(t.substr(o, n), 10), n * 3 + 1, e), (o += n)
      }
      return new d(d.Mode.NUMERIC, t.length, e)
    }
    static makeAlphanumeric(t) {
      if (!d.isAlphanumeric(t))
        throw new RangeError('String contains unencodable characters in alphanumeric mode')
      let e = [],
        o
      for (o = 0; o + 2 <= t.length; o += 2) {
        let n = d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o)) * 45
        ;(n += d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o + 1))), i(n, 11, e)
      }
      return (
        o < t.length && i(d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o)), 6, e),
        new d(d.Mode.ALPHANUMERIC, t.length, e)
      )
    }
    static makeSegments(t) {
      return t == ''
        ? []
        : d.isNumeric(t)
          ? [d.makeNumeric(t)]
          : d.isAlphanumeric(t)
            ? [d.makeAlphanumeric(t)]
            : [d.makeBytes(d.toUtf8ByteArray(t))]
    }
    static makeEci(t) {
      let e = []
      if (t < 0) throw new RangeError('ECI assignment value out of range')
      if (t < 128) i(t, 8, e)
      else if (t < 16384) i(2, 2, e), i(t, 14, e)
      else if (t < 1e6) i(6, 3, e), i(t, 21, e)
      else throw new RangeError('ECI assignment value out of range')
      return new d(d.Mode.ECI, 0, e)
    }
    static isNumeric(t) {
      return d.NUMERIC_REGEX.test(t)
    }
    static isAlphanumeric(t) {
      return d.ALPHANUMERIC_REGEX.test(t)
    }
    getData() {
      return this.bitData.slice()
    }
    static getTotalBits(t, e) {
      let o = 0
      for (const n of t) {
        const s = n.mode.numCharCountBits(e)
        if (n.numChars >= 1 << s) return 1 / 0
        o += 4 + s + n.bitData.length
      }
      return o
    }
    static toUtf8ByteArray(t) {
      t = encodeURI(t)
      let e = []
      for (let o = 0; o < t.length; o++)
        t.charAt(o) != '%'
          ? e.push(t.charCodeAt(o))
          : (e.push(parseInt(t.substr(o + 1, 2), 16)), (o += 2))
      return e
    }
  }
  let C = d
  ;(C.NUMERIC_REGEX = /^[0-9]*$/),
    (C.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
    (C.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
    (c.QrSegment = C)
})(N || (N = {}))
;((c) => {
  ;((r) => {
    const l = class {
      constructor(p, u) {
        ;(this.ordinal = p), (this.formatBits = u)
      }
    }
    let i = l
    ;(i.LOW = new l(0, 1)),
      (i.MEDIUM = new l(1, 0)),
      (i.QUARTILE = new l(2, 3)),
      (i.HIGH = new l(3, 2)),
      (r.Ecc = i)
  })(c.QrCode || (c.QrCode = {}))
})(N || (N = {}))
;((c) => {
  ;((r) => {
    const l = class {
      constructor(p, u) {
        ;(this.modeBits = p), (this.numBitsCharCount = u)
      }
      numCharCountBits(p) {
        return this.numBitsCharCount[Math.floor((p + 7) / 17)]
      }
    }
    let i = l
    ;(i.NUMERIC = new l(1, [10, 12, 14])),
      (i.ALPHANUMERIC = new l(2, [9, 11, 13])),
      (i.BYTE = new l(4, [8, 16, 16])),
      (i.KANJI = new l(8, [8, 10, 12])),
      (i.ECI = new l(7, [0, 0, 0])),
      (r.Mode = i)
  })(c.QrSegment || (c.QrSegment = {}))
})(N || (N = {}))
var _ = N
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var H = {
    L: _.QrCode.Ecc.LOW,
    M: _.QrCode.Ecc.MEDIUM,
    Q: _.QrCode.Ecc.QUARTILE,
    H: _.QrCode.Ecc.HIGH,
  },
  Y = 128,
  G = 'L',
  X = '#FFFFFF',
  V = '#000000',
  K = !1,
  B = 4,
  W = 0.1
function Z(c, r = 0) {
  const l = []
  return (
    c.forEach(function (i, p) {
      let u = null
      i.forEach(function (d, C) {
        if (!d && u !== null) {
          l.push(`M${u + r} ${p + r}h${C - u}v1H${u + r}z`), (u = null)
          return
        }
        if (C === i.length - 1) {
          if (!d) return
          u === null
            ? l.push(`M${C + r},${p + r} h1v1H${C + r}z`)
            : l.push(`M${u + r},${p + r} h${C + 1 - u}v1H${u + r}z`)
          return
        }
        d && u === null && (u = C)
      })
    }),
    l.join('')
  )
}
function J(c, r) {
  return c
    .slice()
    .map((l, i) =>
      i < r.y || i >= r.y + r.h ? l : l.map((p, u) => (u < r.x || u >= r.x + r.w ? p : !1)),
    )
}
function q(c, r, l, i) {
  if (i == null) return null
  const p = l ? B : 0,
    u = c.length + p * 2,
    d = Math.floor(r * W),
    C = u / r,
    t = (i.width || d) * C,
    e = (i.height || d) * C,
    o = i.x == null ? c.length / 2 - t / 2 : i.x * C,
    n = i.y == null ? c.length / 2 - e / 2 : i.y * C
  let s = null
  if (i.excavate) {
    let h = Math.floor(o),
      a = Math.floor(n),
      m = Math.ceil(t + o - h),
      f = Math.ceil(e + n - a)
    s = { x: h, y: a, w: m, h: f }
  }
  return { x: o, y: n, h: e, w: t, excavation: s }
}
;(function () {
  try {
    new Path2D().addPath(new Path2D())
  } catch {
    return !1
  }
  return !0
})()
function tt(c) {
  const r = c,
    {
      value: l,
      size: i = Y,
      level: p = G,
      bgColor: u = X,
      fgColor: d = V,
      includeMargin: C = K,
      imageSettings: t,
    } = r,
    e = Q(r, ['value', 'size', 'level', 'bgColor', 'fgColor', 'includeMargin', 'imageSettings'])
  let o = _.QrCode.encodeText(l, H[p]).getModules()
  const n = C ? B : 0,
    s = o.length + n * 2,
    h = q(o, i, C, t)
  let a = null
  t != null &&
    h != null &&
    (h.excavation != null && (o = J(o, h.excavation)),
    (a = y.createElement('image', {
      xlinkHref: t.src,
      height: h.h,
      width: h.w,
      x: h.x + n,
      y: h.y + n,
      preserveAspectRatio: 'none',
    })))
  const m = Z(o, n)
  return y.createElement(
    'svg',
    $({ height: i, width: i, viewBox: `0 0 ${s} ${s}` }, e),
    y.createElement('path', { fill: u, d: `M0,0 h${s}v${s}H0z`, shapeRendering: 'crispEdges' }),
    y.createElement('path', { fill: d, d: m, shapeRendering: 'crispEdges' }),
    a,
  )
}
const et = [
  {
    name: 'Twitter',
    icon: 'icon-x',
    onClick: (c) => {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(c.url)}&text=${encodeURIComponent(c.text)}&via=${encodeURIComponent(x.title)}`,
      )
    },
  },
  {
    name: '复制链接',
    icon: 'icon-link',
    onClick: (c) => {
      navigator.clipboard.writeText(c.url), j.success('已复制到剪贴板')
    },
  },
]
function Ct() {
  return g.jsxs('div', {
    className: 'absolute left-0 bottom-0 flex flex-col gap-4',
    style: { transform: 'translateY(calc(100% + 24px))' },
    children: [g.jsx(ot, {}), g.jsx(rt, {})],
  })
}
function ot() {
  const c = b(D),
    r = b(T),
    { present: l } = I(),
    i = new URL(c, x.url).href,
    p = `嘿，我发现了一片宝藏文章「${r}」哩，快来看看吧！`,
    u = () => {
      l({ content: g.jsx(nt, { url: i, text: p }) })
    }
  return g.jsx('button', {
    type: 'button',
    'aria-label': 'Share this post',
    className: 'size-6 text-xl leading-none hover:text-accent',
    onClick: () => u(),
    children: g.jsx('i', { className: 'iconfont icon-share' }),
  })
}
function nt({ url: c, text: r }) {
  return g.jsxs(S.div, {
    className: 'bg-primary rounded-lg p-2 min-w-[420px] border border-primary flex flex-col',
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    children: [
      g.jsx('h2', { className: 'px-3 py-1 font-bold', children: '分享此内容' }),
      g.jsx('hr', { className: 'my-2 border-primary' }),
      g.jsxs('div', {
        className: 'px-3 py-2 grid grid-cols-[180px_auto] gap-3',
        children: [
          g.jsx(tt, { value: c, size: 180 }),
          g.jsxs('div', {
            className: 'flex flex-col gap-2',
            children: [
              g.jsx('div', { className: 'text-sm', children: '分享到...' }),
              g.jsx('ul', {
                className: 'flex flex-col gap-2',
                children: et.map((l) =>
                  g.jsxs(
                    'li',
                    {
                      className:
                        'px-2 py-1 flex gap-2 cursor-pointer rounded-md hover:bg-secondary',
                      onClick: () => l.onClick({ url: c, text: r }),
                      role: 'button',
                      'aria-label': `Share to ${l.name}`,
                      children: [
                        g.jsx('i', { className: U('iconfont text-accent', l.icon) }),
                        g.jsx('span', { children: l.name }),
                      ],
                    },
                    l.name,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function rt() {
  const { present: c } = I(),
    r = () => {
      c({ content: g.jsx(st, {}) })
    }
  return g.jsx('button', {
    type: 'button',
    'aria-label': 'Donate to author',
    className: 'size-6 text-xl leading-none hover:text-accent',
    onClick: () => r(),
    children: g.jsx('i', { className: 'iconfont icon-user-heart' }),
  })
}
function st() {
  return g.jsxs(S.div, {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    children: [
      g.jsx('h2', {
        className: 'text-center mb-5',
        children: '感谢您的支持，这将成为我前进的最大动力。',
      }),
      g.jsx('div', {
        className: 'flex flex-wrap gap-4 justify-center',
        children: g.jsx('img', {
          className: 'object-cover',
          width: 300,
          height: 300,
          src: z.wechat,
          alt: '微信赞赏码',
          loading: 'lazy',
          decoding: 'async',
        }),
      }),
    ],
  })
}
export { Ct as ActionAside }