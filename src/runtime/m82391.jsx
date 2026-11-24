// module 82391 exports: f
import * as __m42136 from './m42136.jsx';

var CR_ = __m42136;
let n = [-2.2, 1.6, -.9, 2.4, -1.5, .8, -2.6, 1.2],
  i = ["center", "left", "right", "corners", "center", "right", "left", "center"],
  l = ["#f6d79a", "#f9cdbf", "#cfe5f6", "#f6d79a", "#e9dcc4"];
const __ex_f_67 = function ({
  media: e,
  order: s,
  sizes: a,
  caption: o,
  priority: c = false
}) {
  let f = i[s % i.length],
    d = l[s % l.length];
  return <span className="tp-polaroid" style={{
    "--tilt": `${n[s % n.length]}deg`,
    "--tape": d,
    "--i": s
  }}>{"corners" === f ? <><span aria-hidden={true} className="tp-tape tp-tape--tl" /><span aria-hidden={true} className="tp-tape tp-tape--tr" /></> : <span aria-hidden={true} className={`tp-tape tp-tape--${f}`} />}<span className="tp-polaroid__photo"><CR_.f media={e} layout="natural" sizes={a} preload={c} /></span><span className="tp-polaroid__caption font-scrawl">{o ?? e.caption}</span></span>;
};
export { __ex_f_67 as f };
