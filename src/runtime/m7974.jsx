// module 7974 exports: RevealScope
import * as __m4740 from './m4740.jsx';
import * as __m18535 from './m18535.jsx';
import * as __m71645 from 'react';

var r = __m71645,
  n = __m4740,
  i = __m18535;
const __ex_RevealScope_18 = function ({
  children: e,
  className: l,
  ...s
}) {
  let a = r.useRef(null);
  return r.useEffect(() => {
    let e,
      t = a.current;
    if (!t) return;
    if (i.F()) {
      let e = () => t.querySelectorAll("[data-reveal]:not([data-revealed])").forEach(e => e.dataset.revealed = "true");
      e();
      let r = new MutationObserver(e);
      return r.observe(t, {
        childList: true,
        subtree: true
      }), () => r.disconnect();
    }
    let r = new Set(),
      l = e => {
        e.dataset.revealed = "true", s.unobserve(e);
      },
      s = new IntersectionObserver(e => {
        for (let t of e) {
          if (!t.isIntersecting) continue;
          let e = t.target;
          n.curtainDown() ? r.add(e) : l(e);
        }
      }, {
        rootMargin: "0px 0px -6% 0px",
        threshold: .08
      }),
      o = e => {
        if (e.dataset.armed) return s.observe(e);
        let t = e.getBoundingClientRect();
        if (t.top < innerHeight && t.bottom > 0 && !n.curtainDown()) {
          e.dataset.revealed = "true";
          return;
        }
        e.dataset.armed = "true", s.observe(e);
      };
    t.querySelectorAll("[data-reveal]:not([data-revealed])").forEach(o);
    let c = new MutationObserver(() => t.querySelectorAll("[data-reveal]:not([data-revealed])").forEach(o));
    c.observe(t, {
      childList: true,
      subtree: true
    });
    let f = () => {
      r.forEach(l), r.clear();
    };
    addEventListener("tp:arrived", f);
    let d = () => n.curtainDown() ? e = setTimeout(d, 400) : f();
    return e = setTimeout(d, 1600), () => {
      clearTimeout(e), s.disconnect(), c.disconnect(), removeEventListener("tp:arrived", f);
    };
  }, []), <div ref={a} className={l} {...s}>{e}</div>;
};
export { __ex_RevealScope_18 as RevealScope };
