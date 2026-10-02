import { KeyRound, UserCheck, Building2, PartyPopper } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const SERVICES = [
  {
    icon: KeyRound,
    title: "Self Drive Rental",
    description: "Flexible car rental options for your personal and business needs.",
  },
  {
    icon: UserCheck,
    title: "With Driver",
    description: "Professional driver service for a comfortable and convenient journey.",
  },
  {
    icon: Building2,
    title: "Corporate Rentals",
    description: "Reliable transportation solutions for businesses and corporate clients.",
  },
  {
    icon: PartyPopper,
    title: "Events & Special Occasions",
    description: "Premium vehicles for weddings, events and special occasions.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Rental Services"
          description="Choose the option that fits your journey. Every booking is handled personally over WhatsApp or by phone."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              as="article"
              key={service.title}
              delay={i * 90}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
