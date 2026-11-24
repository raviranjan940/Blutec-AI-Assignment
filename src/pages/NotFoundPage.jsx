// Generated from the original site not-found page.
import { PupBuddy } from '@runtime/m73459.jsx';
import Link from '@shims/link';
import { usePageMeta } from '@shims/meta';

const meta = { title: "Lost | TeddyPups U.A.E." };

export default function NotFoundPage() {
  usePageMeta(meta);
  return (
    <div className="gutter mx-auto grid min-h-[78vh] max-w-[110rem] place-items-center py-14">
      <div className="tp-poster">
        <span aria-hidden className="tp-tape tp-tape--left" />
        <span aria-hidden className="tp-tape tp-tape--right" />
        <p className="font-scrawl tp-poster__kicker">
          have you seen this page?
        </p>
        <h1 className="font-plush tp-poster__title">
          Lost
          <span className="sr-only">
            : this page has wandered off
          </span>
        </h1>
        <div className="tp-poster__photo">
          <PupBuddy pose="sniff" facing="right" label="Teddy, sniffing out the missing page" />
        </div>
        <p className="tp-poster__desc">
          One page, last seen wandering off. It answers to the address you typed, but it isn't here any more. Teddy is on the case.
        </p>
        <p className="font-scrawl tp-poster__reward">
          if found, take a tab:
        </p>
        <ul className="tp-poster__tabs" aria-label="Pages that are here">
          <li key="/">
            <Link href="/" className="tp-poster__tab">
              Home
            </Link>
          </li>
          <li key="/puppies">
            <Link href="/puppies" className="tp-poster__tab">
              Puppies
            </Link>
          </li>
          <li key="/how-it-works">
            <Link href="/how-it-works" className="tp-poster__tab">
              How it works
            </Link>
          </li>
          <li key="/faq">
            <Link href="/faq" className="tp-poster__tab">
              Questions
            </Link>
          </li>
          <li key="/contact">
            <Link href="/contact" className="tp-poster__tab">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
