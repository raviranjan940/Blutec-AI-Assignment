// shared module body for 32943, 37025, 41980, 78047, 91559, 93544
import * as __m60830 from './m60830.jsx';
import * as __m60855 from './m60855.jsx';
import * as __m65566 from './m65566.jsx';

let __v_f_155;
let __v_o_154;
let __v_s_153;
let __v_d_152;
let __v_f_151;
let __v_G_150;
let __v_E_149;
let __v_A_148;
let __v_f_147;
let __v_u_146;
let __v_H_145;
let __v_t_144;
var t = __m60830;
let n = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
function r(e, r, i, s) {
  return e === r && i === s ? t.f : t => 0 === t || 1 === t ? t : n(function (e, t, r, i, s) {
    let a,
      o,
      u = 0;
    do (a = n(o = t + (r - t) / 2, i, s) - e) > 0 ? r = o : t = o; while (Math.abs(a) > 1e-7 && ++u < 12);
    return o;
  }(t, 0, 1, e, i), r, s);
}
let i = r(.42, 0, 1, 1),
  s = r(0, 0, .58, 1),
  a = r(.42, 0, .58, 1);
__v_t_144 = i, __v_H_145 = a, __v_u_146 = s, __v_f_147 = e => Array.isArray(e) && "number" != typeof e[0];
var o = __m65566;
let u = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  l = e => t => 1 - e(1 - t),
  f = r(.33, 1.53, .69, .99),
  c = l(f),
  h = u(c);
__v_A_148 = c, __v_E_149 = h, __v_G_150 = f;
let d = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * c(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
__v_f_151 = d;
let p = e => 1 - Math.sin(Math.acos(e)),
  v = l(p),
  g = u(p);
__v_d_152 = p, __v_s_153 = g, __v_o_154 = v;
var m = __m60855;
let y = {
  linear: t.f,
  easeIn: i,
  easeInOut: a,
  easeOut: s,
  circIn: p,
  circInOut: g,
  circOut: v,
  backIn: c,
  backInOut: h,
  backOut: f,
  anticipate: d
};
__v_f_155 = e => {
  if (m.f(e)) {
    o.k(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    let [t, n, i, s] = e;
    return r(t, n, i, s);
  }
  return "string" == typeof e ? (o.k(undefined !== y[e], `Invalid easing type '${e}'`, "invalid-easing-type"), y[e]) : e;
};
export { __v_t_144 as t__37025 };
export { __v_H_145 as H__37025 };
export { __v_u_146 as u__37025 };
export { __v_f_147 as f__93544 };
export { __v_A_148 as A__41980 };
export { __v_E_149 as E__41980 };
export { __v_G_150 as G__41980 };
export { __v_f_151 as f__78047 };
export { __v_d_152 as d__91559 };
export { __v_s_153 as s__91559 };
export { __v_o_154 as o__91559 };
export { __v_f_155 as f__32943 };
