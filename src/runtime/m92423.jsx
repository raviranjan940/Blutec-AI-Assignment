// module 92423 exports: LetterForm
import * as __m18535 from './m18535.jsx';
import * as __m47626 from './m47626.jsx';
import * as __m70031 from './m70031.jsx';
import * as __m71645 from 'react';
import * as __m72611 from './m72611.jsx';

var r = __m71645,
  s = __m72611,
  CA_ = __m70031,
  i = __m47626,
  l = __m18535;
function CN_({
  name: e,
  label: r,
  error: s,
  size: a = 14,
  ...i
}) {
  return <span className="tp-blank" style={{
    "--size": `${a}ch`
  }}><input name={e} aria-label={r} aria-invalid={!!s || undefined} aria-describedby={s ? `${e}-err` : undefined} {...i} /></span>;
}
const __ex_LetterForm_25 = function ({
  puppies: e,
  success: o,
  whatsappHref: d
}) {
  let {
      state: c,
      pending: p,
      onSubmit: u,
      ref: h
    } = i.f(s.f, {
      ok: false
    }),
    [m, f] = r.useState("writing"),
    x = r.useRef(null),
    [j, b] = r.useState(),
    v = r.useId(),
    g = r.useId(),
    k = r.useRef(null);
  r.useEffect(() => {
    if (!c.ok) return;
    let e = l.F() ? [setTimeout(() => f("sent"), 0)] : [setTimeout(() => {
      b(x.current?.offsetHeight), f("sealing");
    }, 0), setTimeout(() => f("posting"), 750), setTimeout(() => {
      b(undefined), f("sent");
    }, 1750)];
    return () => e.forEach(clearTimeout);
  }, [c.ok]), r.useEffect(() => {
    let e = k.current;
    if ("sent" !== m || !e) return;
    e.focus({
      preventScroll: true
    });
    let t = e.getBoundingClientRect().top,
      r = 16 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 76;
    t < r + 8 && scrollBy({
      top: t - r - 24,
      behavior: l.F() ? "auto" : "smooth"
    });
  }, [m]), r.useEffect(() => {
    !c.ok && c.errors && h.current?.querySelector("[aria-invalid=true]")?.focus();
  }, [c, h]);
  let y = c.errors ?? {},
    _ = Object.entries(y).filter(([e]) => "website" !== e);
  return <div ref={x} className="tp-post" data-phase={m} style={{
    minHeight: j
  }}>{"sent" !== m && <form ref={h} onSubmit={u} noValidate={true} className="tp-letterform" aria-hidden={"writing" !== m || undefined} inert={"writing" !== m}><span aria-hidden={true} className="tp-letter__stamp"><CA_.f className="size-9" /></span><p className="font-scrawl tp-letterform__greeting">Dear TeddyPups,</p>{c.message && !c.ok && <div role="alert" className="tp-letterform__alert"><p className="font-semibold">{c.message}</p>{_.length > 0 && <ul>{_.map(([e, r]) => <li id={`${e}-err`} key={e}>{r}</li>)}</ul>}</div>}<p className="tp-letterform__line">{"my name is "}<CN_ name="name" label="Your name (required)" autoComplete="name" required={true} minLength={2} maxLength={80} size={16} error={y.name} />, and you can reach me on{" "}<CN_ name="phone" label="Phone or WhatsApp number with country code (required)" type="tel" inputMode="tel" autoComplete="tel" required={true} size={15} placeholder="+971 50 123 4567" error={y.phone} />{" or by email at"}{" "}<CN_ name="email" label="Email (optional)" type="email" autoComplete="email" size={20} placeholder="optional" error={y.email} />.</p><p className="tp-letterform__line">{"I live in "}<CN_ name="area" label="Your area (optional)" autoComplete="address-level2" maxLength={80} size={13} placeholder="e.g. Dubai Marina" error={y.area} />, and I'm curious about{" "}<span className="tp-blank tp-blank--select"><label htmlFor={v} className="sr-only">Puppy you're interested in (optional)</label><select id={v} name="puppyId" defaultValue=""><option value="">any puppy (not sure yet)</option>{e.map(e => <option value={e.id} key={e.id}>{e.label}</option>)}</select></span>.</p><label htmlFor={g} className="sr-only">Your message (optional)</label><textarea id={g} name="message" rows={4} maxLength={2e3} placeholder="Anything else you'd like to tell us…" className="tp-letterform__note" aria-invalid={!!y.message || undefined} /><div aria-hidden={true} className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label>Website<input name="website" tabIndex={-1} autoComplete="off" defaultValue="" /></label></div><div className="tp-letterform__sign"><p className="font-scrawl">with love, a future puppy parent</p><button type="submit" disabled={p} className="btn btn-primary disabled:opacity-70">{p ? "Sealing the envelope…" : "Post my letter"}</button></div></form>}{("sealing" === m || "posting" === m) && <div aria-hidden={true} className="tp-post__scene"><svg viewBox="0 0 160 112" className="tp-post__envelope"><rect x="4" y="18" width="152" height="90" rx="6" fill="#fffdf8" stroke="#2a170e" strokeWidth="4" /><path d="M6 104 64 62M154 104 96 62" fill="none" stroke="#2a170e" strokeWidth="3" strokeLinecap="round" /><path className="tp-post__flap" d="M6 22 80 74 154 22" fill="#fbe3b4" stroke="#2a170e" strokeWidth="4" strokeLinejoin="round" /><circle cx="80" cy="72" r="11" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" /></svg><svg viewBox="0 0 200 260" className="tp-post__box"><rect x="86" y="170" width="28" height="86" fill="#5a3a28" stroke="#2a170e" strokeWidth="4" /><path d="M30 70a70 54 0 0 1 140 0v104H30z" fill="#c2622b" stroke="#2a170e" strokeWidth="5" strokeLinejoin="round" /><rect x="58" y="86" width="84" height="14" rx="7" fill="#2a170e" /><path d="M44 128h112" stroke="#2a170e" strokeWidth="3" strokeLinecap="round" opacity=".35" /><g className="tp-post__flag"><path d="M170 120V64" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" /><path d="M170 64h22v16h-22" fill="#f2be6b" stroke="#2a170e" strokeWidth="4" strokeLinejoin="round" /></g></svg></div>}{"sent" === m && <div ref={k} tabIndex={-1} role="status" className="tp-post__sent"><svg viewBox="0 0 200 150" aria-hidden={true} className="tp-post__box tp-post__box--sent"><rect x="86" y="96" width="28" height="52" fill="#5a3a28" stroke="#2a170e" strokeWidth="4" /><path d="M30 50a70 44 0 0 1 140 0v52H30z" fill="#c2622b" stroke="#2a170e" strokeWidth="5" strokeLinejoin="round" /><rect x="58" y="58" width="84" height="12" rx="6" fill="#2a170e" /><path d="M170 92V22" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" /><path d="M170 22h22v16h-22" fill="#f2be6b" stroke="#2a170e" strokeWidth="4" strokeLinejoin="round" /></svg><p className="font-plush mt-4 text-[2rem]">{o.heading}</p><p className="mx-auto mt-2 max-w-[40ch] text-cocoa-soft">{o.body}</p><a href={d} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-6">WhatsApp us</a></div>}</div>;
};
export { __ex_LetterForm_25 as LetterForm };
