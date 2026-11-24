// module 890 exports: Flight
import * as __m10542 from './m10542.jsx';
import * as __m18535 from './m18535.jsx';
import * as __m71645 from 'react';

var r = __m71645,
  n = __m10542,
  i = __m18535;
const __ex_Flight_22 = function ({
  photo: e,
  label: l
}) {
  var s, a;
  let o = r.useRef(null),
    c = r.useRef(null),
    f = r.useRef(null),
    d = i.z(),
    u = r.useId(),
    {
      scrollYProgress: h
    } = n.f({
      target: o,
      offset: ["start 95%", "end 25%"]
    }),
    g = e => {
      let t = c.current,
        r = f.current;
      if (!t || !r) return;
      let n = t.getTotalLength(),
        i = Math.min(n, Math.max(0, e * n)),
        l = t.getPointAtLength(i),
        s = t.getPointAtLength(Math.min(n, i + 1)),
        a = t.getPointAtLength(Math.max(0, i - 1)),
        o = 180 * Math.atan2(s.y - a.y, s.x - a.x) / Math.PI;
      r.setAttribute("transform", `translate(${l.x.toFixed(1)} ${l.y.toFixed(1)}) rotate(${o.toFixed(1)})`), r.style.opacity = String(Math.min(1, Math.max(0, (e - .11) / .06)));
    };
  return s = "change", a = e => !d && g(e), r.useInsertionEffect(() => h.on(s, a), [h, s, a]), r.useEffect(() => g(d ? .62 : h.get()), [d, h]), <div ref={o} className="tp-flight"><svg viewBox="0 0 660 300" role="img" aria-label={l}><defs><clipPath id={u}><circle r="25" /></clipPath></defs><path ref={c} d="M40 250 C 170 40, 470 20, 620 168" className="tp-flight__route" /><circle cx="40" cy="250" r="7" className="tp-flight__dot" /><circle cx="620" cy="168" r="7" className="tp-flight__dot" /><text x="40" y="284" textAnchor="middle" className="tp-flight__label">Korea</text><text x="620" y="202" textAnchor="middle" className="tp-flight__label">Dubai</text><g ref={f} transform="translate(410 70)"><g transform="translate(-126 -78)"><path d="M28 60 L8 26 L34 26 L60 54 Z" className="tp-flight__wing" /><path d="M108 112 L142 156 L172 156 L158 112 Z" className="tp-flight__wing tp-flight__wing--far" /><path d="M20 80 C20 52 52 44 80 44 L168 44 C200 44 224 60 232 80 C224 100 200 112 168 112 L80 112 C52 112 20 104 20 80 Z" className="tp-flight__body" /><path d="M104 44 L138 2 L168 2 L154 44 Z" className="tp-flight__wing" /><path d="M206 64 C215 67 221 73 224 80" className="tp-flight__line" /></g>{e && <g transform="translate(10 2)"><image href={e} x="-25" y="-25" width="50" height="50" clipPath={`url(#${u})`} preserveAspectRatio="xMidYMid slice" /><circle r="25" className="tp-flight__porthole" /></g>}</g></svg></div>;
};
export { __ex_Flight_22 as Flight };
