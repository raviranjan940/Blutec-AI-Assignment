// Generated from the original site's shared layout.
import { Suspense } from 'react';
import { HeaderBehavior } from '@runtime/m21873.jsx';
import { SmoothScroll } from '@runtime/m4602.jsx';
import { RouteCurtain } from '@runtime/m4740.jsx';
import { PawTrailCanvas } from '@runtime/m50985.jsx';
import { MobileMenu } from '@runtime/m62150.jsx';
import { PupBuddy } from '@runtime/m73459.jsx';
import { NavLink } from '@runtime/m82394.jsx';
import { MotionProvider } from '@runtime/m86327.jsx';
import { Image } from '@shims/image';
import Link from '@shims/link';
import { Outlet } from 'react-router-dom';

export default function SiteLayout() {
  return (
    <MotionProvider>
      <RouteCurtain />
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-full bg-cocoa px-5 py-3 font-semibold text-milk"
      >
        Skip to content
      </a>
      <HeaderBehavior>
        <div className="tp-header__bar gutter">
          <Link href="/" className="tp-header__brand" aria-label="TeddyPups U.A.E. — home">
            <Image src="/brand/logo.png" alt="" width={56} height={56} preload className="tp-header__logo" />
            <span className="font-plush tp-header__name">
              TeddyPups
            </span>
          </Link>
          <nav aria-label="Main" className="tp-header__nav">
            <ul>
              <li>
                <NavLink href="/" label="Home" className="tp-nav-link" />
              </li>
              <li key="/puppies">
                <NavLink href="/puppies" label="Puppies" className="tp-nav-link" />
              </li>
              <li key="/happy-families">
                <NavLink href="/happy-families" label="Happy families" className="tp-nav-link" />
              </li>
              <li key="/how-it-works">
                <NavLink href="/how-it-works" label="How it works" className="tp-nav-link" />
              </li>
              <li key="/faq">
                <NavLink href="/faq" label="FAQ" className="tp-nav-link" />
              </li>
              <li key="/contact">
                <NavLink href="/contact" label="Visit & contact" className="tp-nav-link" />
              </li>
            </ul>
          </nav>
          <div className="tp-header__end">
            <a
              href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp tp-header__wa"
            >
              WhatsApp us
            </a>
            <MobileMenu
              whatsappHref="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
              phoneDisplay="+971 50 000 0000"
             />
          </div>
        </div>
        <svg aria-hidden className="tp-header__hem" width="100%" height="14" preserveAspectRatio="none">
          <defs>
            <pattern id="tp-hem" width="44" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className="tp-header__hem-fill" />
              <path d="M0 2A22 11 0 0 0 44 2" className="tp-header__hem-line" />
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#tp-hem)" />
        </svg>
      </HeaderBehavior>
      <main id="main" tabIndex={-1} className="relative pt-[var(--header-h)] outline-none">
        <Outlet />
      </main>
      <footer className="tp-footer relative pb-[calc(var(--bar-h)+2rem)] text-milk md:pb-10">
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" className="tp-footer__hill">
          <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
        </svg>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-6 h-64 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <svg
              key="0"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "6%",
                top: "18%",
                width: "12.6px",
                animationDelay: "0.00s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="1"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "14%",
                top: "42%",
                width: "8.4px",
                animationDelay: "0.40s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="2"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "23%",
                top: "12%",
                width: "9.799999999999999px",
                animationDelay: "0.80s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="3"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "31%",
                top: "30%",
                width: "7px",
                animationDelay: "1.20s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="4"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "44%",
                top: "9%",
                width: "11.200000000000001px",
                animationDelay: "1.60s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="5"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "52%",
                top: "36%",
                width: "7.700000000000001px",
                animationDelay: "2.00s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="6"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "63%",
                top: "15%",
                width: "10.5px",
                animationDelay: "2.40s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="7"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "71%",
                top: "40%",
                width: "7px",
                animationDelay: "2.80s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
            <svg
              key="8"
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: "92%",
                top: "33%",
                width: "8.4px",
                animationDelay: "3.20s"
              }}
              aria-hidden
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
               />
            </svg>
          </div>
          <span className="tp-moon" />
        </div>
        <div
          className="gutter relative mx-auto grid max-w-[110rem] gap-12 pt-20 md:grid-cols-12 md:gap-x-12 md:gap-y-6 md:pt-28"
        >
          <div className="md:col-span-5">
            <p className="font-plush text-big text-honey-soft">
              Home, at last.
            </p>
            <p className="mt-5 max-w-md text-milk/80">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
            </p>
          </div>
          <div className="order-last md:order-none md:col-span-5 md:col-start-1 md:row-start-2">
            <div className="tp-basket">
              <svg aria-hidden viewBox="0 0 300 240" className="tp-basket__back">
                <ellipse cx={212} cy={145} rx={96} ry={12} className="tp-basket__hollow" />
                <path d="M116 145 A96 12 0 0 1 308 145" className="tp-basket__rim-line" />
                <path d="M116 145 A96 12 0 0 1 308 145" className="tp-basket__rim" />
              </svg>
              <div
                data-pup-stop
                data-pose="snug"
                data-facing="right"
                data-act="basket"
                data-behind
                data-lane
                className="pup-stop tp-basket__pup"
              >
                <PupBuddy pose="snug" facing="right" label="Teddy, sitting snug in his basket" asStop />
              </div>
              <svg aria-hidden viewBox="0 0 300 240" className="tp-basket__front">
                <path
                  d="M116 145 C118 180 126 214 138 232 L286 232 C298 214 306 180 308 145 A96 12 0 0 1 116 145 Z"
                  className="tp-basket__body"
                 />
                <path d="M121 178 Q212 197 303 178 M127 206 Q212 223 297 206" className="tp-basket__weave" />
                <path
                  d="M150 164 L158 230 M182 168 L185 232 M212 169 V232 M242 168 L239 232 M274 164 L266 230"
                  className="tp-basket__weave tp-basket__weave--stakes"
                 />
                <path d="M116 145 A96 12 0 0 0 308 145" className="tp-basket__rim-line" />
                <path d="M116 145 A96 12 0 0 0 308 145" className="tp-basket__rim" />
              </svg>
            </div>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7 md:row-span-2 md:row-start-1">
            <h2 className="font-scrawl text-lg text-honey">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li key="/puppies">
                <Link
                  href="/puppies"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  Available puppies
                </Link>
              </li>
              <li key="/gone-home">
                <Link
                  href="/gone-home"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  Gone home
                </Link>
              </li>
              <li key="/happy-families">
                <Link
                  href="/happy-families"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  Happy families
                </Link>
              </li>
              <li key="/how-it-works">
                <Link
                  href="/how-it-works"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  How it works
                </Link>
              </li>
              <li key="/how-it-works#delivery">
                <Link
                  href="/how-it-works#delivery"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  {"Delivery & collection"}
                </Link>
              </li>
              <li key="/faq">
                <Link
                  href="/faq"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li key="/contact">
                <Link
                  href="/contact"
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                >
                  {"Visit & contact"}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-3 md:row-span-2 md:row-start-1">
            <h2 className="font-scrawl text-lg text-honey">
              Say hello
            </h2>
            <ul className="mt-4 space-y-2.5 text-milk/90">
              <li>
                <a
                  className="font-semibold hover:text-honey"
                  href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"WhatsApp "}
                  +971 50 000 0000
                </a>
              </li>
              <li>
                <a className="break-all hover:text-honey" href="mailto:info@instabizweb.com">
                  info@instabizweb.com
                </a>
              </li>
              <li>
                Downtown Dubai, United Arab Emirates
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Social media">
              <li key="Instagram">
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey"
                >
                  Instagram
                </a>
              </li>
              <li key="TikTok">
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey"
                >
                  TikTok
                </a>
              </li>
              <li key="Facebook">
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="gutter relative mx-auto mt-16 flex max-w-[110rem] flex-col items-start justify-between gap-4 border-t border-milk/15 pt-6 text-sm text-milk/60 md:flex-row md:items-center"
        >
          <span className="flex items-center gap-3">
            <Image src="/brand/logo.png" alt="" width={36} height={36} className="size-9" />
            {"© "}
            {2026}
            {" "}
            TeddyPups U.A.E.
          </span>
          <span className="font-scrawl text-base text-honey/80">
            every puppy is family
          </span>
        </div>
      </footer>
      <div
        data-whatsapp-bar
        className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa bg-milk px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden"
      >
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp !min-h-12 flex-1 !shadow-none"
          >
            WhatsApp us
          </a>
          <a href="tel:+971500000000" className="btn btn-ghost !min-h-12 !px-5">
            Call
          </a>
        </div>
      </div>
      <PawTrailCanvas />
      <SmoothScroll />
      <Suspense />
    </MotionProvider>
  );
}
