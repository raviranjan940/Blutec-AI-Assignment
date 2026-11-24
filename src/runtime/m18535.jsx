// module 18535 exports: F, z, R
import * as __m71645 from 'react';

var e = __m71645;
let a = "(prefers-reduced-motion: reduce)";
const __ex_F_37 = () => matchMedia(a).matches;
const __ex_z_38 = function () {
  return e.useSyncExternalStore(t => {
    let e = matchMedia(a);
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, () => matchMedia(a).matches, () => true);
};
const __ex_R_39 = function (t) {
  return e.useSyncExternalStore(e => {
    let a = matchMedia(t);
    return a.addEventListener("change", e), () => a.removeEventListener("change", e);
  }, () => matchMedia(t).matches, () => false);
};
export { __ex_F_37 as F };
export { __ex_z_38 as z };
export { __ex_R_39 as R };
