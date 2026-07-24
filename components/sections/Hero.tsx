import { Star } from "lucide-react";
import FadeIn from "../FadeIn";
import QrMock from "../QrMock";

// Fictional example brand shown across the hero mockups to demonstrate
// what a customized kit looks like for a real local business.
const DEMO = {
  name: "Harbor Dental",
  ink: "#1c3a4a",
  soft: "#e8eef1",
};

function StarRow({ className, color }: { className?: string; color?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className ?? ""}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className="h-full w-auto"
          style={{ color: color ?? "var(--accent)" }}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </span>
  );
}

function ReviewCard({ className }: { className?: string }) {
  return (
    <div
      className={`w-[240px] rounded-xl bg-white p-5 shadow-deep ring-1 ring-black/5 sm:w-[270px] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-md text-[13px] font-bold text-white"
          style={{ background: DEMO.ink }}
        >
          H
        </span>
        <div>
          <p className="text-[13px] font-semibold leading-tight" style={{ color: DEMO.ink }}>
            {DEMO.name}
          </p>
          <p className="text-[10px] tracking-wide text-neutral-400">
            SEATTLE, WA
          </p>
        </div>
      </div>
      <p className="mt-4 text-[17px] font-semibold leading-snug" style={{ color: DEMO.ink }}>
        Enjoyed your visit?
      </p>
      <p className="mt-1 text-[11.5px] leading-relaxed text-neutral-500">
        Scan the code below to leave us a Google review. It takes less than a
        minute.
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div
          className="rounded-lg p-2.5"
          style={{ background: DEMO.soft, color: DEMO.ink }}
        >
          <QrMock className="h-[76px] w-[76px]" />
        </div>
        <div>
          <StarRow className="h-3" color={DEMO.ink} />
          <p className="mt-1.5 text-[10px] leading-snug text-neutral-400">
            Reviews help our
            <br />
            neighbors find us
          </p>
        </div>
      </div>
    </div>
  );
}

function PhoneMock({ className }: { className?: string }) {
  return (
    <div
      className={`w-[190px] rounded-[28px] bg-neutral-900 p-[7px] shadow-deep sm:w-[210px] ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[22px] bg-white">
        <div className="flex justify-center pt-2 pb-1.5">
          <span className="h-[14px] w-[64px] rounded-full bg-neutral-900" />
        </div>
        <div className="border-b border-neutral-100 px-4 pb-2.5">
          <p className="text-[8.5px] font-medium tracking-wide text-neutral-400">
            GOOGLE REVIEW
          </p>
          <p className="mt-0.5 text-[13px] font-semibold text-neutral-800">
            {DEMO.name}
          </p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-neutral-500">Rate your experience</p>
          <div className="mt-2 flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-[18px] w-[18px]"
                style={{ color: i < 4 ? "var(--accent)" : "#d4d4d4" }}
                fill={i < 4 ? "currentColor" : "none"}
                strokeWidth={i < 4 ? 0 : 1.5}
              />
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-neutral-200 p-2.5">
            <p className="text-[9px] text-neutral-400">
              Share details of your own experience at this place
            </p>
            <div className="mt-2 space-y-1.5">
              <span className="block h-1.5 w-full rounded bg-neutral-100" />
              <span className="block h-1.5 w-4/5 rounded bg-neutral-100" />
            </div>
          </div>
          <div className="mt-3 mb-1 flex justify-end">
            <span className="rounded-full bg-[#1a73e8] px-3.5 py-1.5 text-[9px] font-medium text-white">
              Post
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StickerMock({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full text-white shadow-float ring-4 ring-white ${className ?? ""}`}
      style={{ background: DEMO.ink }}
    >
      <QrMock className="h-11 w-11 text-white [--qr-bg:#1c3a4a]" />
      <p className="mt-1 text-[7px] font-semibold tracking-[0.14em]">
        SCAN TO REVIEW
      </p>
    </div>
  );
}

function SignMock({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-[150px] rounded-lg bg-white p-3.5 text-center shadow-lift ring-1 ring-black/5">
        <StarRow className="h-2 justify-center" color={DEMO.ink} />
        <p className="mt-1.5 text-[10px] font-semibold" style={{ color: DEMO.ink }}>
          Love your smile?
        </p>
        <p className="text-[7.5px] text-neutral-400">Tell others on Google</p>
        <div
          className="mx-auto mt-2 w-fit rounded-md p-1.5"
          style={{ background: DEMO.soft, color: DEMO.ink }}
        >
          <QrMock className="h-9 w-9" />
        </div>
      </div>
      <div className="mx-auto h-2 w-24 rounded-b-md bg-neutral-200" />
    </div>
  );
}

function KitBox({ className }: { className?: string }) {
  return (
    <div
      className={`w-[210px] rounded-xl bg-[#efece6] p-4 shadow-lift ring-1 ring-black/5 ${className ?? ""}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold tracking-tight text-foreground">
          FiveStarKit
        </p>
        <StarRow className="h-2" />
      </div>
      <p className="mt-1 text-[8px] tracking-[0.16em] text-faint">
        PREPARED FOR {DEMO.name.toUpperCase()}
      </p>
      <div className="mt-3 h-1.5 w-full rounded bg-[#e2ded6]" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface sm:rounded-3xl">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 50% 0%, rgba(255,255,255,0.8), transparent 70%)",
        }}
      />

      {/* Desktop and tablet flat-lay */}
      <div className="relative hidden h-[480px] sm:block lg:h-[540px]">
        <SignMock className="absolute left-[6%] top-1/2 -translate-y-[62%] rotate-[-4deg] lg:left-[10%]" />
        <KitBox className="absolute bottom-12 left-[16%] -rotate-2 lg:left-[22%] lg:bottom-14" />
        <ReviewCard className="absolute left-1/2 top-1/2 z-10 -translate-x-[55%] -translate-y-1/2 -rotate-2" />
        <StickerMock className="absolute right-[31%] top-8 z-20 rotate-6 lg:right-[30%] lg:top-10" />
        <PhoneMock className="absolute right-[4%] top-14 rotate-2 lg:right-[9%]" />
      </div>

      {/* Mobile composition: card front and center, phone tucked behind */}
      <div className="relative flex h-[430px] items-center justify-center sm:hidden">
        <PhoneMock className="absolute right-3 top-8 rotate-3 scale-[0.85]" />
        <ReviewCard className="absolute left-4 top-1/2 z-10 -translate-y-[45%] -rotate-2" />
        <StickerMock className="absolute bottom-6 right-6 z-20 rotate-6 scale-90" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-5 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
              More Google reviews.
              <br />
              <span className="text-muted">Made ridiculously simple.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              FiveStarKit gives your business a custom-branded review system,
              designed, printed, and delivered to your door.
            </p>
            <p className="mt-2 text-[15px] text-faint">
              No software. No setup headaches. Just scan and review.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="w-full rounded-xl bg-foreground px-7 py-3.5 text-center text-[15px] font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/85 sm:w-auto"
              >
                Get Your Kit · $299
              </a>
              <a
                href="#included"
                className="w-full rounded-xl border border-line bg-card px-7 py-3.5 text-center text-[15px] font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-faint sm:w-auto"
              >
                See What&apos;s Included
              </a>
            </div>
            <p className="mt-5 text-[13px] text-faint">
              One-time payment · Custom designed · Printing &amp; shipping
              included
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={28} className="mt-16 sm:mt-20">
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  );
}
