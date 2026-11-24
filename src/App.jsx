import { lazy, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const GoneHomePage = lazy(() => import('./pages/GoneHomePage.jsx'));
const HappyFamiliesPage = lazy(() => import('./pages/HappyFamiliesPage.jsx'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.jsx'));
const PuppiesPage = lazy(() => import('./pages/PuppiesPage.jsx'));

// Each puppy profile page, keyed by its slug.
const puppyPages = import.meta.glob('./pages/puppies/*.jsx');
const puppyRoutes = Object.entries(puppyPages).map(([file, load]) => ({
  slug: file.replace('./pages/puppies/', '').replace('.jsx', ''),
  Component: lazy(load),
}));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Suspense fallback={null}><ContactPage /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={null}><FaqPage /></Suspense>} />
          <Route path="/gone-home" element={<Suspense fallback={null}><GoneHomePage /></Suspense>} />
          <Route path="/happy-families" element={<Suspense fallback={null}><HappyFamiliesPage /></Suspense>} />
          <Route path="/how-it-works" element={<Suspense fallback={null}><HowItWorksPage /></Suspense>} />
          <Route path="/puppies" element={<Suspense fallback={null}><PuppiesPage /></Suspense>} />
          {puppyRoutes.map(({ slug, Component }) => (
            <Route key={slug} path={`/puppies/${slug}`} element={<Suspense fallback={null}><Component /></Suspense>} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
