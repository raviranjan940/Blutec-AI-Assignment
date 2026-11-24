// module 75404 exports: StoryRibbon
import * as __m6928 from './m6928.jsx';
import * as __m10542 from './m10542.jsx';
import * as __m71645 from 'react';

var r = __m71645,
  n = __m10542,
  CL_ = __m6928,
  CL_ = CL_;
const __ex_StoryRibbon_16 = function () {
  let e = r.useRef(null),
    {
      scrollYProgress: s
    } = n.f({
      target: e,
      offset: ["start 30%", "end end"]
    });
  return <div ref={e} aria-hidden={true} className="tp-ribbon"><div className="tp-ribbon__track"><CL_.P className="tp-ribbon__band" style={{
        scaleY: s
      }} /></div></div>;
};
export { __ex_StoryRibbon_16 as StoryRibbon };
