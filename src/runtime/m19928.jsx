// module 19928 exports: t, A, u


let e = t => e => "string" == typeof e && e.startsWith(t),
  i = e("--"),
  s = e("var(--"),
  n = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
const __ex_t_122 = function (t) {
  return "string" == typeof t && t.split("/*")[0].includes("var(--");
};
const __ex_A_123 = i;
const __ex_u_124 = t => !!s(t) && n.test(t.split("/*")[0].trim());
export { __ex_t_122 as t };
export { __ex_A_123 as A };
export { __ex_u_124 as u };
