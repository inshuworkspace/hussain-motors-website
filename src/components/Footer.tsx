import { MessageCircle, Phone, MapPin, CarFront } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Cars", href: "#cars" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Self Drive Rental",
  "With Driver",
  "Corporate Rentals",
  "Events & Special Occasions",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <CarFront className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase">
                  Hussain Motors
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.3em] text-primary uppercase">
                  Rent A Car
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium cars, reliable service and easy booking. Car rental in
              Lahore for personal, business and special occasions.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-xs font-semibold tracking-[0.22em] text-foreground uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-foreground uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-foreground uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed">{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
            </ul>
            <a
              href={BUSINESS.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Website redesign demo. Content shown is example material.
          </p>
        </div>
      </div>
    </footer>
  );
}
