// Stand-in for next/link: a plain anchor that routes client-side.
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Link = forwardRef(function Link(
  { href, prefetch, replace, scroll, shallow, locale, legacyBehavior, passHref, onNavigate, onClick, children, ...rest },
  ref,
) {
  const navigate = useNavigate();
  const url = typeof href === 'string' ? href : href?.pathname ?? '/';
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== '_self') return;
    const dest = new URL(url, window.location.href);
    if (dest.origin !== window.location.origin) return;
    let prevented = false;
    onNavigate?.({ preventDefault: () => (prevented = true) });
    e.preventDefault();
    if (prevented) return;
    navigate(dest.pathname + dest.search + dest.hash, { replace: !!replace, preventScrollReset: scroll === false });
  };
  return (
    <a ref={ref} href={url} onClick={handle} {...rest}>
      {children}
    </a>
  );
});

export default Link;
