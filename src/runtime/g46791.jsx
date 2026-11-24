// shared module body for 46791, 48940, 51571


let __v_f_163;
let __v_f_162;
let __v_f_161;
let e = {};
__v_f_161 = e;
let a = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
__v_f_162 = function (t, s, i = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
}) {
  let o = false,
    n = true,
    r = () => o = true,
    h = a.reduce((t, e) => (t[e] = function (t) {
      let e = new Set(),
        a = new Set(),
        s = false,
        i = false,
        o = new Set(),
        n = {
          delta: 0,
          timestamp: 0,
          isProcessing: false
        };
      function r(e) {
        o.has(e) && (a.add(e), t()), e(n);
      }
      let h = {
        schedule: (t, i = false, n = false) => {
          let r = n && s ? e : a;
          return i && o.add(t), r.add(t), t;
        },
        cancel: t => {
          a.delete(t), o.delete(t);
        },
        process: t => {
          if (n = t, s) {
            i = true;
            return;
          }
          s = true;
          let o = e;
          e = a, a = o, e.forEach(r), e.clear(), s = false, i && (i = false, h.process(t));
        }
      };
      return h;
    }(r), t), {}),
    {
      setup: l,
      read: c,
      resolveKeyframes: d,
      preUpdate: f,
      update: p,
      preRender: g,
      render: u,
      postRender: m
    } = h,
    y = () => {
      let a = e.useManualTiming,
        r = a ? i.timestamp : performance.now();
      o = false, a || (i.delta = n ? 1e3 / 60 : Math.max(Math.min(r - i.timestamp, 40), 1)), i.timestamp = r, i.isProcessing = true, l.process(i), c.process(i), d.process(i), f.process(i), p.process(i), g.process(i), u.process(i), m.process(i), i.isProcessing = false, o && s && (n = false, t(y));
    };
  return {
    schedule: a.reduce((e, a) => {
      let s = h[a];
      return e[a] = (e, a = false, r = false) => (!o && (o = true, n = true, i.isProcessing || t(y)), s.schedule(e, a, r)), e;
    }, {}),
    cancel: t => {
      for (let e = 0; e < a.length; e++) h[a[e]].cancel(t);
    },
    state: i,
    steps: h
  };
}, __v_f_163 = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};
export { __v_f_161 as f__46791 };
export { __v_f_162 as f__51571 };
export { __v_f_163 as f__48940 };
