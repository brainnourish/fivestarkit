import { Check } from "lucide-react";
import FadeIn from "../FadeIn";
import { StarGlyph } from "../Wordmark";

const included = [
  "Custom branded design",
  "500 review cards",
  "QR stickers",
  "Review signage",
  "Digital assets",
  "Google review QR setup",
  "Printing included",
  "Shipping included",
  "No subscription",
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            PRICING
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            One kit. One price.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-xl sm:mt-14">
          <div className="rounded-3xl border border-line bg-card p-8 shadow-float sm:p-12">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold tracking-tight">FiveStarKit</p>
              <span className="inline-flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarGlyph key={i} className="h-3.5 w-3.5 text-accent" />
                ))}
              </span>
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <p className="text-6xl font-semibold tracking-[-0.03em] sm:text-7xl">
                $299
              </p>
              <p className="text-muted">one-time</p>
            </div>
            <p className="mt-3 text-[15px] text-muted">
              Everything you need to turn more of your customers into Google
              reviewers.
            </p>

            <ul className="mt-8 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check
                    className="h-4 w-4 shrink-0 text-accent"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@fivestarkit.com?subject=FiveStarKit%20Order"
              className="mt-10 block w-full rounded-xl bg-foreground px-7 py-4 text-center text-base font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/85"
            >
              Get Your Kit
            </a>
            <p className="mt-4 text-center text-[13px] text-faint">
              Everything is customized after you order.
            </p>
          </div>
          <p className="mt-6 text-center text-[13px] text-faint">
            Need more materials later? Refill packs coming soon.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
