import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { HowItWorks } from "@/components/HowItWorks";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hussain Motors & Rent A Car: Premium Car Rental in Lahore",
      },
      {
        name: "description",
        content:
          "Premium car rental in Lahore offering self drive and driver options, corporate rentals and cars for weddings and special occasions. Well maintained vehicles and easy WhatsApp booking.",
      },
      {
        property: "og:title",
        content: "Hussain Motors & Rent A Car: Premium Car Rental in Lahore",
      },
      {
        property: "og:description",
        content:
          "Premium cars, reliable service and easy booking. Car rental in Lahore for personal, business and special occasions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Services />
        <WhyUs />
        <About />
        <Gallery />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
