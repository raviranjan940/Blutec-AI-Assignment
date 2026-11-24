// shared module body for 22660, 69577, 79444
import * as __m30677 from './m30677.jsx';
import * as __m60720 from './m60720.jsx';
import * as __m63011 from './m63011.jsx';
import * as __m65091 from './m65091.jsx';
import * as __m66820 from './m66820.jsx';
import * as __m76307 from './m76307.jsx';
import * as __m98106 from './m98106.jsx';

let __v_T_197;
let __v_u_196;
let __v_L_195;
let __v_f_194;
let __v_f_193;
var e = __m63011,
  i = __m76307,
  s = __m65091,
  n = __m60720,
  r = __m98106;
let a = {
  test: r.E("hsl", "hue"),
  parse: r.J("hue", "saturation", "lightness"),
  transform: ({
    hue: t,
    saturation: e,
    lightness: r,
    alpha: a = 1
  }) => "hsla(" + Math.round(t) + ", " + s.U.transform(n.f(e)) + ", " + s.U.transform(n.f(r)) + ", " + n.f(i._.transform(a)) + ")"
};
__v_f_193 = a;
var o = __m66820;
let l = {
  test: t => o.f.test(t) || e.f.test(t) || a.test(t),
  parse: t => o.f.test(t) ? o.f.parse(t) : a.test(t) ? a.parse(t) : e.f.parse(t),
  transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? o.f.transform(t) : a.transform(t),
  getAnimatableNone: t => {
    let e = l.parse(t);
    return e.alpha = 0, l.transform(e);
  }
};
__v_f_194 = l;
let h = new RegExp(__m30677.f.source),
  u = RegExp(/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu.source, "i"),
  f = "number",
  d = "color",
  p = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function c(t) {
  let e = t.toString(),
    i = [],
    s = {
      color: [],
      number: [],
      var: []
    },
    n = [],
    r = 0,
    a = e.replace(p, t => (l.test(t) ? (s.color.push(r), n.push(d), i.push(l.parse(t))) : t.startsWith("var(") ? (s.var.push(r), n.push("var"), i.push(t)) : (s.number.push(r), n.push(f), i.push(parseFloat(t))), ++r, "${}")).split("${}");
  return {
    values: i,
    split: a,
    indexes: s,
    types: n
  };
}
function m({
  split: t,
  types: e
}) {
  let i = t.length;
  return s => {
    let r = "";
    for (let a = 0; a < i; a++) if (r += t[a], undefined !== s[a]) {
      let t = e[a];
      t === f ? r += n.f(s[a]) : t === d ? r += l.transform(s[a]) : r += s[a];
    }
    return r;
  };
}
__v_L_195 = c, __v_u_196 = {
  test: function (t) {
    return isNaN(t) && "string" == typeof t && (h.test(t) || u.test(t));
  },
  parse: function (t) {
    return c(t).values;
  },
  createTransformer: function (t) {
    return m(c(t));
  },
  getAnimatableNone: function (t) {
    let e = c(t);
    return m(e)(e.values.map((t, i) => ((t, e) => "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof t ? 0 : l.test(t) ? l.getAnimatableNone(t) : t)(t, e.split[i])));
  }
}, __v_T_197 = function (t) {
  let e = t.toString();
  return h.test(e) || u.test(e);
};
export { __v_f_193 as f__22660 };
export { __v_f_194 as f__79444 };
export { __v_L_195 as L__69577 };
export { __v_u_196 as u__69577 };
export { __v_T_197 as T__69577 };
