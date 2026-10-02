import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY_DETAIL_IMAGE, BUSINESS } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Your Trusted Car Rental Partner in Lahore"
            />
            <Reveal delay={120}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Hussain Motors & Rent A Car provides convenient car rental
                solutions across Lahore. Based on Raiwind Road at Talib Ganj
                Chowk, we focus on what matters most to our customers:
                reliable, well maintained vehicles, easy and direct
                communication, and a smooth rental experience from the first
                message to the final drop off.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you need a car for a day in the city, a business trip,
                or a special occasion, our team is ready to help you choose the
                right vehicle, with self drive and driver options available.
              </p>
              <a
                href={BUSINESS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Talk to Us on WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={GALLERY_DETAIL_IMAGE}
                alt="Close-up of a premium car headlight reflecting warm light at night"
                loading="lazy"
                width={1920}
                height={1280}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] border border-primary/15"
              aria-hidden="true"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
