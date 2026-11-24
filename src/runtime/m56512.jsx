// module 56512 exports: f


const __ex_f_209 = (t, e, i = 10) => {
  let s = "",
    n = Math.max(Math.round(e / i), 2);
  for (let e = 0; e < n; e++) s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
export { __ex_f_209 as f };
