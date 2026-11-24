// shared module body for 41405, 72203
import * as __m73459 from './m73459.jsx';

let __v_f_45;
let __v_f_44;
var CA_ = __m73459;
__v_f_44 = function ({
  pose: e,
  facing: s = "right",
  act: n,
  behind: l = false,
  lane: r = false,
  className: i = "",
  style: o,
  label: d
}) {
  return <div data-pup-stop={true} data-pose={e} data-facing={s} data-act={n} data-behind={l || undefined} data-lane={r || undefined} className={`pup-stop ${i}`} style={o}><CA_.PupBuddy pose={e} facing={s} label={d} asStop={true} /></div>;
}, __v_f_45 = function ({
  tone: e,
  className: a = "",
  style: s,
  children: n,
  ...l
}) {
  return <section data-pup-scene={true} data-tone={e.dark ? "dark" : "light"} className={`tp-scene ${a}`} style={{
    "--sky-top": e.top,
    "--sky-bottom": e.bottom,
    ...s
  }} {...l}>{n}{e.sunset && <div aria-hidden={true} className="tp-horizon"><span className="tp-horizon__sun" /><svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="tp-horizon__city"><path d="M0 160V118h34v-14h22v-22h30v34h18V96h26v30h22v-18h16v-30h34v40h20V70h28v56h24V98h18v-26h30v54h20v-38h26v-40l14-6 14 6v40h22v46h18V84h26v-30h22v50h24V76h36v50h20V96h18v-58h30v44h14V96h22v-30h16v22h26v-52l6-8v-24l4-6v-30l3-18 3 18v30l4 6v24l6 8v52h26v30h22V82h30v-20h24v48h20V90h28v-36h26v56h18V74h30v36h22V94h26v-24h30v62h20V102h26v20h34v38z" /></svg></div>}</section>;
};
export { __v_f_44 as f__41405 };
export { __v_f_45 as f__72203 };
