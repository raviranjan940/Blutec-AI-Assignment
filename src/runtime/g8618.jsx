// shared module body for 8618, 38638, 48393


let __v_f_143;
let __v_f_142;
let __v_f_141;
function t(e, t, n) {
  return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
__v_f_141 = (...e) => e.reduce((e, t) => n => t(e(n))), __v_f_142 = function ({
  hue: e,
  saturation: n,
  lightness: r,
  alpha: i
}) {
  e /= 360, r /= 100;
  let s = 0,
    a = 0,
    o = 0;
  if (n /= 100) {
    let i = r < .5 ? r * (1 + n) : r + n - r * n,
      u = 2 * r - i;
    s = t(u, i, e + 1 / 3), a = t(u, i, e), o = t(u, i, e - 1 / 3);
  } else s = a = o = r;
  return {
    red: Math.round(255 * s),
    green: Math.round(255 * a),
    blue: Math.round(255 * o),
    alpha: i
  };
}, __v_f_143 = function (e, t) {
  return n => n > 0 ? t : e;
};
export { __v_f_141 as f__38638 };
export { __v_f_142 as f__48393 };
export { __v_f_143 as f__8618 };
