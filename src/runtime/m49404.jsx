// module 49404 exports: H, U
import * as __m48940 from './m48940.jsx';
import * as __m96173 from './m96173.jsx';

var e = __m48940,
  i = __m96173;
function s(t, s) {
  return {
    kind: t,
    animation: s,
    timestamp: i.f.now(),
    frameTimestamp: e.f.timestamp,
    frameIsProcessing: e.f.isProcessing
  };
}
const __ex_H_167 = function (t, e, i) {
  let n = globalThis.__MOTION_INSPECT__;
  if (n) try {
    n({
      ...s("animation-start", t),
      options: i ? {
        ...e,
        ...i
      } : e
    });
  } catch {}
};
const __ex_U_168 = function (t, e) {
  let i = globalThis.__MOTION_INSPECT__;
  if (i) try {
    i({
      ...s("layout-animation-start", t),
      node: e
    });
  } catch {}
};
export { __ex_H_167 as H };
export { __ex_U_168 as U };
