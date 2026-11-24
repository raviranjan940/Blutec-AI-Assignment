// shared module body for 8478, 55334, 89681
import * as __m1063 from './m1063.jsx';

let __v_u_93;
let __v_m_92;
let __v_M_91;
let __v_f_90;
let __v_f_89;
var a = __m1063;
let s = {
    stroke: a.s,
    strokeWidth: 3.4,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  },
  i = {
    ...s,
    fill: "none"
  };
function CO_({
  part: t,
  d: s,
  len: n,
  fill: r,
  transform: h,
  opacity: l
}) {
  return <g data-p={t} transform={h} opacity={l}><path d={`${s}Z`} fill={r} /><path d={s} {...i} /><path d={a.T(n)} {...i} strokeWidth={2.4} /></g>;
}
function CN_() {
  return <><ellipse cx={194} cy={a.e} rx={7.4} ry={8.6} fill={a.s} /><ellipse cx={230} cy={a.e} rx={7.4} ry={8.6} fill={a.s} /><circle cx={196.6} cy={a.e - 3.4} r={2.7} fill="#fff" /><circle cx={232.6} cy={a.e - 3.4} r={2.7} fill="#fff" /><circle cx={192} cy={a.e + 3.2} r={1.2} fill="#fff" /><circle cx={228} cy={a.e + 3.2} r={1.2} fill="#fff" /></>;
}
__v_f_89 = function ({
  pose: t = "sit",
  facing: r = "right",
  className: h,
  label: l,
  style: c
}) {
  let d = a.o[t],
    f = a.F(d),
    p = "left" === r ? `translate(${a.W} 0) scale(-1 1)` : undefined;
  return <svg viewBox={`0 0 ${a.W} ${a.R}`} className={h} style={{
    overflow: "visible",
    ...c
  }} role={l ? "img" : undefined} aria-label={l} aria-hidden={!l || undefined} focusable="false"><g data-p="root" transform={p}><ellipse data-p="shadow" {...a.p.shadow} fill={a.s} opacity={f.shadowOpacity} transform={f.shadow} style={{
        transformBox: "fill-box",
        transformOrigin: "center"
      }} /><g data-p="body" transform={f.body} opacity={f.side}><CO_ part="bf" d={a.a.backFar} len={a.x - 192} fill={a.Q} transform={f.bf} opacity={f.backLegs} /><CO_ part="ff" d={a.a.frontFar} len={a.x - 192} fill={a.Q} transform={f.ff} /><g data-p="tail" transform={f.tail}><path d={a.p.tailStem} {...i} strokeWidth={9} /><path d={a.p.tailStem} stroke={a.O} strokeWidth={4} fill="none" strokeLinecap="round" /><path d={a.p.tail} fill={a.O} {...s} /></g><CO_ part="bn" d={a.a.back} len={a.x - 194} fill={a.O} transform={f.bn} opacity={f.backLegs} /><path d={a.p.body} fill={a.O} {...s} /><path d={a.p.chest} fill={a.O} {...s} /><CO_ part="fn" d={a.a.front} len={a.x - 194} fill={a.O} transform={f.fn} /></g><g data-p="haunch" opacity={f.haunchOpacity} transform={f.haunch}><path d={a.p.haunch} fill={a.O} {...s} /><path d={a.p.haunchPaw} fill={a.O} {...s} /><path d="M132 222v5M139 222v5" {...i} strokeWidth={2.4} /></g><g data-p="head" transform={f.head}><path d={a.p.collar} fill={a.N} {...s} strokeWidth={3} /><path d={a.p.tag} fill={a.l} {...s} strokeWidth={2.4} /><path data-p="earL" d={a.p.earL} fill={a.Q} {...s} transform={f.earL} /><path data-p="earR" d={a.p.earR} fill={a.Q} {...s} transform={f.earR} /><path d={a.p.head} fill={a.O} {...s} /><path d={a.p.topknot} fill={a.O} {...s} strokeWidth={3} /><path d={a.p.muzzle} fill={a.l} /><circle cx={181} cy={116} r={7} fill={a.u} opacity={.85} /><circle cx={243} cy={116} r={7} fill={a.u} opacity={.85} /><g data-p="eyes" transform={f.eyes}><g data-p="open" opacity={f.openEyes}><g data-p="blink" transform={f.blink}><CN_ /></g></g></g><path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" {...i} opacity={f.happyEyes} /><path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" {...i} opacity={f.shutEyes} /><path d={a.p.nose} fill={a.s} /><path d={a.p.mouth} {...i} strokeWidth={3} /><path data-p="tongue" d={a.p.tongue} fill="#e98c8c" stroke={a.s} strokeWidth={2.2} strokeLinejoin="round" opacity={f.tongue} /><g data-p="mouth" opacity={f.mouth}><path d={a.p.mouthOpen} fill="#6b2a1c" {...s} strokeWidth={2.6} /><path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" /></g></g><g data-p="ledge" opacity={f.ledge}><path d={a.p.ledgePaws} fill={a.O} {...s} /><path d={a.p.ledgeToes} {...i} strokeWidth={2.4} /></g></g></svg>;
};
let r = [["root", "transform", "root"], ["shadow", "transform", "shadow"], ["shadow", "opacity", "shadowOpacity"], ["body", "transform", "body"], ["body", "opacity", "side"], ["bf", "transform", "bf"], ["bf", "opacity", "backLegs"], ["bn", "transform", "bn"], ["bn", "opacity", "backLegs"], ["ff", "transform", "ff"], ["fn", "transform", "fn"], ["tail", "transform", "tail"], ["haunch", "transform", "haunch"], ["haunch", "opacity", "haunchOpacity"], ["head", "transform", "head"], ["earL", "transform", "earL"], ["earR", "transform", "earR"], ["eyes", "transform", "eyes"], ["open", "opacity", "openEyes"], ["blink", "transform", "blink"], ["happy", "opacity", "happyEyes"], ["shut", "opacity", "shutEyes"], ["tongue", "opacity", "tongue"], ["mouth", "opacity", "mouth"], ["ledge", "opacity", "ledge"]],
  h = (t, e) => 1 - Math.exp(-t / e),
  l = (t, e = -1, a = 1) => Math.max(e, Math.min(a, t));
