// shared module body for 14229, 21012, 44493, 94581
import * as __m11485 from './m11485.jsx';
import * as __m47507 from './m47507.jsx';
import * as __m57788 from './m57788.jsx';
import * as __m65091 from './m65091.jsx';
import * as __m69577 from './m69577.jsx';
import * as __m72590 from './m72590.jsx';
import * as __m75554 from './m75554.jsx';
import * as __m76307 from './m76307.jsx';
import * as __m81296 from './m81296.jsx';
import * as __m87022 from './m87022.jsx';

let __v_f_121;
let __v_f_120;
let __v_f_119;
let __v_p_118;
let __v_l_117;
let __v_k_116;
let __v_D_115;
let __v_f_114;
var e = __m72590,
  i = __m47507,
  s = __m69577,
  n = __m75554,
  r = __m11485,
  a = __m81296,
  o = __m57788,
  l = __m76307,
  h = __m65091;
let u = new Set(["x", "y", "z"]),
  f = o.$.filter(t => !u.has(t));
function d(t) {
  let e = [];
  return f.forEach(i => {
    let s = t.getValue(i);
    if (undefined !== s) {
      let t = s.get(),
        n = +!!i.startsWith("scale");
      if (t === n) return;
      e.push([i, t]), s.set(n);
    }
  }), e;
}
let p = new Set(["bottom", "right"]);
function c(t, e, i, s, n, r) {
  let a = parseFloat(t);
  if (!isNaN(a)) return a;
  let {
      min: o,
      max: l
    } = e()[i],
    h = l - o;
  return "border-box" === r ? h : h - parseFloat(s) - parseFloat(n);
}
let m = {
  width: ({
    width: t,
    paddingLeft: e = "0",
    paddingRight: i = "0",
    boxSizing: s
  }, n) => c(t, n, "x", e, i, s),
  height: ({
    height: t,
    paddingTop: e = "0",
    paddingBottom: i = "0",
    boxSizing: s
  }, n) => c(t, n, "y", e, i, s),
  top: ({
    top: t
  }) => parseFloat(t),
  left: ({
    left: t
  }) => parseFloat(t),
  bottom: ({
    top: t
  }, e) => {
    let {
      y: i
    } = e();
    return parseFloat(t) + (i.max - i.min);
  },
  right: ({
    left: t
  }, e) => {
    let {
      x: i
    } = e();
    return parseFloat(t) + (i.max - i.min);
  },
  x: ({
    transform: t
  }) => a.g(t, "x"),
  y: ({
    transform: t
  }) => a.g(t, "y")
};
m.translateX = m.x, m.translateY = m.y, __v_f_114 = p, __v_D_115 = t => t === l.H || t === h.L, __v_k_116 = m, __v_l_117 = d;
var g = __m87022;
let v = new Set(),
  y = false,
  b = false,
  w = false;
function S() {
  if (b) {
    let t = [],
      e = new Set(),
      i = new Set();
    v.forEach(s => {
      s.needsMeasurement && (t.push(s), e.add(s.element), p.has(s.name) && i.add(s.element));
    });
    let s = new Map();
    i.forEach(t => {
      let e = d(t);
      e.length && (s.set(t, e), t.render());
    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
      t.render();
      let e = s.get(t);
      e && e.forEach(([e, i]) => {
        t.getValue(e)?.set(i);
      });
    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
      undefined !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
    });
  }
  b = false, y = false, v.forEach(t => t.complete(w)), v.clear();
}
function L() {
  v.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (b = true);
  });
}
__v_p_118 = class {
  constructor(t, e, i, s, n, r = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = s, this.element = n, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (v.add(this), y || (y = true, g.y.read(L), g.y.resolveKeyframes(S))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      name: a,
      element: o,
      motionValue: l
    } = this;
    if (null === t[0]) {
      let r = l?.get(),
        h = t[t.length - 1];
      if (undefined !== r) t[0] = r;else if (o && a) {
        let r = function (t, r, a) {
          if ("string" == typeof t) {
            if (e.f(t) || i.f(t)) return parseFloat(t);else if (!s.u.test(t) && s.u.test(a)) return n.f(r, a);
          }
          return t ?? undefined;
        }(o.readValue(a, h), a, h);
        undefined !== r && (t[0] = r);
      }
      undefined === t[0] && (t[0] = h), l && undefined === r && l.set(t[0]);
    }
    r.f(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), v.delete(this);
  }
  cancel() {
    "scheduled" === this.state && (v.delete(this), this.state = "pending");
  }
  resume() {
    "pending" === this.state && this.scheduleResolve();
  }
}, __v_f_119 = function () {
  w = true, L(), S(), w = false;
}, __v_f_120 = function (t, e, i) {
  e.startsWith("--") ? t.style.setProperty(e, i) : t.style[e] = i;
};
let V = t => null !== t;
__v_f_121 = function (t, {
  repeat: e,
  repeatType: i = "loop"
}, s, n = 1) {
  let r = t.filter(V),
    a = n < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
  return a && undefined !== s ? s : r[a];
};
export { __v_f_114 as f__44493 };
export { __v_D_115 as D__44493 };
export { __v_k_116 as k__44493 };
export { __v_l_117 as l__44493 };
export { __v_p_118 as p__21012 };
export { __v_f_119 as f__21012 };
export { __v_f_120 as f__94581 };
export { __v_f_121 as f__14229 };
