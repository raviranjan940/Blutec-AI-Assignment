// shared module body for 42824, 72846


let __v_f_199;
let __v_f_198;
let t = e => "object" == typeof e && null !== e;
__v_f_198 = t, __v_f_199 = function (e) {
  return t(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
};
export { __v_f_198 as f__42824 };
export { __v_f_199 as f__72846 };
