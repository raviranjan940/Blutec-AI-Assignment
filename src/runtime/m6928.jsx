// module 6928 exports: i, k, B, e, P, d
import * as __m4035 from './m4035.jsx';
import * as __m13565 from './m13565.jsx';
import * as __m21476 from './m21476.jsx';
import * as __m25522 from './m25522.jsx';
import * as __m30789 from './m30789.jsx';
import * as __m31178 from './m31178.jsx';
import * as __m32525 from './m32525.jsx';
import * as __m33871 from './m33871.jsx';
import * as __m35043 from './m35043.jsx';
import * as __m37806 from './m37806.jsx';
import * as __m44947 from './m44947.jsx';
import * as __m44966 from './m44966.jsx';
import * as __m47414 from './m47414.jsx';
import * as __m48070 from './m48070.jsx';
import * as __m67926 from './m67926.jsx';
import * as __m71645 from 'react';
import * as __m74008 from './m74008.jsx';
import * as __m76948 from './m76948.jsx';
import * as __m81261 from './m81261.jsx';
import * as __m83411 from './m83411.jsx';
import * as __m84049 from './m84049.jsx';
import * as __m85983 from './m85983.jsx';
import * as __m86579 from './m86579.jsx';
import * as __m87576 from './m87576.jsx';
import * as __m99951 from './m99951.jsx';

var n = __m71645,
  r = __m31178,
  o = __m48070,
  i = __m37806;
let CA_ = n.createContext({});
var l = __m87576,
  s = __m32525;
