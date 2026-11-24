// module 49091 exports: NoticeBoard
import * as __m7974 from './m7974.jsx';
import * as __m71645 from 'react';
import * as __m73459 from './m73459.jsx';

var CA_ = __m71645,
  CS_ = __m73459,
  CN_ = __m7974;
let r = [-1.6, 1.2, -.8, 1.8, -1.2, .7, -1.9, 1.4],
  l = ["var(--color-toffee)", "var(--color-sky-deep)", "#d9a13c", "#c45a6a"];
function CI_({
  text: e,
  query: s
}) {
  let n = s.trim();
  if (!n) return <>{e}</>;
  let r = e.split(RegExp(`(${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return <>{r.map((e, s) => s % 2 ? <mark key={s}>{e}</mark> : <CA_.Fragment key={s}>{e}</CA_.Fragment>)}</>;
}
const __ex_NoticeBoard_10 = function ({
  faqs: e,
  askHref: o
}) {
  let [d, c] = CA_.useState(null),
    [u, p] = CA_.useState(""),
    h = CA_.useId(),
    m = u.trim().toLowerCase(),
    x = CA_.useMemo(() => m ? e.filter(e => `${e.question} ${e.answer}`.toLowerCase().includes(m)) : e, [e, m]);
  return <div className="tp-notes" data-open={d || m ? "" : undefined}><aside className="tp-notes__side" aria-label="Find a question"><label htmlFor={h} className="font-scrawl tp-notes__label">sniff out a question</label><div className="tp-notes__search"><svg viewBox="0 0 24 24" aria-hidden={true} className="tp-notes__lens"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg><input id={h} type="search" value={u} onChange={e => p(e.target.value)} placeholder="delivery, Korea, vaccinated…" autoComplete="off" /></div><p className="tp-notes__count" aria-live="polite">{u.trim() ? `${x.length} ${1 === x.length ? "note" : "notes"} found` : `${e.length} notes on the board`}</p><div className="tp-notes__teddy"><span aria-hidden={true} className="tp-notes__bubble font-plush"><span className="tp-notes__q">?</span><span className="tp-notes__a">!</span></span><CS_.PupBuddy pose="sit" act="tilt" label="Teddy, reading the notes" /></div><a href={o} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp tp-notes__ask">Ask your own question</a></aside><CN_.RevealScope className="tp-notes__board"><ul className="tp-notes__list">{x.map((e, a) => {
          let s = d === e.id || !!m && e.answer.toLowerCase().includes(m);
          return <li className="tp-note" data-reveal={true} data-unfolded={s || undefined} style={{
            "--tilt": `${r[a % r.length]}deg`,
            "--pin": l[a % l.length],
            "--i": a
          }} key={e.id}><span aria-hidden={true} className="tp-note__pin" /><h2 className="tp-note__q"><button type="button" id={`q-${e.id}`} aria-expanded={s} aria-controls={`a-${e.id}`} onClick={() => c(d === e.id ? null : e.id)}><span className="font-plush-text"><CI_ text={e.question} query={u} /></span><span aria-hidden={true} className="tp-note__chevron" /></button></h2><div id={`a-${e.id}`} role="region" aria-labelledby={`q-${e.id}`} className="tp-note__answer" inert={!s}><div className="tp-note__flap"><p><CI_ text={e.answer} query={u} /></p></div></div></li>;
        })}</ul>{!x.length && <div className="tp-note tp-note--empty"><span aria-hidden={true} className="tp-note__pin" /><p className="font-plush-text text-[1.2rem] font-bold">No note about “{u.trim()}” yet.</p><p className="mt-2"><a href={o} target="_blank" rel="noopener noreferrer" className="link-ink">Ask us on WhatsApp</a>{" "}and we'll answer.</p></div>}</CN_.RevealScope></div>;
};
export { __ex_NoticeBoard_10 as NoticeBoard };
