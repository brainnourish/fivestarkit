import { Star } from "lucide-react";
import FadeIn from "../FadeIn";
import QrMock from "../QrMock";

function GenericPrintout() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-[230px] rotate-[-1deg] bg-white p-5 text-center shadow-sm ring-1 ring-black/10"
    >
      <p className="font-serif text-[15px] font-bold text-black underline">
        PLEASE LEAVE US A REVIEW!!
      </p>
      <p className="mt-2 font-serif text-[10px] leading-relaxed text-neutral-600">
        Go to Google and search for our business name, then click on reviews,
        then click write a review
      </p>
      <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center border border-dashed border-neutral-400">
        <span className="font-serif text-[8px] text-neutral-400">
          (QR here?)
        </span>
      </div>
      <p className="mt-2 font-serif text-[9px] text-neutral-500">
        thank you!!
      </p>
    </div>
  );
}

function BrandedCard() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-[250px] rotate-[1deg] rounded-xl bg-[#1c3a4a] p-5 text-white shadow-deep"
    >
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold tracking-tight">Harbor Dental</p>
        <span className="inline-flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className="h-2.5 w-2.5 text-[#e9c46a]"
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </span>
      </div>
      <p className="mt-5 text-[16px] font-semibold leading-snug">
        How did we do?
      </p>
      <p className="mt-1 text-[10.5px] leading-relaxed text-white/60">
        Scan to share your experience on Google. It takes less than a minute.
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="rounded-lg bg-white p-2 text-[#1c3a4a]">
          <QrMock className="h-14 w-14" />
        </div>
        <p className="text-[9px] leading-relaxed text-white/50">
          Point your camera
          <br />
          at the code
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            Your brand shouldn&apos;t stop
            <br className="hidden sm:block" />{" "}
            at the review request.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Most review asks look like an afterthought. Yours should look like
            an extension of your business.
          </p>
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:mt-16 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-[#eceae4] p-8">
              <p className="text-[13px] font-medium tracking-wide text-faint">
                THE USUAL APPROACH
              </p>
              <div className="flex flex-1 items-center py-10">
                <GenericPrintout />
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                A printout from the office computer. Easy to ignore, hard to
                follow, and it says nothing about your business.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-8 shadow-lift">
              <p className="text-[13px] font-medium tracking-wide text-accent-deep">
                THE FIVESTARKIT WAY
              </p>
              <div className="flex flex-1 items-center py-10">
                <BrandedCard />
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                Designed around your logo and colors, with one scannable code
                that goes straight to your review page.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