function u(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var f = __m83411,
  c = __m30789,
  d = __m44947;
let p = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function h(e, t, n) {
  for (let r in t) f.f(t[r]) || c.f(r, n) || (e[r] = t[r]);
}
var m = __m81261,
  g = __m99951;
let y = () => ({
    ...p(),
    attrs: {}
  }),
  v = new Set(["animate", "exit", "variants", "initial", "style", "values", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function x(e) {
  return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || v.has(e);
}
var C = __m44966,
  b = __m84049,
  b = b,
  w = __m33871,
  M = __m85983,
  E = __m86579,
  j = __m21476,
  S = __m47414;
let R = e => (t, r) => {
    let o = n.useContext(CA_),
      i = n.useContext(j.f),
      s = () => function ({
        scrapeMotionValuesFromProps: e,
        createRenderState: t
      }, n, r, o) {
        return {
          latestValues: function (e, t, n, r) {
            let o = {},
              i = r(e, {});
            for (let e in i) o[e] = w.f(i[e]);
            let {
                initial: a,
                animate: s
              } = e,
              u = l.m(e),
              f = l.I(e);
            t && f && !u && false !== e.inherit && (undefined === a && (a = t.initial), undefined === s && (s = t.animate));
            let c = !!n && false === n.initial,
              d = (c = c || false === a) ? s : a;
            if (d && "boolean" != typeof d && !M.f(d)) {
              let t = Array.isArray(d) ? d : [d];
              for (let n = 0; n < t.length; n++) {
                let r = E.f(e, t[n]);
                if (r) {
                  let {
                    transitionEnd: e,
                    transition: t,
                    ...n
                  } = r;
                  for (let e in n) {
                    let t = n[e];
                    if (Array.isArray(t)) {
                      let e = c ? t.length - 1 : 0;
                      t = t[e];
                    }
                    null !== t && (o[e] = t);
                  }
                  for (let t in e) o[t] = e[t];
                }
              }
            }
            return o;
          }(n, r, o, e),
          renderState: t()
        };
      }(e, t, o, i);
    return r ? s() : S.f(s);
  },
  P = R({
    scrapeMotionValuesFromProps: b.f,
    createRenderState: p
  });
var A = __m67926,
  A = A;
let I = R({
  scrapeMotionValuesFromProps: A.f,
  createRenderState: y
});
var T = __m76948;
__m13565;
let $ = Symbol.for("motionComponentSymbol");
var k = __m35043,
  L = __m4035,
  W = __m25522,
  D = __m74008;
function F(e, c) {
  return function (e, {
    forwardMotionProps: c = false,
    type: v
  } = {}) {
    let b = v ? "svg" === v : C.f(e),
      w = b ? I : P;
    function M(v, M) {
      var E;
      let S,
        R,
        P,
        A = {
          ...n.useContext(i.f),
          ...v,
          layoutId: function ({
            layoutId: e
          }) {
            let t = n.useContext(r.f).id;
            return t && undefined !== e ? t + "-" + e : e;
          }(v)
        },
        {
          isStatic: I,
          isValidProp: $
        } = A,
        F = function (e) {
          let {
            initial: t,
            animate: r
          } = function (e, t) {
            if (l.m(e)) {
              let {
                initial: t,
                animate: n
              } = e;
              return {
                initial: false === t || s.f(t) ? t : undefined,
                animate: s.f(n) ? n : undefined
              };
            }
            return false !== e.inherit ? t : {};
          }(e, n.useContext(CA_));
          return n.useMemo(() => ({
            initial: t,
            animate: r
          }), [u(t), u(r)]);
        }(v),
        O = w(v, I);
      if (!I && "u" > typeof window) {
        n.useContext(o.f).strict;
        let t = function (e) {
          let {
            drag: t,
            layout: n
          } = T.f();
          if (!t && !n) return {};
          let r = {
            ...t,
            ...n
          };
          return {
            MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : undefined,
            ProjectionNode: r.ProjectionNode
          };
        }(A);
        S = t.MeasureLayout, F.visualElement = function (e, t, r, l, s, u) {
          let {
              visualElement: f
            } = n.useContext(CA_),
            c = n.useContext(o.f),
            d = n.useContext(j.f),
            p = n.useContext(i.f),
            h = p.reducedMotion,
            m = p.skipAnimations,
            g = n.useRef(null),
            y = n.useRef(false);
          l = l || c.renderer, !g.current && l && (g.current = l(e, {
            visualState: t,
            parent: f,
            props: r,
            presenceContext: d,
            blockInitialAnimation: !!d && false === d.initial,
            reducedMotionConfig: h,
            skipAnimations: m,
            isSVG: u
          }), y.current && g.current && (g.current.manuallyAnimateOnMount = true));
          let v = g.current,
            x = n.useContext(L.f);
          v && !v.projection && s && ("html" === v.type || "svg" === v.type) && function (e, t, n, r) {
            let {
              layoutId: o,
              layout: i,
              drag: a,
              dragConstraints: l,
              layoutScroll: s,
              layoutRoot: u,
              layoutAnchor: f,
              layoutCrossfade: c
            } = t;
            e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? undefined : function e(t) {
              if (t) return false !== t.options.allowProjection ? t.projection : e(t.parent);
            }(e.parent)), e.projection.setOptions({
              layoutId: o,
              layout: i,
              alwaysMeasureLayout: !!a || l && W.f(l),
              visualElement: e,
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: r,
              crossfade: c,
              layoutScroll: s,
              layoutRoot: u,
              layoutAnchor: f
            });
          }(g.current, r, s, x);
          let C = n.useRef(false);
          n.useInsertionEffect(() => {
            v && C.current && v.update(r, d);
          });
          let b = r[k.f],
            w = n.useRef(!!b && "u" > typeof window && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
          return D.f(() => {
            y.current && v && (v.animationState?.animateChanges(), v.enteringChildren = undefined);
          }, []), D.f(() => {
            y.current = true, v && (C.current = true, window.MotionIsMounted = true, v.updateFeatures(), v.scheduleRenderMicrotask(), w.current && v.animationState && v.animationState.animateChanges());
          }), n.useEffect(() => {
            v && (!w.current && v.animationState && v.animationState.animateChanges(), w.current && (queueMicrotask(() => {
              window.MotionHandoffMarkAsComplete?.(b);
            }), w.current = false), v.enteringChildren = undefined);
          }), v;
        }(e, O, A, undefined, t.ProjectionNode, b);
      }
      return <CA_.Provider value={F}>{S && F.visualElement ? <S visualElement={F.visualElement} {...A} /> : null}{function (e, t, r, {
          latestValues: o
        }, i, a = false, l, s) {
          let u = (l ?? C.f(e) ? function (e, t, r, o) {
              let i = n.useMemo(() => {
                let n = y();
                return m.d(n, t, g.f(o), e.transformTemplate, e.style), {
                  ...n.attrs,
                  style: {
                    ...n.style
                  }
                };
              }, [t]);
              if (e.style) {
                let t = {};
                h(t, e.style, e), i.style = {
                  ...t,
                  ...i.style
                };
              }
              return i;
            } : function (e, t) {
              let r,
                o,
                i = {},
                a = (r = e.style || {}, h(o = {}, r, e), Object.assign(o, function ({
                  transformTemplate: e
                }, t) {
                  return n.useMemo(() => {
                    let n = p();
                    return d.f(n, t, e), Object.assign({}, n.vars, n.style);
                  }, [t]);
                }(e, t)), o);
              return e.drag && false !== e.dragListener && (i.draggable = false, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = true === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`), undefined === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = a, i;
            })(t, o, i, e),
            c = function (e, t, n, r) {
              let o = {};
              for (let i in e) ("values" !== i || "object" != typeof e.values) && !f.f(e[i]) && ((i.startsWith("on") ? !x(i) : r?.(i) ?? !x(i)) || true === n && x(i) || !t && !x(i) || e.draggable && i.startsWith("onDrag")) && (o[i] = e[i]);
              return o;
            }(t, "string" == typeof e, a, s),
            v = e !== n.Fragment ? {
              ...c,
              ...u,
              ref: r
            } : {},
            {
              children: b
            } = t,
            w = n.useMemo(() => f.f(b) ? b.get() : b, [b]);
          return n.createElement(e, {
            ...v,
            children: w
          });
        }(e, v, (E = F.visualElement, R = n.useRef(M), n.useInsertionEffect(() => {
          R.current = M;
        }), P = n.useRef(null), n.useCallback(e => {
          e && O.onMount?.(e), E && (e ? E.mount(e) : E.unmount());
          let t = R.current;
          if ("function" == typeof t) {
            if (e) {
              let n = t(e);
              "function" == typeof n && (P.current = n);
            } else P.current ? (P.current(), P.current = null) : t(e);
          } else t && (t.current = e);
        }, [E])), O, I, c, b, $)}</CA_.Provider>;
    }
    M.displayName = `motion.${"string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    let E = n.forwardRef(M);
    return E[$] = e, E;
  }(e, c);
}
let O = F("button"),
  U = F("div"),
  V = F("li"),
  H = F("ol"),
  z = F("span"),
  B = F("ul");
const __ex_i_29 = O;
const __ex_k_30 = U;
const __ex_B_31 = V;
const __ex_e_32 = H;
const __ex_P_33 = z;
const __ex_d_34 = B;
export { __ex_i_29 as i };
export { __ex_k_30 as k };
export { __ex_B_31 as B };
export { __ex_e_32 as e };
export { __ex_P_33 as P };
export { __ex_d_34 as d };
