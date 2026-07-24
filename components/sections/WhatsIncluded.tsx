import {
  CreditCard,
  Sticker,
  Signpost,
  MonitorSmartphone,
  QrCode,
  Wand2,
} from "lucide-react";
import FadeIn from "../FadeIn";
import QrMock from "../QrMock";

function CardStackVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-44 w-64 sm:h-48 sm:w-72">
      <div className="absolute inset-x-5 top-8 h-36 rotate-[4deg] rounded-lg bg-[#e9e5dd] ring-1 ring-black/5 sm:h-40" />
      <div className="absolute inset-x-2.5 top-4 h-36 rotate-[2deg] rounded-lg bg-[#f0ede7] ring-1 ring-black/5 sm:h-40" />
      <div className="absolute inset-x-0 top-0 h-36 rounded-lg bg-white p-4 shadow-lift ring-1 ring-black/5 sm:h-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[#1c3a4a] text-[10px] font-bold text-white">
              H
            </span>
            <span className="block h-2 w-20 rounded bg-neutral-200" />
          </div>
          <span className="block h-4 w-4 rounded bg-accent-soft" />
        </div>
        <span className="mt-4 block h-2.5 w-32 rounded bg-neutral-300" />
        <span className="mt-2 block h-1.5 w-40 rounded bg-neutral-100" />
        <div className="mt-3.5 flex items-center gap-3">
          <div className="rounded-md bg-[#e8eef1] p-1.5 text-[#1c3a4a]">
            <QrMock className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-20 rounded bg-neutral-200" />
            <span className="block h-1.5 w-14 rounded bg-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function QrVisual() {
  return (
    <div aria-hidden="true" className="mt-5 flex justify-center">
      <div className="rounded-xl bg-foreground p-3 shadow-lift">
        <QrMock className="h-16 w-16 text-background [--qr-bg:var(--foreground)]" />
      </div>
    </div>
  );
}

const items = [
  {
    icon: CreditCard,
    title: "500 Custom Review Cards",
    body: "Professionally designed around your brand, ready to hand to every customer.",
    visual: <CardStackVisual />,
    className: "sm:col-span-2 lg:row-span-2",
    centerVisual: true,
  },
  {
    icon: Sticker,
    title: "QR Stickers",
    body: "For packaging, checkout areas, bags, and other customer touchpoints.",
  },
  {
    icon: Signpost,
    title: "Review Signage",
    body: "Clean branded signs customers can scan with their own phones.",
  },
  {
    icon: QrCode,
    title: "Direct Google Review QR",
    body: "One scan takes customers straight to your Google review flow. No searching, no typing.",
    visual: <QrVisual />,
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Review Assets",
    body: "Graphics sized for receipts, email, SMS, your website, and social media.",
  },
  {
    icon: Wand2,
    title: "Design + Setup",
    body: "We customize, test, print, and prepare everything before it ships.",
    className: "sm:col-span-2 lg:col-span-1",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            WHAT&apos;S INCLUDED
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            A complete review system,
            <br />
            <span className="text-muted">built around your brand.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 3) * 0.06} className={item.className}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <item.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {item.body}
                </p>
                {item.visual &&
                  (item.centerVisual ? (
                    <div className="flex flex-1 items-center justify-center py-8">
                      {item.visual}
                    </div>
                  ) : (
                    item.visual
                  ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
