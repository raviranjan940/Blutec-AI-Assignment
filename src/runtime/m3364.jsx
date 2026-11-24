// module 3364 exports: Meet
import * as __m6928 from './m6928.jsx';
import * as __m10542 from './m10542.jsx';
import * as __m12008 from './m12008.jsx';
import * as __m18535 from './m18535.jsx';
import * as __m22016 from '@shims/link';
import * as __m28409 from './m28409.jsx';
import * as __m37806 from './m37806.jsx';
import * as __m41405 from './m41405.jsx';
import * as __m42136 from './m42136.jsx';
import * as __m44230 from './m44230.jsx';
import * as __m44573 from './m44573.jsx';
import * as __m47414 from './m47414.jsx';
import * as __m55560 from './m55560.jsx';
import * as __m68514 from './m68514.jsx';
import * as __m70031 from './m70031.jsx';
import * as __m71645 from 'react';
import * as __m72203 from './m72203.jsx';
import * as __m74008 from './m74008.jsx';
import * as __m79294 from './m79294.jsx';
import * as __m83411 from './m83411.jsx';
import * as __m85260 from './m85260.jsx';
import * as __m86427 from './m86427.jsx';
import * as __m87022 from './m87022.jsx';
import * as __m91360 from './m91360.jsx';
import * as __m96173 from './m96173.jsx';

var CA_ = __m22016,
  s = __m71645,
  n = __m10542,
  l = __m86427,
  r = __m28409,
  i = __m96173,
  o = __m12008,
  d = __m55560,
  c = __m79294,
  h = __m87022;
let p = new Set(),
  u = ({
    timestamp: e
  }) => {
    p.forEach(t => t.tick(e));
  };