__v_f_90 = class {
  svg;
  els;
  written;
  pose;
  target;
  m;
  facing;
  facingTarget;
  strideTarget;
  wagTarget;
  gazeTarget;
  tilt;
  tiltTarget;
  earV;
  nextBlink;
  blinkAt;
  woofUntil;
  bounce;
  bounceV;
  offset;
  offsetTarget;
  pet;
  petTarget;
  turn;
  lean;
  constructor(t, e = "sit", s = 1) {
    this.svg = t, this.els = new Map(), this.written = new Map(), this.m = {
      ...a.t
    }, this.strideTarget = 0, this.wagTarget = .35, this.gazeTarget = {
      x: 0,
      y: 0
    }, this.tilt = 0, this.tiltTarget = 0, this.earV = 0, this.nextBlink = 1.2, this.blinkAt = -1, this.woofUntil = 0, this.bounce = 0, this.bounceV = 0, this.offset = 0, this.offsetTarget = 0, this.pet = 0, this.petTarget = 0, this.turn = .07, this.lean = 0, t.querySelectorAll("[data-p]").forEach(t => this.els.set(t.dataset.p, t)), this.pose = {
      ...a.o[e]
    }, this.target = this.pose, this.facing = s, this.facingTarget = s;
  }
  setPose(t) {
    this.target = "string" == typeof t ? a.o[t] : t;
  }
  jump(t, e) {
    this.pose = {
      ...a.o[t]
    }, this.target = a.o[t], e && (this.facing = this.facingTarget = e);
  }
  face(t, e = .07) {
    this.facingTarget = t, this.turn = e;
  }
  get facingDir() {
    return this.facingTarget;
  }
  stride(t) {
    this.strideTarget = l(t, 0, 1);
  }
  advance(t) {
    this.m.phase += t / 46 * Math.PI;
  }
  walkedTo(t) {
    this.m.phase = t / 46 * Math.PI;
  }
  wag(t) {
    this.wagTarget = l(t, 0, 1);
  }
  cock(t) {
    this.tiltTarget = t;
  }
  lookAt(t) {
    if (!t) {
      this.gazeTarget = {
        x: 0,
        y: 0
      };
      return;
    }
    let e = this.svg.getBoundingClientRect(),
      s = this.facingTarget > 0 ? a.M[0] : a.W - a.M[0],
      i = e.left + s / a.W * e.width,
      o = e.top + a.e / a.R * e.height,
      n = t.x - i,
      r = t.y - o,
      h = Math.hypot(n, r) || 1,
      l = Math.min(1, h / 160);
    this.gazeTarget = {
      x: n / h * l * this.facingTarget,
      y: r / h * l
    };
  }
  woof(t) {
    this.woofUntil = t + .34, this.bounceV = -150, this.earV += 260;
  }
  jolt(t = 1) {
    this.earV += 220 * t;
  }
  hop(t = 1) {
    this.bounceV = -230 * t, this.earV += 200 * t;
  }
  yawn(t, e = .9) {
    this.woofUntil = t + e;
  }
  dash(t) {
    this.offsetTarget = t;
  }
  petting(t) {
    this.petTarget = +!!t;
  }
  reset() {
    this.offsetTarget = 0, this.tiltTarget = 0, this.petTarget = 0;
  }
  tick(t, e) {
    t = Math.min(t, .05);
    let s = this.m;
    s.time = e, this.pose = a.n(this.pose, this.target, h(t, .16)), this.facing += (this.facingTarget - this.facing) * h(t, this.turn), s.stride += (this.strideTarget - s.stride) * h(t, .12), s.stride < .012 && 0 === this.strideTarget && (s.stride = 0), s.wag += (this.wagTarget - s.wag) * h(t, .4), s.gazeX += (this.gazeTarget.x - s.gazeX) * h(t, .07), s.gazeY += (this.gazeTarget.y - s.gazeY) * h(t, .07), this.tilt += (this.tiltTarget + 3 * s.gazeX - this.tilt) * h(t, .18), this.earV += (-150 * s.ear - 10 * this.earV) * t, s.ear = l(s.ear + this.earV * t, -28, 28), this.bounceV += (-260 * this.bounce - 16 * this.bounceV) * t, this.bounce += this.bounceV * t;
    let i = this.offset;
    this.offset += (this.offsetTarget - this.offset) * h(t, .2), .05 > Math.abs(this.offsetTarget - this.offset) && (this.offset = this.offsetTarget);
    let o = Math.abs(this.offset - i);
    o && this.advance(o);
    let n = t > 0 ? Math.min(1, o / t / 180) : 0;
    this.pet += (this.petTarget - this.pet) * h(t, .15), e > this.nextBlink && this.pose.eyes > .6 && (this.blinkAt = e, this.nextBlink = e + 2.2 + 3.8 * Math.random(), .18 > Math.random() && (this.nextBlink = e + .32));
    let c = (e - this.blinkAt) / .15;
    s.blink = c >= 0 && c <= 1 ? Math.sin(c * Math.PI) : 0;
    let d = {
        ...this.pose,
        headRot: this.pose.headRot + this.tilt,
        bodyRot: this.pose.bodyRot + this.lean,
        bodyY: this.pose.bodyY + this.bounce,
        headY: this.pose.headY + 1.15 * this.bounce,
        mouth: e < this.woofUntil ? 1 : this.pose.mouth,
        happy: Math.max(this.pose.happy, this.pet)
      },
      f = a.F(d, n > s.stride ? {
        ...s,
        stride: n
      } : s),
      p = .02 > Math.abs(this.facing) ? .02 * Math.sign(this.facing || 1) : this.facing,
      g = {
        root: `translate(${this.offset.toFixed(1)} 0) translate(${a.W / 2} 0) scale(${p.toFixed(3)} 1) translate(${-a.W / 2} 0)`
      };
    for (let [t, e, a] of r) {
      let s = this.els.get(t);
      if (!s) continue;
      let i = "root" === a ? g.root : String(f[a]),
        o = `${t}:${e}`;
      this.written.get(o) !== i && (s.setAttribute(e, i), this.written.set(o, i));
    }
  }
};
let c = t => 1 === t ? -1 : 1,
  d = ["woof", "spin", "beg", "bow", "hop", "love", "tilt", "sneeze"],
  f = [];
