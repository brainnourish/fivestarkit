import { Search, MessageSquareQuote } from "lucide-react";
import FadeIn from "../FadeIn";

export default function WhyReviews() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            WHY REVIEWS MATTER
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem]">
            Reviews are your first impression now.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="space-y-8">
          <div className="flex gap-4">
            <Search
              className="mt-1 h-5 w-5 shrink-0 text-accent"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p className="text-lg leading-relaxed text-muted">
              When someone searches for your business, your reviews are often
              one of the first things they see.
            </p>
          </div>
          <div className="flex gap-4">
            <MessageSquareQuote
              className="mt-1 h-5 w-5 shrink-0 text-accent"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p className="text-lg leading-relaxed text-muted">
              FiveStarKit helps make asking for genuine customer feedback part
              of the everyday customer experience, not something you remember
              once a quarter.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
