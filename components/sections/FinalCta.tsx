import FadeIn from "../FadeIn";
import { StarGlyph } from "../Wordmark";

export default function FinalCta() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-36">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="inline-flex gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarGlyph key={i} className="h-4 w-4 text-accent" />
          ))}
        </span>
        <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[3.25rem]">
          Make leaving a review effortless.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted">
          We&apos;ll design it, print it, and send it. You just put it in front
          of your customers.
        </p>
        <a
          href="#pricing"
          className="mt-10 inline-block rounded-xl bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/85"
        >
          Get Your Kit · $299
        </a>
      </FadeIn>
    </section>
  );
}
