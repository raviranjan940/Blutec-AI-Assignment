// module 82394 exports: NavLink
import * as __m18566 from '@shims/navigation';
import * as __m22016 from '@shims/link';
import * as __m70031 from './m70031.jsx';

var CI_ = __m22016,
  s = __m18566,
  CN_ = __m70031;
const __ex_NavLink_19 = function ({
  href: t,
  label: o,
  className: r,
  onNavigate: a
}) {
  let l = s.usePathname(),
    h = "/" === t ? "/" === l : l === t || l.startsWith(`${t}/`);
  return <CI_.default href={t} aria-current={h ? "page" : undefined} data-active={h} className={r} onNavigate={a}><span>{o}</span><CN_.f className="tp-nav-link__paw" /></CI_.default>;
};
export { __ex_NavLink_19 as NavLink };
