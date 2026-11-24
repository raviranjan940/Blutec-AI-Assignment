// module 85125 exports: PuppyBrowser
import * as __m6928 from './m6928.jsx';
import * as __m7974 from './m7974.jsx';
import * as __m18566 from '@shims/navigation';
import * as __m22016 from '@shims/link';
import * as __m42136 from './m42136.jsx';
import * as __m49054 from './m49054.jsx';
import * as __m71645 from 'react';
import * as __m73459 from './m73459.jsx';
import * as __m88653 from './m88653.jsx';

var a = __m71645,
  s = __m18566,
  CL_ = __m88653,
  CR_ = __m6928,
  CR_ = CR_,
  CI_ = CR_,
  CN_ = __m73459,
  CO_ = __m7974,
  CC_ = __m22016,
  d = __m49054,
  CH_ = __m42136;
let p = e => e.toFixed(2);
function u(e, t, a, s = 40, l = 0, r = 2 * Math.PI) {
  let i = [6.28 * e(), 6.28 * e(), 6.28 * e()],
    n = 1 + (e() - .5) * .05,
    o = [];
  for (let e = 0; e < s; e++) {
    let c = l + e / (r >= 2 * Math.PI ? s : s - 1) * r,
      d = t + a * (.55 * Math.sin(2 * c + i[0]) + .3 * Math.sin(3 * c + i[1]) + .15 * Math.sin(5 * c + i[2]));
    o.push([50 + Math.cos(c) * d * n, 50 + Math.sin(c) * d / n]);
  }
  return o;
}
function m(e, t) {
  let a = e.length,
    s = s => e[t ? (s + a) % a : Math.min(a - 1, Math.max(0, s))],
    l = `M${p(e[0][0])} ${p(e[0][1])}`,
    r = t ? a : a - 1;
  for (let e = 0; e < r; e++) {
    let t = s(e - 1),
      a = s(e),
      r = s(e + 1),
      i = s(e + 2),
      n = [a[0] + (r[0] - t[0]) / 6, a[1] + (r[1] - t[1]) / 6],
      o = [r[0] - (i[0] - a[0]) / 6, r[1] - (i[1] - a[1]) / 6];
    l += `C${p(n[0])} ${p(n[1])} ${p(o[0])} ${p(o[1])} ${p(r[0])} ${p(r[1])}`;
  }
  return t ? `${l}Z` : l;
}
let x = ["#f2be6b", "#f9cdbf", "#bfddf5", "#fbe3b4", "#e8c39a"],
  g = ["#c2622b", "#a24a1a", "#2a170e", "#d4893f"],
  f = ["sparkle", "heart", "dashes", "swirl", "dots", "paw"];
