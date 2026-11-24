// module 86327 exports: MotionProvider
import * as __m706 from './m706.jsx';
import * as __m3163 from './m3163.jsx';
import * as __m3973 from './m3973.jsx';
import * as __m4035 from './m4035.jsx';
import * as __m6840 from './m6840.jsx';
import * as __m12008 from './m12008.jsx';
import * as __m13565 from './m13565.jsx';
import * as __m14229 from './m14229.jsx';
import * as __m17218 from './m17218.jsx';
import * as __m19928 from './m19928.jsx';
import * as __m21012 from './m21012.jsx';
import * as __m24463 from './m24463.jsx';
import * as __m25522 from './m25522.jsx';
import * as __m29462 from './m29462.jsx';
import * as __m30162 from './m30162.jsx';
import * as __m31178 from './m31178.jsx';
import * as __m32525 from './m32525.jsx';
import * as __m33871 from './m33871.jsx';
import * as __m33887 from './m33887.jsx';
import * as __m35043 from './m35043.jsx';
import * as __m37806 from './m37806.jsx';
import * as __m38638 from './m38638.jsx';
import * as __m41980 from './m41980.jsx';
import * as __m44493 from './m44493.jsx';
import * as __m44573 from './m44573.jsx';
import * as __m44947 from './m44947.jsx';
import * as __m44966 from './m44966.jsx';
import * as __m46791 from './m46791.jsx';
import * as __m47414 from './m47414.jsx';
import * as __m47507 from './m47507.jsx';
import * as __m48070 from './m48070.jsx';
import * as __m48940 from './m48940.jsx';
import * as __m49404 from './m49404.jsx';
import * as __m49652 from './m49652.jsx';
import * as __m55560 from './m55560.jsx';
import * as __m57788 from './m57788.jsx';
import * as __m60140 from './m60140.jsx';
import * as __m60830 from './m60830.jsx';
import * as __m60900 from './m60900.jsx';
import * as __m61327 from './m61327.jsx';
import * as __m62118 from './m62118.jsx';
import * as __m63074 from './m63074.jsx';
import * as __m64978 from './m64978.jsx';
import * as __m65091 from './m65091.jsx';
import * as __m65566 from './m65566.jsx';
import * as __m66857 from './m66857.jsx';
import * as __m67926 from './m67926.jsx';
import * as __m68000 from './m68000.jsx';
import * as __m68514 from './m68514.jsx';
import * as __m69577 from './m69577.jsx';
import * as __m70596 from './m70596.jsx';
import * as __m71645 from 'react';
import * as __m72590 from './m72590.jsx';
import * as __m72846 from './m72846.jsx';
import * as __m75554 from './m75554.jsx';
import * as __m76307 from './m76307.jsx';
import * as __m76959 from './m76959.jsx';
import * as __m78047 from './m78047.jsx';
import * as __m79294 from './m79294.jsx';
import * as __m81261 from './m81261.jsx';
import * as __m81296 from './m81296.jsx';
import * as __m83411 from './m83411.jsx';
import * as __m83920 from './m83920.jsx';
import * as __m84049 from './m84049.jsx';
import * as __m85260 from './m85260.jsx';
import * as __m85983 from './m85983.jsx';
import * as __m86427 from './m86427.jsx';
import * as __m86579 from './m86579.jsx';
import * as __m87022 from './m87022.jsx';
import * as __m89026 from './m89026.jsx';
import * as __m91559 from './m91559.jsx';
import * as __m93787 from './m93787.jsx';
import * as __m94581 from './m94581.jsx';
import * as __m96173 from './m96173.jsx';
import * as __m97307 from './m97307.jsx';
import * as __m99951 from './m99951.jsx';

var i = __m71645,
  CS_ = __m48070,
  n = __m13565;
function CO_({
  children: t,
  features: a,
  strict: l = false
}) {
  let [, h] = i.useState(!r(a)),
    u = i.useRef(undefined);
  if (!r(a)) {
    let {
      renderer: t,
      ...e
    } = a;
    u.current = t, n.f(e);
  }
  return i.useEffect(() => {
    r(a) && a().then(({
      renderer: t,
      ...e
    }) => {
      n.f(e), u.current = t, h(true);
    });
  }, []), <CS_.f.Provider value={{
    renderer: u.current,
    strict: l
  }}>{t}</CS_.f.Provider>;
}
function r(t) {
  return "function" == typeof t;
}
function a(t, e) {
  if (t?.inherit && e) {
    let {
      inherit: i,
      ...s
    } = t;
    return {
      ...e,
      ...s
    };
  }
  return t;
}
var CL_ = __m37806,
  h = __m47414;
function CU_({
  children: t,
  ...s
}) {
  let n = i.useContext(CL_.f);
  (s = {
    ...n,
    ...s
  }).transition = a(s.transition, n.transition), s.isStatic = h.f(() => s.isStatic);
  let o = i.useMemo(() => s, [JSON.stringify(s.transition), s.transformPagePoint, s.reducedMotion, s.skipAnimations, s.isValidProp]);
  return <CL_.f.Provider value={o}>{t}</CL_.f.Provider>;
}
class c {
  constructor(t) {
    this.isMounted = false, this.node = t;
  }
  update() {}
}
var d = __m60830,
  p = __m30162,
  m = __m87022;
