// module 547 exports: PuppyGallery
import * as __m6928 from './m6928.jsx';
import * as __m42136 from './m42136.jsx';
import * as __m42623 from './m42623.jsx';
import * as __m57783 from './m57783.jsx';
import * as __m71645 from 'react';
import * as __m88653 from './m88653.jsx';

var r = __m71645,
  CN_ = __m88653,
  CL_ = __m6928,
  CL_ = CL_,
  CS_ = __m42623,
  CA_ = __m57783,
  CO_ = __m42136;
let i = "(min-width: 1024px) 55vw, 92vw";
const __ex_PuppyGallery_12 = function ({
  name: e,
  media: c
}) {
  let [d, u] = r.useState(0),
    [f, m] = r.useState(1),
    p = r.useRef(null),
    [h, x] = r.useState(false),
    g = c.length,
    b = c[d],
    v = r.useCallback(e => {
      m(e > d ? 1 : -1), u((e % g + g) % g);
    }, [d, g]);
  if (r.useEffect(() => {
    if (!h) return;
    let e = e => {
      "ArrowRight" === e.key && v(d + 1), "ArrowLeft" === e.key && v(d - 1);
    };
    return addEventListener("keydown", e), () => removeEventListener("keydown", e);
  }, [h, d, v]), !b) return null;
  let y = t => `${e}, ${"video" === c[t].kind ? "video" : "photo"} ${t + 1} of ${g}`;
  return <div><div className="tp-storypage relative aspect-[4/5] md:aspect-[5/6]"><CN_.f initial={false} custom={f} mode="popLayout"><CL_.i type="button" custom={f} className="absolute inset-0 block size-full" initial={{
          clipPath: f > 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          rotateY: -14 * f,
          transformPerspective: 1400
        }} animate={{
          clipPath: "inset(0% 0% 0% 0%)",
          rotateY: 0
        }} exit={{
          opacity: .4,
          scale: .97
        }} transition={{
          duration: .7,
          ease: [.22, 1, .36, 1]
        }} style={{
          transformOrigin: f > 0 ? "0% 50%" : "100% 50%"
        }} onClick={() => {
          p.current?.showModal(), x(true);
        }} aria-label={`Open ${y(d)} full screen`} key={b.id}>{"video" === b.kind ? <video src={b.url} poster={b.poster?.url} className="size-full object-cover" muted={true} loop={true} playsInline={true} autoPlay={true} aria-label={b.alt} /> : <CO_.f media={b} sizes={i} preload={0 === d} quality={85} />}</CL_.i></CN_.f>{g > 1 && <div className="absolute inset-x-4 bottom-4 flex justify-between"><button type="button" onClick={() => v(d - 1)} className="grid size-12 place-items-center rounded-full border-2 border-cocoa bg-milk/95 text-xl font-bold" aria-label="Previous photo">‹</button><span className="self-center rounded-full bg-cocoa/80 px-3 py-1 text-sm font-semibold text-milk">{d + 1}{" / "}{g}</span><button type="button" onClick={() => v(d + 1)} className="grid size-12 place-items-center rounded-full border-2 border-cocoa bg-milk/95 text-xl font-bold" aria-label="Next photo">›</button></div>}</div>{g > 1 && <ul className="mt-3 flex gap-3 overflow-x-auto px-1 pb-2 pt-2 [scrollbar-width:thin]" aria-label={`All photos of ${e}`}>{c.map((e, r) => <li className="shrink-0" key={e.id}><button type="button" onClick={() => v(r)} aria-label={y(r)} aria-current={r === d} className={`relative block h-24 w-20 overflow-hidden rounded-[0.9rem] border-[3px] transition-transform duration-300 md:h-28 md:w-24 ${r === d ? "-rotate-3 -translate-y-1 border-toffee-deep" : "border-cocoa/30 hover:-rotate-2 hover:border-cocoa"}`}>{("video" === e.kind ? e.poster : e) && <CO_.f media={"video" === e.kind ? e.poster : e} sizes="96px" alt="" />}{"video" === e.kind && <span className="absolute inset-0 grid place-items-center bg-cocoa/30 text-lg text-milk">▶</span>}</button></li>)}</ul>}<dialog ref={p} aria-label={`${e} photos`} className="m-0 h-dvh max-h-none w-screen max-w-none bg-cocoa/95 p-0 text-milk backdrop:bg-cocoa/70" onClose={() => x(false)} onClick={e => e.target === p.current && p.current?.close()} data-lenis-prevent={true}>{h && <div className="flex h-full flex-col"><div className="flex items-center justify-between gap-4 px-4 py-3"><p className="font-scrawl text-lg">{y(d)}</p><button type="button" onClick={() => p.current?.close()} className="h-11 rounded-full bg-milk px-5 font-semibold text-cocoa">Close</button></div><div className="relative flex-1 touch-pan-y"><CS_.f className="absolute inset-0" drag="x" dragConstraints={{
            left: 0,
            right: 0
          }} dragElastic={.6} onDragEnd={(e, t) => {
            t.offset.x < -80 ? v(d + 1) : t.offset.x > 80 && v(d - 1);
          }} initial={{
            opacity: 0,
            scale: .96
          }} animate={{
            opacity: 1,
            scale: 1
          }} key={b.id}>{"video" === b.kind ? <video src={b.url} poster={b.poster?.url} controls={true} autoPlay={true} playsInline={true} className="size-full object-contain" /> : <CA_.y media={b} pageSizes={i} quality={85} />}</CS_.f><CA_.f photos={c} at={d} quality={85} /></div>{g > 1 && <div className="flex justify-center gap-3 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3"><button type="button" onClick={() => v(d - 1)} className="h-12 rounded-full border-2 border-milk px-6 font-semibold">Previous</button><button type="button" onClick={() => v(d + 1)} className="h-12 rounded-full bg-honey px-6 font-semibold text-cocoa">Next</button></div>}</div>}</dialog></div>;
};
export { __ex_PuppyGallery_12 as PuppyGallery };
