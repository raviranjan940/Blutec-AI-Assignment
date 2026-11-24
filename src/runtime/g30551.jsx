// shared module body for 30551, 60900, 86902


let __v_G_180;
let __v_a_179;
let __v_f_178;
let __v_f_177;
function t(e) {
  let t;
  return () => (undefined === t && (t = e()), t);
}
__v_f_177 = t;
let n = {};
function r(e, r) {
  let i = t(e);
  return () => n[r] ?? i();
}
__v_f_178 = r;
let i = r(() => undefined !== window.ScrollTimeline, "scrollTimeline"),
  s = r(() => undefined !== window.ViewTimeline, "viewTimeline");
__v_a_179 = i, __v_G_180 = s;
export { __v_f_177 as f__60900 };
export { __v_f_178 as f__86902 };
export { __v_a_179 as a__30551 };
export { __v_G_180 as G__30551 };