__v_M_91 = {
  woof: ({
    d: t,
    say: e
  }, a) => [[a, a => (t.woof(a), e("woof!"))], [a + .42, a => (t.woof(a), e("woof woof!"))]],
  spin: ({
    d: t,
    rest: e,
    facing: a,
    say: s
  }, i) => [[i, () => (t.setPose("stand"), t.hop(.5))], [i + .14, () => t.face(c(a))], [i + .38, () => t.face(a)], [i + .62, () => t.face(c(a))], [i + .86, () => (t.face(a), s("wheee!"))], [i + 1.3, () => t.setPose(e)]],
  beg: ({
    d: t,
    rest: e,
    say: a
  }, s) => [[s, () => (t.setPose("beg"), t.wag(1), a("treat, please?", 1.7))], [s + 1.9, () => (t.setPose(e), t.wag(.7))]],
  bow: ({
    d: t,
    rest: e,
    say: a
  }, s) => [[s, () => (t.setPose("bow"), t.wag(1), a("play with me!"))], [s + .55, () => t.hop(.45)], [s + 1.7, () => (t.setPose(e), t.wag(.7))]],
  hop: ({
    d: t,
    rest: e,
    say: a
  }, s) => [[s, () => (t.setPose("hop"), t.hop(1.1), a("boing!"))], [s + .36, () => t.setPose(e)], [s + .62, () => (t.setPose("hop"), t.hop(.8))], [s + .98, () => t.setPose(e)]],
  love: ({
    d: t,
    rest: e,
    say: a,
    hearts: s
  }, i) => [[i, () => (t.setPose({
    ...e,
    happy: 1,
    tongue: 1
  }), t.wag(1), s(), a("I like you!", 1.5))], [i + 1.9, () => (t.setPose(e), t.wag(.7))]],
  tilt: ({
    d: t,
    say: e
  }, a) => [[a, () => (t.cock(-14), e("hm?"))], [a + .8, () => t.cock(12)], [a + 1.6, () => t.cock(0)]],
  sneeze: ({
    d: t,
    say: e
  }, a) => [[a, () => t.cock(-8)], [a + .32, a => (t.cock(10), t.jolt(1.4), t.hop(.35), t.yawn(a, .22), e("achoo!"))], [a + .8, () => t.cock(0)]],
  zoomies: ({
    d: t,
    rest: e,
    facing: a,
    say: s
  }, i) => [[i, () => (t.setPose("walk"), t.wag(1), s("zoomies!", 2))], [i + .05, () => (t.face(1), t.dash(70))], [i + .5, () => (t.face(-1), t.dash(-70))], [i + .98, () => (t.face(1), t.dash(50))], [i + 1.4, () => (t.face(-1), t.dash(-30))], [i + 1.78, () => (t.face(1), t.dash(0))], [i + 2.25, () => (t.face(a), t.setPose(e), t.wag(.7))]],
  peekaboo: ({
    d: t,
    say: e
  }, s) => [[s, () => t.setPose({
    ...a.o.peek,
    headY: 120
  })], [s + .55, () => (t.setPose("peek"), t.jolt(1.2), e("peekaboo!"))]],
  wake: ({
    d: t,
    rest: e,
    say: s
  }, i) => [[i, e => (t.setPose("settle"), t.yawn(e, .9), s("*yaaawn*"))], [i + 1.25, () => (t.setPose({
    ...a.o.settle,
    happy: 1
  }), t.wag(.8), s("five more minutes…", 1.6))], [i + 3.1, () => (t.setPose(e), t.wag(0), s("zzz", 2))]]
}, __v_m_92 = function (t, e, a) {
  for (let s = 0; s < 5; s++) {
    let i = document.createElement("span");
    i.className = "pup-heart", i.textContent = "♥", i.style.left = `${e}px`, i.style.top = `${a}px`, t.append(i);
    let o = (Math.random() - .5) * 90,
      n = -70 - 60 * Math.random();
    i.animate([{
      transform: "translate(-50%, 0) scale(0.4)",
      opacity: 0
    }, {
      opacity: 1,
      offset: .2
    }, {
      transform: `translate(calc(-50% + ${o.toFixed(0)}px), ${n.toFixed(0)}px) scale(1.1)`,
      opacity: 0
    }], {
      duration: 1150 + 110 * s,
      delay: 80 * s,
      easing: "cubic-bezier(.2,.7,.3,1)",
      fill: "backwards"
    }).finished.then(() => i.remove(), () => i.remove());
  }
}, __v_u_93 = function (t, e) {
  return e >= 4 ? "zoomies" : (f.length || (f = d.filter(e => e !== t).sort(() => Math.random() - .5)), f.pop());
};
export { __v_f_89 as f__55334 };
export { __v_f_90 as f__89681 };
export { __v_M_91 as M__8478 };
export { __v_m_92 as m__8478 };
export { __v_u_93 as u__8478 };
