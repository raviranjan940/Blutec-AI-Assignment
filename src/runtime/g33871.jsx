// shared module body for 33871, 86579
import * as __m83411 from './m83411.jsx';

let __v_f_135;
let __v_f_134;
var e = __m83411;
__v_f_134 = function (t) {
  return e.f(t) ? t.get() : t;
}, __v_f_135 = function (t, e, i, s) {
  let n = e => {
    let n;
    return "function" == typeof e ? e(undefined !== i ? i : t.custom, ...(n = [{}, {}], s?.values.forEach((t, e) => {
      n[0][e] = t.get(), n[1][e] = t.getVelocity();
    }), n)) : e;
  };
  return "string" == typeof (e = n(e)) && (e = t.variants && t.variants[e]), n(e);
};
export { __v_f_134 as f__33871 };
export { __v_f_135 as f__86579 };
