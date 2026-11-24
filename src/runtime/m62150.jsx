// module 62150 exports: MobileMenu
import * as __m18535 from './m18535.jsx';
import * as __m70031 from './m70031.jsx';
import * as __m71645 from 'react';
import * as __m82394 from './m82394.jsx';

var i = __m71645;
let s = [{
  href: "/puppies",
  label: "Puppies"
}, {
  href: "/happy-families",
  label: "Happy families"
}, {
  href: "/how-it-works",
  label: "How it works"
}, {
  href: "/faq",
  label: "FAQ"
}, {
  href: "/contact",
  label: "Visit & contact"
}];
var CN_ = __m82394,
  o = __m18535,
  CR_ = __m70031;
const __ex_MobileMenu_14 = function ({
  whatsappHref: t,
  phoneDisplay: a
}) {
  let l = i.useRef(null),
    h = () => {
      let t = l.current;
      if (!t?.open || t.dataset.closing) return;
      if (o.F()) return t.close();
      t.dataset.closing = "true";
      let e = () => {
          clearTimeout(s), t.removeEventListener("animationend", i), t.dataset.closing && t.close();
        },
        i = i => i.target === t && e(),
        s = setTimeout(e, 600);
      t.addEventListener("animationend", i);
    };
  return i.useEffect(() => {
    let t = () => l.current?.close();
    return addEventListener("tp:navigate", t), () => removeEventListener("tp:navigate", t);
  }, []), <><button type="button" className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold lg:hidden" aria-haspopup="dialog" onClick={() => l.current?.showModal()}><CR_.f className="size-4" />Menu</button><dialog ref={l} aria-label="Site menu" className="tp-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa backdrop:bg-cocoa/40" onClick={t => t.target === l.current && h()} onCancel={t => {
      t.preventDefault(), h();
    }} onClose={t => delete t.currentTarget.dataset.closing}><div className="flex h-full flex-col gutter pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5"><div className="flex items-center justify-between"><span className="font-scrawl text-lg">where to, friend?</span><button type="button" onClick={h} className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk">Close</button></div><nav aria-label="Mobile" className="mt-10 flex-1"><ul className="space-y-1"><li><CN_.NavLink href="/" label="Home" onNavigate={h} className="tp-menu-link font-plush block py-2 text-[clamp(2.4rem,11vw,3.4rem)]" /></li>{s.map(t => <li key={t.href}><CN_.NavLink href={t.href} label={t.label} onNavigate={h} className="tp-menu-link font-plush block py-2 text-[clamp(2.4rem,11vw,3.4rem)]" /></li>)}</ul></nav><div className="space-y-3"><a href={t} className="btn btn-whatsapp w-full" target="_blank" rel="noopener noreferrer">WhatsApp us</a><p className="text-center text-sm font-medium">{a}</p></div></div></dialog></>;
};
export { __ex_MobileMenu_14 as MobileMenu };
