// module 12008 exports: f
import * as __m25791 from './m25791.jsx';

var t = __m25791;
const __ex_f_36 = function (e, n, r = 0) {
  var i, s;
  let a;
  return n <= 0 ? r : e.velocity ? e.velocity(n) : (i = t => e.next(t).value, s = e.next(n).value, a = Math.max(n - 5, 0), t.f(s - i(a), n - a));
};
export { __ex_f_36 as f };
