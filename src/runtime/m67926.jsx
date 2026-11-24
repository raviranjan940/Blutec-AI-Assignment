// module 67926 exports: f
import * as __m57788 from './m57788.jsx';
import * as __m83411 from './m83411.jsx';
import * as __m84049 from './m84049.jsx';

var e = __m83411,
  i = __m57788,
  s = __m84049;
const __ex_f_192 = function (t, n, r) {
  let a = s.f(t, n, r);
  for (let s in t) (e.f(t[s]) || e.f(n[s])) && (a[-1 !== i.$.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = t[s]);
  return a;
};
export { __ex_f_192 as f };
