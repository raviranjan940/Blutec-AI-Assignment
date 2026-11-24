// Generated from /how-it-works of the original site.
import { Journeys } from '@runtime/m30062.jsx';
import { PupBuddy } from '@runtime/m73459.jsx';
import { Flight } from '@runtime/m890.jsx';
import Link from '@shims/link';
import { usePageMeta } from '@shims/meta';

const meta = {
  "title": "How it works | TeddyPups U.A.E.",
  "description": "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you — every step, from choosing to coming home."
};

export default function HowItWorksPage() {
  usePageMeta(meta);
  return (
    <div data-page="how" className="tp-page">
      <section
        data-pup-scene
        data-tone="light"
        className="tp-scene "
        style={{
          "--sky-top": "#fffbf3",
          "--sky-bottom": "#f6cc85"
        }}
        aria-labelledby="how-title"
      >
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <header className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1 id="how-title" className="font-plush text-giant md:col-span-7">
              How it works
            </h1>
            <p className="text-lede text-[var(--ink-soft)] md:col-span-5 md:pb-4">
              Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.
            </p>
          </header>
          <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2">
            <a
              key="#two-ways"
              href="#two-ways"
              className="chip h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft"
            >
              <span className="font-plush text-toffee">
                {1}
              </span>
              {" "}
              Two ways home
            </a>
            <a
              key="#promise"
              href="#promise"
              className="chip h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft"
            >
              <span className="font-plush text-toffee">
                {2}
              </span>
              {" "}
              Our premium puppy promise
            </a>
            <a
              key="#delivery"
              href="#delivery"
              className="chip h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft"
            >
              <span className="font-plush text-toffee">
                {3}
              </span>
              {" "}
              {"Delivery & collection"}
            </a>
            <a
              key="#why"
              href="#why"
              className="chip h-11 border-2 border-cocoa !bg-milk px-4 hover:!bg-honey-soft"
            >
              <span className="font-plush text-toffee">
                {4}
              </span>
              {" "}
              Why choose us
            </a>
          </nav>
          <div id="two-ways">
            <Journeys
              journeys={[
                {
                  key: "local",
                  label: "In Dubai",
                  hint: "meet in person",
                  heading: "Meet your puppy in person",
                  body: "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.",
                  note: undefined,
                  steps: [
                    {
                      text: "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.",
                      title: "Explore our puppies"
                    },
                    {
                      text: "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.",
                      title: "Choose your puppy"
                    },
                    {
                      text: "Spend time bonding before making your decision.",
                      title: "Meet before you choose"
                    },
                    {
                      text: "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.",
                      title: "Pick-up or delivery"
                    }
                  ]
                },
                {
                  key: "imported",
                  label: "Imported",
                  hint: "order upon request",
                  heading: "Order upon request",
                  body: "Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.",
                  note: "From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.",
                  steps: [
                    {
                      text: "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.",
                      title: "Reserve your puppy"
                    },
                    {
                      text: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.",
                      title: "Personalized consultation"
                    },
                    {
                      text: "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.",
                      title: "Import and arrival"
                    },
                    {
                      text: "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.",
                      title: "Welcome home"
                    }
                  ]
                }
              ]}
             />
          </div>
          <section id="promise" aria-labelledby="promise-title" className="tp-paper mt-24 -rotate-[0.6deg]">
            <p aria-hidden className="font-scrawl text-lg text-toffee-ink">
              puppy passport
            </p>
            <h2 id="promise-title" className="font-plush text-huge mt-1 max-w-[16ch]">
              Our premium puppy promise
            </h2>
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <li
                key="Hand-selected breeders"
                className="tp-entry"
                style={{
                  "--ink-stamp": "#a24a1a",
                  "--tilt": "-8deg",
                  "--i": 0
                }}
              >
                <span className="tp-stamp tp-stamp--round">
                  <svg viewBox="0 0 64 64" className="tp-stamp__icon" aria-hidden>
                    <path
                      d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                     />
                    <path
                      d="M22 30h7l3-7 4 13 3-6h7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                     />
                  </svg>
                  <span className="tp-stamp__title font-plush">
                    Hand-selected breeders
                  </span>
                </span>
                <p className="tp-entry__text">
                  We work only with breeders who uphold the highest ethical and health standards.
                </p>
              </li>
              <li
                key="Full transparency"
                className="tp-entry"
                style={{
                  "--ink-stamp": "#1f6b45",
                  "--tilt": "5deg",
                  "--i": 1
                }}
              >
                <span className="tp-stamp tp-stamp--ticket">
                  <svg viewBox="0 0 64 64" className="tp-stamp__icon" aria-hidden>
                    <path
                      d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                     />
                    <path
                      d="M8 50c10 4 20 4 30 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 7"
                     />
                  </svg>
                  <span className="tp-stamp__title font-plush">
                    Full transparency
                  </span>
                </span>
                <p className="tp-entry__text">
                  Photos, videos, and health certificates are shared before your puppy travels.
                </p>
              </li>
              <li
                key="Safe, stress-free delivery"
                className="tp-entry"
                style={{
                  "--ink-stamp": "#5a3a28",
                  "--tilt": "-4deg",
                  "--i": 2
                }}
              >
                <span className="tp-stamp tp-stamp--oval">
                  <svg viewBox="0 0 64 64" className="tp-stamp__icon" aria-hidden>
                    <path
                      d="M10 14h44v28H30l-12 10v-10h-8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                     />
                    <path
                      d="M22 28h0M32 28h0M42 28h0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                     />
                  </svg>
                  <span className="tp-stamp__title font-plush">
                    Safe, stress-free delivery
                  </span>
                </span>
                <p className="tp-entry__text">
                  We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.
                </p>
              </li>
            </ul>
          </section>
          <section
            id="delivery"
            aria-labelledby="delivery-title"
            className="mt-24 grid items-center gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <h2 id="delivery-title" className="font-plush text-huge">
                {"Delivery & collection"}
              </h2>
              <p className="text-lede mt-5 text-[var(--ink-soft)]">
                From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.
              </p>
              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <li key="Take your puppy home the same day">
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Take your puppy home the same day
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    Local puppies are available immediately — visit, fall in love, and go home together.
                  </p>
                </li>
                <li key="Delivery within Dubai">
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Delivery within Dubai
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.
                  </p>
                </li>
                <li key="Safe international cargo">
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Safe international cargo
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.
                  </p>
                </li>
                <li key="Worldwide delivery">
                  <h3 className="font-plush-text text-[1.3rem] font-bold leading-snug">
                    Worldwide delivery
                  </h3>
                  <p className="mt-1.5 text-[var(--ink-soft)]">
                    We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative h-[clamp(14rem,30vw,22rem)] lg:col-span-6">
              <svg
                viewBox="0 0 300 120"
                className="absolute inset-x-0 bottom-0 w-full text-cocoa/25"
                aria-hidden
              >
                <path
                  d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 />
              </svg>
              <Flight photo={null} label="A plane flying puppies from Korea to Dubai" />
            </div>
          </section>
          <section id="why" aria-labelledby="why-title" className="mt-24 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="why-title" className="font-plush text-huge">
                Why choose us
              </h2>
              <p className="text-lede mt-6 text-[var(--ink-soft)]">
                We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.
              </p>
            </div>
            <ul className="space-y-8 lg:col-span-6 lg:col-start-7">
              <li key="International cargo" className="flex gap-5">
                <svg viewBox="0 0 64 64" className="size-14 shrink-0 text-toffee-deep" aria-hidden>
                  <path
                    d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   />
                  <path
                    d="M8 50c10 4 20 4 30 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 7"
                   />
                </svg>
                <div>
                  <h3 className="font-plush text-[1.7rem]">
                    International cargo
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)]">
                    We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.
                  </p>
                </div>
              </li>
              <li key="Support 24/7" className="flex gap-5">
                <svg viewBox="0 0 64 64" className="size-14 shrink-0 text-toffee-deep" aria-hidden>
                  <path
                    d="M10 14h44v28H30l-12 10v-10h-8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   />
                  <path
                    d="M22 28h0M32 28h0M42 28h0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   />
                </svg>
                <div>
                  <h3 className="font-plush text-[1.7rem]">
                    Support 24/7
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)]">
                    Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away.
                  </p>
                </div>
              </li>
              <li key="Health guarantee" className="flex gap-5">
                <svg viewBox="0 0 64 64" className="size-14 shrink-0 text-toffee-deep" aria-hidden>
                  <path
                    d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   />
                  <path
                    d="M22 30h7l3-7 4 13 3-6h7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   />
                </svg>
                <div>
                  <h3 className="font-plush text-[1.7rem]">
                    Health guarantee
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)]">
                    All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            aria-labelledby="care-title"
            className="tp-board mt-24 grid items-center gap-8 md:grid-cols-[1fr_auto] md:!p-12"
          >
            <div>
              <h2 id="care-title" className="font-plush text-big">
                Unique and high quality puppies
              </h2>
              <p className="text-lede measure mt-5 text-cocoa-soft">
                When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Ask us on WhatsApp
                </a>
                <Link href="/puppies" className="btn btn-ghost">
                  See available puppies
                </Link>
              </div>
            </div>
            <PupBuddy pose="bow" facing="left" className="mx-auto w-48 md:w-56" label="Teddy, ready to play" />
          </section>
        </div>
      </section>
    </div>
  );
}
