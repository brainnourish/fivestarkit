import FadeIn from "../FadeIn";

export default function Problem() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            Your customers already love your business.
            <br className="hidden sm:block" />{" "}
            <span className="text-muted">Most just never leave a review.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            It&apos;s rarely about willingness. People forget, don&apos;t know
            where to go, or give up halfway through searching for your listing.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            FiveStarKit removes that friction. One scan takes a customer
            straight to your Google review page, right at the moment they&apos;re
            thinking about you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
