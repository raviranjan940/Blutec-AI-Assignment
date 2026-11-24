// shared module body for 44230, 68514
import * as __m706 from './m706.jsx';
import * as __m3163 from './m3163.jsx';
import * as __m32943 from './m32943.jsx';
import * as __m37025 from './m37025.jsx';
import * as __m38638 from './m38638.jsx';
import * as __m46791 from './m46791.jsx';
import * as __m60830 from './m60830.jsx';
import * as __m65566 from './m65566.jsx';
import * as __m76959 from './m76959.jsx';
import * as __m83920 from './m83920.jsx';
import * as __m93544 from './m93544.jsx';

let __v_f_49;
let __v_f_48;
var t = __m37025,
  n = __m93544,
  r = __m32943,
  i = __m46791,
  s = __m76959,
  a = __m65566,
  o = __m60830,
  u = __m38638,
  l = __m83920,
  f = __m3163;
function c(e, t, {
  clamp: n = true,
  ease: r,
  mixer: h
} = {}) {
  let d = e.length;
  if (a.k(d === t.length, "Both input and output ranges must be the same length", "range-length"), 1 === d) return () => t[0];
  if (2 === d && t[0] === t[1]) return () => t[1];
  let p = e[0] === e[1];
  e[0] > e[d - 1] && (e = [...e].reverse(), t = [...t].reverse());
  let v = function (e, t, n) {
      let r = [],
        s = n || i.f.mix || f.f,
        a = e.length - 1;
      for (let n = 0; n < a; n++) {
        let i = s(e[n], e[n + 1]);
        if (t) {
          let e = Array.isArray(t) ? t[n] || o.f : t;
          i = u.f(e, i);
        }
        r.push(i);
      }
      return r;
    }(t, r, h),
    g = v.length,
    m = n => {
      if (p && n < e[0]) return t[0];
      let r = 0;
      if (g > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = l.f(e[r], e[r + 1], n);
      return v[r](i);
    };
  return n ? t => m(s.f(e[0], e[d - 1], t)) : m;
}
__v_f_48 = c;
var h = __m706;
__v_f_49 = function ({
  duration: e = 300,
  keyframes: a,
  times: o,
  ease: u = "easeInOut"
}) {
  var d;
  let p,
    v = n.f(u) ? u.map(r.f) : r.f(u) || t.H,
    g = {
      done: false,
      value: a[0]
    };
  if (2 === a.length && !Array.isArray(v) && (!o || 2 !== o.length || 0 === o[0] && 1 === o[1])) {
    let [t, n] = a,
      r = t === n ? undefined : (i.f.mix || f.f)(t, n);
    return {
      calculatedDuration: e,
      next: t => (g.value = r ? r(v(e > 0 ? s.f(0, 1, t / e) : 1)) : n, g.done = t >= e, g)
    };
  }
  let m = c((d = o && o.length === a.length ? o : (!function (e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      let i = l.f(0, t, r);
      e.push(h.f(n, 1, i));
    }
  }(p = [0], a.length - 1), p), d.map(t => t * e)), a, {
    ease: Array.isArray(v) ? v : a.map(() => v || t.H).splice(0, a.length - 1)
  });
  return {
    calculatedDuration: e,
    next: t => (g.value = m(t), g.done = t >= e, g)
  };
};
export { __v_f_48 as f__44230 };
export { __v_f_49 as f__68514 };
