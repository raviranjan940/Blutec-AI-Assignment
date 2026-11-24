// module 29462 exports: f
import * as __m28409 from './m28409.jsx';

var t = __m28409;
const __ex_f_127 = function ({
  keyframes: e,
  velocity: n = 0,
  power: r = .8,
  timeConstant: i = 325,
  bounceDamping: s = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: u,
  max: l,
  restDelta: f = .5,
  restSpeed: c
}) {
  let h,
    d,
    p = e[0],
    v = {
      done: false,
      value: p
    },
    g = r * n,
    m = p + g,
    y = undefined === o ? m : o(m);
  y !== m && (g = y - p);
  let b = e => -g * Math.exp(-e / i),
    x = e => {
      let t = b(e);
      v.done = Math.abs(t) <= f, v.value = v.done ? y : y + t;
    },
    M = e => {
      let n;
      if ((n = v.value) < u || n > l) {
        var r;
        h = e, d = t.f({
          keyframes: [v.value, (r = v.value, undefined === u ? l : undefined === l || Math.abs(u - r) < Math.abs(l - r) ? u : l)],
          velocity: -b(e) / i * 1e3,
          damping: s,
          stiffness: a,
          restDelta: f,
          restSpeed: c
        });
      }
    };
  return M(0), {
    calculatedDuration: null,
    next: e => {
      let t = false;
      return (d || undefined !== h || (t = true, x(e), M(e)), undefined !== h && e >= h) ? d.next(e - h) : (t || x(e), v);
    }
  };
};
export { __ex_f_127 as f };
