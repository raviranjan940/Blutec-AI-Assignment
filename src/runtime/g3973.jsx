// shared module body for 3973, 11485, 75554, 81296
import * as __m8792 from './m8792.jsx';
import * as __m19991 from './m19991.jsx';
import * as __m34929 from './m34929.jsx';
import * as __m69577 from './m69577.jsx';
import * as __m79444 from './m79444.jsx';

let __v_o_101;
let __v_g_100;
let __v_P_99;
let __v_f_98;
let __v_f_97;
let __v_f_96;
var e = __m69577,
  i = __m8792,
  s = __m19991,
  n = __m79444;
let r = {
    ...__m34929.f,
    color: n.f,
    backgroundColor: n.f,
    outlineColor: n.f,
    fill: n.f,
    stroke: n.f,
    borderColor: n.f,
    borderTopColor: n.f,
    borderRightColor: n.f,
    borderBottomColor: n.f,
    borderLeftColor: n.f,
    filter: i.f,
    WebkitFilter: i.f,
    mask: s.f,
    WebkitMask: s.f
  },
  a = t => r[t];
__v_f_96 = a;
let o = new Set([i.f, s.f]);
__v_f_97 = function (t, i) {
  let s = a(t);
  return o.has(s) || (s = e.u), s.getAnimatableNone ? s.getAnimatableNone(i) : undefined;
}, __v_f_98 = function (t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
};
let l = t => 180 * t / Math.PI,
  h = t => f(l(Math.atan2(t[1], t[0]))),
  u = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: h,
    rotateZ: h,
    skewX: t => l(Math.atan(t[1])),
    skewY: t => l(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  },
  f = t => ((t %= 360) < 0 && (t += 360), t),
  d = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  p = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  c = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: d,
    scaleY: p,
    scale: t => (d(t) + p(t)) / 2,
    rotateX: t => f(l(Math.atan2(t[6], t[5]))),
    rotateY: t => f(l(Math.atan2(-t[2], t[0]))),
    rotateZ: h,
    rotate: h,
    skewX: t => l(Math.atan(t[4])),
    skewY: t => l(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
function m(t) {
  return +!!t.includes("scale");
}
function g(t, e) {
  let i, s;
  if (!t || "none" === t) return m(e);
  let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  if (n) i = c, s = n;else {
    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = u, s = e;
  }
  if (!s) return m(e);
  let r = i[e],
    a = s[1].split(",").map(v);
  return "function" == typeof r ? r(a) : a[r];
}
function v(t) {
  return parseFloat(t.trim());
}
__v_P_99 = m, __v_g_100 = g, __v_o_101 = (t, e) => {
  let {
    transform: i = "none"
  } = getComputedStyle(t);
  return g(i, e);
};
export { __v_f_96 as f__3973 };
export { __v_f_97 as f__75554 };
export { __v_f_98 as f__11485 };
export { __v_P_99 as P__81296 };
export { __v_g_100 as g__81296 };
export { __v_o_101 as o__81296 };
