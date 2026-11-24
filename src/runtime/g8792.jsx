// shared module body for 8792, 19991
import * as __m30677 from './m30677.jsx';
import * as __m69577 from './m69577.jsx';

let __v_f_217;
let __v_f_216;
var e = __m69577,
  i = __m30677;
let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
function n(t) {
  let [e, n] = t.slice(0, -1).split("(");
  if ("drop-shadow" === e) return t;
  let [r] = n.match(i.f) || [];
  if (!r) return t;
  let a = n.replace(r, ""),
    o = +!!s.has(e);
  return r !== n && (o *= 100), e + "(" + o + a + ")";
}
let r = /\b([a-z-]*)\(.*?\)/gu,
  a = {
    ...e.u,
    getAnimatableNone: t => {
      let e = t.match(r);
      return e ? e.map(n).join(" ") : t;
    }
  };
__v_f_216 = a;
let o = {
  ...e.u,
  getAnimatableNone: t => {
    let i = e.u.parse(t);
    return e.u.createTransformer(t)(i.map(t => "number" == typeof t ? 0 : "object" == typeof t ? {
      ...t,
      alpha: 1
    } : t));
  }
};
__v_f_217 = o;
export { __v_f_216 as f__8792 };
export { __v_f_217 as f__19991 };
