// module 10542 exports: f
import * as __m25791 from './m25791.jsx';
import * as __m30551 from './m30551.jsx';
import * as __m47414 from './m47414.jsx';
import * as __m48940 from './m48940.jsx';
import * as __m60140 from './m60140.jsx';
import * as __m60830 from './m60830.jsx';
import * as __m61327 from './m61327.jsx';
import * as __m65566 from './m65566.jsx';
import * as __m71645 from 'react';
import * as __m72846 from './m72846.jsx';
import * as __m74008 from './m74008.jsx';
import * as __m76959 from './m76959.jsx';
import * as __m83920 from './m83920.jsx';
import * as __m86427 from './m86427.jsx';
import * as __m87022 from './m87022.jsx';

var t = __m60140,
  r = __m30551,
  n = __m86427,
  i = __m65566,
  l = __m71645,
  s = __m60830,
  a = __m61327,
  o = __m87022,
  c = __m48940,
  f = __m76959,
  d = __m83920,
  u = __m25791;
let h = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
  }),
  g = () => ({
    time: 0,
    x: h(),
    y: h()
  }),
  p = {
    x: {
      length: "Width",
      position: "Left"
    },
    y: {
      length: "Height",
      position: "Top"
    }
  },
  m = new WeakMap(),
  x = {
    start: 0,
    center: .5,
    end: 1
  };
function v(e, t, r = 0) {
  let n = 0;
  if (e in x && (e = x[e]), "string" == typeof e) {
    let t = parseFloat(e);
    e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t;
  }
  return "number" == typeof e && (n = t * e), r + n;
}
let y = [0, 0];
function w(e, t, r, n) {
  let i = Array.isArray(e) ? e : y,
    l = 0;
  return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, x[e] ? e : "0"]), (l = v(i[0], r, n)) - v(i[1], t);
}
let b = [[0, 0], [1, 1]];
var j = __m72846;
let L = new WeakMap(),
  N = new WeakMap(),
  _ = new WeakMap(),
  E = new WeakMap(),
  M = e => e === document.scrollingElement ? window : e;
