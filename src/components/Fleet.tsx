import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS, CARS } from "@/lib/site";

export function Fleet() {
  return (
    <section
      id="cars"
      aria-labelledby="cars-heading"
      className="section-divider py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Choose Your Ride"
          description="Well-kept vehicles for every occasion, from comfortable everyday sedans to spacious luxury SUVs."
        />

        {/* Demo Notice */}
        <Reveal delay={120} className="mt-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            Demo preview. Vehicles shown are examples. The actual fleet will
            be added by Hussain Motors.
          </p>
        </Reveal>

        {/* Fleet Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car, i) => (
            <Reveal
              as="article"
              key={car.name}
              delay={(i % 3) * 100}
              className="fleet-card group overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Car Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={car.image}
                  alt={car.alt}
                  loading="lazy"
                  width={1920}
                  height={1280}
                  className="fleet-card-image fleet-image-animate h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent opacity-70" />

                <span className="absolute top-3 right-3 rounded-full border border-border bg-background/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase backdrop-blur-md">
                  Demo
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {car.name}
                  </h3>

                  <ArrowRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {car.tagline}
                </p>

                <a
                  href={car.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Enquire on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}

          {/* Final CTA */}
          <Reveal
            delay={180}
            className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-primary/[0.04] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.07]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <MessageCircle
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
            </div>

            <h3 className="mt-5 font-display text-lg font-bold text-foreground">
              Looking for something else?
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ask us about availability for any vehicle in Lahore.
            </p>

            <a
              href={BUSINESS.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Ask on WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}