import {
  Stethoscope,
  Sparkles,
  Scissors,
  Car,
  Wrench,
  PawPrint,
  Dumbbell,
  UtensilsCrossed,
} from "lucide-react";
import FadeIn from "../FadeIn";

const categories = [
  { icon: Stethoscope, label: "Dentists" },
  { icon: Sparkles, label: "Med Spas" },
  { icon: Scissors, label: "Salons" },
  { icon: Car, label: "Auto Shops" },
  { icon: Wrench, label: "Home Services" },
  { icon: PawPrint, label: "Veterinarians" },
  { icon: Dumbbell, label: "Fitness Studios" },
  { icon: UtensilsCrossed, label: "Restaurants" },
];

export default function WhoItsFor() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            Built for local businesses
            <br className="hidden sm:block" />{" "}
            <span className="text-muted">that live on reputation.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 sm:mt-14">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((category) => (
              <li key={category.label}>
                <div className="flex items-center gap-3 rounded-xl border border-line bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-faint">
                  <category.icon
                    className="h-[18px] w-[18px] shrink-0 text-muted"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-[15px] font-medium">
                    {category.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-8 text-center text-[15px] text-faint">
            And any other business your neighbors search for on Google.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
