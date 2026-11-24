// module 47626 exports: f
import * as __m71645 from 'react';

var t = __m71645;
const __ex_f_27 = function (e, r, n = false) {
  let [l, s, a] = t.useActionState(e, r),
    [o, i] = t.useTransition(),
    c = t.useRef(null);
  return t.useEffect(() => {
    n && l.ok && c.current?.reset();
  }, [l, n]), {
    state: l,
    pending: a || o,
    onSubmit: e => {
      e.preventDefault();
      let t = new FormData(e.currentTarget);
      i(() => s(t));
    },
    ref: c
  };
};
export { __ex_f_27 as f };
