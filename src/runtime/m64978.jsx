// module 64978 exports: f
import * as __m21476 from './m21476.jsx';
import * as __m71645 from 'react';

var e = __m71645,
  i = __m21476;
const __ex_f_183 = function (t = true) {
  let s = e.useContext(i.f);
  if (null === s) return [true, null];
  let {
      isPresent: n,
      onExitComplete: r,
      register: a
    } = s,
    o = e.useId();
  e.useEffect(() => {
    if (t) return a(o);
  }, [t]);
  let l = e.useCallback(() => t && r && r(o), [o, r, t]);
  return !n && r ? [false, l] : [true];
};
export { __ex_f_183 as f };
