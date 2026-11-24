// shared module body for 30677, 63011, 66820, 98106
import * as __m60720 from './m60720.jsx';
import * as __m76307 from './m76307.jsx';
import * as __m76959 from './m76959.jsx';

let __v_f_215;
let __v_f_214;
let __v_J_213;
let __v_E_212;
let __v_f_211;
var e = __m76959,
  i = __m76307,
  s = __m60720;
let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
__v_f_211 = n;
let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  a = (t, e) => i => !!("string" == typeof i && r.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
  o = (t, e, i) => s => {
    if ("string" != typeof s) return s;
    let [r, a, o, l] = s.match(n);
    return {
      [t]: parseFloat(r),
      [e]: parseFloat(a),
      [i]: parseFloat(o),
      alpha: undefined !== l ? parseFloat(l) : 1
    };
  };
__v_E_212 = a, __v_J_213 = o;
let l = {
    ...i.H,
    transform: t => Math.round(e.f(0, 255, t))
  },
  h = {
    test: a("rgb", "red"),
    parse: o("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: n,
      alpha: r = 1
    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(n) + ", " + s.f(i._.transform(r)) + ")"
  };
__v_f_214 = h;
let u = {
  test: a("#"),
  parse: function (t) {
    let e = "",
      i = "",
      s = "",
      n = "";
    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), s = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), s = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, s += s, n += n), {
      red: parseInt(e, 16),
      green: parseInt(i, 16),
      blue: parseInt(s, 16),
      alpha: n ? parseInt(n, 16) / 255 : 1
    };
  },
  transform: h.transform
};
__v_f_215 = u;
export { __v_f_211 as f__30677 };
export { __v_E_212 as E__98106 };
export { __v_J_213 as J__98106 };
export { __v_f_214 as f__66820 };
export { __v_f_215 as f__63011 };