function k(e, {
  container: t = document.scrollingElement,
  trackContentSize: r = false,
  ...n
} = {}) {
  if (!t) return s.f;
  let i = _.get(t);
  i || (i = new Set(), _.set(t, i));
  let l = function (e, t, r, n = {}) {
    let {
        target: i
      } = n,
      l = i || n.offset;
    return {
      measure: t => {
        if (l) {
          for (let e in r.time = t.time, p) {
            let {
              offset: n
            } = r[e];
            Object.assign(r[e], t[e]), r[e].offset = n;
          }
          if (i && i !== e) {
            let t = function (e, t) {
                let r = {
                    x: 0,
                    y: 0
                  },
                  n = e;
                for (; n && n !== t;) if (j.f(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;else if ("svg" === n.tagName) {
                  let e = n.getBoundingClientRect(),
                    t = (n = n.parentElement).getBoundingClientRect();
                  r.x += e.left - t.left, r.y += e.top - t.top;
                } else if (n instanceof SVGGraphicsElement) {
                  let {
                    x: e,
                    y: t
                  } = n.getBBox();
                  r.x += e, r.y += t;
                  let i = null,
                    l = n.parentNode;
                  for (; !i;) "svg" === l.tagName && (i = l), l = n.parentNode;
                  n = i;
                } else break;
                return r;
              }(i, e),
              n = "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                width: i.clientWidth,
                height: i.clientHeight
              };
            r.x.targetOffset = t.x, r.y.targetOffset = t.y, r.x.targetLength = n.width, r.y.targetLength = n.height;
          }
          !function (e, t) {
            let {
                offset: r = b,
                axis: n = "y"
              } = t,
              i = e[n];
            i.offset.length = 0;
            let l = r.length;
            for (let e = 0; e < l; e++) i.offset[e] = w(r[e], i.containerLength, i.targetLength, i.targetOffset);
            i.progress = f.f(0, 1, function (e, t) {
              let r = e.length - 1;
              if (r < 1) return 0;
              let n = e[0] > e[r],
                i = t => e[n ? r - t : t];
              if (e[0] === e[1] && t < i(0)) return +!!n;
              let l = 0;
              for (; l < r - 1 && t >= i(l + 1);) l++;
              let s = (l + d.f(i(l), i(l + 1), t)) / r;
              return n ? 1 - s : s;
            }(i.offset, i.current));
          }(r, n);
        }
      },
      notify: e => t(l ? r : e)
    };
  }(t, e, g(), n);
  if (i.add(l), !L.has(t)) {
    let e = g(),
      r = () => {
        var r = c.f.timestamp;
        for (let n in p) !function (e, t, r, n) {
          let i = r[t],
            {
              length: l,
              position: s
            } = p[t],
            a = i.current,
            o = r.time,
            c = e[`scroll${s}`];
          i.current = !function (e, t) {
            let r = e === document.scrollingElement,
              n = r && document.body || e,
              i = m.get(n);
            i || m.set(n, i = getComputedStyle(n));
            let {
                writingMode: l,
                flexDirection: s
              } = i,
              a = "x" === t !== /^[vs]/.test(l);
            return (a ? "rtl" === i.direction != ("sideways-lr" === l) : l.endsWith("rl")) !== (!r && i.display.includes("flex") && (a !== ("c" === s[0]) ? s : i.flexWrap).endsWith("reverse"));
          }(e, t) ? c : -c || 0, i.containerLength = e[`client${l}`], i.targetLength = e[`scroll${l}`], i.scrollLength = i.targetLength - i.containerLength, i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = f.f(0, 1, d.f(0, i.scrollLength, i.current));
          let h = n - o;
          i.velocity = h > 50 ? 0 : u.f(i.current - a, h);
        }(t, n, e, r);
        for (let t of (e.time = r, i)) t.measure(e);
        o.y.preUpdate(n);
      },
      n = () => {
        for (let t of i) t.notify(e);
      },
      l = () => o.y.read(r);
    L.set(t, l);
    let s = M(t);
    window.addEventListener("resize", l), t !== document.documentElement && N.set(t, a.f(t, l)), s.addEventListener("scroll", l), l();
  }
  if (r && !E.has(t)) {
    let e = L.get(t),
      r = {
        width: t.scrollWidth,
        height: t.scrollHeight
      },
      n = o.y.read(() => {
        let n = t.scrollWidth,
          i = t.scrollHeight;
        (r.width !== n || r.height !== i) && (e(), r.width = n, r.height = i);
      }, true);
    E.set(t, n);
  }
  let h = L.get(t);
  return o.y.read(h, false, true), () => {
    o.Y(h);
    let e = _.get(t);
    if (!e || (e.delete(l), e.size)) return;
    _.delete(t);
    let r = L.get(t);
    L.delete(t), r && (M(t).removeEventListener("scroll", r), N.get(t)?.(), window.removeEventListener("resize", r));
    let n = E.get(t);
    n && (o.Y(n), E.delete(t));
  };
}
let C = new Map(),
  S = e => {
    if (/v/u.test(e)) return [];
    let t = w(e, 0, 0, 0);
    return [w(e, 0, 1, 0) - t, t - w(e, 1, 0, 0), t];
  },
  W = ([e, t, r]) => !r && (0 === t || 1 === t) && `${t ? "entry" : "exit"}-crossing ${100 * e}%`;
function P(e = b) {
  if (2 !== e.length) return;
  let [t, r] = e.map(S),
    n = [W(t), W(r)],
    i = r[0] - t[0],
    l = t[1] - r[1];
  if (n[0] && n[1] && (i || l)) return {
    points: n,
    a: i,
    b: l,
    cover: !t[0] && 1 === i && 1 === l
  };
}
function A(e, {
  axis: t = "y",
  source: n,
  container: i = document.scrollingElement,
  ...l
} = {}) {
  if (!i) return s.f;
  let o = {
    axis: t,
    container: n || i,
    ...l
  };
  return "function" == typeof e ? k(r => e(r[t].progress, r), o) : function (e, t) {
    let n,
      {
        target: i,
        container: l,
        axis: s
      } = t,
      o = i && P(t.offset),
      c = !("u" < typeof window) && (i ? r.G() : r.a()) && (i ? !!o : !t.offset),
      f = new Map(),
      d = new Set(),
      u = false,
      h = (e, t) => {
        let [r, n] = o.points;
        t.effect.updateTiming({
          direction: u ? "normal" === e ? "reverse" : "alternate-reverse" : e
        }), Object.assign(t, {
          rangeStart: u ? n : r,
          rangeEnd: u ? r : n
        }), t.play();
      },
      g = [e.attachTimeline({
        get timeline() {
          return c ? function ({
            container: e,
            target: t,
            axis: r
          }) {
            let n = C.get(e);
            n || (n = new Map(), C.set(e, n));
            let i = t ?? "self",
              l = n.get(i);
            return l || (l = {}, n.set(i, l)), l[r] || (l[r] = t ? new ViewTimeline({
              subject: t,
              axis: r
            }) : new ScrollTimeline({
              source: e,
              axis: r
            }));
          }(t) : undefined;
        },
        onAttach: o && (e => {
          let t = e.effect.getTiming().direction;
          f.set(e, t), h(t, e);
        }),
        observe: e => (e.pause(), d.add(e), n || (n = k(e => {
          d.forEach(t => {
            t.time = t.iterationDuration * e[s].progress;
          });
        }, t)), () => d.delete(e))
      })];
    if (c && o) {
      let {
          a: e,
          b: t
        } = o,
        r = "y" === s ? "clientHeight" : "clientWidth",
        n = () => {
          u !== (u = e * i[r] + t * l[r] < 0) && f.forEach(h);
        };
      n(), e * t < 0 && g.push(a.f(n), a.f([i, l], n));
    }
    return () => {
      g.forEach(e => e()), n?.();
    };
  }(e, o);
}
var T = __m47414,
  R = __m74008;
let $ = () => ({
    scrollX: n.o(0),
    scrollY: n.o(0),
    scrollXProgress: n.o(0),
    scrollYProgress: n.o(0)
  }),
  B = e => !!e && !e.current;
function O(e, r, n, i) {
  return {
    factory: l => {
      let s,
        a = () => {
          B(n) || B(i) ? t.t.read(a) : s = A(l, {
            ...r,
            axis: e,
            container: n?.current || undefined,
            target: i?.current || undefined
          });
        };
      return t.t.read(a), () => {
        t.w(a), s?.();
      };
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: e => e,
    duration: 1
  };
}
const __ex_f_35 = function ({
  container: e,
  target: n,
  ...s
} = {}) {
  var a;
  let o = T.f($);
  a = s.offset, !("u" < typeof window) && (n ? r.G() && !!P(a) : r.a() && !a) && (o.scrollXProgress.accelerate = O("x", s, e, n), o.scrollYProgress.accelerate = O("y", s, e, n));
  let c = l.useRef(null),
    f = l.useRef(false),
    d = l.useCallback(() => (c.current = A((e, {
      x: t,
      y: r
    }) => {
      o.scrollX.set(t.current), o.scrollXProgress.set(t.progress), o.scrollY.set(r.current), o.scrollYProgress.set(r.progress);
    }, {
      ...s,
      container: e?.current || undefined,
      target: n?.current || undefined
    }), () => {
      c.current?.();
    }), [e, n, JSON.stringify(s.offset)]);
  return R.f(() => {
    if (f.current = false, !(B(e) || B(n))) return d();
    f.current = true;
  }, [d]), l.useEffect(() => {
    let r;
    if (!f.current) return;
    let l = () => {
      let t = B(e),
        l = B(n);
      i.k(!t, "Container ref is defined but not hydrated", "use-scroll-ref"), i.k(!l, "Target ref is defined but not hydrated", "use-scroll-ref"), t || l || (r = d());
    };
    return t.t.read(l), () => {
      t.w(l), r?.();
    };
  }, [d]), o;
};
export { __ex_f_35 as f };
