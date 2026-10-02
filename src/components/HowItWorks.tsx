import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/site";
import { MessageCircle } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Browse our range of sedans and SUVs and pick the one that suits your trip.",
  },
  {
    number: "02",
    title: "Contact Us",
    description:
      "Message us on WhatsApp or call to check availability and get a quote.",
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    description:
      "Confirm the details, and your car will be ready when and where you need it.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works"
          description="Three easy steps between you and the road."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 120}
              className="relative text-center sm:px-4"
            >
              {i < STEPS.length - 1 && (
                <div
                  className="gold-rule absolute top-8 left-[calc(50%+3.5rem)] hidden w-[calc(100%-5rem)] sm:block"
                  aria-hidden="true"
                />
              )}
              <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-card font-display text-lg font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 text-center">
          <a
            href={BUSINESS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_-10px_var(--gold)] transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Start on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
