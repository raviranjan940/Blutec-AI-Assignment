// shared module body for 28409, 66857
import * as __m56512 from './m56512.jsx';
import * as __m63074 from './m63074.jsx';
import * as __m65566 from './m65566.jsx';
import * as __m76959 from './m76959.jsx';

let __v_f_42;
let __v_z_41;
let __v_y_40;
var t = __m63074,
  n = __m65566,
  r = __m76959,
  i = __m56512;
function s(e, t = 50, n = 2e4, r) {
  let i = 0,
    a = e.next(i);
  for (r?.push(a.value); !a.done && i < n;) i += t, a = e.next(i), r?.push(a.value);
  return i >= n ? 1 / 0 : i;
}
__v_y_40 = s, __v_z_41 = 2e4;
let a = .01,
  o = 2,
  u = .005,
  l = .5,
  f = e => e < 0 ? 1 / Math.max(1 + e, .05) : Math.max(1 - e, .05);
function c(e, t) {
  if (!(e > 1)) return 1;
  let n = Math.sqrt(e * e - 1),
    r = e - n,
    i = e + n,
    s = 2 * n * Math.exp(-t) * (1 + t);
  return d(e => i * Math.exp(-r * e) - r * Math.exp(-i * e) - s, e => Math.exp(-i * e) - Math.exp(-r * e), t) / t;
}
function h(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function d(e, t, n) {
  let r = n;
  for (let n = 1; n < 12; n++) r -= e(r) / t(r);
  return r;
}
let p = (e, t) => (t ? e >= 0 : e > 0) && e < 1 / 0;
function v(e, t) {
  if (p(e, t)) return e;
}
function g(e = .3, m = .3) {
  let y,
    b,
    x,
    M = "object" != typeof e ? {
      visualDuration: e,
      keyframes: [0, 1],
      bounce: m
    } : e,
    w = M.keyframes[0],
    S = M.keyframes[M.keyframes.length - 1],
    A = {
      done: false,
      value: w
    },
    {
      stiffness: C,
      damping: E,
      mass: P,
      duration: k,
      isResolvedFromDuration: T,
      isTimeDefined: O
    } = function (e) {
      let i = v(e.stiffness),
        s = v(e.damping, true),
        a = v(e.mass),
        o = {
          ...e,
          stiffness: i ?? 100,
          damping: s ?? 10,
          mass: a ?? 1,
          isResolvedFromDuration: false,
          isTimeDefined: (i ?? s ?? a) === undefined && (undefined !== e.duration || undefined !== e.bounce)
        };
      if (o.isTimeDefined) {
        if (e.visualDuration) {
          let t = f(e.bounce || 0),
            n = 2 * Math.PI / (1.2 * e.visualDuration) * c(t, 2 * Math.PI / 1.2);
          o.stiffness = n * n, o.damping = 2 * t * Math.sqrt(o.stiffness);
        } else Object.assign(o, function ({
          duration: e = 800,
          bounce: i = .3
        }) {
          let s, a;
          n.w(e <= t.Z(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
          let o = f(i);
          e = r.f(.01, 10, t.q(e)), o < 1 ? (s = t => {
            let n = t * o,
              r = n * e;
            return .001 - n / h(t, o) * Math.exp(-r);
          }, a = t => {
            let n = t * o * e,
              r = o * o * t * t * e,
              i = Math.exp(-n),
              a = h(t * t, o);
            return -((-s(t) + .001 > 0 ? -1 : 1) * r) * i / a;
          }) : (s = t => -.001 + Math.exp(-t * e) * (t * e + 1), a = t => -(e * e * t * Math.exp(-t * e)));
          let u = d(s, a, 5 / e),
            l = u * c(o, u * e),
            p = l * l;
          return {
            stiffness: p,
            damping: 2 * o * Math.sqrt(p),
            duration: t.Z(e)
          };
        }(o)), o.isResolvedFromDuration = true;
        p(o.stiffness) && p(o.damping, true) || (o.stiffness = 100, o.damping = 10);
      }
      return o;
    }({
      ...M
    }),
    j = e => O ? 0 : -t.q(e),
    F = E / (2 * Math.sqrt(C * P)),
    I = t.q(Math.sqrt(C / P)),
    _ = F * I,
    D = {
      target: S,
      delta: S - w,
      velocity: j(M.velocity || 0) || 0,
      restSpeed: 0,
      restDelta: 0
    },
    L = () => {
      let e = 5 > Math.abs(D.delta);
      D.restSpeed = M.restSpeed || (e ? a : o), D.restDelta = M.restDelta || (e ? u : l);
    };
  if (L(), F < 1) {
    let e = h(I, F),
      t = {
        A: 0,
        sinC: 0,
        cosC: 0,
        t: -1,
        env: 0,
        sin: 0,
        cos: 0
      };
    x = () => {
      t.A = (D.velocity + _ * D.delta) / e, t.sinC = _ * t.A + D.delta * e, t.cosC = _ * D.delta - t.A * e;
    };
    let n = n => {
      n !== t.t && (t.t = n, t.env = Math.exp(-_ * n), t.sin = Math.sin(e * n), t.cos = Math.cos(e * n));
    };
    y = e => (n(e), D.target - t.env * (t.A * t.sin + D.delta * t.cos)), b = e => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos));
  } else if (1 === F) {
    y = e => D.target - Math.exp(-I * e) * (D.delta + (D.velocity + I * D.delta) * e);
    let e = {
      C: 0
    };
    x = () => {
      e.C = D.velocity + I * D.delta;
    }, b = t => Math.exp(-I * t) * (I * e.C * t - D.velocity);
  } else {
    let e = I * Math.sqrt(F * F - 1),
      t = _ - e,
      n = _ + e,
      r = O ? 1 / 0 : 300 / e,
      i = (e, t) => Math.exp(t > r ? -e * r - _ * (t - r) : -e * t),
      s = {
        S: 0,
        F: 0
      };
    x = () => {
      let t = (D.velocity + _ * D.delta) / e;
      s.S = (D.delta + t) / 2, s.F = (D.delta - t) / 2;
    }, y = e => D.target - s.S * i(t, e) - s.F * i(n, e), b = e => t * s.S * i(t, e) + n * s.F * i(n, e);
  }
  x();
  let N = T && k || null,
    U = {
      calculatedDuration: N,
      retarget: (e, t) => {
        D.target = e[e.length - 1], D.delta = D.target - e[0], D.velocity = j(t), M.restSpeed && M.restDelta || L(), U.calculatedDuration = N, A.done = false, x();
      },
      velocity: e => t.Z(b(e)),
      next: e => {
        let n = y(e);
        return T ? A.done = e >= k : A.done = Math.abs(t.Z(b(e))) <= D.restSpeed && Math.abs(D.target - n) <= D.restDelta, A.value = A.done ? D.target : n, A;
      },
      toString: () => {
        let e = Math.min(s(U), 2e4),
          t = i.f(t => U.next(e * t).value, e, 30);
        return e + "ms " + t;
      },
      toTransition: () => {}
    };
  return U;
}
g.applyToOptions = e => {
  let n = function (e, n = 100, r) {
    let i = r({
        ...e,
        keyframes: [0, n]
      }),
      a = Math.min(s(i), 2e4);
    return {
      type: "keyframes",
      ease: e => i.next(a * e).value / n,
      duration: t.q(a)
    };
  }(e, 100, g);
  return e.ease = n.ease, e.duration = t.Z(n.duration), e.type = "keyframes", e;
}, __v_f_42 = g;
export { __v_y_40 as y__66857 };
export { __v_z_41 as z__66857 };
export { __v_f_42 as f__28409 };
