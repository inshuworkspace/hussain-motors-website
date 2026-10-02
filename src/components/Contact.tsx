import { MessageCircle, Phone, Navigation, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Book Your Car Today"
          description="Message us on WhatsApp or give us a call. We reply quickly and personally."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Contact details + actions */}
          <Reveal className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-foreground">
              {BUSINESS.name}
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed">{BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={BUSINESS.phoneHref}
                  className="font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={BUSINESS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/60 hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/60 hover:text-primary"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </Reveal>

          {/* Location placeholder — no embed until the owner confirms the exact pin */}
          <Reveal delay={120} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex h-full flex-col">
              <h3 className="font-display text-xl font-bold text-foreground">
                Find Us in Lahore
              </h3>
              <div
                className="mt-6 flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-10 text-center"
                role="img"
                aria-label="Map placeholder showing the business location area"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  Raiwind Road, Talib Ganj Chowk
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Sher Shah Colony, Lahore
                </p>
                <p className="mt-4 text-[11px] tracking-wide text-muted-foreground/70 uppercase">
                  Google Maps embed goes here
                </p>
              </div>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
