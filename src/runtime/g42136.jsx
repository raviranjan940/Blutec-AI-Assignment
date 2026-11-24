// shared module body for 42136, 98194
import * as __m85437 from '@shims/image';

let __v_f_47;
let __v_default_46;
var CN_ = __m85437;
__v_default_46 = (() => CN_.Image)();
var CN_ = CN_;
__v_f_47 = function ({
  media: e,
  sizes: r,
  alt: o,
  className: i,
  preload: a,
  eager: l,
  quality: s = 75,
  layout: u = "fill",
  style: f
}) {
  let c = {
    src: e.url,
    sizes: r,
    quality: s,
    preload: a,
    loading: a || l ? "eager" : "lazy",
    fetchPriority: a ? "high" : undefined,
    placeholder: e.blurDataUrl ?? "empty",
    className: i
  };
  return "natural" === u ? <CN_.Image {...c} alt={o ?? e.alt} width={e.width} height={e.height} style={{
    width: "100%",
    height: "auto",
    backgroundColor: e.color,
    ...f
  }} /> : <CN_.Image {...c} alt={o ?? e.alt} fill={true} style={{
    objectFit: "cover",
    objectPosition: `${(100 * e.focalX).toFixed(1)}% ${(100 * e.focalY).toFixed(1)}%`,
    backgroundColor: e.color,
    ...f
  }} />;
};
export { __v_default_46 as default__98194 };
export { __v_f_47 as f__42136 };
