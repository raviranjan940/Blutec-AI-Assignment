// module 18615 exports: EnquiryForm
import * as __m42623 from './m42623.jsx';
import * as __m47626 from './m47626.jsx';
import * as __m71645 from 'react';
import * as __m72611 from './m72611.jsx';

var r = __m71645,
  n = __m47626,
  CL_ = __m42623,
  s = __m72611;
function CA_({
  label: e,
  name: n,
  error: l,
  hint: s,
  ...o
}) {
  let i = r.useId();
  return <div><label htmlFor={i} className="block text-[0.95rem] font-semibold">{e}{o.required ? <span className="text-toffee-ink">{" *"}</span> : <span className="font-normal text-cocoa-soft">{" (optional)"}</span>}</label><input id={i} name={n} aria-invalid={!!l} aria-describedby={l ? `${i}-err` : s ? `${i}-hint` : undefined} className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)] aria-[invalid=true]:border-[#b3261e]" {...o} />{s && !l && <p id={`${i}-hint`} className="mt-1 text-sm text-cocoa-soft">{s}</p>}{l && <p id={`${i}-err`} className="mt-1 text-sm font-semibold text-[#b3261e]">{l}</p>}</div>;
}
const __ex_EnquiryForm_1 = function ({
  puppy: e,
  puppies: o,
  success: i,
  whatsappHref: c,
  compact: d = false
}) {
  let {
      state: u,
      pending: f,
      onSubmit: m,
      ref: p
    } = n.f(s.f, {
      ok: false
    }),
    h = r.useId(),
    x = r.useId();
  return u.ok ? <CL_.f role="status" initial={{
    rotateX: -80,
    opacity: 0,
    y: -10
  }} animate={{
    rotateX: 0,
    opacity: 1,
    y: 0
  }} transition={{
    type: "spring",
    stiffness: 160,
    damping: 16
  }} className="tp-sent rounded-[2rem] border-[3px] border-cocoa bg-honey p-8 text-center"><svg viewBox="0 0 120 84" className="tp-envelope mx-auto w-32" aria-hidden={true}><path d="M6 10h108v68H6z" fill="#fffdf8" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" /><path d="M6 10l54 40 54-40" fill="none" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" /><circle cx="94" cy="62" r="12" fill="#c2622b" stroke="#2a170e" strokeWidth="2.5" /></svg><p className="font-plush mt-4 text-[2rem]">{i.heading}</p><p className="mx-auto mt-2 max-w-[38ch] text-cocoa-soft">{i.body}</p><a href={c} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-6">WhatsApp us</a></CL_.f> : <form ref={p} onSubmit={m} noValidate={true} className="space-y-5">{u.message && <p role="alert" className="rounded-2xl bg-blush px-4 py-3 font-semibold">{u.message}</p>}<div className={d ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}><CA_ label="Your name" name="name" autoComplete="name" required={true} minLength={2} maxLength={80} error={u.errors?.name} /><CA_ label="Phone or WhatsApp" name="phone" type="tel" inputMode="tel" autoComplete="tel" required={true} error={u.errors?.phone} hint="With country code, e.g. +971 50 123 4567" /><CA_ label="Email" name="email" type="email" autoComplete="email" error={u.errors?.email} /><CA_ label="Your area" name="area" autoComplete="address-level2" maxLength={80} error={u.errors?.area} hint="e.g. Dubai Marina" /></div>{e ? <input type="hidden" name="puppyId" value={e.id} /> : o && <div><label htmlFor={h} className="block text-[0.95rem] font-semibold">{"Puppy you're interested in "}<span className="font-normal text-cocoa-soft">(optional)</span></label><select id={h} name="puppyId" className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base" defaultValue=""><option value="">Not sure yet</option>{o.map(e => <option value={e.id} key={e.id}>{e.label}</option>)}</select></div>}<div><label htmlFor={x} className="block text-[0.95rem] font-semibold">{"Message "}<span className="font-normal text-cocoa-soft">(optional)</span></label><textarea id={x} name="message" rows={d ? 3 : 4} maxLength={2e3} className="mt-1.5 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 py-3 text-base outline-none focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]" defaultValue={e ? `Hi! I'd love to know more about ${e.label}.` : ""} />{u.errors?.message && <p className="mt-1 text-sm font-semibold text-[#b3261e]">{u.errors.message}</p>}</div><div aria-hidden={true} className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label>Website<input name="website" tabIndex={-1} autoComplete="off" defaultValue="" /></label></div><button type="submit" disabled={f} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto">{f ? "Sending…" : "Send enquiry"}</button></form>;
};
export { __ex_EnquiryForm_1 as EnquiryForm };
