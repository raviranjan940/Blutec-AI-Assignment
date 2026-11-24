// module 4602 exports: SmoothScroll
import * as __m18535 from './m18535.jsx';
import * as __m71645 from 'react';
import * as __m87022 from './m87022.jsx';

var e = __m71645,
  i = "1.3.26";
function s(t, e, i) {
  return Math.max(t, Math.min(e, i));
}
var n = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(t) {
      if (!this.isRunning) return;
      let e = false;
      if (this.duration && this.easing) {
        this.currentTime += t;
        let i = s(0, this.currentTime / this.duration, 1),
          n = (e = i >= 1) ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * n;
      } else if (this.lerp) {
        var i, n, o, r;
        this.value = (i = this.value, n = this.to, o = 60 * this.lerp, (1 - (r = 1 - Math.exp(-o * t))) * i + r * n), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, e = true);
      } else this.value = this.to, e = true;
      e && this.stop(), this.onUpdate?.(this.value, e);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t, e, {
      lerp: i,
      duration: s,
      easing: n,
      onStart: o,
      onUpdate: r
    }) {
      this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = n, this.currentTime = 0, this.isRunning = true, o?.(), this.onUpdate = r;
    }
  },
  o = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(t, e, {
      autoResize: i = true,
      debounce: s = 250
    } = {}) {
      if (this.wrapper = t, this.content = e, i) {
        var n;
        let t;
        this.debouncedResize = (n = this.resize, function (...e) {
          clearTimeout(t), t = setTimeout(() => {
            t = undefined, n.apply(this, e);
          }, s);
        }), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      };
    }
  },
  r = class {
    events = {};
    emit(t, ...e) {
      let i = this.events[t] || [];
      for (let t = 0, s = i.length; t < s; t++) i[t]?.(...e);
    }
    on(t, e) {
      return this.events[t] ? this.events[t].push(e) : this.events[t] = [e], () => {
        this.events[t] = this.events[t]?.filter(t => e !== t);
      };
    }
    off(t, e) {
      this.events[t] = this.events[t]?.filter(t => e !== t);
    }
    destroy() {
      this.events = {};
    }
  };
let a = 100 / 6,
  l = {
    passive: false
  };
