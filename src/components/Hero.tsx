import { MessageCircle, ChevronDown, MapPin, Phone } from "lucide-react";
import { BUSINESS, HERO_IMAGE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          className="hero-image-animate h-full w-full object-cover object-[70%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,oklch(0.8_0.115_87/8%),transparent_35%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        {/* Location Badge */}
        <div className="hero-badge-animate">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Premium Car Rental in Lahore
          </p>
        </div>

        {/* Main Content */}
        <div className="hero-content-animate">
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Premium Cars.{" "}
            <span className="gold-text">Reliable Service.</span>{" "}
            Easy Booking.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Comfortable and reliable car rental services in Lahore for
            personal, business and special occasions.
          </p>
        </div>

        {/* Buttons */}
        <div className="hero-buttons-animate mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#cars"
            className="premium-button inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_-10px_var(--gold)]"
          >
            View Our Cars
          </a>

          <a
            href={BUSINESS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button inline-flex items-center justify-center gap-2 rounded-full border border-border bg-foreground/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-primary/60 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book on WhatsApp
          </a>

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 px-7 py-3.5 text-sm font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          <span>Serving Lahore</span>

          <span className="text-primary" aria-hidden="true">
            •
          </span>

          <span>Easy Booking</span>

          <span className="text-primary" aria-hidden="true">
            •
          </span>

          <span>Professional Service</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#cars"
        aria-label="Scroll down to our cars"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary sm:block"
      >
        <ChevronDown
          className="h-6 w-6 animate-bounce"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}