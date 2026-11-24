// module 65091 exports: b, U, v, L, a, $


let e = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  i = e("deg"),
  s = e("%"),
  n = e("px"),
  r = e("vh"),
  a = e("vw"),
  o = {
    ...s,
    parse: t => s.parse(t) / 100,
    transform: t => s.transform(100 * t)
  };
const __ex_b_184 = i;
const __ex_U_185 = s;
const __ex_v_186 = o;
const __ex_L_187 = n;
const __ex_a_188 = r;
const __ex_$_189 = a;
export { __ex_b_184 as b };
export { __ex_U_185 as U };
export { __ex_v_186 as v };
export { __ex_L_187 as L };
export { __ex_a_188 as a };
export { __ex_$_189 as $ };
