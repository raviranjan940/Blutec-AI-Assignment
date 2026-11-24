// shared module body for 49652, 61327, 89026
import * as __m42824 from './m42824.jsx';

let __v_f_171;
let __v_f_170;
let __v_f_169;
let t, n;
var r = __m42824;
function i(e) {
  return r.f(e) && "ownerSVGElement" in e;
}
function s(e, t, n) {
  if (null == e) return [];
  if (e instanceof EventTarget) return [e];
  if ("string" == typeof e) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter(e => null != e);
}
__v_f_169 = i, __v_f_170 = s;
let a = new WeakMap(),
  o = (e, t, n) => (r, s) => s && s[0] ? s[0][e + "Size"] : i(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
  u = o("inline", "width", "offsetWidth"),
  l = o("block", "height", "offsetHeight");
function f({
  target: e,
  borderBoxSize: t
}) {
  a.get(e)?.forEach(n => {
    n(e, {
      get width() {
        return u(e, t);
      },
      get height() {
        return l(e, t);
      }
    });
  });
}
function c(e) {
  e.forEach(f);
}
let h = new Set();
__v_f_171 = function (e, r) {
  let i;
  return "function" == typeof e ? (h.add(e), n || (n = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    h.forEach(t => t(e));
  }, window.addEventListener("resize", n)), () => {
    h.delete(e), h.size || "function" != typeof n || (window.removeEventListener("resize", n), n = undefined);
  }) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(c)), (i = s(e)).forEach(e => {
    let n = a.get(e);
    n || (n = new Set(), a.set(e, n)), n.add(r), t?.observe(e);
  }), () => {
    i.forEach(e => {
      let n = a.get(e);
      n?.delete(r), n?.size || t?.unobserve(e);
    });
  });
};
export { __v_f_169 as f__89026 };
export { __v_f_170 as f__49652 };
export { __v_f_171 as f__61327 };
