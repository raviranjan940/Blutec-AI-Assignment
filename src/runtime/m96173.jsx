// module 96173 exports: f
import * as __m46791 from './m46791.jsx';
import * as __m48940 from './m48940.jsx';

let t;
var n = __m46791,
  r = __m48940;
function i() {
  t = undefined;
}
let s = {
  now: () => (undefined === t && s.set(r.f.isProcessing || n.f.useManualTiming ? r.f.timestamp : performance.now()), t),
  set: e => {
    t = e, queueMicrotask(i);
  }
};
const __ex_f_63 = s;
export { __ex_f_63 as f };
