import { Plus } from "lucide-react";
import FadeIn from "../FadeIn";

const faqs = [
  {
    q: "How does FiveStarKit work?",
    a: "You send us your logo, business details, and Google listing. We design a branded set of review cards, stickers, signage, and digital graphics, each with a QR code that links directly to your Google review page. Then we print everything and ship it to your business.",
  },
  {
    q: "Where does the QR code send customers?",
    a: "Straight to your business's Google review flow. No searching for your listing, no extra taps. Customers scan the code with their phone camera and land on the page where they can write a review.",
  },
  {
    q: "Do you guarantee five-star reviews?",
    a: "No. FiveStarKit helps businesses make it easier for genuine customers to leave honest reviews. We never sell, create, incentivize, or guarantee positive reviews.",
  },
  {
    q: "Can I customize the design?",
    a: "Yes. Every kit is designed around your logo, colors, and branding. If you have specific preferences, share them when you order and we'll work them into the design.",
  },
  {
    q: "Is printing included?",
    a: "Yes. All physical materials in your kit are professionally printed before they ship. There's nothing for you to print.",
  },
  {
    q: "Is shipping included?",
    a: "Yes. Shipping to your business is included in the one-time price.",
  },
  {
    q: "Do I need any software?",
    a: "No. There's nothing to install, log into, or learn. Your customers use the camera app already on their phone, and you just put the materials where customers will see them.",
  },
  {
    q: "Can I order more cards later?",
    a: "Yes. Refill packs are coming soon, and you can always reach out to us directly for additional materials in the meantime.",
  },
  {
    q: "How long does my kit take to arrive?",
    a: "We'll provide an estimated delivery date after your design is approved.",
  },
  {
    q: "Can this work for multiple locations?",
    a: "Yes. Each location should have its own QR destination and its own materials so reviews land on the right listing. Contact us and we'll set up a kit for each location.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            Questions, answered.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 sm:mt-14">
          <div className="divide-y divide-line rounded-2xl border border-line bg-card px-6 sm:px-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[16px] font-medium [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <Plus
                    className="h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 pr-8 text-[15px] leading-relaxed text-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
