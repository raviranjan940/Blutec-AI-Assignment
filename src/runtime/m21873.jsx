// module 21873 exports: HeaderBehavior
import * as __m18566 from '@shims/navigation';
import * as __m71645 from 'react';

var i = __m18566,
  s = __m71645;
const __ex_HeaderBehavior_2 = function ({
  children: t
}) {
  let n = s.useRef(null),
    o = "/" === i.usePathname();
  return s.useEffect(() => {
    let t = n.current,
      e = scrollY,
      i = false,
      s = () => {
        let s = scrollY;
        t.dataset.scrolled = s > 8 ? "true" : "false", Math.abs(s - e) > 6 && (t.dataset.hidden = s > e && s > 220 ? "true" : "false", e = s), i = false;
      },
      o = () => {
        i || (i = true, requestAnimationFrame(s));
      },
      r = () => t.dataset.hidden = "false";
    return s(), addEventListener("scroll", o, {
      passive: true
    }), t.addEventListener("focusin", r), () => {
      removeEventListener("scroll", o), t.removeEventListener("focusin", r);
    };
  }, []), <header ref={n} id="site-header" data-scrolled="false" data-hidden="false" data-home={o || undefined} className="tp-header fixed inset-x-0 top-0 z-50">{t}</header>;
};
export { __ex_HeaderBehavior_2 as HeaderBehavior };
