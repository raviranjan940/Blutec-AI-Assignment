// Stand-ins for next/navigation, backed by react-router.
import { useMemo, useSyncExternalStore } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function usePathname() {
  return useLocation().pathname;
}

// Next.js keeps useSearchParams in sync with manual history.pushState/replaceState
// calls (the puppy filters rely on this), so we do the same.
const HISTORY_EVENT = 'tp:history';
if (typeof window !== 'undefined' && !window.__tpHistoryPatched) {
  window.__tpHistoryPatched = true;
  for (const method of ['pushState', 'replaceState']) {
    const original = history[method].bind(history);
    history[method] = (...args) => {
      const result = original(...args);
      window.dispatchEvent(new Event(HISTORY_EVENT));
      return result;
    };
  }
}
const subscribe = (cb) => {
  window.addEventListener(HISTORY_EVENT, cb);
  window.addEventListener('popstate', cb);
  return () => {
    window.removeEventListener(HISTORY_EVENT, cb);
    window.removeEventListener('popstate', cb);
  };
};

export function useSearchParams() {
  useLocation();
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => '');
  return useMemo(() => new URLSearchParams(search), [search]);
}

export function useRouter() {
  const navigate = useNavigate();
  return useMemo(
    () => ({
      push: (href, opts) => navigate(href, { preventScrollReset: opts?.scroll === false }),
      replace: (href, opts) => navigate(href, { replace: true, preventScrollReset: opts?.scroll === false }),
      back: () => navigate(-1),
      forward: () => navigate(1),
      refresh: () => {},
      prefetch: () => {},
    }),
    [navigate],
  );
}
