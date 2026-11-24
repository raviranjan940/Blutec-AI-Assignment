// shared module body for 6840, 32525, 85983, 87576


let __v_I_108;
let __v_m_107;
let __v_z_106;
let __v_v_105;
let __v_f_104;
let __v_f_103;
function e(t) {
  return null !== t && "object" == typeof t && "function" == typeof t.start;
}
function i(t) {
  return "string" == typeof t || Array.isArray(t);
}
__v_f_103 = e, __v_f_104 = i;
let s = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  n = ["initial", ...s];
function r(t) {
  if (e(t.animate)) return true;
  for (let e = 0; e < n.length; e++) if (i(t[n[e]])) return true;
  return false;
}
__v_v_105 = s, __v_z_106 = n, __v_m_107 = r, __v_I_108 = function (t) {
  return !!(r(t) || t.variants);
};
export { __v_f_103 as f__85983 };
export { __v_f_104 as f__32525 };
export { __v_v_105 as v__6840 };
export { __v_z_106 as z__6840 };
export { __v_m_107 as m__87576 };
export { __v_I_108 as I__87576 };
