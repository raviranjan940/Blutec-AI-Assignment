// shared module body for 13565, 17218, 76948
import * as __m21012 from './m21012.jsx';
import * as __m30162 from './m30162.jsx';
import * as __m47507 from './m47507.jsx';
import * as __m57788 from './m57788.jsx';
import * as __m60140 from './m60140.jsx';
import * as __m62118 from './m62118.jsx';
import * as __m63074 from './m63074.jsx';
import * as __m68000 from './m68000.jsx';
import * as __m69577 from './m69577.jsx';
import * as __m70596 from './m70596.jsx';
import * as __m72094 from './m72094.jsx';
import * as __m72590 from './m72590.jsx';
import * as __m75554 from './m75554.jsx';
import * as __m83411 from './m83411.jsx';
import * as __m86427 from './m86427.jsx';
import * as __m87022 from './m87022.jsx';
import * as __m87576 from './m87576.jsx';
import * as __m96173 from './m96173.jsx';

let __v_f_113;
let __v_f_112;
let __v_Y_111;
let __v_k_110;
let __v_F_109;
var e = __m63074,
  i = __m72590,
  s = __m47507,
  n = __m70596,
  r = __m21012,
  a = __m68000,
  o = __m62118,
  l = __m60140,
  h = __m96173,
  u = __m30162,
  f = __m86427,
  d = __m69577,
  p = __m75554,
  c = __m83411,
  m = __m72094,
  g = __m87576,
  v = __m57788;
let y = {
    current: null
  },
  b = {
    current: false
  },
  w = "u" > typeof window;
var S = __m87022;
let L = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
  V = {};
