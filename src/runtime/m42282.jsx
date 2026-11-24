// module 42282 exports: HeroLineup
import * as __m18535 from './m18535.jsx';
import * as __m22016 from '@shims/link';
import * as __m42136 from './m42136.jsx';
import * as __m71645 from 'react';

var CA_ = __m22016,
  s = __m71645,
  CN_ = __m42136,
  l = __m18535;
let r = [[9, 8.6, .62, -5], [22.5, 10.4, .8, 3], [35, 9.2, .7, -2], [65, 9.4, .74, 3], [77.5, 10.6, .82, -3], [91, 8.4, .6, 4]],
  i = [1900, 2500, 1700, 2300, 2e3, 2800, 1800],
  o = e => {
    let t = [...e];
    for (let e = t.length - 1; e > 0; e--) {
      let a = Math.floor(Math.random() * (e + 1));
      [t[e], t[a]] = [t[a], t[e]];
    }
    return t;
  };
const __ex_HeroLineup_6 = function ({
  friends: e
}) {
  let d = Math.min(r.length, e.length),
    [c, h] = s.useState(() => e.slice(0, d).map((e, t) => t)),
    [p, u] = s.useState({}),
    [m, f] = s.useState(null),
    [x, g] = s.useState(null),
    [v, y] = s.useState(e.length > d ? d : null),
    j = s.useRef(null),
    b = s.useRef(null),
    k = s.useRef(c);
  if (s.useEffect(() => {
    k.current = c;
  }, [c]), s.useEffect(() => {
    let t = j.current;
    if (!t || !d || l.F()) return;
    let a = e.length > d,
      s = t.closest("[data-pup-scene]"),
      n = true,
      r = 0,
      c = true,
      p = new IntersectionObserver(([e]) => n = e.isIntersecting, {
        threshold: .35
      });
    p.observe(t);
    let m = () => r = performance.now() + 1200;
    addEventListener("scroll", m, {
      passive: true
    }), addEventListener("pointerdown", m, {
      passive: true
    }), t.addEventListener("pointerover", m, {
      passive: true
    });
    let x = e.map((e, t) => t).filter(e => !k.current.includes(e)),
      g = x.includes(d) ? [d, ...o(x.filter(e => e !== d))] : o(x),
      v = [],
      _ = -1,
      N = 0,
      w = [],
      M = (e, t) => w.push(setTimeout(e, t)),
      E = 0,
      R = () => {
        if (!(!document.hidden && n && performance.now() > r && s?.dataset.here !== "false")) return M(R, 900);
        if (!a) return S();
        g.length || (g = o(e.map((e, t) => t).filter(e => !k.current.includes(e))));
        let t = b.current?.dataset.for === String(g[0]) ? b.current.querySelector("img") : null;
        if (!t || !t.complete || !t.naturalWidth) return ++E < 15 ? M(R, 400) : (g.push(g.shift()), y(g[0] ?? null), E = 0, M(R, 800));
        E = 0, t.decode().then(S, S);
      },
      S = () => {
        v.length || (v = o([...t.children].map((e, t) => e.getClientRects().length ? t : -1).filter(e => e >= 0)).filter((e, t, a) => !(0 === t && e === _ && a.length > 1)));
        let e = v.shift();
        if (undefined === e) return M(R, 2e3);
        _ = e;
        let s = a ? g.shift() : k.current[e];
        u(t => ({
          ...t,
          [e]: "duck"
        })), M(() => {
          if (a) {
            let t = k.current[e];
            h(t => t.map((t, a) => a === e ? s : t)), g.push(t), y(g[0] ?? null);
          }
          u(t => ({
            ...t,
            [e]: "pop"
          })), f(e), M(() => f(t => t === e ? null : t), 1800), M(() => u(t => ({
            ...t,
            [e]: undefined
          })), 700);
        }, 360), M(R, i[N++ % i.length]);
      };
    a && y(g[0] ?? null);
    let T = [...t.querySelectorAll(".tp-lineup__pup")].flatMap(e => e.getAnimations()).filter(e => "tp-peek" === e.animationName),
      L = () => c && M(R, 250);
    return Promise.all(T.map(e => e.finished)).then(L, L), () => {
      c = false, w.forEach(clearTimeout), w = [], p.disconnect(), removeEventListener("scroll", m), removeEventListener("pointerdown", m), t.removeEventListener("pointerover", m);
    };
  }, [e, d]), !d) return null;
  let _ = e => {
      let [t, a, s, n] = r[e];
      return {
        "--x": `${t}%`,
        "--w": `${a}rem`,
        "--peek": s,
        "--tilt": `${n}deg`,
        "--i": e
      };
    },
    N = e => () => g(t => t === e ? null : t);
  return <><ul ref={j} className="tp-lineup" aria-label="Some of the puppies in our showroom">{c.map((s, l) => {
        let r = e[s];
        return <li className="tp-lineup__seat" style={_(l)} key={l}><CA_.default href={`/puppies/${r.slug}`} className="tp-lineup__pup" data-pup-friend={true} data-state={p[l]} aria-label={`Meet ${r.displayName}, ${r.breed}`} onPointerEnter={() => g(l)} onPointerLeave={N(l)} onFocus={() => g(l)} onBlur={N(l)}><span className="tp-lineup__photo"><CN_.f media={r.cover} sizes="11rem" preload={l < 2} eager={true} key={r.id} /></span></CA_.default></li>;
      })}</ul><ul aria-hidden={true} className="tp-lineup tp-lineup--tags">{c.map((a, s) => <li className="tp-lineup__seat" style={_(s)} key={s}><span className="tp-lineup__ghost" data-state={p[s]} data-tag={m === s || x === s ? "show" : undefined}><span className="tp-lineup__name font-scrawl">{e[a].displayName}</span></span></li>)}</ul>{null !== v && <span ref={b} aria-hidden={true} className="tp-lineup__wings" data-for={v}><CN_.f media={e[v].cover} sizes="11rem" alt="" eager={true} /></span>}</>;
};
export { __ex_HeroLineup_6 as HeroLineup };
