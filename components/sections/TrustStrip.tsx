import { Palette, QrCode, Package, BadgeCheck } from "lucide-react";
import FadeIn from "../FadeIn";

const points = [
  { icon: Palette, label: "Custom branded" },
  { icon: QrCode, label: "Print-ready QR system" },
  { icon: Package, label: "Printed & shipped" },
  { icon: BadgeCheck, label: "No monthly fee" },
];

export default function TrustStrip() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn className="mx-auto max-w-6xl">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:py-10 lg:grid-cols-4">
          {points.map((point) => (
            <li
              key={point.label}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:text-left"
            >
              <point.icon
                className="h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-[15px] font-medium">{point.label}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
