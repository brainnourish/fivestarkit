import FadeIn from "../FadeIn";

const steps = [
  {
    number: "01",
    title: "Send us your business",
    body: "Provide your logo, business details, and Google listing. That's the extent of your homework.",
  },
  {
    number: "02",
    title: "We build your kit",
    body: "We design your branded materials and set up a QR code that links directly to your review page.",
  },
  {
    number: "03",
    title: "It arrives ready to use",
    body: "We print everything and ship it straight to your business. Open the box and put it to work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent-deep">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">
            You send us the basics.
            <br />
            <span className="text-muted">We handle everything else.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <p className="text-[13px] font-semibold tracking-[0.12em] text-faint">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
