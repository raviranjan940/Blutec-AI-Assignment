// module 88653 exports: f
import * as __m21476 from './m21476.jsx';
import * as __m31178 from './m31178.jsx';
import * as __m37806 from './m37806.jsx';
import * as __m47414 from './m47414.jsx';
import * as __m64978 from './m64978.jsx';
import * as __m71645 from 'react';
import * as __m72846 from './m72846.jsx';
import * as __m74008 from './m74008.jsx';

var n = __m71645,
  r = __m31178,
  o = __m47414,
  i = __m74008,
  CA_ = __m21476,
  l = __m72846,
  s = n,
  u = __m37806;
function f(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
class CC_ extends s.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (l.f(t) && e.isPresent && !this.props.isPresent && false !== this.props.pop) {
      let e = t.offsetParent,
        n = l.f(e) && e.offsetWidth || 0,
        r = l.f(e) && e.offsetHeight || 0,
        o = getComputedStyle(t),
        i = this.props.sizeRef.current;
      i.height = parseFloat(o.height), i.width = parseFloat(o.width), i.top = t.offsetTop, i.left = t.offsetLeft, i.right = n - i.width - i.left, i.bottom = r - i.height - i.top, i.direction = o.direction;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function CD_({
  children: e,
  isPresent: r,
  anchorX: o,
  anchorY: i,
  root: a,
  pop: l
}) {
  let p = s.useId(),
    h = s.useRef(null),
    m = s.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr"
    }),
    {
      nonce: g
    } = s.useContext(u.f),
    y = function (...e) {
      return n.useCallback(function (...e) {
        return t => {
          let n = false,
            r = e.map(e => {
              let r = f(e, t);
              return n || "function" != typeof r || (n = true), r;
            });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              let n = r[t];
              "function" == typeof n ? n() : f(e[t], null);
            }
          };
        };
      }(...e), e);
    }(h, false !== l ? e.props?.ref ?? e?.ref : undefined);
  return s.useInsertionEffect(() => {
    let {
      width: e,
      height: t,
      top: n,
      left: s,
      right: u,
      bottom: f,
      direction: c
    } = m.current;
    if (r || false === l || !h.current || !e || !t) return;
    let d = "rtl" === c,
      y = "left" === o ? d ? `right: ${u}` : `left: ${s}` : d ? `left: ${s}` : `right: ${u}`,
      v = "bottom" === i ? `bottom: ${f}` : `top: ${n}`,
      x = h.current;
    x.dataset.motionPopId = p;
    let C = x.ownerDocument,
      b = C.createElement("style");
    g && (b.nonce = g);
    let w = a ?? C.head;
    return w.appendChild(b), b.sheet && b.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${y}px !important;
            ${v}px !important;
          }
        `), () => {
      h.current?.removeAttribute("data-motion-pop-id"), w.contains(b) && w.removeChild(b);
    };
  }, [r]), <CC_ isPresent={r} childRef={h} sizeRef={m} pop={l}>{false === l ? e : s.cloneElement(e, {
      ref: y
    })}</CC_>;
}
let CP_ = ({
  children: e,
  initial: r,
  isPresent: l,
  onExitComplete: s,
  custom: u,
  presenceAffectsLayout: f,
  mode: c,
  anchorX: p,
  anchorY: m,
  root: g
}) => {
  let y = o.f(h),
    v = n.useId(),
    x = n.useRef(l),
    C = n.useRef(s);
  i.f(() => {
    x.current = l, C.current = s;
  });
  let b = true,
    w = n.useMemo(() => (b = false, {
      id: v,
      initial: r,
      isPresent: l,
      custom: u,
      onExitComplete: e => {
        for (let t of (y.set(e, true), y.values())) if (!t) return;
        s && s();
      },
      register: e => (y.set(e, false), () => {
        y.delete(e), x.current || y.size || C.current?.();
      })
    }), [l, y, s]);
  return f && b && (w = {
    ...w
  }), n.useMemo(() => {
    y.forEach((e, t) => y.set(t, false));
  }, [l]), n.useEffect(() => {
    l || y.size || !s || s();
  }, [l]), e = <CD_ pop={"popLayout" === c} isPresent={l} anchorX={p} anchorY={m} root={g}>{e}</CD_>, <CA_.f.Provider value={w}>{e}</CA_.f.Provider>;
};
function h() {
  return new Map();
}
var m = __m64978;
let g = e => e.key || "";
function y(e) {
  let t = [];
  return n.Children.forEach(e, e => {
    n.isValidElement(e) && t.push(e);
  }), t;
}
const __ex_f_88 = ({
  children: e,
  custom: a,
  initial: l = true,
  onExitComplete: s,
  presenceAffectsLayout: u = true,
  mode: f = "sync",
  propagate: c = false,
  anchorX: d = "left",
  anchorY: h = "top",
  root: v
}) => {
  let [x, C] = m.f(c),
    b = n.useMemo(() => y(e), [e]),
    w = c && !x ? [] : b.map(g),
    M = n.useRef(true),
    E = o.f(() => new Map()),
    j = n.useRef(new Set()),
    [S, R] = n.useState(b),
    [P, A] = n.useState(b);
  i.f(() => {
    !c || x || P.length || C?.();
  }, [x, c, P.length, C]), i.f(() => {
    M.current = false;
    for (let e = 0; e < P.length; e++) {
      let t = g(P[e]);
      w.includes(t) ? (E.delete(t), j.current.delete(t)) : true !== E.get(t) && E.set(t, false);
    }
  }, [P, w.length, w.join("-")]);
  let I = [];
  if (b !== S) {
    let e = [...b],
      t = 0;
    for (let n of P) {
      let r = w.indexOf(g(n));
      -1 === r ? (e.splice(t++, 0, n), I.push(n)) : t = r + I.length + 1;
    }
    return I.every(e => E.get(g(e))) ? e = b : "wait" === f && (e = I), A(y(e)), R(b), null;
  }
  let {
    forceRender: T
  } = n.useContext(r.f);
  return <>{P.map(e => {
      let n = g(e),
        r = (!c || !!x) && (b === P || w.includes(n));
      return <CP_ isPresent={r} initial={(!M.current || !!l) && undefined} custom={a} presenceAffectsLayout={u} mode={f} root={v} onExitComplete={r ? undefined : () => {
        if (j.current.has(n) || !E.has(n)) return;
        j.current.add(n), E.set(n, true);
        let e = true;
        E.forEach(t => {
          t || (e = false);
        }), e && (T?.(), R([]), c && C?.(), s && s());
      }} anchorX={d} anchorY={h} key={n}>{e}</CP_>;
    })}</>;
};
export { __ex_f_88 as f };