function f(t) {
  return [t("x"), t("y")];
}
function v({
  top: t,
  left: e,
  right: i,
  bottom: s
}) {
  return {
    x: {
      min: e,
      max: i
    },
    y: {
      min: t,
      max: s
    }
  };
}
var y = __m706;
function g(t) {
  return undefined === t || 1 === t;
}
function x({
  scale: t,
  scaleX: e,
  scaleY: i
}) {
  return !g(t) || !g(e) || !g(i);
}
function w(t) {
  return x(t) || S(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function S(t) {
  var e, i;
  return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i;
}
function T(t, e, i, s, n) {
  return undefined !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
}
function P(t, e = 0, i = 1, s, n) {
  t.min = T(t.min, e, i, s, n), t.max = T(t.max, e, i, s, n);
}
function E(t, {
  x: e,
  y: i
}) {
  P(t.x, e.translate, e.scale, e.originPoint), P(t.y, i.translate, i.scale, i.originPoint);
}
function b(t, e) {
  t.min += e, t.max += e;
}
function A(t, e, i, s, n = .5) {
  let o = y.f(t.min, t.max, n);
  P(t, e, i, o, s);
}
function L(t, e) {
  return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function D(t, e, i) {
  let s = i ?? t;
  A(t.x, L(e.x, s.x), e.scaleX, e.scale, e.originX), A(t.y, L(e.y, s.y), e.scaleY, e.scale, e.originY);
}
function R(t, e) {
  return v(function (t, e) {
    if (!e) return t;
    let i = e({
        x: t.left,
        y: t.top
      }),
      s = e({
        x: t.right,
        y: t.bottom
      });
    return {
      top: i.y,
      left: i.x,
      bottom: s.y,
      right: s.x
    };
  }(t.getBoundingClientRect(), e));
}
var k = __m46791,
  M = __m83411;
function C(t, e) {
  let i = t.getValue("willChange");
  if (M.f(i) && i.add) return i.add(e);
  if (!i && k.f.WillChange) {
    let i = new k.f.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
var V = __m63074,
  j = __m96173,
  B = __m38638,
  N = __m76959,
  O = __m3163,
  F = __m48940;
let z = t => {
  let e = ({
    timestamp: e
  }) => t(e);
  return {
    start: (t = true) => m.y.update(e, t),
    stop: () => m.Y(e),
    now: () => F.f.isProcessing ? F.f.timestamp : j.f.now()
  };
};
var U = __m29462,
  I = __m68514,
  W = __m66857,
  H = __m12008,
  _ = __m14229,
  Y = __m44573,
  $ = __m55560,
  X = __m49404,
  K = __m79294;
let q = t => t / 100;
class G extends K.f {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: false,
      value: undefined
    }, this.stop = () => {
      let {
        motionValue: t
      } = this.options;
      t && t.updatedAt !== j.f.now() && this.tick(j.f.now()), this.isStopped = true, "idle" !== this.state && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), false === t.autoplay && this.pause(), X.H(this, this.options);
  }
  initAnimation() {
    let {
      options: t
    } = this;
    Y.f(t);
    let {
        type: e = I.f,
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: n,
        velocity: o = 0
      } = t,
      {
        keyframes: r
      } = t,
      a = e || I.f;
    a !== I.f && "number" != typeof r[0] && (this.mixKeyframes = B.f(q, O.f(r[0], r[1])), r = [0, 100]);
    let l = a(r === t.keyframes ? t : {
      ...t,
      keyframes: r
    });
    "mirror" === n && (this.mirroredGenerator = a({
      ...t,
      keyframes: [...r].reverse(),
      velocity: -o
    })), null === l.calculatedDuration && (l.calculatedDuration = W.y(l));
    let {
      calculatedDuration: h
    } = l;
    this.calculatedDuration = h, this.resolvedDuration = h + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = l;
  }
  updateTime(t) {
    let e = Math.round(t - this.startTime) * this.playbackSpeed;
    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e;
  }
  tick(t, e = false) {
    let i,
      {
        generator: s,
        totalDuration: n,
        mixKeyframes: o,
        mirroredGenerator: r,
        resolvedDuration: a,
        calculatedDuration: l
      } = this;
    if (null === this.startTime) return s.next(0);
    let {
      delay: h = 0,
      keyframes: u,
      repeat: c,
      repeatType: d,
      repeatDelay: p,
      type: m,
      onUpdate: f,
      finalKeyframe: v
    } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = $.f(this.startTime, t)), this.pendingStartTime = undefined, this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
    let y = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
      g = this.playbackSpeed >= 0 ? y < 0 : y > n;
    this.currentTime = Math.max(y, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
    let x = this.currentTime,
      w = s;
    if (c) {
      let t = Math.min(this.currentTime, n) / a,
        e = Math.floor(t),
        i = t % 1;
      !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === d ? (i = 1 - i, p && (i -= p / a)) : "mirror" === d && (w = r)), x = N.f(0, 1, i) * a;
    }
    g ? (this.delayState.value = u[0], i = this.delayState) : i = w.next(x), o && !g && (i.value = o(i.value));
    let {
      done: S
    } = i;
    g || null === l || (S = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
    let T = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
    return T && m !== U.f && (i.value = _.f(u, this.options, v, this.speed)), f && f(i.value), T && this.finish(), i;
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
  get duration() {
    return V.q(this.calculatedDuration);
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + V.q(t);
  }
  get time() {
    return V.q(this.currentTime);
  }
  set time(t) {
    t = V.Z(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
  }
  getGeneratorVelocity() {
    return H.f(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    let e = this.playbackSpeed !== t;
    e && this.driver && this.updateTime(j.f.now()), this.playbackSpeed = t, e && this.driver && (this.time = V.q(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    let {
      driver: t = z,
      startTime: e
    } = this.options;
    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
    let i = this.driver.now();
    "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = e ?? (this.pendingStartTime = i)), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(j.f.now()), this.holdTime = this.currentTime;
  }
  complete() {
    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = undefined);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, true);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
var J = __m21012,
  Z = __m94581,
  Q = __m68000,
  tt = __m91559,
  te = __m41980;
let ti = {
  anticipate: __m78047.f,
  backInOut: te.E,
  circInOut: tt.s
};
class ts extends Q.f {
  constructor(t) {
    "string" == typeof t.ease && t.ease in ti && (t.ease = ti[t.ease]), Y.f(t), super(t), undefined !== t.startTime && false !== t.autoplay && (this.startTime = t.startTime), this.options = t;
  }
  updateMotionValue(t) {
    let {
      motionValue: e,
      onUpdate: i,
      onComplete: s,
      element: n,
      ...o
    } = this.options;
    if (!e) return;
    if (undefined !== t) return void e.set(t);
    let r = new G({
        ...o,
        autoplay: false
      }),
      a = Math.max(10, j.f.now() - this.startTime),
      l = N.f(0, 10, a - 10),
      h = r.sample(a).value,
      {
        name: u
      } = this.options;
    n && u && Z.f(n, u, h), e.setWithVelocity(r.sample(Math.max(0, a - l)).value, h, l), r.stop();
  }
}
var tn = __m65566,
  to = __m97307,
  tr = __m69577;
let ta = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tr.u.test(t) || "0" === t) && !t.startsWith("url("));
function tl(t) {
  t.duration = 0, t.type = "keyframes";
}
var th = K,
  tu = __m60900,
  tc = __m62118;
let td = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
  tp = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
  tm = tu.f(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
class tf extends th.f {
  constructor(t) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = j.f.now();
    let {
      keyframes: e,
      name: i,
      motionValue: s,
      element: n
    } = t;
    t.autoplay ?? (t.autoplay = true), t.delay ?? (t.delay = 0), t.type ?? (t.type = "keyframes"), t.repeat ?? (t.repeat = 0), t.repeatDelay ?? (t.repeatDelay = 0), t.repeatType ?? (t.repeatType = "loop");
    let o = n?.KeyframeResolver || J.p;
    this.keyframeResolver = new o(e, (e, i, s) => this.onKeyframesResolved(e, i, t, !s), i, s, n), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, e, i, s) {
    let n;
    this.keyframeResolver = undefined;
    let {
      name: o,
      type: r,
      velocity: a,
      delay: l,
      isHandoff: h,
      onUpdate: u
    } = i;
    this.resolvedAt = j.f.now();
    let c = true;
    !function (t, e, i, s) {
      let n = t[0];
      if (null === n) return false;
      if ("display" === e || "visibility" === e) return true;
      let o = t[t.length - 1],
        r = ta(n, e),
        a = ta(o, e);
      return r && a ? function (t) {
        let e = t[0];
        if (1 === t.length) return true;
        for (let i = 0; i < t.length; i++) if (t[i] !== e) return true;
      }(t) || ("spring" === i || to.f(i)) && s : (r !== a && tn.w(false, `You are trying to animate ${e} from "${n}" to "${o}". "${r ? o : n}" is not an animatable value.`, "value-not-animatable"), false);
    }(t, o, r, a) && (c = false, (k.f.instantAnimations || !l) && u?.(_.f(t, i, e)), t[0] = t[t.length - 1], tl(i), i.repeat = 0);
    let {
      onComplete: d
    } = i;
    i.finalKeyframe = e, i.keyframes = t, i.onComplete = () => {
      d?.(), this.notifyFinished();
    };
    let p = c && !h && function (t) {
      let {
        motionValue: e,
        name: i,
        repeatDelay: s,
        repeatType: n,
        damping: o,
        type: r,
        keyframes: a
      } = t;
      if (!i || !(tc.f.has(i) || tp.has(i))) return false;
      let l = e?.owner?.current;
      if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return false;
      let {
        onUpdate: h,
        transformTemplate: u
      } = e.owner.getProps();
      return tm() && (tc.f.has(i) || tp.has(i) && function (t) {
        for (let e = 0; e < t.length; e++) if ("string" == typeof t[e] && td.test(t[e])) return true;
        return false;
      }(a)) && ("transform" !== i || !u) && !h && !s && "mirror" !== n && 0 !== o && "inertia" !== r;
    }(i);
    if (s && (p || this.resolvedAt !== this.createdAt) && (i.startTime ?? (i.startTime = $.f(this.createdAt, this.resolvedAt))), p) {
      i.element = i.motionValue?.owner?.current;
      try {
        n = new ts(i);
      } catch {
        n = new G(i);
      }
    } else n = new G(i);
    this.pendingTimeline && (this.stopTimeline = n.attachTimeline(this.pendingTimeline), this.pendingTimeline = undefined), this._animation = n;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(t, e) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), J.f()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function tv(t, e) {
  let i = t?.[e] ?? t?.default ?? t;
  return i !== t ? a(i, t) : i;
}
var ty = __m57788;
let tg = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  tx = {
    type: "keyframes",
    duration: .8
  },
  tw = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  tS = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]),
  tT = (t, e, i, s = {}, n, o) => r => {
    let a = tv(s, t) || {},
      l = a.delay || s.delay || 0,
      {
        elapsed: h = 0
      } = s;
    h -= V.Z(l);
    let u = {
      keyframes: Array.isArray(i) ? i : [null, i],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -h,
      onUpdate: t => {
        e.set(t), a.onUpdate && a.onUpdate(t);
      },
      onComplete: () => {
        r(), a.onComplete && a.onComplete();
      },
      name: t,
      motionValue: e,
      element: o ? undefined : n
    };
    !function (t) {
      for (let e in t) if (!tS.has(e)) return true;
      return false;
    }(a) && Object.assign(u, ((t, {
      keyframes: e
    }) => e.length > 2 ? tx : ty.P.has(t) ? t.startsWith("scale") ? {
      type: "spring",
      stiffness: 550,
      damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
    } : tg : tw)(t, u)), u.duration && (u.duration = V.Z(u.duration)), u.repeatDelay && (u.repeatDelay = V.Z(u.repeatDelay)), undefined !== u.from && (u.keyframes[0] = u.from);
    let c = false;
    if (false !== u.type && (0 !== u.duration || u.repeatDelay) || (tl(u), 0 === u.delay && (c = true)), (k.f.instantAnimations || k.f.skipAnimations || n?.shouldSkipAnimations || a.skipAnimations) && (c = true, tl(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, c && !o && undefined !== e.get()) {
      let t = _.f(u.keyframes, a);
      if (undefined !== t) return void m.y.update(() => {
        u.onUpdate(t), u.onComplete();
      });
    }
    return a.isSync ? new G(u) : new tf(u);
  };
function tP(t, e, i, s = {
  passive: true
}) {
  return t.addEventListener(e, i, s), () => t.removeEventListener(e, i, s);
}
let tE = {
  x: false,
  y: false
};
var tb = __m65091;
function tA(t) {
  return t.max - t.min;
}
function tL(t, e, i, s = .5) {
  t.origin = s, t.originPoint = y.f(e.min, e.max, t.origin), t.scale = tA(i) / tA(e), t.translate = y.f(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0);
}
function tD(t, e, i, s) {
  tL(t.x, e.x, i.x, s ? s.originX : undefined), tL(t.y, e.y, i.y, s ? s.originY : undefined);
}
function tR(t, e, i, s = 0) {
  t.min = (s ? y.f(i.min, i.max, s) : i.min) + e.min, t.max = t.min + tA(e);
}
function tk(t, e, i, s = 0) {
  let n = s ? y.f(i.min, i.max, s) : i.min;
  t.min = e.min - n, t.max = t.min + tA(e);
}
function tM(t, e, i, s) {
  tk(t.x, e.x, i.x, s?.x), tk(t.y, e.y, i.y, s?.y);
}
var tC = __m61327;
let tV = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
  tj = new Set(["INPUT", "SELECT", "TEXTAREA"]),
  tB = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : false !== t.isPrimary;
function tN(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
function tO(t, e, i, s) {
  return tP(t, e, t => tB(t) && i(t, tN(t)), s);
}
let tF = ({
  current: t
}) => t ? t.ownerDocument.defaultView : null;
var tz = __m25522;
let tU = (t, e) => Math.abs(t - e),
  tI = new Set(["auto", "scroll"]);
class tW {
  constructor(t, e, {
    transformPagePoint: i,
    contextWindow: s = window,
    dragSnapToOrigin: n = false,
    distanceThreshold: o = 3,
    element: r
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map(), this.removeScrollListeners = null, this.onElementScroll = t => {
      this.handleScroll(t.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      var t, e;
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      this.hasPendingMove = false, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = tH(this.lastRawMoveEventInfo, this.transformPagePoint));
      let i = tY(this.lastMoveEventInfo, this.history),
        s = null !== this.startEvent,
        n = (t = i.offset, e = {
          x: 0,
          y: 0
        }, Math.sqrt(tU(t.x, e.x) ** 2 + tU(t.y, e.y) ** 2) >= this.distanceThreshold);
      if (!s && !n) return;
      let {
        point: o
      } = i;
      this.history.push({
        ...o,
        timestamp: j.f.now()
      });
      let {
        onStart: r,
        onMove: a
      } = this.handlers;
      s || (r && r(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, i);
    }, this.handlePointerMove = (t, e) => {
      this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = tH(e, this.transformPagePoint), this.hasPendingMove = true, m.y.update(this.updatePoint, true);
    }, this.handlePointerUp = (t, e) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      let {
        onEnd: i,
        onSessionEnd: s,
        resumeAnimation: n
      } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      let o = tY("pointercancel" === t.type ? this.lastMoveEventInfo : tH(e, this.transformPagePoint), this.history);
      this.startEvent && i && i(t, o), s && s(t, o);
    }, !tB(t)) return;
    this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = s || window;
    let a = tH(tN(t), this.transformPagePoint),
      {
        point: l
      } = a,
      {
        timestamp: h
      } = F.f;
    this.history = [{
      ...l,
      timestamp: h
    }];
    let {
      onSessionStart: u
    } = e;
    u && u(t, tY(a, this.history));
    let c = {
      passive: true,
      capture: true
    };
    this.removeListeners = B.f(tO(this.contextWindow, "pointermove", this.handlePointerMove, c), tO(this.contextWindow, "pointerup", this.handlePointerUp, c), tO(this.contextWindow, "pointercancel", this.handlePointerUp, c)), r && this.startScrollTracking(r);
  }
  startScrollTracking(t) {
    let e = t.parentElement;
    for (; e;) {
      let t = getComputedStyle(e);
      (tI.has(t.overflowX) || tI.has(t.overflowY)) && this.scrollPositions.set(e, {
        x: e.scrollLeft,
        y: e.scrollTop
      }), e = e.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: true
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  handleScroll(t) {
    let e = this.scrollPositions.get(t);
    if (!e) return;
    let i = t === window,
      s = i ? {
        x: window.scrollX,
        y: window.scrollY
      } : {
        x: t.scrollLeft,
        y: t.scrollTop
      },
      n = {
        x: s.x - e.x,
        y: s.y - e.y
      };
    (0 !== n.x || 0 !== n.y) && (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += n.x, this.lastMoveEventInfo.point.y += n.y) : this.history.length > 0 && (this.history[0].x -= n.x, this.history[0].y -= n.y), this.scrollPositions.set(t, s), m.y.update(this.updatePoint, true));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), m.Y(this.updatePoint);
  }
}
function tH(t, e) {
  return e ? {
    point: e(t.point)
  } : t;
}
function t_(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function tY({
  point: t
}, e) {
  return {
    point: t,
    delta: t_(t, t$(e)),
    offset: t_(t, e[0]),
    velocity: function (t) {
      if (t.length < 2) return {
        x: 0,
        y: 0
      };
      let e = t.length - 1,
        i = null,
        s = t$(t);
      for (; e >= 0 && (i = t[e], !(s.timestamp - i.timestamp > V.Z(.1)));) e--;
      if (!i) return {
        x: 0,
        y: 0
      };
      i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * V.Z(.1) && (i = t[1]);
      let n = V.q(s.timestamp - i.timestamp);
      if (0 === n) return {
        x: 0,
        y: 0
      };
      let o = {
        x: (s.x - i.x) / n,
        y: (s.y - i.y) / n
      };
      return 1 / 0 === o.x && (o.x = 0), 1 / 0 === o.y && (o.y = 0), o;
    }(e)
  };
}
function t$(t) {
  return t[t.length - 1];
}
var tX = __m83920;
function tK(t, e, i) {
  return {
    min: undefined !== e ? t.min + e : undefined,
    max: undefined !== i ? t.max + i - (t.max - t.min) : undefined
  };
}
function tq(t, e) {
  let i = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
    min: i,
    max: s
  };
}
function tG(t, e, i) {
  return {
    min: tJ(t, e),
    max: tJ(t, i)
  };
}
function tJ(t, e) {
  return "number" == typeof t ? t : t[e] || 0;
}
let tZ = new WeakMap();
class tQ {
  constructor(t) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = p.J(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, {
    snapToCursor: e = false,
    distanceThreshold: i
  } = {}) {
    let {
      presenceContext: s
    } = this.visualElement;
    if (s && false === s.isPresent) return;
    let n = t => {
        e && this.snapToCursor(t), this.stopAnimation();
      },
      o = (t, e) => {
        let {
          drag: i,
          dragPropagation: s,
          onDragStart: n
        } = this.getProps();
        if (i && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = function (t) {
          if ("x" === t || "y" === t) if (tE[t]) return null;else return tE[t] = true, () => {
            tE[t] = false;
          };
          return tE.x || tE.y ? null : (tE.x = tE.y = true, () => {
            tE.x = tE.y = false;
          });
        }(i), !this.openDragLock)) return;
        this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = undefined), f(t => {
          let e = this.getAxisMotionValue(t).get() || 0;
          if (tb.U.test(e)) {
            let {
              projection: i
            } = this.visualElement;
            if (i && i.layout) {
              let s = i.layout.layoutBox[t];
              s && (e = tA(s) * (parseFloat(e) / 100));
            }
          }
          this.originPoint[t] = e;
        }), n && m.y.update(() => n(t, e), false, true), C(this.visualElement, "transform");
        let {
          animationState: o
        } = this.visualElement;
        o && o.setActive("whileDrag", true);
      },
      r = (t, e) => {
        this.latestPointerEvent = t, this.latestPanInfo = e;
        let {
          dragPropagation: i,
          dragDirectionLock: s,
          onDirectionLock: n,
          onDrag: o
        } = this.getProps();
        if (!i && !this.openDragLock) return;
        let {
          offset: r
        } = e;
        if (s && null === this.currentDirection) {
          this.currentDirection = function (t, e = 10) {
            let i = null;
            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i;
          }(r), null !== this.currentDirection && n && n(this.currentDirection);
          return;
        }
        this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && m.y.update(() => o(t, e), false, true);
      },
      a = (t, e) => {
        this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null;
      },
      l = () => {
        let {
          dragSnapToOrigin: t
        } = this.getProps();
        (t || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        });
      },
      {
        dragSnapToOrigin: h
      } = this.getProps();
    this.panSession = new tW(t, {
      onSessionStart: n,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      distanceThreshold: i,
      contextWindow: tF(this.visualElement),
      element: this.visualElement.current
    });
  }
  stop(t, e) {
    let i = t || this.latestPointerEvent,
      s = e || this.latestPanInfo,
      n = this.isDragging;
    if (this.cancel(), !n || !s || !i) return;
    let {
      velocity: o
    } = s;
    this.startAnimation(o);
    let {
      onDragEnd: r
    } = this.getProps();
    r && m.y.postRender(() => r(i, s));
  }
  cancel() {
    this.isDragging = false;
    let {
      projection: t,
      animationState: e
    } = this.visualElement;
    t && (t.isAnimationBlocked = false), this.endPanSession();
    let {
      dragPropagation: i
    } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", false);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = undefined;
  }
  updateAxis(t, e, i) {
    let {
      drag: s
    } = this.getProps();
    if (!i || !t1(t, s, this.currentDirection)) return;
    let n = this.getAxisMotionValue(t),
      o = this.originPoint[t] + i[t];
    this.constraints && this.constraints[t] && (o = function (t, {
      min: e,
      max: i
    }, s) {
      return undefined !== e && t < e ? t = s ? y.f(e, t, s.min) : Math.max(t, e) : undefined !== i && t > i && (t = s ? y.f(i, t, s.max) : Math.min(t, i)), t;
    }(o, this.constraints[t], this.elastic[t])), n.set(o);
  }
  resolveConstraints() {
    let {
        dragConstraints: t,
        dragElastic: e
      } = this.getProps(),
      i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout,
      s = this.constraints;
    t && tz.f(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function (t, {
      top: e,
      left: i,
      bottom: s,
      right: n
    }) {
      return {
        x: tK(t.x, i, n),
        y: tK(t.y, e, s)
      };
    }(i.layoutBox, t) : this.constraints = false, this.elastic = function (t = .35) {
      return false === t ? t = 0 : true === t && (t = .35), {
        x: tG(t, "left", "right"),
        y: tG(t, "top", "bottom")
      };
    }(e), s !== this.constraints && !tz.f(t) && i && this.constraints && !this.hasMutatedConstraints && f(t => {
      var e, s;
      let n;
      false !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = i.layoutBox[t], s = this.constraints[t], n = {}, undefined !== s.min && (n.min = s.min - e.min), undefined !== s.max && (n.max = s.max - e.min), n));
    });
  }
  resolveRefConstraints() {
    var t;
    let {
      dragConstraints: e,
      onMeasureDragConstraints: i
    } = this.getProps();
    if (!e || !tz.f(e)) return false;
    let s = e.current;
    tn.k(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    let {
      projection: n
    } = this.visualElement;
    if (!n || !n.layout) return false;
    n.root && (n.root.scroll = undefined, n.root.updateScroll());
    let o = function (t, e, i) {
        let s = R(t, i),
          {
            scroll: n
          } = e;
        return n && (b(s.x, n.offset.x), b(s.y, n.offset.y)), s;
      }(s, n.root, this.visualElement.getTransformPagePoint()),
      r = (t = n.layout.layoutBox, {
        x: tq(t.x, o.x),
        y: tq(t.y, o.y)
      });
    if (i) {
      let t = i(function ({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        };
      }(r));
      this.hasMutatedConstraints = !!t, t && (r = v(t));
    }
    return r;
  }
  startAnimation(t) {
    let {
        drag: e,
        dragMomentum: i,
        dragElastic: s,
        dragTransition: n,
        dragSnapToOrigin: o,
        onDragTransitionEnd: r
      } = this.getProps(),
      a = this.constraints || {};
    return Promise.all(f(r => {
      if (!t1(r, e, this.currentDirection)) return;
      let l = a && a[r] || {};
      (true === o || o === r) && (l = {
        min: 0,
        max: 0
      });
      let h = {
        type: "inertia",
        velocity: i ? t[r] : 0,
        bounceStiffness: s ? 200 : 1e6,
        bounceDamping: s ? 40 : 1e7,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...n,
        ...l
      };
      return this.startAxisValueAnimation(r, h);
    })).then(r);
  }
  startAxisValueAnimation(t, e) {
    let i = this.getAxisMotionValue(t);
    return C(this.visualElement, t), i.start(tT(t, i, 0, e, this.visualElement, false));
  }
  stopAnimation() {
    f(t => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    let e = `_drag${t.toUpperCase()}`;
    return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0);
  }
  snapToCursor({
    clientX: t,
    clientY: e
  }) {
    let {
        drag: i
      } = this.getProps(),
      s = {
        x: t,
        y: e
      },
      n = this.visualElement.getTransformPagePoint()?.(s) || s,
      o = this.visualElement.measureViewportBox();
    f(t => {
      if (!t1(t, i, this.currentDirection)) return;
      let e = this.getAxisMotionValue(t),
        {
          min: s,
          max: r
        } = o[t];
      e.set((e.get() || 0) + n[t] - y.f(s, r, .5));
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    let {
        drag: t,
        dragConstraints: e
      } = this.getProps(),
      {
        projection: i
      } = this.visualElement;
    if (!tz.f(e) || !i || !this.constraints) return;
    this.stopAnimation();
    let s = this.constraints,
      n = {
        x: 0,
        y: 0
      };
    f(t => {
      var e, i;
      let o,
        r,
        a,
        l = this.getAxisMotionValue(t).get();
      n[t] = (e = {
        min: l,
        max: l
      }, i = s[t], o = .5, r = tA(e), (a = tA(i)) > r ? o = tX.f(i.min, i.max - r, e.min) : r > a && (o = tX.f(e.min, e.max - a, i.min)), N.f(0, 1, o));
    });
    let {
      transformTemplate: o
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = false, this.resolveConstraints(), f(e => {
      let i = this.getAxisMotionValue(e);
      if (!t1(e, t, null) || !i.get()) return;
      let {
        min: s,
        max: o
      } = this.constraints[e];
      i.set(y.f(s, o, n[e]));
    }), this.visualElement.render();
  }
  addListeners() {
    let t;
    if (!this.visualElement.current) return;
    tZ.set(this.visualElement, this);
    let e = this.visualElement.current,
      i = tO(e, "pointerdown", t => {
        let {
            drag: i,
            dragListener: s = true
          } = this.getProps(),
          n = t.target,
          o = n !== e && (tj.has(n.tagName) || true === n.isContentEditable);
        i && s && !o && this.start(t);
      }),
      s = () => {
        var i, s, n;
        let o,
          r,
          {
            dragConstraints: a
          } = this.getProps();
        tz.f(a) && a.current && (this.constraints = this.resolveRefConstraints(), t || (i = e, s = a.current, n = () => this.scalePositionWithinConstraints(), o = tC.f(i, t0(n)), r = tC.f(s, t0(n)), t = () => {
          o(), r();
        }));
      },
      {
        projection: n
      } = this.visualElement,
      o = n.addEventListener("measure", s);
    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), m.y.read(s);
    let r = tP(window, "resize", () => this.scalePositionWithinConstraints()),
      a = n.addEventListener("didUpdate", ({
        delta: t,
        hasLayoutChanged: e
      }) => {
        this.isDragging && e && (f(e => {
          let i = this.getAxisMotionValue(e);
          i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate));
        }), this.visualElement.render());
      });
    return () => {
      r(), i(), o(), a && a(), t && t();
    };
  }
  getProps() {
    let t = this.visualElement.getProps(),
      {
        drag: e = false,
        dragDirectionLock: i = false,
        dragPropagation: s = false,
        dragConstraints: n = false,
        dragElastic: o = .35,
        dragMomentum: r = true
      } = t;
    return {
      ...t,
      drag: e,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: n,
      dragElastic: o,
      dragMomentum: r
    };
  }
}
function t0(t) {
  let e = true;
  return () => {
    if (e) {
      e = false;
      return;
    }
    t();
  };
}
function t1(t, e, i) {
  return (true === e || e === t) && (null === i || i === t);
}
let t2 = t => (e, i) => {
    t && m.y.update(() => t(e, i), false, true);
  },
  t4 = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  };
var t5 = __m60140,
  t6 = i,
  t9 = __m64978,
  t3 = __m31178,
  t7 = __m4035;
let t8 = false;
class CEt_ extends t6.Component {
  componentDidMount() {
    let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i,
        layoutId: s
      } = this.props,
      {
        projection: n
      } = t;
    n && (e.group && e.group.add(n), i && i.register && s && i.register(n), t8 && n.root.didUpdate(), n.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), n.setOptions({
      ...n.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), t4.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(t) {
    let {
        layoutDependency: e,
        visualElement: i,
        drag: s,
        isPresent: n
      } = this.props,
      {
        projection: o
      } = i;
    return o && (o.isPresent = n, t.layoutDependency !== e && o.setOptions({
      ...o.options,
      layoutDependency: e
    }), t8 = true, s || t.layoutDependency !== e || undefined === e || t.isPresent !== n ? o.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? o.promote() : o.relegate() || m.y.postRender(() => {
      let t = o.getStack();
      t && t.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    let {
        visualElement: t,
        layoutAnchor: e
      } = this.props,
      {
        projection: i
      } = t;
    i && (i.options.layoutAnchor = e, i.root.didUpdate(), t5.t.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i
      } = this.props,
      {
        projection: s
      } = t;
    t8 = true, s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    let {
      safeToRemove: t
    } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ee(t) {
  let [i, s] = t9.f(),
    n = t6.useContext(t3.f);
  return <CEt_ {...t} layoutGroup={n} switchLayoutGroup={t6.useContext(t7.f)} isPresent={i} safeToRemove={s} />;
}
var ei = __m70596,
  es = __m86427,
  en = __m35043;
function eo(t) {
  return t.props[en.f];
}
var er = __m24463,
  ea = __m89026,
  el = __m33871;
let eh = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
var eu = __m85260;
let ec = eh.length,
  ed = t => "number" == typeof t || tb.L.test(t);
function ep(t, e) {
  return undefined !== t[e] ? t[e] : t.borderRadius;
}
let em = ev(0, .5, tt.o),
  ef = ev(.5, .95, d.f);
function ev(t, e, i) {
  return s => s < t ? 0 : s > e ? 1 : i(tX.f(t, e, s));
}
function ey(t, e) {
  t.min = e.min, t.max = e.max;
}
function eg(t, e) {
  ey(t.x, e.x), ey(t.y, e.y);
}
function ex(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ew(t, e, i, s, n) {
  return t -= e, t = s + 1 / i * (t - s), undefined !== n && (t = s + 1 / n * (t - s)), t;
}
function eS(t, e, [i, s, n], o, r) {
  !function (t, e = 0, i = 1, s = .5, n, o = t, r = t) {
    if (tb.U.test(e) && (e = parseFloat(e), e = y.f(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
    let a = y.f(o.min, o.max, s);
    t === o && (a -= e), t.min = ew(t.min, e, i, a, n), t.max = ew(t.max, e, i, a, n);
  }(t, e[i], e[s], e[n], e.scale, o, r);
}
let eT = ["x", "scaleX", "originX"],
  eP = ["y", "scaleY", "originY"];
function eE(t, e, i, s) {
  eS(t.x, e, eT, i ? i.x : undefined, s ? s.x : undefined), eS(t.y, e, eP, i ? i.y : undefined, s ? s.y : undefined);
}
function eb(t) {
  return 0 === t.translate && 1 === t.scale;
}
function eA(t) {
  return eb(t.x) && eb(t.y);
}
function eL(t, e) {
  return t.min === e.min && t.max === e.max;
}
function eD(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function eR(t, e) {
  return eD(t.x, e.x) && eD(t.y, e.y);
}
function ek(t) {
  return tA(t.x) / tA(t.y);
}
function eM(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
var eC = __m33887;
class eV {
  constructor() {
    this.members = [];
  }
  add(t) {
    eC.I(this.members, t);
    for (let e = this.members.length - 1; e >= 0; e--) {
      let i = this.members[e];
      if (i === t || i === this.lead || i === this.prevLead) continue;
      let s = i.instance;
      s && false !== s.isConnected || i.snapshot || (eC.i(this.members, i), i.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (eC.i(this.members, t), t === this.prevLead && (this.prevLead = undefined), t === this.lead) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(t) {
    for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
      let t = this.members[e];
      if (false !== t.isPresent && t.instance?.isConnected !== false) return this.promote(t), true;
    }
    return false;
  }
  promote(t, e) {
    let i = this.lead;
    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
      i.updateSnapshot(), t.scheduleRender();
      let {
          layoutDependency: s
        } = i.options,
        {
          layoutDependency: n
        } = t.options;
      (undefined === s || s !== n) && (t.resumeFrom = i, e && (i.preserveOpacity = true), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root?.isUpdating && (t.isLayoutDirty = true)), false === t.options.crossfade && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach(t => t.instance && t.scheduleRender(false));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = undefined);
  }
}
function ej(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
let eB = {
    correct: (t, e) => {
      if (!e.target) return t;
      if ("string" == typeof t) if (!tb.L.test(t)) return t;else t = parseFloat(t);
      let i = ej(t, e.target.x),
        s = ej(t, e.target.y);
      return `${i}% ${s}%`;
    }
  },
  eN = {
    borderRadius: {
      ...eB,
      applyTo: [...eh]
    },
    borderTopLeftRadius: eB,
    borderTopRightRadius: eB,
    borderBottomLeftRadius: eB,
    borderBottomRightRadius: eB,
    boxShadow: {
      correct: (t, {
        treeScale: e,
        projectionDelta: i
      }) => {
        let s = tr.u.parse(t);
        if (s.length > 5) return t;
        let n = tr.u.createTransformer(t),
          o = +("number" != typeof s[0]),
          r = i.x.scale * e.x,
          a = i.y.scale * e.y;
        s[0 + o] /= r, s[1 + o] /= a;
        let l = y.f(r, a, .5);
        return "number" == typeof s[2 + o] && (s[2 + o] /= l), "number" == typeof s[3 + o] && (s[3 + o] /= l), n(s);
      }
    }
  },
  eO = (t, e) => t.depth - e.depth;
class eF {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(t) {
    eC.I(this.children, t), this.isDirty = true;
  }
  remove(t) {
    eC.i(this.children, t), this.isDirty = true;
  }
  forEach(t) {
    this.isDirty && this.children.sort(eO), this.isDirty = false, this.children.forEach(t);
  }
}
Object.assign(er.f, {
  ...eN,
  ...er.f
});
let ez = ["", "X", "Y", "Z"],
  eU = 0;
function eI(t, e, i, s) {
  let {
    latestValues: n
  } = e;
  n[t] && (i[t] = n[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function eW({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: i,
  checkIsScrollRoot: s,
  resetTransform: n
}) {
  return class {
    constructor(t = {}, i = e?.()) {
      this.id = eU++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(eY), this.nodes.forEach(e1), this.nodes.forEach(e2), this.nodes.forEach(e$);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = new Map(), this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
      for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = true;
      this.root === this && (this.nodes = new eF());
    }
    addEventListener(t, e) {
      return this.eventHandlers.has(t) || this.eventHandlers.set(t, new ei.f()), this.eventHandlers.get(t).add(e);
    }
    notifyListeners(t, ...e) {
      let i = this.eventHandlers.get(t);
      i && i.notify(...e);
    }
    hasListeners(t) {
      return this.eventHandlers.has(t);
    }
    mount(e) {
      if (this.instance) return;
      this.isSVG = ea.f(e) && (!ea.f(e) || "svg" !== e.tagName), this.instance = e;
      let {
        layoutId: i,
        layout: s,
        visualElement: n
      } = this.options;
      if (n && !n.current && n.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = true), t) {
        let i,
          s = 0,
          n = () => this.root.updateBlockedByResize = false;
        m.y.read(() => {
          s = window.innerWidth;
        }), t(e, () => {
          let t = window.innerWidth;
          if (t !== s) {
            let e, o;
            s = t, this.root.updateBlockedByResize = true, i && i(), e = j.f.now(), o = ({
              timestamp: t
            }) => {
              let i = t - e;
              i >= 250 && (m.Y(o), n());
            }, m.y.setup(o, true), i = () => m.Y(o), t4.hasAnimatedSinceResize && (t4.hasAnimatedSinceResize = false, this.nodes.forEach(e0));
          }
        });
      }
      i && this.root.registerSharedNode(i, this), false !== this.options.animate && n && (i || s) && this.addEventListener("didUpdate", ({
        delta: t,
        hasLayoutChanged: e,
        hasRelativeLayoutChanged: i,
        layout: s
      }) => {
        if (this.isAnimationBlocked) {
          this.target = undefined, this.relativeTarget = undefined;
          return;
        }
        let o = this.options.transition || n.getDefaultTransition() || e7,
          {
            onLayoutAnimationStart: r,
            onLayoutAnimationComplete: a
          } = n.getProps(),
          l = !this.targetLayout || !eR(this.targetLayout, s),
          h = !e && i;
        if (this.options.layoutRoot || this.resumeFrom || h || e && (l || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = undefined);
          let e = {
            ...tv(o, "layout"),
            onPlay: r,
            onComplete: a
          };
          (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = false), this.startAnimation(e), this.setAnimationOrigin(t, h, e.path);
        } else e || e0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = s;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let t = this.getStack();
      t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = undefined, this.eventHandlers.clear(), m.Y(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    startUpdate() {
      !this.isUpdateBlocked() && (this.isUpdating = true, this.nodes && this.nodes.forEach(e4), this.animationId++);
    }
    getTransformTemplate() {
      let {
        visualElement: t
      } = this.options;
      return t && t.getProps().transformTemplate;
    }
    willUpdate(t = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
        if (e.hasCheckedOptimisedAppear = true, e.root === e) return;
        let {
          visualElement: i
        } = e.options;
        if (!i) return;
        let s = eo(i);
        if (window.MotionHasOptimisedAnimation(s, "transform")) {
          let {
            layout: t,
            layoutId: i
          } = e.options;
          window.MotionCancelOptimisedAnimation(s, "transform", m.y, !(t || i));
        }
        let {
          parent: n
        } = e;
        n && !n.hasCheckedOptimisedAppear && t(n);
      }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let t = 0; t < this.path.length; t++) {
        let e = this.path[t];
        e.shouldResetTransform = true, ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = true), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(false), e.isAnimationBlocked && (e.dragSnapshot || (e.dragSnapshot = e.measure()), this.dragAncestor = e);
      }
      let {
        layoutId: e,
        layout: i
      } = this.options;
      if (undefined === e && !i) return;
      let s = this.getTransformTemplate();
      this.prevTransformTemplateValue = s ? s(this.latestValues, "") : undefined, this.updateSnapshot(), t && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        let t = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), t && this.nodes.forEach(eq), this.nodes.forEach(eK);
        return;
      }
      if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(eG);
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(eJ), this.nodes.forEach(eZ), this.nodes.forEach(eQ), this.nodes.forEach(eH), this.nodes.forEach(e_)) : this.nodes.forEach(eG), this.clearAllSnapshots();
      let t = j.f.now();
      F.f.delta = N.f(0, 1e3 / 60, t - F.f.timestamp), F.f.timestamp = t, F.f.isProcessing = true, m.q.update.process(F.f), m.q.preRender.process(F.f), m.q.render.process(F.f), F.f.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, t5.t.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(eX), this.sharedNodes.forEach(e5);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, m.y.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      m.y.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || tA(this.snapshot.measuredBox.x) || tA(this.snapshot.measuredBox.y) || (this.snapshot = undefined));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
      let t = this.layout;
      this.layout = this.measure(false), this.layoutCorrected || (this.layoutCorrected = p.J()), this.isLayoutDirty = false, this.projectionDelta = undefined, this.notifyListeners("measure", this.layout.layoutBox);
      let {
        visualElement: e
      } = this.options;
      e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : undefined);
    }
    updateScroll(t = "measure") {
      let e = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = false), e && this.instance) {
        let e = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: t,
          isRoot: e,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : e
        };
      }
    }
    resetTransform() {
      if (!n) return;
      let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        e = this.projectionDelta && !eA(this.projectionDelta),
        i = this.getTransformTemplate(),
        s = i ? i(this.latestValues, "") : undefined,
        o = s !== this.prevTransformTemplateValue;
      t && this.instance && (e || w(this.latestValues) || o) && (n(this.instance, s), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(t = true) {
      var e;
      let i = this.measurePageBox(),
        s = this.removeElementScroll(i);
      return t && (s = this.removeTransform(s)), ie((e = s).x), ie(e.y), {
        animationId: this.root.animationId,
        measuredBox: i,
        layoutBox: s,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      let {
        visualElement: t
      } = this.options;
      if (!t) return p.J();
      let e = t.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(is))) {
        let {
          scroll: t
        } = this.root;
        t && (b(e.x, t.offset.x), b(e.y, t.offset.y));
      }
      return e;
    }
    removeElementScroll(t) {
      let e = p.J();
      if (eg(e, t), this.scroll?.wasRoot) return e;
      for (let i = 0; i < this.path.length; i++) {
        let s = this.path[i],
          {
            scroll: n,
            options: o
          } = s;
        s !== this.root && n && o.layoutScroll && (n.wasRoot && eg(e, t), b(e.x, n.offset.x), b(e.y, n.offset.y));
      }
      return e;
    }
    applyTransform(t, e = false, i) {
      let s = i || p.J();
      eg(s, t);
      for (let t = 0; t < this.path.length; t++) {
        let i = this.path[t];
        !e && i.options.layoutScroll && i.scroll && i !== i.root && (b(s.x, -i.scroll.offset.x), b(s.y, -i.scroll.offset.y)), w(i.latestValues) && D(s, i.latestValues, i.layout?.layoutBox);
      }
      return w(this.latestValues) && D(s, this.latestValues, this.layout?.layoutBox), s;
    }
    removeTransform(t) {
      let e = p.J();
      eg(e, t);
      for (let t = 0; t < this.path.length; t++) {
        let i,
          s = this.path[t];
        w(s.latestValues) && (s.instance && (x(s.latestValues) && s.updateSnapshot(), eg(i = p.J(), s.measurePageBox())), eE(e, s.latestValues, s.snapshot?.layoutBox, i));
      }
      return w(this.latestValues) && eE(e, this.latestValues), e;
    }
    setTargetDelta(t) {
      this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(t) {
      this.options = {
        ...this.options,
        ...t,
        crossfade: undefined === t.crossfade || t.crossfade
      };
    }
    clearMeasurements() {
      this.scroll = undefined, this.layout = undefined, this.snapshot = undefined, this.prevTransformTemplateValue = undefined, this.targetDelta = undefined, this.target = undefined, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.f.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(t = false) {
      let e = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
      let i = !!this.resumingFrom || this !== e;
      if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      let {
        layout: s,
        layoutId: n
      } = this.options;
      if (!this.layout || !(s || n)) return;
      this.resolvedRelativeTargetAt = F.f.timestamp;
      let o = this.getClosestProjectingParent();
      if (this.targetDelta || this.relativeTarget || (false !== this.options.layoutAnchor && o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), this.relativeTarget || this.targetDelta) {
        if (this.target || (this.target = p.J(), this.targetWithTransforms = p.J()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          var r, a, l, h;
          this.forceRelativeParentToResolveTarget(), r = this.target, a = this.relativeTarget, l = this.relativeParent.target, h = this.options.layoutAnchor || undefined, tR(r.x, a.x, l.x, h?.x), tR(r.y, a.y, l.y, h?.y);
        } else this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : eg(this.target, this.layout.layoutBox), E(this.target, this.targetDelta)) : eg(this.target, this.layout.layoutBox);
        this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, false !== this.options.layoutAnchor && o && !!o.resumingFrom == !!this.resumingFrom && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = undefined);
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || x(this.parent.latestValues) || S(this.parent.latestValues))) if (this.parent.isProjecting()) return this.parent;else return this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(t, e, i) {
      this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = p.J(), this.relativeTargetOrigin = p.J(), tM(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || undefined), eg(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = undefined;
    }
    calcProjection() {
      let t = this.getLead(),
        e = !!this.resumingFrom || this !== t,
        i = true;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = false), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = false), this.resolvedRelativeTargetAt === F.f.timestamp && (i = false), i) return;
      let {
        layout: s,
        layoutId: n
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = undefined), !this.layout || !(s || n)) return;
      eg(this.layoutCorrected, this.layout.layoutBox);
      let o = this.treeScale.x,
        r = this.treeScale.y;
      !function (t, e, i, s = false) {
        let n,
          o,
          r = i.length;
        if (r) {
          e.x = e.y = 1;
          for (let a = 0; a < r; a++) {
            o = (n = i[a]).projectionDelta;
            let {
              visualElement: r
            } = n.options;
            (!r || !r.props.style || "contents" !== r.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && (b(t.x, -n.scroll.offset.x), b(t.y, -n.scroll.offset.y)), o && (e.x *= o.x.scale, e.y *= o.y.scale, E(t, o)), s && w(n.latestValues) && D(t, n.latestValues, n.layout?.layoutBox));
          }
          e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1);
        }
      }(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = p.J());
      let {
        target: a
      } = t;
      if (!a) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      this.projectionDelta && this.prevProjectionDelta ? (ex(this.prevProjectionDelta.x, this.projectionDelta.x), ex(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), tD(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === o && this.treeScale.y === r && eM(this.projectionDelta.x, this.prevProjectionDelta.x) && eM(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", a));
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(t = true) {
      if (this.options.visualElement?.scheduleRender(), t) {
        let t = this.getStack();
        t && t.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = undefined);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = p.$(), this.projectionDelta = p.$(), this.projectionDeltaWithTransform = p.$();
    }
    setAnimationOrigin(t, e = false, i) {
      let s,
        n = this.snapshot,
        o = n ? n.latestValues : {},
        r = {
          ...this.latestValues
        },
        a = p.$();
      this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = undefined), this.attemptToResolveRelativeTarget = !e;
      let l = p.J(),
        h = (n ? n.source : undefined) !== (this.layout ? this.layout.source : undefined),
        u = this.getStack(),
        c = !u || u.members.length <= 1,
        d = !!(h && !c && true === this.options.crossfade && !this.path.some(e3));
      this.animationProgress = 0;
      let m = i?.interpolateProjection(t);
      this.mixTargetDelta = e => {
        let i = e / 1e3,
          n = m?.(i);
        if (n ? (a.x.translate = n.x, a.x.scale = y.f(t.x.scale, 1, i), a.x.origin = t.x.origin, a.x.originPoint = t.x.originPoint, a.y.translate = n.y, a.y.scale = y.f(t.y.scale, 1, i), a.y.origin = t.y.origin, a.y.originPoint = t.y.originPoint) : (e6(a.x, t.x, i), e6(a.y, t.y, i)), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          var u, f, v, g, x, w;
          tM(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || undefined), v = this.relativeTarget, g = this.relativeTargetOrigin, x = l, w = i, e9(v.x, g.x, x.x, w), e9(v.y, g.y, x.y, w), s && (u = this.relativeTarget, f = s, eL(u.x, f.x) && eL(u.y, f.y)) && (this.isProjectionDirty = false), s || (s = p.J()), eg(s, this.relativeTarget);
        }
        h && (this.animationValues = r, function (t, e, i, s, n, o) {
          n ? (t.opacity = y.f(0, i.opacity ?? 1, em(s)), t.opacityExit = y.f(e.opacity ?? 1, 0, ef(s))) : o && (t.opacity = y.f(e.opacity ?? 1, i.opacity ?? 1, s));
          for (let n = 0; n < ec; n++) {
            let o = eh[n],
              r = ep(e, o),
              a = ep(i, o);
            (undefined !== r || undefined !== a) && (r || (r = 0), a || (a = 0), 0 === r || 0 === a || ed(r) === ed(a) ? (t[o] = Math.max(y.f(eu.f(r), eu.f(a), s), 0), (tb.U.test(a) || tb.U.test(r)) && (t[o] += "%")) : t[o] = a);
          }
          (e.rotate || i.rotate) && (t.rotate = y.f(e.rotate || 0, i.rotate || 0, s));
        }(r, o, this.latestValues, i, d, c)), n && undefined !== n.rotate && (this.animationValues || (this.animationValues = r), this.animationValues.pathRotation = n.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i;
      }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
    }
    startAnimation(t) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (m.Y(this.pendingAnimation), this.pendingAnimation = undefined), this.pendingAnimation = m.y.update(() => {
        var e, i, s;
        let n;
        t4.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = es.o(0)), this.motionValue.jump(0, false), this.currentAnimation = (e = this.motionValue, i = [0, 1e3], s = {
          ...t,
          velocity: 0,
          isSync: true,
          onUpdate: e => {
            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
          },
          onComplete: () => {
            t.onComplete && t.onComplete(), this.completeAnimation();
          }
        }, (n = M.f(e) ? e : es.o(e)).start(tT("", n, i, s)), n.animation), X.U(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = undefined;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = undefined, this.resumingFrom.preserveOpacity = undefined);
      let t = this.getStack();
      t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = undefined, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let t = this.getLead(),
        {
          targetWithTransforms: e,
          layout: i,
          latestValues: s
        } = t,
        {
          target: n
        } = t;
      if (e && n && i) {
        if (this !== t && this.layout && i && ii(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
          n = this.target || p.J();
          let e = tA(this.layout.layoutBox.x);
          n.x.min = t.target.x.min, n.x.max = n.x.min + e;
          let i = tA(this.layout.layoutBox.y);
          n.y.min = t.target.y.min, n.y.max = n.y.min + i;
        }
        eg(e, n), D(e, s), tD(this.projectionDeltaWithTransform, this.layoutCorrected, e, s);
      }
    }
    registerSharedNode(t, e) {
      this.sharedNodes.has(t) || this.sharedNodes.set(t, new eV()), this.sharedNodes.get(t).add(e);
      let i = e.options.initialPromotionConfig;
      e.promote({
        transition: i ? i.transition : undefined,
        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : undefined
      });
    }
    isLead() {
      let t = this.getStack();
      return !t || t.lead === this;
    }
    getLead() {
      let {
        layoutId: t
      } = this.options;
      return t && this.getStack()?.lead || this;
    }
    getPrevLead() {
      let {
        layoutId: t
      } = this.options;
      return t ? this.getStack()?.prevLead : undefined;
    }
    getStack() {
      let {
        layoutId: t
      } = this.options;
      if (t) return this.root.sharedNodes.get(t);
    }
    promote({
      needsReset: t,
      transition: e,
      preserveFollowOpacity: i
    } = {}) {
      let s = this.getStack();
      s && s.promote(this, i), t && (this.projectionDelta = undefined, this.needsReset = true), e && this.setOptions({
        transition: e
      });
    }
    relegate() {
      let t = this.getStack();
      return !!t && t.relegate(this);
    }
    resetSkewAndRotation() {
      let {
        visualElement: t
      } = this.options;
      if (!t) return;
      let e = false,
        {
          latestValues: i
        } = t;
      if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = true), !e) return;
      let s = {};
      i.z && eI("z", t, s, this.animationValues);
      for (let e = 0; e < ez.length; e++) eI(`rotate${ez[e]}`, t, s, this.animationValues), eI(`skew${ez[e]}`, t, s, this.animationValues);
      for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
      t.scheduleRender();
    }
    applyProjectionStyles(t, e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        t.visibility = "hidden";
        return;
      }
      let i = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, t.visibility = "", t.opacity = "", t.pointerEvents = el.f(e?.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
        return;
      }
      let s = this.getLead();
      if (!this.projectionDelta || !this.layout || !s.target) {
        this.options.layoutId && (t.opacity = undefined !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = el.f(e?.pointerEvents) || ""), this.hasProjected && !w(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = false);
        return;
      }
      t.visibility = "";
      let n = s.animationValues || s.latestValues;
      this.applyTransformsToTarget();
      let o = function (t, e, i) {
        let s = "",
          n = t.x.translate / e.x,
          o = t.y.translate / e.y,
          r = i?.z || 0;
        if ((n || o || r) && (s = `translate3d(${n}px, ${o}px, ${r}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), i) {
          let {
            transformPerspective: t,
            rotate: e,
            pathRotation: n,
            rotateX: o,
            rotateY: r,
            skewX: a,
            skewY: l
          } = i;
          t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), n && (s += `rotate(${n}deg) `), o && (s += `rotateX(${o}deg) `), r && (s += `rotateY(${r}deg) `), a && (s += `skewX(${a}deg) `), l && (s += `skewY(${l}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none";
      }(this.projectionDeltaWithTransform, this.treeScale, n);
      i && (o = i(n, o)), t.transform = o;
      let {
        x: r,
        y: a
      } = this.projectionDelta;
      for (let e in t.transformOrigin = `${100 * r.origin}% ${100 * a.origin}% 0`, s.animationValues ? t.opacity = s === this ? n.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : t.opacity = s === this ? undefined !== n.opacity ? n.opacity : "" : undefined !== n.opacityExit ? n.opacityExit : 0, er.f) {
        if (undefined === n[e]) continue;
        let {
            correct: i,
            applyTo: r,
            isCSSVariable: a
          } = er.f[e],
          l = "none" === o ? n[e] : i(n[e], s);
        if (r) {
          let e = r.length;
          for (let i = 0; i < e; i++) t[r[i]] = l;
        } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l;
      }
      this.options.layoutId && (t.pointerEvents = s === this ? el.f(e?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = undefined;
    }
    resetTree() {
      this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(eK), this.root.sharedNodes.clear();
    }
  };
}
function eH(t) {
  t.updateLayout(), function (t) {
    let {
        snapshot: e,
        dragAncestor: i
      } = t,
      s = i?.layout;
    if (!e || !s || t.resumeFrom || t.isAnimationBlocked) return;
    let n = i.dragSnapshot;
    f(t => b(e.layoutBox[t], s.layoutBox[t].min - n.layoutBox[t].min));
  }(t);
}
function e_(t) {
  let e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    let {
        layoutBox: i,
        measuredBox: s
      } = t.layout,
      {
        animationType: n
      } = t.options,
      o = e.source !== t.layout.source;
    if ("size" === n) f(t => {
      let s = o ? e.measuredBox[t] : e.layoutBox[t],
        n = tA(s);
      s.min = i[t].min, s.max = s.min + n;
    });else if ("x" === n || "y" === n) {
      let t = "x" === n ? "y" : "x";
      ey(o ? e.measuredBox[t] : e.layoutBox[t], i[t]);
    } else ii(n, e.layoutBox, i) && f(s => {
      let n = o ? e.measuredBox[s] : e.layoutBox[s],
        r = tA(i[s]);
      n.max = n.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[s].max = t.relativeTarget[s].min + r);
    });
    let r = p.$();
    tD(r, i, e.layoutBox);
    let a = p.$();
    o ? tD(a, t.applyTransform(s, true), e.measuredBox) : tD(a, i, e.layoutBox);
    let l = !eA(r),
      h = false;
    if (!t.resumeFrom) {
      let s = t.getClosestProjectingParent();
      if (s && !s.resumeFrom) {
        let {
          snapshot: n,
          layout: o
        } = s;
        if (n && o) {
          let r = t.options.layoutAnchor || undefined,
            a = p.J();
          tM(a, e.layoutBox, n.layoutBox, r);
          let l = p.J();
          tM(l, i, o.layoutBox, r), eR(a, l) || (h = true), s.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = s);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: h
    });
  } else if (t.isLead()) {
    let {
      onExitComplete: e
    } = t.options;
    e && e();
  }
  t.options.transition = undefined;
}
function eY(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function e$(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
}
function eX(t) {
  t.clearSnapshot();
}
function eK(t) {
  t.clearMeasurements();
}
function eq(t) {
  t.isLayoutDirty = true, t.updateLayout();
}
function eG(t) {
  t.isLayoutDirty = false;
}
function eJ(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.dragSnapshot || t.layout, t.isLayoutDirty = true);
}
function eZ(t) {
  t.relativeTarget && t.relativeParent?.isLayoutDirty && (t.currentAnimation ? t.isLayoutDirty = true : (t.targetDelta = undefined, t.removeRelativeTarget()));
}
function eQ(t) {
  let {
    visualElement: e
  } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function e0(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = undefined, t.isProjectionDirty = true;
}
function e1(t) {
  t.resolveTargetDelta();
}
function e2(t) {
  t.calcProjection();
}
function e4(t) {
  t.resetSkewAndRotation();
}
function e5(t) {
  t.removeLeadSnapshot();
}
function e6(t, e, i) {
  t.translate = y.f(e.translate, 0, i), t.scale = y.f(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint;
}
function e9(t, e, i, s) {
  t.min = y.f(e.min, i.min, s), t.max = y.f(e.max, i.max, s);
}
function e3(t) {
  return t.animationValues && undefined !== t.animationValues.opacityExit;
}
let e7 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  e8 = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  it = e8("applewebkit/") && !e8("chrome/") ? Math.round : d.f;
function ie(t) {
  t.min = it(t.min), t.max = it(t.max);
}
function ii(t, e, i) {
  return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(ek(e) - ek(i)));
}
function is(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
let io = eW({
    attachResizeListener: (t, e) => tP(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => true
  }),
  ir = {
    current: undefined
  },
  ia = eW({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!ir.current) {
        let t = new io({});
        t.mount(window), t.setOptions({
          layoutScroll: true
        }), ir.current = t;
      }
      return ir.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = undefined !== e ? e : "none";
    },
    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
  });
var il = __m86579;
function ih(t, e, i) {
  return il.f(t.getProps(), e, i, t);
}
let iu = (t, e) => "exit" === e ? t.presenceContext?.custom : undefined,
  ic = new Set(["width", "height", "top", "left", "right", "bottom", ...ty.$]),
  id = "u" > typeof window;
function ip(t, e, {
  delay: i = 0,
  transitionOverride: s,
  type: n
} = {}) {
  let {
      transition: o,
      transitionEnd: r,
      ...l
    } = e,
    h = t.getDefaultTransition();
  o = o ? a(o, h) : h;
  let u = o?.reduceMotion,
    c = o?.skipAnimations;
  s && (o = s);
  let d = [],
    p = n && t.animationState?.getState()[n],
    f = o?.path;
  for (let e in f && f.animateVisualElement(t, l, o, i, d), l) {
    let s = t.getValue(e, t.latestValues[e] ?? null),
      n = l[e];
    if (undefined === n || p && function ({
      protectedKeys: t,
      needsAnimating: e
    }, i) {
      let s = i in t && !e[i];
      return e[i] = false, s;
    }(p, e)) continue;
    let r = {
      delay: i,
      ...tv(o || {}, e)
    };
    c && (r.skipAnimations = true);
    let a = s.get();
    if (undefined !== a && !s.isAnimating() && !Array.isArray(n) && n === a && !r.velocity) {
      m.y.update(() => s.set(n));
      continue;
    }
    let h = false;
    if (id && window.MotionHandoffAnimation) {
      let i = eo(t);
      if (i) {
        let t = window.MotionHandoffAnimation(i, e, m.y);
        null !== t && (r.startTime = t, h = true);
      }
    }
    C(t, e);
    let f = u ?? t.shouldReduceMotion;
    s.start(tT(e, s, n, f && ic.has(e) ? {
      type: false
    } : r, t, h));
    let v = s.animation;
    v && d.push(v);
  }
  if (r) {
    let e = () => m.y.update(() => {
      r && function (t, e) {
        let {
          transitionEnd: i = {},
          transition: s = {},
          ...n
        } = ih(t, e) || {};
        for (let e in n = {
          ...n,
          ...i
        }) {
          var o;
          let i = Array.isArray(o = n[e]) ? o[o.length - 1] || 0 : o;
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, es.o(i));
        }
      }(t, r);
    });
    d.length ? Promise.all(d).then(e) : e();
  }
  return d;
}
function im(t, e, i, s = 0, n = 1) {
  let o = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
    r = t.size,
    a = (r - 1) * s;
  return "function" == typeof i ? i(o, r) : 1 === n ? o * s : a - o * s;
}
function iv(t, e, i = {}) {
  let s = ih(t, e, iu(t, i.type)),
    n = i.transitionOverride || (s?.transition ?? (t.getDefaultTransition() || {})),
    o = () => Promise.all(s ? ip(t, s, i) : []),
    r = (s = 0) => {
      let {
          variantChildren: o
        } = t,
        {
          delayChildren: r = 0,
          staggerChildren: a,
          staggerDirection: l
        } = n,
        h = [];
      return o?.forEach(t => {
        t.notify("AnimationStart", e), h.push(iv(t, e, {
          ...i,
          delay: s + ("function" == typeof r ? 0 : r) + im(o, t, r, a, l)
        }).then(() => t.notify("AnimationComplete", e)));
      }), Promise.all(h);
    },
    {
      when: a
    } = n;
  return a ? "beforeChildren" === a ? o().then(() => r()) : r().then(o) : Promise.all([o(), r(i.delay)]);
}
var iy = __m85983,
  ig = __m32525;
function ix(t, e) {
  if (!Array.isArray(e)) return false;
  let i = e.length;
  if (i !== t.length) return false;
  for (let s = 0; s < i; s++) if (e[s] !== t[s]) return false;
  return true;
}
var iw = __m6840;
let iS = [...iw.v].reverse();
function iT() {
  let t = {};
  for (let e of iw.v) t[e] = {
    isActive: "animate" === e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
  return t;
}
let iP = 0;
var iE = __m49652;
function ib(t, e) {
  let i = iE.f(t),
    s = new AbortController();
  return [i, {
    passive: true,
    ...e,
    signal: s.signal
  }, () => s.abort()];
}
function iA(t, e, i) {
  let {
    props: s
  } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
  let n = s["onHover" + i];
  n && m.y.postRender(() => n(e, tN(e)));
}
var iL = __m72846;
let iD = (t, e) => !!e && (t === e || iD(t, e.parentElement)),
  iR = new WeakSet();
function ik(t) {
  return e => {
    "Enter" === e.key && t(e);
  };
}
function iM(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, {
    isPrimary: true,
    bubbles: true
  }));
}
function iC(t) {
  return tB(t) && !(tE.x || tE.y);
}
let iV = new WeakSet();
function ij(t, e, i) {
  let {
    props: s
  } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
  let n = s["onTap" + ("End" === i ? "" : i)];
  n && m.y.postRender(() => n(e, tN(e)));
}
let iB = new WeakMap(),
  iN = new WeakMap(),
  iO = t => {
    let e = iB.get(t.target);
    e && e(t);
  },
  iF = t => {
    t.forEach(iO);
  },
  iz = {
    some: 0,
    all: 1
  };
var iU = __m3973;
let iI = [__m76307.H, tb.L, tb.U, tb.b, tb.$, tb.a, {
    test: t => "auto" === t,
    parse: t => t
  }],
  iW = t => iI.find(e => e.test(t));
var iH = __m72590,
  i_ = __m19928;
let iY = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
var i$ = J,
  iX = __m47507,
  iK = __m75554;
let iq = new Set(["auto", "none", "0"]);
var iG = __m44493;
class iJ extends i$.p {
  constructor(t, e, i, s, n) {
    super(t, e, i, s, n, true);
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      element: e,
      name: i
    } = this;
    if (!e || !e.current) return;
    super.readKeyframes();
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      if ("string" == typeof s && (s = s.trim(), i_.u(s))) {
        let n = function t(e, i, s = 1) {
          tn.k(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
          let [n, o] = function (t) {
            let e = iY.exec(t);
            if (!e) return [,];
            let [, i, s, n] = e;
            return [`--${i ?? s}`, n];
          }(e);
          if (!n) return;
          let r = window.getComputedStyle(i).getPropertyValue(n);
          if (r) {
            let t = r.trim();
            return iH.f(t) ? parseFloat(t) : t;
          }
          return i_.u(o) ? t(o, i, s + 1) : o;
        }(s, e.current);
        undefined !== n && (t[i] = n), i === t.length - 1 && (this.finalKeyframe = s);
      }
    }
    if (this.resolveNoneKeyframes(), !ic.has(i) || 2 !== t.length) return;
    let [s, n] = t;
    if ("number" == typeof s && "number" == typeof n) return;
    let o = iW(s),
      r = iW(n);
    if (i_.t(s) !== i_.t(n) && iG.k[i]) {
      this.needsMeasurement = true;
      return;
    }
    if (o !== r) if (iG.D(o) && iG.D(r)) for (let e = 0; e < t.length; e++) {
      let i = t[e];
      "string" == typeof i && (t[e] = parseFloat(i));
    } else iG.k[i] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    let {
        unresolvedKeyframes: t,
        name: e
      } = this,
      i = [];
    for (let e = 0; e < t.length; e++) {
      var s;
      (null === t[e] || ("number" == typeof (s = t[e]) ? 0 === s : null === s || "none" === s || "0" === s || iX.f(s))) && i.push(e);
    }
    i.length && function (t, e, i) {
      let s,
        n = 0;
      for (; n < t.length && !s;) {
        let e = t[n];
        "string" == typeof e && !iq.has(e) && tr.T(e) && (s = t[n]), n++;
      }
      if (s && i) for (let n of e) t[n] !== s && (t[n] = iK.f(i, s));
    }(t, i, e);
  }
  measure() {
    let {
      element: t,
      name: e
    } = this;
    return iG.k[e](window.getComputedStyle(t.current), () => t.measureViewportBox());
  }
  measureInitialState() {
    let {
      element: t,
      unresolvedKeyframes: e,
      name: i
    } = this;
    if (!t || !t.current) return;
    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), e[0] = this.measuredOrigin;
    let s = e[e.length - 1];
    undefined !== s && this.motionValue?.jump(s, false);
  }
  measureEndState() {
    let {
      element: t,
      unresolvedKeyframes: e
    } = this;
    if (!t || !t.current) return;
    this.motionValue?.jump(this.measuredOrigin, false);
    let i = e.length - 1,
      s = e[i];
    e[i] = this.measure(), null !== s && undefined === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([e, i]) => {
      t.getValue(e).set(i);
    }), this.resolveNoneKeyframes();
  }
}
var iZ = __m17218;
class iQ extends iZ.F {
  constructor() {
    super(...arguments), this.KeyframeResolver = iJ;
  }
  sortInstanceNodePosition(t, e) {
    return 2 & t.compareDocumentPosition(e) ? 1 : -1;
  }
  getBaseTargetFromProps(t, e) {
    let i = t.style;
    return i ? i[e] : undefined;
  }
  removeValueFromRenderState(t, {
    vars: e,
    style: i
  }) {
    delete e[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let {
      children: t
    } = this.props;
    M.f(t) && (this.childSubscription = t.on("change", t => {
      this.current && (this.current.textContent = `${t}`);
    }));
  }
}
var i0 = __m81296,
  i1 = __m93787,
  i2 = __m81261;
let i4 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
var i5 = __m99951;
function i6(t, {
  style: e,
  vars: i
}, s, n) {
  let o,
    r = t.style;
  for (o in e) r[o] = e[o];
  for (o in n?.applyProjectionStyles(r, s), i) r.setProperty(o, i[o]);
}
var i9 = __m67926;
class i3 extends iQ {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = p.J;
  }
  getBaseTargetFromProps(t, e) {
    return ty.P.has(e) ? super.getBaseTargetFromProps(t, e) ?? i0.P(e) : t[e];
  }
  getDefaultValue(t) {
    return ty.P.has(t) ? this.latestValues[t] ?? i0.P(t) : undefined;
  }
  readValueFromInstance(t, e) {
    if (ty.P.has(e)) {
      let t = iU.f(e);
      return t && t.default || 0;
    }
    if (i2.k.includes(e)) {
      let i = getComputedStyle(t)[e];
      if ("string" == typeof i && i) return i.trim();
    }
    return e = i4.has(e) ? e : i1.f(e), t.getAttribute(e);
  }
  scrapeMotionValuesFromProps(t, e, i) {
    return i9.f(t, e, i);
  }
  build(t, e, i) {
    i2.d(t, e, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(t, e, i, s) {
    for (let i in i6(t, e, undefined, s), e.attrs) t.setAttribute(i4.has(i) ? i : i1.f(i), e.attrs[i]);
  }
  mount(t) {
    this.isSVGTag = i5.f(t.tagName), super.mount(t);
  }
}
var i7 = __m44947,
  i8 = __m84049;
class st extends iQ {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = i6;
  }
  mount(t) {
    tn.k(!!t.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(t);
  }
  readValueFromInstance(t, e) {
    if (ty.P.has(e)) return this.projection?.isProjecting ? i0.P(e) : i0.o(t, e);
    {
      let i = window.getComputedStyle(t),
        s = (i_.A(e) ? i.getPropertyValue(e) : i[e]) || 0;
      return "string" == typeof s ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, {
    transformPagePoint: e
  }) {
    return R(t, e);
  }
  build(t, e, i) {
    i7.f(t, e, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, e, i) {
    return i8.f(t, e, i);
  }
}
var se = __m44966;
let si = {
  renderer: (t, e) => e.isSVG ?? se.f(t) ? new i3(e) : new st(e, {
    allowProjection: t !== i.Fragment
  }),
  animation: {
    Feature: class extends c {
      constructor(t) {
        super(t), t.animationState || (t.animationState = function (t) {
          let e = e => Promise.all(e.map(({
              animation: e,
              options: i
            }) => function (t, e, i = {}) {
              return t.notify("AnimationStart", e), (Array.isArray(e) ? Promise.all(e.map(e => iv(t, e, i))) : "string" == typeof e ? iv(t, e, i) : Promise.all(ip(t, ih(t, e, i.custom), i))).then(() => {
                t.notify("AnimationComplete", e);
              });
            }(t, e, i))),
            i = iT(),
            s = true,
            n = false;
          function o(o) {
            let {
                props: r,
                parent: a,
                manuallyAnimateOnMount: l
              } = t,
              h = s || n,
              u = [],
              c = new Set(),
              d = {},
              p = 1 / 0,
              m = t;
            do m = false !== m.props.inherit && m.parent; while (m && !m.isControllingVariants);
            if (iS.forEach((e, s) => {
              var n, f;
              let v = i[e],
                y = r[e],
                g = m && m.props[e],
                x = undefined !== y ? y : ig.f(g) || false === g ? g : undefined,
                w = ig.f(x),
                S = e === o ? v.isActive : null;
              false === S && (p = s);
              let T = w && undefined === y && !(h && l);
              if (v.protectedKeys = {
                ...d
              }, !v.isActive && null === S || !x && !v.prevProp || iy.f(x) || "boolean" == typeof x) return;
              if ("exit" === e && v.isActive && true !== S) {
                d = {
                  ...d,
                  ...v.prevResolvedValues
                };
                return;
              }
              let P = (n = v.prevProp, "string" == typeof (f = x) ? f !== n : !!Array.isArray(f) && !ix(f, n)),
                E = P || w && (S && !T || s > p),
                b = false,
                A = Array.isArray(x) ? x : [x],
                L = {};
              if (false !== S) for (let i of A) {
                let {
                  transition: s,
                  transitionEnd: n,
                  ...o
                } = ih(t, i, iu(t, e)) || {};
                L = {
                  ...L,
                  ...o,
                  ...n
                };
              }
              let {
                prevResolvedValues: D
              } = v;
              for (let e in {
                ...D,
                ...L
              }) {
                if (e in d) continue;
                let i = L[e],
                  s = D[e],
                  n = Array.isArray(i) && Array.isArray(s) ? !ix(i, s) || P : i !== s;
                if (n && null == i) c.add(e);else if (n || undefined !== i && c.has(e)) {
                  E = true, c.delete(e) && (b = true), v.needsAnimating[e] = true;
                  let i = t.getValue(e);
                  i && (i.liveStyle = false);
                } else v.protectedKeys[e] = true;
              }
              if (v.prevProp = x, v.prevResolvedValues = L, v.isActive && (d = {
                ...d,
                ...L
              }), E && (!(T && P) || b)) for (let i of A) {
                let s = {
                  type: e
                };
                if ("string" == typeof i && h && l && a?.enteringChildren) {
                  let e = ih(a, i)?.transition?.delayChildren;
                  s.delay = im(a.enteringChildren, t, e);
                }
                u.push({
                  animation: i,
                  options: s
                });
              }
            }), c.size) {
              let {
                  initial: e
                } = r,
                i = {},
                s = "boolean" != typeof e && ih(t, Array.isArray(e) ? e[0] : e, t.presenceContext?.custom);
              s && s.transition && (i.transition = s.transition), c.forEach(n => {
                let o = t.getValue(n);
                o && (o.liveStyle = true);
                let a = s && !Array.isArray(e) ? s[n] : undefined,
                  l = t.getBaseTargetFromProps(r, n);
                i[n] = (undefined !== a ? a : undefined === l || M.f(l) ? undefined === t.initialValues[n] ? t.baseTarget[n] : undefined : l) ?? null;
              }), u.push({
                animation: i
              });
            }
            let f = h && t.blockInitialAnimation || s && !l && (false === r.initial || r.initial === r.animate);
            return s = n = false, !f && u.length ? e(u) : Promise.resolve();
          }
          return {
            animateChanges: o,
            setActive: function (e, s) {
              if (i[e].isActive === s) return Promise.resolve();
              t.variantChildren?.forEach(t => t.animationState?.setActive(e, s)), i[e].isActive = s;
              let n = o(e);
              for (let t in i) i[t].protectedKeys = {};
              return n;
            },
            setAnimateFunction: i => {
              e = i(t);
            },
            getState: () => i,
            reset: () => {
              i = iT(), n = true;
            }
          };
        }(t));
      }
      updateAnimationControlsSubscription() {
        let {
          animate: t
        } = this.node.getProps();
        iy.f(t) && (this.unmountControls = t.subscribe(this.node));
      }
      mount() {
        this.updateAnimationControlsSubscription();
      }
      update() {
        let {
            animate: t
          } = this.node.getProps(),
          {
            animate: e
          } = this.node.prevProps || {};
        t !== e && this.updateAnimationControlsSubscription();
      }
      unmount() {
        this.node.animationState.reset(), this.unmountControls?.();
      }
    }
  },
  exit: {
    Feature: class extends c {
      constructor() {
        super(...arguments), this.id = iP++;
      }
      update() {
        let {
          presenceContext: t,
          prevPresenceContext: e,
          animationState: i
        } = this.node;
        if (!t || !i) return;
        let {
            isPresent: s,
            onExitComplete: n
          } = t,
          o = e?.isPresent;
        if (s === o) return;
        if (s && false === o) {
          if (true === this.exit) {
            let {
              initial: t
            } = this.node.getProps();
            if (t && !Array.isArray(t)) {
              let {
                transition: e,
                transitionEnd: i,
                ...s
              } = ih(this.node, t) || {};
              for (let t in s) this.node.getValue(t)?.jump(s[t]);
            }
            this.node.blockInitialAnimation = false, i.reset(), i.animateChanges();
          } else i.setActive("exit", false);
          this.exit = undefined;
          return;
        }
        let r = this.exit = i.setActive("exit", !s);
        n && !s && r.then(() => {
          this.exit === r && (this.exit = true, n(this.id));
        });
      }
      mount() {
        let {
          register: t,
          onExitComplete: e
        } = this.node.presenceContext || {};
        e && e(this.id), t && (this.unmount = t(this.id));
      }
      unmount() {}
    }
  },
  inView: {
    Feature: class extends c {
      constructor() {
        super(...arguments), this.hasEnteredView = false, this.isInView = false;
      }
      startObserver() {
        var t;
        let e;
        this.stopObserver?.();
        let {
            viewport: i = {}
          } = this.node.getProps(),
          {
            root: s,
            margin: n,
            amount: o = "some",
            once: r
          } = i,
          a = {
            root: s ? s.current : undefined,
            rootMargin: n,
            threshold: "number" == typeof o ? o : iz[o]
          },
          l = t => {
            let {
              isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
            e && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", e);
            let {
                onViewportEnter: i,
                onViewportLeave: s
              } = this.node.getProps(),
              n = e ? i : s;
            n && n(t);
          };
        this.stopObserver = (t = this.node.current, e = function ({
          root: t,
          ...e
        }) {
          let i = t || document;
          iN.has(i) || iN.set(i, {});
          let s = iN.get(i),
            n = JSON.stringify(e);
          return s[n] || (s[n] = new IntersectionObserver(iF, {
            root: t,
            ...e
          })), s[n];
        }(a), iB.set(t, l), e.observe(t), () => {
          iB.delete(t), e.unobserve(t);
        });
      }
      mount() {
        this.startObserver();
      }
      update() {
        if ("u" < typeof IntersectionObserver) return;
        let {
          props: t,
          prevProps: e
        } = this.node;
        ["amount", "margin", "root"].some(function ({
          viewport: t = {}
        }, {
          viewport: e = {}
        } = {}) {
          return i => t[i] !== e[i];
        }(t, e)) && this.startObserver();
      }
      unmount() {
        this.stopObserver?.(), this.hasEnteredView = false, this.isInView = false;
      }
    }
  },
  tap: {
    Feature: class extends c {
      mount() {
        let {
          current: t
        } = this.node;
        if (!t) return;
        let {
          globalTapTarget: e,
          propagate: i
        } = this.node.props;
        this.unmount = function (t, e, i = {}) {
          let [s, n, o] = ib(t, i),
            r = t => {
              let s = t.currentTarget;
              if (!iC(t) || iV.has(t)) return;
              iR.add(s), i.stopPropagation && iV.add(t);
              let o = e(s, t),
                r = {
                  ...n,
                  capture: true
                },
                a = (t, e) => {
                  window.removeEventListener("pointerup", l, r), window.removeEventListener("pointercancel", h, r), iR.has(s) && iR.delete(s), iC(t) && "function" == typeof o && o(t, {
                    success: e
                  });
                },
                l = t => {
                  a(t, s === window || s === document || i.useGlobalTarget || iD(s, t.target));
                },
                h = t => {
                  a(t, false);
                };
              window.addEventListener("pointerup", l, r), window.addEventListener("pointercancel", h, r);
            };
          return s.forEach(t => {
            ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", r, n), iL.f(t)) && (t.addEventListener("focus", t => ((t, e) => {
              let i = t.currentTarget;
              if (!i) return;
              let s = ik(() => {
                if (iR.has(i)) return;
                iM(i, "down");
                let t = ik(() => {
                  iM(i, "up");
                });
                i.addEventListener("keyup", t, e), i.addEventListener("blur", () => iM(i, "cancel"), e);
              });
              i.addEventListener("keydown", s, e), i.addEventListener("blur", () => i.removeEventListener("keydown", s), e);
            })(t, n)), tV.has(t.tagName) || true === t.isContentEditable || t.hasAttribute("tabindex") || (t.tabIndex = 0));
          }), o;
        }(t, (t, e) => (ij(this.node, e, "Start"), (t, {
          success: e
        }) => ij(this.node, t, e ? "End" : "Cancel")), {
          useGlobalTarget: e,
          stopPropagation: i?.tap === false
        });
      }
      unmount() {}
    }
  },
  focus: {
    Feature: class extends c {
      constructor() {
        super(...arguments), this.isActive = false;
      }
      onFocus() {
        let t = false;
        try {
          t = this.node.current.matches(":focus-visible");
        } catch (e) {
          t = true;
        }
        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
      }
      onBlur() {
        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
      }
      mount() {
        this.unmount = B.f(tP(this.node.current, "focus", () => this.onFocus()), tP(this.node.current, "blur", () => this.onBlur()));
      }
      unmount() {}
    }
  },
  hover: {
    Feature: class extends c {
      mount() {
        let {
          current: t
        } = this.node;
        t && (this.unmount = function (t, e, i = {}) {
          let [s, n, o] = ib(t, i);
          return s.forEach(t => {
            let i,
              s = false,
              o = false,
              r = e => {
                i && (i(e), i = undefined), t.removeEventListener("pointerleave", l);
              },
              a = t => {
                s = false, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), o && (o = false, r(t));
              },
              l = t => {
                if ("touch" !== t.pointerType) {
                  if (s) {
                    o = true;
                    return;
                  }
                  r(t);
                }
              };
            t.addEventListener("pointerenter", s => {
              if ("touch" === s.pointerType || tE.x || tE.y) return;
              o = false;
              let r = e(t, s);
              "function" == typeof r && (i = r, t.addEventListener("pointerleave", l, n));
            }, n), t.addEventListener("pointerdown", () => {
              s = true, window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", a, n);
            }, n);
          }), o;
        }(t, (t, e) => (iA(this.node, e, "Start"), t => iA(this.node, t, "End"))));
      }
      unmount() {}
    }
  },
  pan: {
    Feature: class extends c {
      constructor() {
        super(...arguments), this.removePointerDownListener = d.f;
      }
      onPointerDown(t) {
        this.session = new tW(t, this.createPanHandlers(), {
          transformPagePoint: this.node.getTransformPagePoint(),
          contextWindow: tF(this.node)
        });
      }
      createPanHandlers() {
        let {
          onPanSessionStart: t,
          onPanStart: e,
          onPan: i,
          onPanEnd: s
        } = this.node.getProps();
        return {
          onSessionStart: t2(t),
          onStart: t2(e),
          onMove: t2(i),
          onEnd: (t, e) => {
            delete this.session, s && m.y.postRender(() => s(t, e));
          }
        };
      }
      mount() {
        this.removePointerDownListener = tO(this.node.current, "pointerdown", t => this.onPointerDown(t));
      }
      update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
      }
      unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
      }
    }
  },
  drag: {
    Feature: class extends c {
      constructor(t) {
        super(t), this.removeGroupControls = d.f, this.removeListeners = d.f, this.controls = new tQ(t);
      }
      mount() {
        let {
          dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || d.f;
      }
      update() {
        let {
            dragControls: t
          } = this.node.getProps(),
          {
            dragControls: e
          } = this.node.prevProps || {};
        t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
      }
      unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
      }
    },
    ProjectionNode: ia,
    MeasureLayout: ee
  },
  layout: {
    ProjectionNode: ia,
    MeasureLayout: ee
  }
};
const __ex_MotionProvider_21 = function ({
  children: t
}) {
  return <CO_ features={si} strict={true}><CU_ reducedMotion="user">{t}</CU_></CO_>;
};
export { __ex_MotionProvider_21 as MotionProvider };
