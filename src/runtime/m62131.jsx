// module 62131 exports: Chat
import * as __m18535 from './m18535.jsx';
import * as __m22016 from '@shims/link';
import * as __m41405 from './m41405.jsx';
import * as __m42136 from './m42136.jsx';
import * as __m49054 from './m49054.jsx';
import * as __m71645 from 'react';
import * as __m72203 from './m72203.jsx';
import * as __m91360 from './m91360.jsx';
import * as __m98194 from './m98194.jsx';

var CA_ = __m98194,
  CS_ = __m22016,
  n = __m71645,
  l = __m49054,
  CR_ = __m41405,
  i = __m91360,
  CO_ = __m42136,
  d = __m18535,
  CC_ = __m72203;
function CH_({
  media: e
}) {
  let a = n.useRef(null),
    [s, l] = n.useState(false);
  return <div className="tp-msg tp-msg--them tp-msg--media"><div className="tp-clip"><video ref={a} src={e.url} poster={e.poster?.url} muted={true} loop={true} playsInline={true} preload="none" aria-label={e.alt || "A puppy video"} onEnded={() => l(false)} /><button type="button" className="tp-clip__play" onClick={() => {
        let e = a.current;
        e && (e.paused ? e.play().then(() => l(true)).catch(() => {}) : (e.pause(), l(false)));
      }} aria-pressed={s} aria-label={s ? "Pause video" : "Play video"}><svg viewBox="0 0 24 24" aria-hidden={true}>{s ? <path d="M7 5h3v14H7zM14 5h3v14h-3z" /> : <path d="M8 5v14l11-7z" />}</svg></button></div></div>;
}
const __ex_Chat_13 = function ({
  section: e,
  tone: p,
  business: u,
  greeting: m,
  whatsappHref: f,
  breeds: x
}) {
  let g = e.data.items ?? [],
    v = e.media.filter(e => "image" === e.kind).slice(0, 4),
    y = e.media.find(e => "video" === e.kind) ?? null,
    j = d.R("(min-width: 1024px)"),
    b = d.z() || !j,
    [k, _] = n.useState(-1),
    [N, w] = n.useState(false),
    M = n.useRef(null),
    E = n.useRef(null),
    R = b ? g.length - 1 : k;
  n.useEffect(() => {
    if (b || !M.current) return;
    let e = [...M.current.children],
      t = new IntersectionObserver(t => {
        for (let a of t) a.isIntersecting && _(e.indexOf(a.target));
      }, {
        rootMargin: "-28% 0px -62% 0px"
      });
    return e.forEach(e => t.observe(e)), () => t.disconnect();
  }, [b, g.length]);
  let S = n.useRef(-1);
  return n.useEffect(() => {
    if (b) return;
    let e = k > S.current;
    if (S.current = k, !e || k < 0) return;
    w(true);
    let t = setTimeout(() => {
      w(false);
      let e = E.current?.querySelector(`[data-step="${k}"]`);
      e && i.cuePup({
        look: e,
        secs: 1.4,
        say: 1 === k ? "ooh, photos!" : 2 === k ? "home soon!" : undefined
      });
    }, 750);
    return () => clearTimeout(t);
  }, [k, b]), <CC_.f tone={p} aria-labelledby="journey-title" className="tp-chat"><div className="tp-chat__grid gutter" data-pin-range={true}><div className="tp-chat__story"><h2 id="journey-title" className="font-plush text-huge">{e.heading}</h2>{e.body && <p className="text-lede mt-5 max-w-[42ch] text-[var(--ink-soft)]">{e.body}</p>}<ol ref={M} className="tp-chat__steps">{g.map((e, a) => <li className="tp-chat__step" data-active={a === R || undefined} data-done={a < R || undefined} key={e.title}><span className="tp-chat__num font-plush" aria-hidden={true}>{a + 1}</span><h3 className="font-plush tp-chat__title">{e.title}</h3><p className="tp-chat__text">{e.text}</p></li>)}</ol>{e.data.ctaLabel && <CS_.default href={e.data.ctaHref ?? "/how-it-works"} className="btn btn-ghost tp-chat__cta">{e.data.ctaLabel}</CS_.default>}</div><div className="tp-chat__side"><div className="tp-phone" aria-label={`A WhatsApp conversation with ${u}`} role="group"><div className="tp-phone__bar"><CA_.default src="/brand/logo.png" alt="" width={40} height={40} className="tp-phone__avatar" /><span><span className="tp-phone__name">{u}</span><span className="tp-phone__status">{N ? "typing…" : "online"}</span></span></div><div ref={E} className="tp-phone__screen"><p className="tp-msg tp-msg--me">{m}</p>{g.map((e, a) => <div className="tp-msg-group" data-step={a} data-show={a < R || a === R && !N ? "true" : "false"} key={e.title}>{0 === a && x.length > 0 && <div className="tp-msg tp-msg--them"><p>{e.text}</p><ul className="tp-chips" aria-label="Breeds we have now">{x.slice(0, 6).map(e => <li key={e.slug}><CS_.default href={`/puppies?breed=${e.slug}`}>{e.name}</CS_.default></li>)}</ul></div>}{1 === a && <>{v.length > 0 && <div className="tp-msg tp-msg--them tp-msg--media"><div className="tp-snaps">{v.map(e => <span className="tp-snaps__one" key={e.id}><CO_.f media={e} sizes="9rem" /></span>)}</div></div>}{y && <CH_ media={y} />}<p className="tp-msg tp-msg--them">{e.text}</p></>}{2 === a && <div className="tp-msg tp-msg--them"><p>{e.text}</p><svg viewBox="0 0 220 70" className="tp-route" aria-hidden={true}><path d="M14 52 C 60 6, 120 70, 170 28" className="tp-route__line" /><circle cx="14" cy="52" r="5" className="tp-route__dot" /><path d="M164 32 l12 -12 l12 12 v14 h-24 z" className="tp-route__home" /><path d="M176 42 c-2-3-7-2-6 2c1 3 6 5 6 5s5-2 6-5c1-4-4-5-6-2z" className="tp-route__heart" /><path d={l.f} transform="translate(70 22) scale(.3) rotate(70 32 32)" className="tp-route__paw" /><path d={l.f} transform="translate(104 38) scale(.3) rotate(100 32 32)" className="tp-route__paw" /></svg></div>}{a > 2 && <p className="tp-msg tp-msg--them">{e.text}</p>}{0 === a && 0 === x.length && <p className="tp-msg tp-msg--them">{e.text}</p>}</div>)}<p className="tp-typing" data-show={N ? "true" : "false"} aria-hidden={true}><span /><span /><span /></p></div><a href={f} target="_blank" rel="noopener noreferrer" className="tp-phone__compose"><span>Say hello on WhatsApp</span><svg viewBox="0 0 24 24" aria-hidden={true}><path d="M3 20l18-8L3 4v6l12 2-12 2z" /></svg></a></div><CR_.f pose="sit" facing="right" className="tp-chat__teddy" /></div></div></CC_.f>;
};
export { __ex_Chat_13 as Chat };
