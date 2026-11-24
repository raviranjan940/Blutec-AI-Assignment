// module 57783 exports: f, y, Y
import * as __m42136 from './m42136.jsx';
import * as __m42623 from './m42623.jsx';
import * as __m71645 from 'react';
import * as __m88653 from './m88653.jsx';
import * as __m98194 from './m98194.jsx';

var CR_ = __m98194,
  n = __m71645,
  CI_ = __m88653,
  CL_ = __m42623,
  CS_ = __m42136;
let a = e => Math.ceil(Math.min(innerWidth, Math.max(1, innerHeight - 150) * (e.width / e.height)));
function CO_({
  media: e,
  pageSizes: i,
  quality: l = 75
}) {
  let [c, f] = n.useState(false);
  return <><CS_.f media={e} sizes={i} quality={l} alt="" eager={true} className={c ? "tp-viewer__first tp-viewer__first--done" : "tp-viewer__first"} style={{
      objectFit: "contain",
      objectPosition: "50% 50%",
      backgroundColor: "transparent"
    }} /><CR_.default src={e.url} alt={e.alt} fill={true} sizes={`${a(e)}px`} quality={l} loading="eager" className="tp-viewer__sharp object-contain" data-sharp={c || undefined} onLoad={e => {
      e.currentTarget.decode().catch(() => {}).then(() => f(true));
    }} /></>;
}
function CC_({
  photos: e,
  at: n,
  quality: i = 75
}) {
  let l = e.length;
  return l < 2 ? null : <span aria-hidden={true} className="sr-only">{[...new Set([(n - 1 + l) % l, (n + 1) % l])].filter(t => "image" === e[t].kind).map(n => <CR_.default src={e[n].url} alt="" fill={true} sizes={`${a(e[n])}px`} quality={i} loading="eager" key={e[n].id} />)}</span>;
}
let f = {
  enter: e => ({
    opacity: 0,
    x: 70 * e,
    rotate: 5 * e,
    scale: .92
  }),
  center: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 26
    }
  },
  exit: e => ({
    opacity: 0,
    x: -70 * e,
    rotate: -5 * e,
    scale: .92,
    transition: {
      duration: .22
    }
  })
};
const __ex_f_64 = CC_;
const __ex_y_65 = CO_;
const __ex_Y_66 = function (e, r) {
  let s = n.useRef(null),
    [a, d] = n.useState(null),
    [u, h] = n.useState(1),
    g = e.length,
    p = n.useCallback(e => (e % g + g) % g, [g]),
    m = n.useCallback((e, t) => {
      h(t), d(p(e));
    }, [p]);
  n.useEffect(() => {
    if (null === a) return;
    let e = e => {
      "ArrowRight" === e.key && m(a + 1, 1), "ArrowLeft" === e.key && m(a - 1, -1);
    };
    return addEventListener("keydown", e), () => removeEventListener("keydown", e);
  }, [a, m]);
  let x = null === a ? null : e[a];
  return {
    open: e => {
      h(1), d(e), s.current?.showModal();
    },
    viewer: <dialog ref={s} aria-label="Photo viewer" className="m-0 h-dvh max-h-none w-screen max-w-none bg-cocoa/95 p-0 text-milk backdrop:bg-cocoa/70" onClose={() => d(null)} onClick={e => e.target === s.current && s.current?.close()} data-lenis-prevent={true}>{x && null !== a && <div className="flex h-full flex-col"><div className="flex items-center justify-between gap-4 px-4 py-3"><p className="font-scrawl text-lg">{a + 1}{" / "}{g}{x.caption ? ` — ${x.caption}` : ""}</p><button type="button" onClick={() => s.current?.close()} className="h-11 rounded-full bg-milk px-5 font-semibold text-cocoa">Close</button></div><div className="relative flex-1 overflow-hidden"><CI_.f initial={false} custom={u}><CL_.f custom={u} variants={f} initial="enter" animate="center" exit="exit" className="absolute inset-0 touch-pan-y" drag="x" dragConstraints={{
              left: 0,
              right: 0
            }} dragElastic={.6} onDragEnd={(e, t) => {
              t.offset.x < -80 ? m(a + 1, 1) : t.offset.x > 80 && m(a - 1, -1);
            }} key={x.id}><CO_ media={x} pageSizes={r} /></CL_.f></CI_.f><CC_ photos={e} at={a} /></div><div className="flex justify-center gap-3 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3"><button type="button" onClick={() => m(a - 1, -1)} className="h-12 rounded-full border-2 border-milk px-6 font-semibold">Previous</button><button type="button" onClick={() => m(a + 1, 1)} className="h-12 rounded-full bg-honey px-6 font-semibold text-cocoa">Next</button></div></div>}</dialog>
  };
};
export { __ex_f_64 as f };
export { __ex_y_65 as y };
export { __ex_Y_66 as Y };
