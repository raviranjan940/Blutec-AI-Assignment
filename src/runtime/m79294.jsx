// module 79294 exports: f


const __ex_f_56 = class {
  constructor() {
    this.isResolved = false;
  }
  get finished() {
    return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise(t => {
      this._resolve = t;
    })), this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = undefined, this.isResolved = false;
  }
  notifyFinished() {
    this.isResolved = true, this._resolve?.();
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
};
export { __ex_f_56 as f };