function k(e) {
  let t = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="${e}" fill="#000"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let w = {
    available: "Available",
    reserved: "Reserved",
    rehomed: "Gone home"
  },
  v = "(min-width: 1536px) 17rem, (min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw";
function CB_({
  d: e
}) {
  let a = `translate(${e.x.toFixed(1)} ${e.y.toFixed(1)}) rotate(${e.rot.toFixed(0)}) scale(${e.size.toFixed(2)})`,
    s = {
      fill: "none",
      stroke: e.ink,
      strokeWidth: 1.6,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
  return <g transform={a}><g className="tp-sketch__doodle">{"sparkle" === e.kind && <path d="M0 -6c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6z" fill={e.ink} />}{"heart" === e.kind && <path d="M0 5C-4.6 1.8-6.4-.8-6.4-3.2c0-1.9 1.5-3.3 3.3-3.3 1.3 0 2.4.7 3.1 1.9.7-1.2 1.8-1.9 3.1-1.9 1.8 0 3.3 1.4 3.3 3.3C6.4-.8 4.6 1.8 0 5z" {...s} />}{"dashes" === e.kind && <path d="M-5 -5l4 2M-6 0h5M-5 5l4 -2" {...s} />}{"swirl" === e.kind && <path d="M0 0c1.6-.6 2.4 1.4.8 2.6-2 1.4-4.6-.4-4-3 .7-3 4.8-3.8 6.8-1.2 2.4 3-0.2 7.4-3.8 7.2" {...s} />}{"dots" === e.kind && <g fill={e.ink}><circle cx="-4" cy="1" r="1.2" /><circle cx="0" cy="-2" r="1.2" /><circle cx="4" cy="1" r="1.2" /></g>}{"paw" === e.kind && <path d={d.f} transform="scale(.17) translate(-32 -34)" fill={e.ink} opacity={.85} />}</g></g>;
}
function CJ_({
  pup: e,
  index: a = 0,
  sizes: s = v,
  preload: l = false,
  small: r = false
}) {
  let i = function (e) {
      let t = function (e) {
          let t = 0x811c9dc5;
          for (let a of e) t = Math.imul(t ^ a.charCodeAt(0), 0x1000193);
          let a = t >>> 0;
          return () => {
            let e = a = a + 0x6d2b79f5 >>> 0;
            return e = Math.imul(e ^ e >>> 15, 1 | e), (((e ^= e + Math.imul(e ^ e >>> 7, 61 | e)) ^ e >>> 14) >>> 0) / 0x100000000;
          };
        }(e),
        a = m(u(t, 45.5, 2.6), true),
        s = m(u(t, 47.8, 3.1), true),
        l = t() * Math.PI * 2,
        r = m(u(t, 49, 3.4, 30, l, Math.PI * (1.15 + .5 * t())), false),
        i = {
          d: m(u(t, 46.5, 3.6), true),
          dx: (t() - .5) * 9,
          dy: 3 + 4 * t(),
          color: x[Math.floor(t() * x.length)]
        },
        n = (t() - .5) * 5,
        o = [[.86, 1.08], [1.16, 1.42], [-.08, .16]].map(e => ({
          z: e,
          k: t()
        })).sort((e, t) => e.k - t.k).map(e => e.z),
        c = 2 + Math.floor(2 * t()),
        d = [],
        h = new Set();
      for (let e = 0; e < c; e++) {
        let a = f[Math.floor(t() * f.length)];
        h.has(a) && (a = f.find(e => !h.has(e))), h.add(a);
        let [s, l] = o[e],
          r = Math.PI * (s + t() * (l - s)),
          i = 55 + 4 * t();
        d.push({
          kind: a,
          x: 50 + Math.cos(r) * i,
          y: 50 + Math.sin(r) * i,
          rot: (t() - .5) * 50,
          size: .85 + .35 * t(),
          ink: g[Math.floor(t() * g.length)]
        });
      }
      return {
        mask: a,
        outline: s,
        retrace: r,
        wash: i,
        tilt: n,
        doodles: d
      };
    }(e.slug),
    n = e.media.some(e => "video" === e.kind);
  return <CC_.default href={`/puppies/${e.slug}`} className={`tp-sketch${r ? " tp-sketch--small" : ""}`} data-reveal={true} style={{
    "--tilt": `${i.tilt.toFixed(2)}deg`,
    "--d": `${a % 8 * 70}ms`,
    "--wash": i.wash.color
  }} aria-label={`${e.displayName}${e.name ? `, ${e.breed}` : ""}, ${e.genderLabel.toLowerCase()}${e.age ? `, ${e.age}` : ""}, ${w[e.status].toLowerCase()}`}><span className="tp-sketch__frame"><svg aria-hidden={true} viewBox="0 0 100 100" className="tp-sketch__wash" style={{
        translate: `${i.wash.dx.toFixed(1)}% ${i.wash.dy.toFixed(1)}%`
      }}><path d={i.wash.d} /></svg><span className="tp-sketch__photo" style={{
        maskImage: k(i.mask),
        WebkitMaskImage: k(i.mask)
      }}>{e.cover && <CH_.f media={e.cover} sizes={s} preload={l} alt="" />}</span><svg aria-hidden={true} viewBox="0 0 100 100" className="tp-sketch__ink"><path d={i.outline} pathLength={1} className="tp-sketch__line" /><path d={i.retrace} pathLength={1} className="tp-sketch__line tp-sketch__line--retrace" />{i.doodles.map((e, a) => <CB_ d={e} key={a} />)}</svg>{!r && <span className="tp-sketch__sticker font-scrawl">{w[e.status]}</span>}{n && !r && <span className="tp-sketch__video">▶ video</span>}{r && <span className="tp-sketch__sticker tp-sketch__sticker--home font-scrawl">gone home ♥</span>}</span><span className="tp-sketch__name font-plush">{e.displayName}</span>{!r && <span className="tp-sketch__meta">{e.name ? `${e.breed} \xb7 ` : ""}{e.genderLabel.toLowerCase()}{e.age ? ` \xb7 ${e.age}` : ""}</span>}</CC_.default>;
}
let y = ["origin", "breed", "gender", "collection"];
function M({
  active: e,
  onClick: a,
  children: s
}) {
  return <button type="button" onClick={a} aria-pressed={e} className="tp-sticker-chip">{s}</button>;
}
function C_({
  label: e,
  children: a
}) {
  return <div className="flex flex-wrap items-center gap-2"><span className="font-scrawl mr-1 w-full shrink-0 text-cocoa-soft sm:w-28">{e}</span>{a}</div>;
}
const __ex_PuppyBrowser_20 = function ({
  puppies: e,
  breeds: c,
  whatsappHref: d
}) {
  let h = s.useSearchParams(),
    p = s.usePathname(),
    u = {
      origin: h.get("origin") ?? "",
      breed: h.get("breed") ?? "",
      gender: h.get("gender") ?? "",
      collection: h.get("collection") ?? ""
    },
    m = (e, t) => {
      let a = new URLSearchParams(h.toString());
      t && u[e] !== t ? a.set(e, t) : a.delete(e);
      let s = a.toString();
      window.history.replaceState(null, "", s ? `${p}?${s}` : p);
    },
    x = a.useMemo(() => e.filter(e => (!u.origin || e.origin?.slug === u.origin) && (!u.breed || e.breeds.some(e => e.slug === u.breed)) && (!u.gender || e.gender === u.gender || "male-female" === e.gender) && (!u.collection || e.collections.some(e => e.slug === u.collection))), [e, u.origin, u.breed, u.gender, u.collection]),
    g = y.some(e => u[e]),
    f = c.filter(t => e.some(e => e.breeds.some(e => e.slug === t.slug))),
    k = e.some(e => e.collections.some(e => "korean-teacup" === e.slug)),
    w = e.some(e => e.origin?.slug === "local");
  return <div><div role="group" aria-label="Filter puppies" className="tp-sketchpad flex flex-col gap-4"><C_ label="where"><M active={!u.origin && !u.collection} onClick={() => window.history.replaceState(null, "", p)}>Everywhere</M>{w && <M active={"local" === u.origin} onClick={() => m("origin", "local")}>In Dubai</M>}<M active={"imported" === u.origin} onClick={() => m("origin", "imported")}>Imported</M>{k && <M active={"korean-teacup" === u.collection} onClick={() => m("collection", "korean-teacup")}>Korean Teacup</M>}</C_><C_ label="breed">{f.map(e => <M active={u.breed === e.slug} onClick={() => m("breed", e.slug)} key={e.slug}>{e.name}</M>)}</C_><C_ label="boy or girl"><M active={"male" === u.gender} onClick={() => m("gender", "male")}>Boys</M><M active={"female" === u.gender} onClick={() => m("gender", "female")}>Girls</M>{g && <button type="button" onClick={() => window.history.replaceState(null, "", p)} className="link-ink ml-auto text-[0.95rem] font-semibold">Clear filters</button>}</C_></div><p className="font-scrawl mt-10 text-lg text-[var(--ink-soft)]" aria-live="polite">{1 === x.length ? "1 puppy" : `${x.length} puppies`}{" "}{g ? "match" : "looking for a home"}</p>{x.length ? <CO_.RevealScope><CR_.d layout={true} className="tp-sketches mt-8"><CL_.f mode="popLayout">{x.map((e, a) => <CI_.B layout={true} initial={{
            opacity: 0,
            scale: .86
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: .86,
            transition: {
              duration: .2
            }
          }} transition={{
            type: "spring",
            stiffness: 260,
            damping: 26
          }} key={e.id}><CJ_ pup={e} index={a} sizes={v} preload={a < 3} /></CI_.B>)}</CL_.f></CR_.d></CO_.RevealScope> : <div className="tp-sketchpad mt-10 grid items-center gap-6 md:grid-cols-[auto_1fr] md:gap-10"><CN_.PupBuddy pose="sit" act="tilt" className="mx-auto w-44 md:w-52" label="Teddy, tilting his head" /><div><p className="font-plush text-big">No puppies match just now.</p><p className="mt-3 max-w-[48ch] text-cocoa-soft">Tell us what you're hoping for and we'll let you know what's in our showroom or what we can bring in for you.</p><div className="mt-6 flex flex-wrap gap-3"><a href={d} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Ask on WhatsApp</a><button type="button" onClick={() => window.history.replaceState(null, "", p)} className="btn btn-ghost">Show all puppies</button></div></div></div>}</div>;
};
export { __ex_PuppyBrowser_20 as PuppyBrowser };
