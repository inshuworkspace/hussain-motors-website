import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/site";

/**
 * Floating WhatsApp shortcut. Always visible on mobile; appears after a
 * short scroll on desktop where the header CTA already covers it.
 */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BUSINESS.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hussain Motors on WhatsApp"
      className={cn(
        "fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_-8px_var(--gold)] transition-all duration-300 sm:right-6 sm:bottom-6",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Book on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
