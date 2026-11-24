// shared module body for 44947, 81261, 99951
import * as __m19928 from './m19928.jsx';
import * as __m34929 from './m34929.jsx';
import * as __m46124 from './m46124.jsx';
import * as __m57788 from './m57788.jsx';

let __v_f_159;
let __v_k_158;
let __v_d_157;
let __v_f_156;
var e = __m46124,
  i = __m34929,
  s = __m57788,
  n = __m19928;
let r = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  a = s.$.length;
function o(t, o, l) {
  let {
      style: h,
      vars: u,
      transformOrigin: f
    } = t,
    d = false,
    p = false;
  for (let t in o) {
    let r = o[t];
    if (s.P.has(t)) {
      d = true;
      continue;
    }
    if (n.A(t)) {
      u[t] = r;
      continue;
    }
    {
      let s = e.f(r, i.f[t]);
      t.startsWith("origin") ? (p = true, f[t] = s) : h[t] = s;
    }
  }
  if (!o.transform && (d || l ? h.transform = function (t, n, o) {
    let l = "",
      h = true;
    for (let u = 0; u < a; u++) {
      let a = s.$[u],
        f = t[a];
      if (undefined === f) continue;
      let d = true;
      if ("number" == typeof f) d = f === +!!a.startsWith("scale");else {
        let t = parseFloat(f);
        d = a.startsWith("scale") ? 1 === t : 0 === t;
      }
      if (!d || o) {
        let t = e.f(f, i.f[a]);
        if (!d) {
          h = false;
          let e = r[a] || a;
          l += `${e}(${t}) `;
        }
        o && (n[a] = t);
      }
    }
    let u = t.pathRotation;
    return u && (h = false, l += `rotate(${e.f(u, i.f.pathRotation)}) `), l = l.trim(), o ? l = o(n, h ? "" : l) : h && (l = "none"), l;
  }(o, t.transform, l) : h.transform && (h.transform = "none")), p) {
    let {
      originX: t = "50%",
      originY: e = "50%",
      originZ: i = 0
    } = f;
    h.transformOrigin = `${t} ${e} ${i}`;
  }
}
__v_f_156 = o;
let l = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  h = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  },
  u = ["transform", "opacity", "clipPath", "filter", "offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
__v_d_157 = function (t, {
  attrX: e,
  attrY: i,
  attrScale: s,
  pathLength: n,
  pathSpacing: r = 1,
  pathOffset: a = 0,
  ...f
}, d, p, c) {
  if (o(t, f, p), d) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  let {
    attrs: m,
    style: g
  } = t;
  for (let t of u) undefined !== m[t] && (g[t] = m[t], delete m[t]);
  (g.transform || m.transformOrigin) && (g.transformOrigin = m.transformOrigin ?? "50% 50%", delete m.transformOrigin), g.transform && (g.transformBox = c?.transformBox ?? "fill-box", delete m.transformBox), undefined !== e && (m.x = e), undefined !== i && (m.y = i), undefined !== s && (m.scale = s), undefined !== n && function (t, e, i = 1, s = 0, n = true) {
    t.pathLength = 1;
    let r = n ? l : h;
    t[r.offset] = `${-s}`, t[r.array] = `${e} ${i}`;
  }(m, n, r, a, false);
}, __v_k_158 = u, __v_f_159 = t => "string" == typeof t && "svg" === t.toLowerCase();
export { __v_f_156 as f__44947 };
export { __v_d_157 as d__81261 };
export { __v_k_158 as k__81261 };
export { __v_f_159 as f__99951 };
