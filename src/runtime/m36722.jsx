// module 36722 exports: MemoryWall
import * as __m7974 from './m7974.jsx';
import * as __m57783 from './m57783.jsx';
import * as __m70031 from './m70031.jsx';
import * as __m82391 from './m82391.jsx';

var CA_ = __m70031,
  CR_ = __m7974,
  CL_ = __m82391,
  n = __m57783;
let i = "(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw";
const __ex_MemoryWall_5 = function ({
  photos: e
}) {
  let {
    open: s,
    viewer: o
  } = n.Y(e, i);
  return <><CR_.RevealScope><ul className="tp-wall" aria-label="Photos from TeddyPups families">{e.map((r, n) => <li className="tp-wall__item" data-reveal={true} style={{
          "--d": `${n % 4 * 60}ms`
        }} key={r.id}><button type="button" className="tp-wall__print" onClick={() => s(n)} aria-label={`Open photo ${n + 1} of ${e.length}${r.caption ? `: ${r.caption}` : ""}`}><CL_.f media={r} order={n} sizes={i} priority={n < 2} /><CA_.f className="tp-wall__paw" /></button></li>)}</ul></CR_.RevealScope>{o}</>;
};
export { __ex_MemoryWall_5 as MemoryWall };
