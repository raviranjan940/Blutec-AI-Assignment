// module 73459 exports: PupBuddy
import * as __m1063 from './m1063.jsx';
import * as __m8478 from './m8478.jsx';
import * as __m18535 from './m18535.jsx';
import * as __m55334 from './m55334.jsx';
import * as __m71645 from 'react';
import * as __m87022 from './m87022.jsx';
import * as __m89681 from './m89681.jsx';

var a = __m71645,
  s = __m87022,
  i = __m18535,
  CO_ = __m55334,
  n = __m89681,
  r = __m1063,
  h = __m8478;
let l = ["peekaboo", "woof", "tilt", "sneeze"],
  c = ["tilt", "love", "sneeze", "woof"];
const __ex_PupBuddy_15 = function ({
  pose: t = "sit",
  facing: d = "right",
  act: f,
  label: p,
  className: g = "",
  style: u,
  asStop: m = false
}) {
  let y = a.useRef(null),
    b = a.useRef(null),
    x = i.z();
  return a.useEffect(() => {
    if (x) return;
    let e = y.current,
      a = b.current,
      i = "left" === d ? -1 : 1,
      o = new n.f(e.querySelector("svg"), t, i);
    o.wag(.6);
    let p = [],
      g = performance.now() / 1e3,
      u = g,
      w = 0,
      M = null,
      k = null,
      j = 0,
      v = 0,
      $ = {
        d: o,
        rest: r.o[t],
        facing: i,
        say: (t, e = 1.4) => {
          a.textContent = t, a.dataset.show = "true", w = performance.now() / 1e3 + e;
        },
        hearts: () => h.m(e, e.clientWidth * (i > 0 ? .7 : .3), .25 * e.clientHeight)
      },
      T = false,
      P = 0,
      R = () => {
        let t = performance.now() / 1e3,
          s = Math.min(.05, t - g);
        for (g = t; p.length && p[0][0] <= t;) p.shift()[1](t);
        T !== t < P && (T = !T, e.toggleAttribute("data-playing", T)), o.lookAt(M && t - M.t < 3 ? M : null), "tilt" !== f || p.length || o.cock(Math.sin(.9 * t) > .35 ? 13 : -.35 > Math.sin(.9 * t) ? -10 : 0), !p.length && t - u > 9 && (u = t, p = .5 > Math.random() ? h.M.tilt($, t) : [[t, () => o.wag(1)], [t + 2.2, () => o.wag(.6)]]), "true" === a.dataset.show && t > w && (a.dataset.show = "false"), o.tick(s, t);
      },
      L = false,
      z = t => {
        m && document.documentElement.dataset.pup && (t = false), t !== L && (L = t, t ? (g = performance.now() / 1e3, s.y.update(R, true)) : s.Y(R));
      },
      Y = new IntersectionObserver(([t]) => z(t.isIntersecting));
    Y.observe(e);
    let E = t => {
        "mouse" === t.pointerType && (M = {
          x: t.clientX,
          y: t.clientY,
          t: performance.now() / 1e3
        });
      },
      C = () => {
        let e = performance.now() / 1e3;
        j = e - v < .7 ? j + 1 : 1, v = e;
        let a = "peek" === t ? l : "snug" === t ? c : null,
          s = a?.filter(t => t !== k) ?? [],
          i = a ? s[Math.floor(Math.random() * s.length)] : h.u(k, j);
        k = i, o.reset(), P = (p = h.M[i]($, e))[p.length - 1][0] + .4, u = e;
      },
      O = t => {
        "mouse" === t.pointerType && (o.petting(true), o.wag(1));
      },
      Q = () => {
        o.petting(false), o.wag(.6);
      };
    return addEventListener("pointermove", E, {
      passive: true
    }), e.addEventListener("click", C), e.addEventListener("pointerenter", O), e.addEventListener("pointerleave", Q), () => {
      z(false), e.removeAttribute("data-playing"), Y.disconnect(), removeEventListener("pointermove", E), e.removeEventListener("click", C), e.removeEventListener("pointerenter", O), e.removeEventListener("pointerleave", Q);
    };
  }, [x, t, d, f, m]), <div ref={y} className={`pup-buddy ${g}`} style={u} data-live={x ? undefined : ""} data-facing={d}><CO_.f pose={t} facing={d} label={p} key={String(x)} /><span ref={b} aria-hidden={true} className="pup-bubble" data-show="false" /></div>;
};
export { __ex_PupBuddy_15 as PupBuddy };
