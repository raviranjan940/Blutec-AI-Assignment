// module 86427 exports: I, o
import * as __m25791 from './m25791.jsx';
import * as __m47167 from './m47167.jsx';
import * as __m70596 from './m70596.jsx';
import * as __m87022 from './m87022.jsx';
import * as __m96173 from './m96173.jsx';

__m47167;
var t = __m70596,
  n = __m25791,
  r = __m96173,
  i = __m87022;
let s = {
  current: undefined
};
class a {
  constructor(e, t = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
      let t = r.f.now();
      if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.notifyChange(), this.dependents)) for (let e of this.dependents) e.dirty();
    }, this.hasAnimated = false, this.setCurrent(e), this.owner = t.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = r.f.now(), null === this.canTrackVelocity && undefined !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    var r;
    return "change" === e ? this.onChangeSubscribe(n) : ((r = this.events)[e] || (r[e] = new t.f())).add(n);
  }
  onChangeSubscribe(e) {
    let {
      events: n
    } = this;
    return n.change || this.changeSubscriber ? (n.change || (n.change = new t.f(), n.change.add(this.changeSubscriber), this.changeSubscriber = undefined), n.change.add(e)) : this.changeSubscriber = e, () => {
      this.changeSubscriber === e ? this.changeSubscriber = undefined : n.change?.remove(e), this.stopIfUnobserved();
    };
  }
  stopIfUnobserved() {
    i.y.read(() => {
      this.changeSubscriber || this.events.change?.getSize() || this.stop();
    });
  }
  clearListeners() {
    for (let e in this.changeSubscriber = undefined, this.events) this.events[e].clear();
  }
  attach(e, t) {
    this.passiveEffect = e, this.stopPassiveEffect = t;
  }
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, t, n) {
    this.set(t), this.prev = undefined, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
  }
  jump(e, t = true) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = undefined, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.notifyChange();
  }
  notifyChange() {
    let {
      current: e,
      changeSubscriber: t
    } = this;
    t ? t(e) : this.events.change?.notify(e);
  }
  addDependent(e) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return s.current && s.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let e = r.f.now();
    if (!this.canTrackVelocity || undefined === this.prevFrameValue || e - this.updatedAt > 30) return 0;
    let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
    return n.f(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
  }
  start(e) {
    return this.stop(), new Promise(t => {
      let n;
      this.hasAnimated = true;
      let r = false;
      n = e(() => {
        r = true, this.events.animationComplete?.notify(), this.animation === n && this.clearAnimation(), t();
      }), r || (this.animation = n), this.events.animationStart?.notify();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = undefined;
  }
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
const __ex_I_58 = s;
const __ex_o_59 = function (e, t) {
  return new a(e, t);
};
export { __ex_I_58 as I };
export { __ex_o_59 as o };