function M(t) {
  V = t;
}
function T() {
  return V;
}
__v_F_109 = class {
  scrapeMotionValuesFromProps(t, e, i) {
    return {};
  }
  constructor({
    parent: t,
    props: e,
    presenceContext: i,
    reducedMotionConfig: s,
    skipAnimations: n,
    blockInitialAnimation: a,
    visualState: o
  }, l = {}) {
    this.current = null, this.children = new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = new Map(), this.KeyframeResolver = r.p, this.features = {}, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      let t = h.f.now();
      this.renderScheduledAt < t && (this.renderScheduledAt = t, S.y.render(this.render, false, true));
    };
    let {
      latestValues: u,
      renderState: f
    } = o;
    this.latestValues = u, this.baseTarget = {
      ...u
    }, this.initialValues = e.initial ? {
      ...u
    } : {}, this.renderState = f, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.skipAnimationsConfig = n, this.options = l, this.blockInitialAnimation = !!a, this.isControllingVariants = g.m(e), this.isVariantNode = g.I(e), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    let {
      willChange: d,
      ...p
    } = this.scrapeMotionValuesFromProps(e, {}, this);
    for (let t in p) {
      let e = p[t];
      undefined !== u[t] && c.f(e) && e.set(u[t]);
    }
  }
  mount(t) {
    if (this.hasBeenMounted) for (let t in this.initialValues) this.values.get(t)?.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
    if (this.current = t, m.f.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.isVariantNode && !this.isControllingVariants) {
      let t = this;
      do t = false !== t.props.inherit && t.parent; while (t && !t.isVariantNode);
      if (t) {
        let {
          variantChildren: e
        } = t;
        e.add(this), this.removeFromVariantTree = () => e.delete(this);
      }
    }
    this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = false : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = true : (b.current || function () {
      if (b.current = true, w) if (window.matchMedia) {
        let t = window.matchMedia("(prefers-reduced-motion)"),
          e = () => y.current = t.matches;
        t.addEventListener("change", e), e();
      } else y.current = false;
    }(), this.shouldReduceMotion = y.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
  }
  unmount() {
    for (let t in this.projection && this.projection.unmount(), S.Y(this.notifyUpdate), S.Y(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t].clear();
    for (let t in this.features) {
      let e = this.features[t];
      e && (e.unmount(), e.isMounted = false);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, i) {
    let s;
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), i.accelerate && o.f.has(t) && this.current instanceof HTMLElement) {
      let {
          factory: s,
          keyframes: n,
          times: r,
          ease: o,
          duration: l
        } = i.accelerate,
        h = new a.f({
          element: this.current,
          name: t,
          keyframes: n,
          times: r,
          ease: o,
          duration: e.Z(l)
        }),
        u = s(h);
      this.valueSubscriptions.set(t, () => {
        u(), h.cancel();
      });
      return;
    }
    let n = v.P.has(t);
    n && this.onBindTransform && this.onBindTransform();
    let r = i.on("change", e => {
      this.latestValues[t] = e, this.props.onUpdate && S.y.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
    });
    "u" > typeof window && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, i)), this.valueSubscriptions.set(t, () => {
      r(), s && s();
    });
  }
  sortNodePosition(t) {
    return this.current && t.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0;
  }
  updateFeatures() {
    let t = "animation";
    for (t in V) {
      let e = V[t];
      if (!e) continue;
      let {
        isEnabled: i,
        Feature: s
      } = e;
      if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        let e = this.features[t];
        e.isMounted ? e.update() : (e.mount(), e.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : u.J();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, e) {
    this.latestValues[t] = e;
  }
  update(t, e) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
    for (let e = 0; e < L.length; e++) {
      let i = L[e];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      let s = t["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = function (t, e, i) {
      for (let s in e) {
        let n = e[s],
          r = i[s];
        if (c.f(n)) t.addValue(s, n);else if (c.f(r)) t.addValue(s, f.o(n, {
          owner: t
        }));else if (r !== n) if (t.hasValue(s)) {
          let e = t.getValue(s);
          true === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
        } else {
          let e = t.getStaticValue(s);
          t.addValue(s, f.o(undefined !== e ? e : n, {
            owner: t
          }));
        }
      }
      for (let s in i) undefined === e[s] && t.removeValue(s);
      return e;
    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : undefined;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  addValue(t, e) {
    let i = this.values.get(t);
    if (e !== i) {
      i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e);
      let s = e.get();
      undefined !== s && (this.latestValues[t] = s);
    }
  }
  removeValue(t) {
    this.values.delete(t);
    let e = this.valueSubscriptions.get(t);
    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, e) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return undefined === i && undefined !== e && (i = f.o(e ?? this.getDefaultValue?.(t), {
      owner: this
    }), this.addValue(t, i)), i;
  }
  readValue(t, e) {
    let n = undefined === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
    return null != n && ("string" == typeof n && (i.f(n) || s.f(n)) ? n = parseFloat(n) : "number" != typeof n && !d.u.test(n) && d.u.test(e) && (n = p.f(t, e)), this.setBaseTarget(t, c.f(n) ? n.get() : n)), c.f(n) ? n.get() : n;
  }
  setBaseTarget(t, e) {
    this.baseTarget[t] = e;
  }
  on(t, e) {
    return this.events[t] || (this.events[t] = new n.f()), this.events[t].add(e);
  }
  notify(t, ...e) {
    this.events[t] && this.events[t].notify(...e);
  }
  scheduleRenderMicrotask() {
    l.t.render(this.render);
  }
}, __v_k_110 = T, __v_Y_111 = M;
let C = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  },
  k = false;
function x() {
  return !function () {
    if (k) return;
    let t = {};
    for (let e in C) t[e] = {
      isEnabled: t => C[e].some(e => !!t[e])
    };
    M(t), k = true;
  }(), T();
}
__v_f_112 = x, __v_f_113 = function (t) {
  let e = x();
  for (let i in t) e[i] = {
    ...e[i],
    ...t[i]
  };
  M(e);
};
export { __v_F_109 as F__17218 };
export { __v_k_110 as k__17218 };
export { __v_Y_111 as Y__17218 };
export { __v_f_112 as f__76948 };
export { __v_f_113 as f__13565 };
