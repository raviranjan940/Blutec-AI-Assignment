// shared module body for 30162, 62118, 68000, 97307
import * as __m14229 from './m14229.jsx';
import * as __m30551 from './m30551.jsx';
import * as __m49404 from './m49404.jsx';
import * as __m53396 from './m53396.jsx';
import * as __m56512 from './m56512.jsx';
import * as __m60830 from './m60830.jsx';
import * as __m60855 from './m60855.jsx';
import * as __m63074 from './m63074.jsx';
import * as __m65566 from './m65566.jsx';
import * as __m79294 from './m79294.jsx';
import * as __m94581 from './m94581.jsx';

let __v_$_132;
let __v_J_131;
let __v_f_130;
let __v_f_129;
let __v_f_128;
var e = __m65566,
  i = __m63074,
  s = __m60830,
  n = __m94581,
  r = __m30551,
  a = __m14229,
  o = __m79294,
  l = __m49404,
  h = __m60855,
  u = __m53396,
  f = __m56512;
let d = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
  p = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: d([0, .65, .55, 1]),
    circOut: d([.55, 0, 1, .45]),
    backIn: d([.31, .01, .66, -.59]),
    backOut: d([.33, 1.53, .69, .99])
  };
function c(t) {
  return "function" == typeof t && "applyToOptions" in t;
}
__v_f_128 = c;
class m extends o.f {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !t) return;
    let {
      element: i,
      name: s,
      keyframes: r,
      pseudoElement: o,
      allowFlatten: m = false,
      finalKeyframe: g,
      onComplete: v
    } = t;
    this.isPseudoElement = !!o, this.allowFlatten = m, this.options = t, e.k("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
    let y = function ({
      type: t,
      ...e
    }) {
      return c(t) && u.f() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
    }(t);
    this.animation = function (t, e, i, {
      delay: s = 0,
      duration: n = 300,
      repeat: r = 0,
      repeatType: a = "loop",
      ease: o = "easeOut",
      times: l
    } = {}, c) {
      let m = {
        [e]: i
      };
      l && (m.offset = l);
      let g = function t(e, i) {
        if (e) return "function" == typeof e ? u.f() ? f.f(e, i) : "ease-out" : h.f(e) ? d(e) : Array.isArray(e) ? e.map(e => t(e, i) || p.easeOut) : p[e];
      }(o, n);
      Array.isArray(g) && (m.easing = g);
      let v = {
        delay: s,
        duration: n,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: r + 1,
        direction: "reverse" === a ? "alternate" : "normal"
      };
      return c && (v.pseudoElement = c), t.animate(m, v);
    }(i, s, r, y, o), false === y.autoplay && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        let t = a.f(r, this.options, g, this.speed);
        this.updateMotionValue && this.updateMotionValue(t), n.f(i, s, t), this.animation.cancel();
      }
      v?.(), this.notifyFinished();
    }, l.H(this, t, y);
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (t) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    let {
      state: t
    } = this;
    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let t = this.options?.element;
    !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    let t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return i.q(Number(t));
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + i.q(t);
  }
  get time() {
    return i.q(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    let e = null !== this.finishedTime;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = i.Z(t), e && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return null !== this.finishedTime ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({
    timeline: t,
    onAttach: e,
    observe: i
  }) {
    return (this.allowFlatten && this.animation.effect?.updateTiming({
      easing: "linear"
    }), this.animation.onfinish = null, t && r.a()) ? (this.animation.timeline = t, e?.(this.animation), s.f) : i(this);
  }
}
__v_f_129 = m;
let g = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
__v_f_130 = g;
let v = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  y = () => ({
    min: 0,
    max: 0
  });
__v_J_131 = () => ({
  x: y(),
  y: y()
}), __v_$_132 = () => ({
  x: v(),
  y: v()
});
export { __v_f_128 as f__97307 };
export { __v_f_129 as f__68000 };
export { __v_f_130 as f__62118 };
export { __v_J_131 as J__30162 };
export { __v_$_132 as $__30162 };
