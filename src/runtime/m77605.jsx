// module 77605 exports: Dusk
import * as __m7974 from './m7974.jsx';
import * as __m22016 from '@shims/link';
import * as __m41405 from './m41405.jsx';
import * as __m57783 from './m57783.jsx';
import * as __m72203 from './m72203.jsx';
import * as __m82391 from './m82391.jsx';

var CA_ = __m22016,
  CS_ = __m82391,
  n = __m57783,
  CL_ = __m41405,
  CR_ = __m7974,
  CI_ = __m72203;
let o = "(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw";
function CD_({
  testimonial: e
}) {
  return <figure className="tp-dusk__note"><blockquote className="font-plush-text">“{e.quote}”</blockquote><figcaption className="font-scrawl">{e.author}{e.location ? `, ${e.location}` : ""}</figcaption></figure>;
}
const __ex_Dusk_17 = function ({
  section: e,
  photos: c,
  testimonial: h,
  tone: p
}) {
  let u = c.slice(0, 8),
    {
      open: m,
      viewer: f
    } = n.Y(c, o);
  return c.length ? <CI_.f tone={p} aria-labelledby="dusk-title" className="tp-dusk"><div className="tp-dusk__sky gutter"><div className="tp-dusk__head"><h2 id="dusk-title" className="font-plush text-huge">{e.heading}</h2>{e.body && <p className="text-lede mt-5 max-w-[50ch] text-[var(--ink-soft)]">{e.body}</p>}</div>{h && <CD_ testimonial={h} />}</div><div className="tp-photowall"><CR_.RevealScope className="tp-photowall__wall"><ul className="tp-photowall__prints" aria-label="Photos from TeddyPups families">{u.map((e, a) => <li data-reveal={true} data-pup-look={1 === a || 4 === a ? "" : undefined} style={{
            "--d": `${110 * [3, 0, 5, 1, 6, 2, 7, 4][a]}ms`
          }} key={e.id}><button type="button" className="tp-photowall__print" onClick={() => m(a)} aria-label={`Open photo ${a + 1} of ${c.length}${e.caption ? `: ${e.caption}` : ""}`}><CS_.f media={e} order={a} sizes={o} /></button></li>)}</ul><div className="tp-facade__ground"><span aria-hidden={true} className="tp-facade__door" /><span aria-hidden={true} className="tp-lamp"><span className="tp-lamp__light" /></span>{e.data.ctaLabel && <CA_.default href={e.data.ctaHref ?? "/happy-families"} className="btn btn-primary tp-facade__cta">{e.data.ctaLabel}</CA_.default>}<CL_.f pose="sit" facing="right" className="tp-dusk__teddy" /></div></CR_.RevealScope><div aria-hidden={true} className="tp-street__pavement" /></div>{f}</CI_.f> : null;
};
export { __ex_Dusk_17 as Dusk };