class m extends c.f {
  constructor(e) {
    super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = false, this.hasNextTarget = false, this.nextTarget = 0, this.stop = () => {
      "idle" !== this.state && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.factory = e.type, this.generator = this.factory(e);
    let {
      driver: t
    } = e;
    t && (this.driver = t(e => this.tick(e))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : (p.size || h.y.update(u, true), p.add(this));
  }
  setTarget(e, t) {
    this.nextTarget = e, this.nextVelocity = t, this.hasNextTarget = true;
  }
  retarget(e, t) {
    let {
      options: a,
      generator: s
    } = this;
    a.keyframes = e, a.velocity = t, this.startTime = this.now(), this.currentTime = 0, s.retarget ? s.retarget(e, t) : this.generator = this.factory(a);
  }
  tick(e) {
    let {
        options: t,
        hasNextTarget: a
      } = this,
      {
        delay: s = 0,
        onUpdate: n,
        onPlay: l
      } = t;
    this.started || (this.startTime = d.f(this.startTime, e));
    let r = Math.round(e - this.startTime) - s,
      i = this.currentTime = Math.max(0, r),
      o = this.generator.next(i),
      c = r < 0 ? t.keyframes[0] : o.value;
    if (a) {
      this.hasNextTarget = false;
      let {
        keyframes: e
      } = t;
      e[0] = c, e[1] = this.nextTarget, this.retarget(e, this.nextVelocity ?? this.getGeneratorVelocity());
    }
    (a || !this.started) && (this.started = true, l?.()), "running" === this.state && (n?.(c), o.done && r >= 0 && !a && !this.hasNextTarget && "running" === this.state && (this.notifyFinished(), this.teardown(), this.state = "finished", t.onComplete?.()));
  }
  getGeneratorVelocity() {
    return o.f(this.generator, this.currentTime, this.options.velocity);
  }
  now() {
    return this.driver ? this.driver.now() : i.f.now();
  }
  teardown() {
    this.state = "idle", this.driver ? this.driver.stop() : (p.delete(this), p.size || h.Y(u));
  }
}
var f = __m85260,
  x = __m83411;
function g(e, t, a) {
  return function (e, t, a) {
    let s,
      n = e.get(),
      l = null,
      r = "string" == typeof n ? n.replace(/[\d.-]/g, "") : undefined,
      i = e => s(r ? e + r : e),
      o = () => e.events.animationStart?.notify(),
      d = () => {
        l && (l.stop(), l = null), e.animation = undefined;
      };
    if (e.attach((t, n) => {
      s = n;
      let r = f.f(t);
      if (l?.state === "running") return void l.setTarget(r, a.velocity);
      let c = f.f(e.get()),
        h = l ? l.getGeneratorVelocity() : e.getVelocity();
      if (d(), c === r) return;
      let p = l = new m({
        ...{
          keyframes: [c, r],
          velocity: h,
          restDelta: .001,
          restSpeed: .01,
          ...a,
          onUpdate: i
        },
        onPlay: o
      });
      e.animation = p, p.then(() => {
        l === p && (l = null, e.animation = undefined, e.events.animationComplete?.notify());
      });
    }, d), x.f(t)) {
      let s = true === a.skipInitialAnimation,
        n = t.on("change", t => {
          var a, n, l, i;
          s ? (s = false, e.jump((a = t, (n = r) ? a + n : a), false)) : e.set((l = t, (i = r) ? l + i : l));
        }),
        l = e.on("destroy", n);
      return () => {
        n(), l();
      };
    }
    return d;
  }(e, t, {
    ...a,
    type: r.f
  });
}
__m68514, __m44573;
var v = __m37806,
  y = __m47414;
function j(e) {
  let t = y.f(() => l.o(e)),
    {
      isStatic: a
    } = s.useContext(v.f);
  if (a) {
    let [, a] = s.useState(e);
    s.useEffect(() => t.on("change", a), []);
  }
  return t;
}
var b = __m44230,
  k = __m74008;
function _(e, t) {
  let a = j(t()),
    s = () => a.set(t());
  return s(), k.f(() => {
    let t = () => h.y.preRender(s, false, true),
      a = e.map(e => e.on("change", t));
    return () => {
      a.forEach(e => e()), h.Y(s);
    };
  }), a;
}
function N(e, t, a, s) {
  if ("function" == typeof e) {
    let t;
    return l.I.current = [], e(), t = _(l.I.current, e), l.I.current = undefined, t;
  }
  if (undefined !== a && !Array.isArray(a) && "function" != typeof t) {
    var n = e,
      r = t,
      i = a,
      o = s;
    let l = y.f(() => Object.keys(i)),
      d = y.f(() => ({}));
    for (let e of l) d[e] = N(n, r, i[e], o);
    return d;
  }
  let d = "function" == typeof t ? t : function (...e) {
      let t = !Array.isArray(e[0]),
        a = t ? 0 : -1,
        s = e[0 + a],
        n = e[1 + a],
        l = e[2 + a],
        r = e[3 + a],
        i = b.f(n, l, r);
      return t ? i(s) : i;
    }(t, a, s),
    c = Array.isArray(e) ? w(e, d) : w([e], ([e]) => d(e)),
    h = Array.isArray(e) ? undefined : e.accelerate;
  if (h && !h.isTransformed && "function" != typeof t && Array.isArray(a) && s?.clamp !== false) {
    let e = s?.ease;
    c.accelerate = {
      ...h,
      times: [0, ...t, 1],
      keyframes: [a[0], ...a, a[a.length - 1]],
      isTransformed: true,
      ...(e ? {
        ease: Array.isArray(e) ? [e[0], ...e] : e
      } : {})
    };
  }
  return c;
}
function w(e, t) {
  let a = y.f(() => []);
  return _(e, () => {
    a.length = 0;
    let s = e.length;
    for (let t = 0; t < s; t++) a[t] = e[t].get();
    return t(a);
  });
}
var M = __m6928,
  M = M,
  E = __m41405,
  R = __m91360,
  S = __m70031,
  T = __m42136;
let L = {
    available: "Available",
    reserved: "Reserved",
    rehomed: "Gone home"
  },
  C = ["#a24a1a", "#5a3a28", "#d4893f", "#b8644a", "#7a4a2e"];
function A({
  pup: e,
  index: s,
  sizes: n,
  preload: l = false
}) {
  let r = e.media.some(e => "video" === e.kind);
  return <CA_.default href={`/puppies/${e.slug}`} className="tp-door__link" style={{
    "--door": C[s % C.length]
  }}><span className="tp-door__plate"><span className="font-plush tp-door__name">{e.displayName}</span><span className="tp-door__meta">{e.name ? `${e.breed}, ` : ""}{e.genderLabel.toLowerCase()}{e.age ? `, ${e.age}` : ""}{r ? ", with video" : ""}</span></span><span className="tp-door__frame"><span className="tp-door__room">{e.cover && <T.f media={e.cover} sizes={n} preload={l} />}</span><span aria-hidden={true} className="tp-door__way"><span className="tp-door__leaf"><S.f className="tp-door__peephole" /><span className="tp-door__knob" /></span></span><span className="tp-door__tag font-scrawl">{L[e.status]}</span></span></CA_.default>;
}
var $ = __m18535,
  CZ_ = __m72203;
const __ex_Meet_4 = function ({
  section: e,
  puppies: l,
  tone: r
}) {
  let i = s.useRef(null),
    o = s.useRef(null),
    d = $.z(),
    [c, h] = s.useState(0),
    [p, u] = s.useState(false),
    m = s.useRef(null);
  s.useLayoutEffect(() => {
    let e = () => {
      let e = matchMedia("(min-width: 1024px)").matches;
      u(e && !d);
      let t = o.current,
        a = m.current;
      if (a && t && e && !d) {
        let e = a.parentElement,
          s = e.querySelector(".tp-meet__head"),
          n = Math.max(64, ...[...t.querySelectorAll(".tp-door__plate")].map(e => e.offsetHeight)),
          l = a.querySelector(".tp-meet__floor")?.offsetHeight ?? 0,
          r = Math.max(128, Math.min(256, .15 * innerWidth, (e.clientHeight - (s ? s.offsetTop + s.offsetHeight : 0) - l - n - 40) / 1.3));
        a.style.setProperty("--door-w", `${r.toFixed(0)}px`);
      } else a?.style.removeProperty("--door-w");
      h(t ? Math.max(0, t.scrollWidth - innerWidth) : 0);
    };
    e();
    let t = new ResizeObserver(e);
    return o.current && t.observe(o.current), m.current?.parentElement && t.observe(m.current.parentElement), addEventListener("resize", e), () => (t.disconnect(), removeEventListener("resize", e));
  }, [d]);
  let {
      scrollYProgress: f
    } = n.f({
      target: i,
      offset: ["start start", "end end"]
    }),
    y = function (e, t = {}) {
      return function (e, t, a) {
        let {
            isStatic: n
          } = s.useContext(v.f),
          l = () => x.f(e) ? e.get() : e;
        if (n) return N(l);
        let r = j(l());
        return s.useInsertionEffect(() => a(r, e, t), [r, JSON.stringify(t)]), r;
      }(e, t, g);
    }(f, {
      stiffness: 170,
      damping: 32,
      mass: .35
    }),
    b = N(y, [0, 1], [0, -c]);
  return (s.useLayoutEffect(() => {
    let e = o.current;
    if (!p || !e) return;
    let t = (t, a) => {
      m.current?.style.setProperty("--floor-x", `${t.toFixed(1)}px`);
      let s = .36 * innerWidth;
      for (let n of e.children) {
        let e = n.offsetLeft + t < s;
        "true" === n.dataset.open !== e && (n.dataset.open = String(e), e && a && R.cuePup({
          look: n,
          secs: .9
        }));
      }
    };
    return t(b.get(), false), b.on("change", e => t(e, true));
  }, [p, b]), l.length) ? <CZ_.f tone={r} aria-labelledby="meet-title" className="tp-meet" data-pinned={p || undefined}><div ref={i} data-pin-range={true} style={{
      height: p ? `calc(100vh + ${Math.round(.8 * c)}px)` : undefined,
      "--pinned": +!!p
    }}><div className="tp-meet__stage"><header className="tp-meet__head gutter"><div><h2 id="meet-title" className="font-plush text-huge">{e.heading}</h2>{e.body && <p className="text-lede mt-3 max-w-[44ch] text-[var(--ink-soft)]">{e.body}</p>}</div>{e.data.ctaLabel && <CA_.default href={e.data.ctaHref ?? "/puppies"} className="btn btn-primary shrink-0">{e.data.ctaLabel}</CA_.default>}</header><div ref={m} className="tp-meet__hall"><M.e ref={o} style={p ? {
            x: b
          } : undefined} className="tp-meet__track" data-treadmill={true} aria-label="Puppies looking for a family">{l.map((e, a) => <li className="tp-door" data-open={p ? "false" : "true"} key={e.id}><A pup={e} index={a} sizes="(min-width: 1024px) 15rem, 44vw" /></li>)}<li className="tp-door tp-door--all" data-open="true"><CA_.default href={e.data.ctaHref ?? "/puppies"} className="tp-door__link"><span className="tp-door__frame tp-door__frame--all"><span className="font-plush tp-door__all">Meet them all</span></span></CA_.default></li></M.e><div aria-hidden={true} className="tp-meet__floor" /><E.f pose={p ? "walk" : "sit"} act={p ? "treadmill" : undefined} className="tp-meet__teddy" /></div></div></div></CZ_.f> : null;
};
export { __ex_Meet_4 as Meet };
