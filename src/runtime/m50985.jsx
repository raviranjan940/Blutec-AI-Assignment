// module 50985 exports: PawTrailCanvas
import * as __m18535 from './m18535.jsx';
import * as __m49054 from './m49054.jsx';
import * as __m71645 from 'react';

var i = __m71645,
  s = __m49054,
  n = __m18535;
const __ex_PawTrailCanvas_11 = function () {
  let t = i.useRef(null),
    o = n.z();
  return i.useEffect(() => {
    if (o || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let e = t.current,
      i = e.getContext("2d"),
      n = new Path2D(s.f),
      r = [],
      a = 1,
      l = 0,
      h = false,
      u = 0 / 0,
      c = 0 / 0,
      d = 0,
      p = 1,
      m = () => {
        e.width = innerWidth * (a = Math.min(window.devicePixelRatio || 1, 2)), e.height = innerHeight * a;
      };
    m();
    let f = t => {
        i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, e.width, e.height);
        for (let e = r.length - 1; e >= 0; e--) {
          let s = r[e],
            o = t - s.born;
          if (o > 1e3) {
            r.splice(e, 1);
            continue;
          }
          let l = o < 600 ? 1 : 1 - (o - 600) / 400;
          i.globalAlpha = .42 * l * l, i.setTransform(.27 * a, 0, 0, .27 * a, s.x * a, s.y * a), i.rotate(s.angle), i.translate(-32, -34), i.fillStyle = "#c2622b", i.fill(n);
        }
        r.length ? l = requestAnimationFrame(f) : h = false;
      },
      v = t => {
        if ("mouse" !== t.pointerType) return;
        if (Number.isNaN(u)) {
          u = t.clientX, c = t.clientY;
          return;
        }
        let e = t.clientX - u,
          i = t.clientY - c;
        if ((d += Math.hypot(e, i)) >= 46) {
          d = 0;
          let s = Math.atan2(i, e) + Math.PI / 2,
            n = 7 * (p = -p);
          r.push({
            x: t.clientX + Math.cos(s) * n + 14,
            y: t.clientY + Math.sin(s) * n + 16,
            angle: s,
            born: performance.now()
          }), r.length > 14 && r.shift(), h || (h = true, l = requestAnimationFrame(f));
        }
        u = t.clientX, c = t.clientY;
      };
    return window.addEventListener("pointermove", v, {
      passive: true
    }), window.addEventListener("resize", m), () => {
      window.removeEventListener("pointermove", v), window.removeEventListener("resize", m), cancelAnimationFrame(l), i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, e.width, e.height);
    };
  }, [o]), <canvas ref={t} aria-hidden={true} className="pointer-events-none fixed inset-0 z-[70] size-full" />;
};
export { __ex_PawTrailCanvas_11 as PawTrailCanvas };
