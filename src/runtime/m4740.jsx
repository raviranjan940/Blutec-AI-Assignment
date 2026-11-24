// module 4740 exports: RouteCurtain, curtainDown
import * as __m1063 from './m1063.jsx';
import * as __m18535 from './m18535.jsx';
import * as __m18566 from '@shims/navigation';
import * as __m49054 from './m49054.jsx';
import * as __m71645 from 'react';

var a = __m18566,
  r = __m71645,
  s = __m49054,
  i = __m1063;
let n = {
    stroke: i.s,
    strokeWidth: 3.4,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  },
  o = {
    ...n,
    fill: "none"
  };
function CL_({
  cls: e,
  at: a,
  d: r,
  len: s,
  fill: n
}) {
  return <g className={`tp-runner__leg ${e}`} style={{
    transformOrigin: `${a[0]}px ${a[1]}px`
  }}><g transform={`translate(${a[0]} ${a[1]})`}><path d={`${r}Z`} fill={n} /><path d={r} {...o} /><path d={i.T(s)} {...o} strokeWidth={2.4} /></g></g>;
}
function CD_({
  className: e = ""
}) {
  return <svg viewBox={`0 0 ${i.W} ${i.R}`} className={`tp-runner ${e}`} aria-hidden={true} focusable="false" style={{
    overflow: "visible"
  }}><ellipse cx={150} cy={i.x + 2} rx={86} ry={7} fill={i.s} opacity={.12} className="tp-runner__shadow" /><g className="tp-runner__body"><CL_ cls="tp-runner__leg--bf" at={i.X.hipF} d={i.a.backFar} len={i.x - 192} fill={i.Q} /><CL_ cls="tp-runner__leg--ff" at={i.X.shoulderF} d={i.a.frontFar} len={i.x - 192} fill={i.Q} /><g className="tp-runner__tail" style={{
        transformOrigin: `${i.X.tailBase[0]}px ${i.X.tailBase[1]}px`
      }}><path d={i.p.tailStem} {...o} strokeWidth={9} /><path d={i.p.tailStem} stroke={i.O} strokeWidth={4} fill="none" strokeLinecap="round" /><path d={i.p.tail} fill={i.O} {...n} /></g><CL_ cls="tp-runner__leg--bn" at={i.X.hipN} d={i.a.back} len={i.x - 194} fill={i.O} /><path d={i.p.body} fill={i.O} {...n} /><path d={i.p.chest} fill={i.O} {...n} /><CL_ cls="tp-runner__leg--fn" at={i.X.shoulderN} d={i.a.front} len={i.x - 194} fill={i.O} /><g className="tp-runner__head"><path d={i.p.collar} fill={i.N} {...n} strokeWidth={3} /><path d={i.p.tag} fill={i.l} {...n} strokeWidth={2.4} /><path d={i.p.earL} fill={i.Q} {...n} className="tp-runner__ear" style={{
          transformOrigin: "174px 82px"
        }} /><path d={i.p.earR} fill={i.Q} {...n} className="tp-runner__ear tp-runner__ear--r" style={{
          transformOrigin: "250px 82px"
        }} /><path d={i.p.head} fill={i.O} {...n} /><path d={i.p.topknot} fill={i.O} {...n} strokeWidth={3} /><path d={i.p.muzzle} fill={i.l} /><circle cx={181} cy={116} r={7} fill={i.u} opacity={.85} /><circle cx={243} cy={116} r={7} fill={i.u} opacity={.85} /><path d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" {...o} /><path d={i.p.nose} fill={i.s} /><path d={i.p.mouth} {...o} strokeWidth={3} /><path d={i.p.tongue} fill="#e98c8c" stroke={i.s} strokeWidth={2.2} strokeLinejoin="round" /></g></g></svg>;
}
var c = __m18535;
function h() {
  let e = document.querySelector(".tp-curtain")?.getAnimations().find(e => "tp-curtain-rest" === e.animationName);
  return e && "finished" !== e.playState && "number" == typeof e.currentTime ? e.currentTime : 1 / 0;
}
let f = [[18, 6, -76], [27, -4, -84], [36, 7, -72], [45, -3, -86], [54, 6, -74]];
const __ex_RouteCurtain_8 = function () {
  let e = a.useRouter(),
    i = a.usePathname(),
    n = r.useRef(null),
    o = r.useRef(null),
    l = r.useRef(0),
    u = r.useRef([]),
    p = r.useRef(i),
    g = r.useRef(false),
    m = r.useRef(() => {});
  return r.useEffect(() => {
    let t = n.current,
      a = document.documentElement,
      r = e => {
        t.dataset.state = e, "idle" === e ? delete a.dataset.curtain : a.dataset.curtain = e;
      },
      s = () => {
        u.current.forEach(clearTimeout), u.current = [];
      },
      i = (e, t) => u.current.push(setTimeout(e, t)),
      d = () => {
        "idle" !== t.dataset.state && "lifting" !== t.dataset.state && (s(), o.current = null, r("lifting"), dispatchEvent(new Event("tp:arrived")), g.current && (g.current = false, document.getElementById("main")?.focus({
          preventScroll: true
        })), i(() => r("idle"), 460));
      },
      f = t => {
        let a = new URL(t, location.href);
        if (a.pathname === location.pathname && a.search === location.search) {
          o.current = null, scrollTo({
            top: 0,
            behavior: "instant"
          }), i(d, 120);
          return;
        }
        e.push(a.pathname + a.search + a.hash), i(d, 6e3);
      },
      y = a => {
        if (a.defaultPrevented || 0 !== a.button || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey) return;
        let n = a.target?.closest?.("a[href]");
        if (!n || n.target && "_self" !== n.target || n.hasAttribute("download") || undefined !== n.dataset.noCurtain) return;
        let d = new URL(n.href, location.href);
        if (!(d.origin !== location.origin || /^\/(admin|api|media|_next)(\/|$)/.test(d.pathname)) && (d.pathname !== location.pathname || !d.hash && d.search === location.search) && !c.F()) {
          var u;
          let n;
          a.preventDefault(), a.stopPropagation(), g.current = 0 === a.detail, e.prefetch(d.pathname + d.search), dispatchEvent(new Event("tp:navigate")), u = d.href, n = t.dataset.state, (o.current = u, "covered" === n || "snap" === n) ? f(u) : "covering" === n || ((s(), "intro" === n && 1080 > h()) ? (r("covered"), l.current = performance.now(), f(u)) : (r("covering"), i(() => {
            r("covered"), l.current = performance.now(), o.current && f(o.current);
          }, 300)));
        }
      },
      x = () => {
        c.F() || location.pathname === p.current || (s(), r("snap"), l.current = performance.now(), i(d, 1400));
      },
      b = e => {
        e.persisted && (s(), r("idle"));
      };
    if ("intro" === t.dataset.state) {
      let e = h();
      i(() => dispatchEvent(new Event("tp:arrived")), Math.max(0, 560 - e)), i(() => "intro" === t.dataset.state && r("idle"), Math.max(0, 1080 - e));
    }
    return c.F() && r("idle"), addEventListener("click", y, true), addEventListener("popstate", x), addEventListener("pageshow", b), m.current = d, () => {
      s(), delete a.dataset.curtain, removeEventListener("click", y, true), removeEventListener("popstate", x), removeEventListener("pageshow", b);
    };
  }, [e]), r.useEffect(() => {
    if (i === p.current) return;
    p.current = i;
    let e = n.current?.dataset.state;
    if ("covered" !== e && "snap" !== e && "covering" !== e) return;
    let t = Math.max(0, 140 - (performance.now() - l.current)),
      a = setTimeout(() => requestAnimationFrame(() => m.current()), "covering" === e ? 340 : t);
    return () => clearTimeout(a);
  }, [i]), <div ref={n} className="tp-curtain" data-state="intro" aria-hidden={true}><div className="tp-curtain__blanket"><svg className="tp-curtain__edge tp-curtain__edge--top" width="100%" height="40" preserveAspectRatio="none"><defs><pattern id="tp-curtain-scallop" width="76" height="40" patternUnits="userSpaceOnUse"><path d="M0 40V27A38 25 0 0 1 76 27V40Z" fill="#fbe3b4" /><path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" /><path d="M11 33A27 19 0 0 1 65 33" fill="none" stroke="#2a170e" strokeWidth="1.6" strokeDasharray="3.5 5.5" strokeLinecap="round" opacity=".42" /></pattern></defs><rect width="100%" height="40" fill="url(#tp-curtain-scallop)" /></svg><div className="tp-curtain__stage"><div className="tp-curtain__prints">{f.map(([e, a, r], i) => <svg viewBox="0 0 64 64" className="tp-curtain__print" style={{
            left: `${e}%`,
            top: `${a}px`,
            rotate: `${r + 90}deg`,
            animationDelay: `${.16 + .12 * i}s`
          }} key={i}><path d={s.f} /></svg>)}</div><div className="tp-curtain__runner"><CD_ /></div><p className="tp-curtain__note font-scrawl">every puppy is family</p></div><svg className="tp-curtain__edge tp-curtain__edge--bottom" width="100%" height="40" preserveAspectRatio="none"><rect width="100%" height="40" fill="url(#tp-curtain-scallop)" /></svg></div></div>;
};
const __ex_curtainDown_9 = function () {
  let e = document.querySelector(".tp-curtain")?.dataset.state;
  return "intro" === e && 560 > h() || "covering" === e || "covered" === e || "snap" === e;
};
export { __ex_RouteCurtain_8 as RouteCurtain };
export { __ex_curtainDown_9 as curtainDown };