function h(t, e) {
  return 1 === t ? a : 2 === t ? e : 1;
}
var u = class {
  touchStart = {
    x: 0,
    y: 0
  };
  lastDelta = {
    x: 0,
    y: 0
  };
  window = {
    width: 0,
    height: 0
  };
  emitter = new r();
  constructor(t, e = {
    wheelMultiplier: 1,
    touchMultiplier: 1
  }) {
    this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onTouchMove, l), this.element.addEventListener("touchend", this.onTouchEnd, l);
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  destroy() {
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onTouchMove, l), this.element.removeEventListener("touchend", this.onTouchEnd, l);
  }
  onTouchStart = t => {
    let {
      clientX: e,
      clientY: i
    } = t.targetTouches ? t.targetTouches[0] : t;
    this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
      x: 0,
      y: 0
    }, this.emitter.emit("scroll", {
      deltaX: 0,
      deltaY: 0,
      event: t
    });
  };
  onTouchMove = t => {
    let {
        clientX: e,
        clientY: i
      } = t.targetTouches ? t.targetTouches[0] : t,
      s = -(e - this.touchStart.x) * this.options.touchMultiplier,
      n = -(i - this.touchStart.y) * this.options.touchMultiplier;
    this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
      x: s,
      y: n
    }, this.emitter.emit("scroll", {
      deltaX: s,
      deltaY: n,
      event: t
    });
  };
  onTouchEnd = t => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event: t
    });
  };
  onWheel = t => {
    let {
        deltaX: e,
        deltaY: i,
        deltaMode: s
      } = t,
      n = h(s, this.window.width),
      o = h(s, this.window.height);
    e *= n, i *= o, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
      deltaX: e,
      deltaY: i,
      event: t
    });
  };
  onWindowResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
};
let c = t => Math.min(1, 1.001 - 2 ** (-10 * t));
var d = class {
    _isScrolling = false;
    _isStopped = false;
    _isLocked = false;
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    _rafId = null;
    _isDraggingSelection = false;
    reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    isTouching;
    isIos;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new n();
    emitter = new r();
    dimensions;
    virtualScroll;
    constructor({
      wrapper: t = window,
      content: e = document.documentElement,
      eventsTarget: s = t,
      smoothWheel: n = true,
      syncTouch: r = false,
      syncTouchLerp: a = .075,
      touchInertiaExponent: l = 1.7,
      duration: h,
      easing: d,
      lerp: p = .1,
      infinite: m = false,
      orientation: f = "vertical",
      gestureOrientation: v = "horizontal" === f ? "both" : "vertical",
      touchMultiplier: y = 1,
      wheelMultiplier: g = 1,
      autoResize: x = true,
      prevent: w,
      virtualScroll: S,
      overscroll: T = true,
      autoRaf: P = false,
      anchors: E = false,
      autoToggle: b = false,
      allowNestedScroll: A = false,
      __experimental__naiveDimensions: L = false,
      naiveDimensions: D = L,
      stopInertiaOnNavigate: R = false,
      respectReducedMotion: k = true
    } = {}) {
      window.lenisVersion = i, window.lenis || (window.lenis = {}), window.lenis.version = i, "horizontal" === f && (window.lenis.horizontal = true), true === r && (window.lenis.touch = true), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), t && t !== document.documentElement || (t = window), "number" == typeof h && "function" != typeof d ? d = c : "function" == typeof d && "number" != typeof h && (h = 1), this.options = {
        wrapper: t,
        content: e,
        eventsTarget: s,
        smoothWheel: n,
        syncTouch: r,
        syncTouchLerp: a,
        touchInertiaExponent: l,
        duration: h,
        easing: d,
        lerp: p,
        infinite: m,
        gestureOrientation: v,
        orientation: f,
        touchMultiplier: y,
        wheelMultiplier: g,
        autoResize: x,
        prevent: w,
        virtualScroll: S,
        overscroll: T,
        autoRaf: P,
        anchors: E,
        autoToggle: b,
        allowNestedScroll: A,
        naiveDimensions: D,
        stopInertiaOnNavigate: R,
        respectReducedMotion: k
      }, this.dimensions = new o(t, e, {
        autoResize: x
      }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: true
      }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new u(s, {
        touchMultiplier: y,
        wheelMultiplier: g
      }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: true
      }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    off(t, e) {
      return this.emitter.off(t, e);
    }
    onScrollEnd = t => {
      t instanceof CustomEvent || "smooth" !== this.isScrolling && false !== this.isScrolling || t.stopPropagation();
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: {
          lenisScrollEnd: true
        }
      }));
    };
    get overflow() {
      let t = this.isHorizontal ? "overflow-x" : "overflow-y";
      return getComputedStyle(this.rootElement)[t];
    }
    checkOverflow() {
      ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
    }
    onTransitionEnd = t => {
      t.propertyName?.includes("overflow") && t.target === this.rootElement && this.checkOverflow();
    };
    setScroll(t) {
      this.isHorizontal ? this.options.wrapper.scrollTo({
        left: t,
        behavior: "instant"
      }) : this.options.wrapper.scrollTo({
        top: t,
        behavior: "instant"
      });
    }
    onClick = t => {
      let e = t.composedPath().filter(t => t instanceof HTMLAnchorElement && t.href).map(t => new URL(t.href)),
        i = new URL(window.location.href);
      if (this.options.anchors) {
        let t = e.find(t => i.host === t.host && i.pathname === t.pathname && t.hash);
        if (t) {
          let e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : undefined,
            i = decodeURIComponent(t.hash);
          this.scrollTo(i, e);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && e.some(t => i.host === t.host && i.pathname !== t.pathname)) return void this.reset();
    };
    onPointerDown = t => {
      1 === t.button && this.reset();
    };
    isTouchOnSelectionHandle(t) {
      let e = window.getSelection();
      if (!e || e.isCollapsed || 0 === e.rangeCount) return false;
      let i = t.targetTouches[0] ?? t.changedTouches[0];
      if (!i) return false;
      let s = e.getRangeAt(0).getClientRects();
      if (0 === s.length) return false;
      let n = s[0],
        o = s[s.length - 1],
        r = 40 >= Math.hypot(i.clientX - n.left, i.clientY - n.top),
        a = 40 >= Math.hypot(i.clientX - o.right, i.clientY - o.bottom);
      return r || a;
    }
    onVirtualScroll = t => {
      if ("function" == typeof this.options.virtualScroll && false === this.options.virtualScroll(t)) return;
      let {
        deltaX: e,
        deltaY: i,
        event: s
      } = t;
      if (this.emitter.emit("virtual-scroll", {
        deltaX: e,
        deltaY: i,
        event: s
      }), s.ctrlKey || s.lenisStopPropagation) return;
      let n = s.type.includes("touch"),
        o = s.type.includes("wheel");
      if (n && this.isIos && ("touchstart" === s.type && (this._isDraggingSelection = this.isTouchOnSelectionHandle(s)), this._isDraggingSelection)) {
        "touchend" === s.type && (this._isDraggingSelection = false);
        return;
      }
      this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
      let r = 0 === e && 0 === i;
      if (this.options.syncTouch && n && "touchstart" === s.type && r && !this.isStopped && !this.isLocked) return void this.reset();
      let a = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
      if (r || a) return;
      let l = s.composedPath();
      l = l.slice(0, l.indexOf(this.rootElement));
      let h = this.options.prevent,
        u = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
      if (l.find(t => t instanceof HTMLElement && ("function" == typeof h && h?.(t) || t.hasAttribute?.("data-lenis-prevent") || "vertical" === u && t.hasAttribute?.("data-lenis-prevent-vertical") || "horizontal" === u && t.hasAttribute?.("data-lenis-prevent-horizontal") || n && t.hasAttribute?.("data-lenis-prevent-touch") || o && t.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(t, {
        deltaX: e,
        deltaY: i
      })))) return;
      if (this.isStopped || this.isLocked) {
        s.cancelable && s.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && n || this.options.smoothWheel && o)) {
        this.isScrolling = "native", this.animate.stop(), s.lenisStopPropagation = true;
        return;
      }
      let c = i;
      "both" === this.options.gestureOrientation ? c = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (c = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (s.lenisStopPropagation = true), s.cancelable && s.preventDefault();
      let d = n && this.options.syncTouch,
        p = n && "touchend" === s.type;
      p && (c = Math.sign(c) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + c, {
        programmatic: false,
        ...(d ? {
          lerp: p ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        })
      });
    };
    resize() {
      this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    onNativeScroll = () => {
      if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (false === this.isScrolling || "native" === this.isScrolling) {
        let t = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = false, this.emit();
        }, 400));
      }
    };
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
        this.internalStart();
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), this.isStopped = false, this.emit());
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
        this.internalStop();
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), this.isStopped = true, this.emit());
    }
    raf = t => {
      let e = t - (this.time || t);
      this.time = t, this.animate.advance(.001 * e), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    };
    scrollTo(t, {
      offset: e = 0,
      immediate: i = false,
      lock: n = false,
      programmatic: o = true,
      lerp: r = o ? this.options.lerp : undefined,
      duration: a = o ? this.options.duration : undefined,
      easing: l = o ? this.options.easing : undefined,
      onStart: h,
      onComplete: u,
      force: d = false,
      userData: p
    } = {}) {
      if (this.prefersReducedMotion && (o ? i = true : (r = 1, a = undefined, l = undefined)), (this.isStopped || this.isLocked) && !d) return;
      let m = t,
        f = e;
      if ("string" == typeof m && ["top", "left", "start", "#"].includes(m)) m = 0;else if ("string" == typeof m && ["bottom", "right", "end"].includes(m)) m = this.limit;else {
        let t = null;
        if ("string" == typeof m ? (t = m.startsWith("#") ? document.getElementById(m.slice(1)) : document.querySelector(m)) || ("#top" === m ? m = 0 : console.warn("Lenis: Target not found", m)) : m instanceof HTMLElement && m?.nodeType && (t = m), t) {
          if (this.options.wrapper !== window) {
            let t = this.rootElement.getBoundingClientRect();
            f -= this.isHorizontal ? t.left : t.top;
          }
          let e = t.getBoundingClientRect(),
            i = getComputedStyle(t),
            s = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop),
            n = getComputedStyle(this.rootElement),
            o = this.isHorizontal ? Number.parseFloat(n.scrollPaddingLeft) : Number.parseFloat(n.scrollPaddingTop);
          m = (this.isHorizontal ? e.left : e.top) + this.animatedScroll - (Number.isNaN(s) ? 0 : s) - (Number.isNaN(o) ? 0 : o);
        }
      }
      if ("number" == typeof m) {
        if (m += f, this.options.infinite) {
          if (o) {
            this.targetScroll = this.animatedScroll = this.scroll;
            let t = m - this.animatedScroll;
            t > this.limit / 2 ? m -= this.limit : t < -this.limit / 2 && (m += this.limit);
          }
        } else m = s(0, m, this.limit);
        if (m === this.targetScroll) {
          h?.(this), u?.(this);
          return;
        }
        if (this.userData = p ?? {}, i) {
          this.animatedScroll = this.targetScroll = m, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          return;
        }
        o || (this.targetScroll = m), "number" == typeof a && "function" != typeof l ? l = c : "function" == typeof l && "number" != typeof a && (a = 1), this.animate.fromTo(this.animatedScroll, m, {
          duration: a,
          easing: l,
          lerp: r,
          onStart: () => {
            n && (this.isLocked = true), this.isScrolling = "smooth", h?.(this);
          },
          onUpdate: (t, e) => {
            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), o && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            }), this.preventNextNativeScrollEvent());
          }
        });
      }
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = true, requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = false;
      });
    }
    hasNestedScroll(t, {
      deltaX: e,
      deltaY: i
    }) {
      let s,
        n,
        o,
        r,
        a,
        l,
        h,
        u,
        c,
        d,
        p,
        m,
        f,
        v,
        y,
        g,
        x = Date.now();
      t._lenis || (t._lenis = {});
      let w = t._lenis;
      if (x - (w.time ?? 0) > 2e3) {
        w.time = Date.now();
        let e = window.getComputedStyle(t);
        if (w.computedStyle = e, s = ["auto", "overlay", "scroll"].includes(e.overflowX), n = ["auto", "overlay", "scroll"].includes(e.overflowY), a = ["auto"].includes(e.overscrollBehaviorX), l = ["auto"].includes(e.overscrollBehaviorY), w.hasOverflowX = s, w.hasOverflowY = n, !(s || n)) return false;
        h = t.scrollWidth, u = t.scrollHeight, c = t.clientWidth, d = t.clientHeight, o = h > c, r = u > d, w.isScrollableX = o, w.isScrollableY = r, w.scrollWidth = h, w.scrollHeight = u, w.clientWidth = c, w.clientHeight = d, w.hasOverscrollBehaviorX = a, w.hasOverscrollBehaviorY = l;
      } else o = w.isScrollableX, r = w.isScrollableY, s = w.hasOverflowX, n = w.hasOverflowY, h = w.scrollWidth, u = w.scrollHeight, c = w.clientWidth, d = w.clientHeight, a = w.hasOverscrollBehaviorX, l = w.hasOverscrollBehaviorY;
      if (!(s && o || n && r)) return false;
      let S = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
      if ("horizontal" === S) p = Math.round(t.scrollLeft), m = h - c, f = e, v = s, y = o, g = a;else {
        if ("vertical" !== S) return false;
        p = Math.round(t.scrollTop), m = u - d, f = i, v = n, y = r, g = l;
      }
      return !g && (p >= m || p <= 0) || (f > 0 ? p < m : p > 0) && v && y;
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      let t = this.options.wrapper;
      return this.isHorizontal ? t.scrollX ?? t.scrollLeft : t.scrollY ?? t.scrollTop;
    }
    get scroll() {
      var t;
      return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(t) {
      this._isScrolling !== t && (this._isScrolling = t, this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(t) {
      this._isStopped !== t && (this._isStopped = t, this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(t) {
      this._isLocked !== t && (this._isLocked = t, this.updateClassName());
    }
    get isSmooth() {
      return "smooth" === this.isScrolling;
    }
    get prefersReducedMotion() {
      return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
    }
    get className() {
      let t = "lenis";
      return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t;
    }
    updateClassName() {
      this.cleanUpClassName(), this.className.split(" ").forEach(t => {
        this.rootElement.classList.add(t);
      });
    }
    cleanUpClassName() {
      for (let t of Array.from(this.rootElement.classList)) ("lenis" === t || t.startsWith("lenis-")) && this.rootElement.classList.remove(t);
    }
  },
  p = __m87022,
  m = __m18535;
let f = null;
const __ex_SmoothScroll_7 = function () {
  let t = m.z();
  return e.useEffect(() => {
    let t = t => {
      let e;
      if (t.defaultPrevented || 0 === t.detail || 0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
      let i = t.target?.closest?.("a[href*='#']");
      if (!i || i.target && "_self" !== i.target) return;
      let s = new URL(i.href, location.href);
      if (s.origin !== location.origin || s.pathname !== location.pathname || s.search !== location.search || s.hash.length < 2) return;
      let n = (e = decodeURIComponent(s.hash.slice(1)), [...document.querySelectorAll(`[id="${CSS.escape(e)}"]`)].find(t => t.getClientRects().length));
      n && (t.preventDefault(), f ? f.scrollTo(n) : n.scrollIntoView({
        behavior: m.F() ? "instant" : "smooth"
      }), history.pushState(null, "", s.hash));
    };
    return addEventListener("click", t), () => removeEventListener("click", t);
  }, []), e.useEffect(() => {
    if (t || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let e = document.documentElement,
      i = new d({
        autoRaf: false,
        lerp: .1,
        wheelMultiplier: .85,
        prevent: t => !!t.closest?.("dialog, [data-lenis-prevent]"),
        virtualScroll: () => "hidden" !== getComputedStyle(e).overflowY
      });
    f = i;
    let s = () => i.scrollTo(i.actualScroll, {
      immediate: true
    });
    addEventListener("tp:navigate", s), addEventListener("popstate", s);
    let n = t => i.raf(t.timestamp);
    return p.y.read(n, true), () => {
      p.Y(n), removeEventListener("tp:navigate", s), removeEventListener("popstate", s), i.destroy(), f = null;
    };
  }, [t]), null;
};
export { __ex_SmoothScroll_7 as SmoothScroll };
