// module 3163 exports: f
import * as __m706 from './m706.jsx';
import * as __m8618 from './m8618.jsx';
import * as __m19928 from './m19928.jsx';
import * as __m22660 from './m22660.jsx';
import * as __m38638 from './m38638.jsx';
import * as __m48393 from './m48393.jsx';
import * as __m60720 from './m60720.jsx';
import * as __m63011 from './m63011.jsx';
import * as __m65566 from './m65566.jsx';
import * as __m66820 from './m66820.jsx';
import * as __m69577 from './m69577.jsx';
import * as __m79444 from './m79444.jsx';

var t = __m60720,
  n = __m38638,
  r = __m65566,
  i = __m19928,
  s = __m79444,
  a = __m69577,
  o = __m63011,
  u = __m22660,
  l = __m48393,
  f = __m66820,
  c = __m8618,
  h = __m706;
let d = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  p = [o.f, f.f, u.f];
function v(e) {
  let t = p.find(t => t.test(e));
  if (!t) return r.w(false, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), false;
  let n = t.parse(e);
  return t === u.f && (n = l.f(n)), n;
}
let g = (e, t) => {
    let n = v(e),
      r = v(t);
    if (!n || !r) return c.f(e, t);
    let i = {
      ...n
    };
    return e => (i.red = d(n.red, r.red, e), i.green = d(n.green, r.green, e), i.blue = d(n.blue, r.blue, e), i.alpha = h.f(n.alpha, r.alpha, e), f.f.transform(i));
  },
  m = new Set(["none", "hidden"]);
function y(e, t) {
  return n => h.f(e, t, n);
}
function b(e) {
  return "number" == typeof e ? y : "string" == typeof e ? i.u(e) ? c.f : s.f.test(e) ? g : w : Array.isArray(e) ? x : "object" == typeof e ? s.f.test(e) ? g : M : c.f;
}
function x(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => b(e)(e, t[n]));
  return e => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function M(e, t) {
  let n = {
      ...e,
      ...t
    },
    r = {};
  for (let i in n) undefined !== e[i] && undefined !== t[i] && (r[i] = b(e[i])(e[i], t[i]));
  return e => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
let w = (e, t) => {
    let i = a.u.createTransformer(t),
      s = a.L(e),
      o = a.L(t);
    if (!(s.indexes.var.length === o.indexes.var.length && s.indexes.color.length === o.indexes.color.length && s.indexes.number.length >= o.indexes.number.length)) return r.w(true, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), c.f(e, t);
    if (m.has(e) && !o.values.length || m.has(t) && !s.values.length) return m.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e;
    return n.f(x(function (e, t) {
      let n = [],
        r = {
          color: 0,
          var: 0,
          number: 0
        };
      for (let i = 0; i < t.values.length; i++) {
        let s = t.types[i],
          a = e.indexes[s][r[s]],
          o = e.values[a] ?? 0;
        n[i] = o, r[s]++;
      }
      return n;
    }(s, o), o.values), i);
  },
  S = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
const __ex_f_95 = function (e, n, r) {
  if ("number" == typeof e && "number" == typeof n && "number" == typeof r) return h.f(e, n, r);
  if ("string" == typeof e && "string" == typeof n) {
    let r = function (e, n) {
      let r = S.exec(e);
      if (!r) return;
      let i = S.exec(n);
      if (!i || r[2] !== i[2]) return;
      let s = r[2],
        a = parseFloat(r[1]),
        o = parseFloat(i[1]);
      return e => t.f(h.f(a, o, e)) + s;
    }(e, n);
    if (r) return r;
  }
  return b(e)(e, n);
};
export { __ex_f_95 as f };
