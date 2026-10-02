import { ShieldCheck, MessageSquareText, CalendarRange, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Well Maintained Vehicles",
    description: "Clean, serviced cars that are ready for the road.",
  },
  {
    icon: MessageSquareText,
    title: "Easy Booking",
    description: "Reserve your car in minutes, directly on WhatsApp or by phone.",
  },
  {
    icon: CalendarRange,
    title: "Flexible Rental Options",
    description: "Daily, weekly and monthly rentals to suit your plans.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focused Service",
    description: "Friendly, personal support before and during your rental.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Hussain Motors Standard"
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90} className="text-center sm:text-left">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <benefit.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
