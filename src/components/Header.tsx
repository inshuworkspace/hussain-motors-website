import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, CarFront } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Cars", href: "#cars" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={`${BUSINESS.name} home`}>
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

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_var(--gold)] transition-all hover:brightness-110 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-background/95 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-3.5 text-base font-medium text-foreground/90 transition-colors last:border-0 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
