// shared module body for 33887, 70596


let __v_f_138;
let __v_i_137;
let __v_I_136;
function t(e, t) {
  -1 === e.indexOf(t) && e.push(t);
}
function n(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
__v_I_136 = t, __v_i_137 = n, __v_f_138 = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return t(this.subscriptions, e), () => this.remove(e);
  }
  remove(e) {
    n(this.subscriptions, e);
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r) if (1 === r) this.subscriptions[0](e, t, n);else for (let i = 0; i < r; i++) {
      let r = this.subscriptions[i];
      r && r(e, t, n);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
export { __v_I_136 as I__33887 };
export { __v_i_137 as i__33887 };
export { __v_f_138 as f__70596 };
