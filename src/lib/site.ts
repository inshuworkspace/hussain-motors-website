import hero from "@/assets/hero.jpg";
import carLandCruiser from "@/assets/car-land-cruiser.jpg";
import carCorolla from "@/assets/car-corolla.jpg";
import carGrande from "@/assets/car-grande.jpg";
import carFortuner from "@/assets/car-fortuner.jpg";
import carCivic from "@/assets/car-civic.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";

export const BUSINESS = {
  name: "Hussain Motors & Rent A Car",
  shortName: "Hussain Motors",
  address:
    "Raiwind Road, Talib Ganj Chowk, Sher Shah Colony, Lahore, Pakistan",
  phoneDisplay: "+92 306 7779233",
  phoneHref: "tel:+923067779233",
  whatsappUrl: "https://wa.me/923067779233",
  whatsappMessage:
    "https://wa.me/923067779233?text=" +
    encodeURIComponent(
      "Hello Hussain Motors & Rent A Car! I'd like to enquire about renting a car.",
    ),
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Raiwind Road, Talib Ganj Chowk, Sher Shah Colony, Lahore, Pakistan",
    ),
};

export const HERO_IMAGE = hero;
export const GALLERY_DETAIL_IMAGE = galleryDetail;

export type Car = {
  name: string;
  tagline: string;
  image: string;
  alt: string;
  whatsapp: string;
};

// DEMO FLEET — example vehicles for the redesign preview.
// The owner should replace these with their actual fleet and photos.
export const CARS: Car[] = [
  {
    name: "Toyota Land Cruiser",
    tagline: "Spacious luxury SUV for family travel and executive tours.",
    image: carLandCruiser,
    alt: "Black Toyota Land Cruiser luxury SUV in a dark studio",
    whatsapp:
      "https://wa.me/923067779233?text=" +
      encodeURIComponent("Hello! I'm interested in renting the Toyota Land Cruiser."),
  },
  {
    name: "Toyota Fortuner",
    tagline: "Bold SUV comfort for city runs and outstation trips.",
    image: carFortuner,
    alt: "Black Toyota Fortuner SUV in a dark studio",
    whatsapp:
      "https://wa.me/923067779233?text=" +
      encodeURIComponent("Hello! I'm interested in renting the Toyota Fortuner."),
  },
  {
    name: "Toyota Corolla Grande",
    tagline: "Sporty sedan style with everyday comfort for Lahore roads.",
    image: carGrande,
    alt: "White Toyota Corolla Grande sedan in a dark studio",
    whatsapp:
      "https://wa.me/923067779233?text=" +
      encodeURIComponent("Hello! I'm interested in renting the Toyota Corolla Grande."),
  },
  {
    name: "Toyota Corolla",
    tagline: "The dependable choice for daily, business and airport use.",
    image: carCorolla,
    alt: "Silver Toyota Corolla sedan in a dark studio",
    whatsapp:
      "https://wa.me/923067779233?text=" +
      encodeURIComponent("Hello! I'm interested in renting the Toyota Corolla."),
  },
  {
    name: "Honda Civic",
    tagline: "Sleek, modern sedan for a smooth and stylish ride.",
    image: carCivic,
    alt: "Grey Honda Civic sedan in a dark studio",
    whatsapp:
      "https://wa.me/923067779233?text=" +
      encodeURIComponent("Hello! I'm interested in renting the Honda Civic."),
  },
];

export const GALLERY_IMAGES = [
  { src: carLandCruiser, alt: "Black luxury SUV in a dark studio", tall: true },
  { src: galleryInterior, alt: "Premium leather car interior with ambient lighting", tall: false },
  { src: carGrande, alt: "White sporty sedan in a dark studio", tall: true },
  { src: galleryDetail, alt: "Close-up of a luxury car headlight at night", tall: false },
  { src: carCivic, alt: "Grey sedan in a dark studio", tall: true },
  { src: carCorolla, alt: "Silver sedan in a dark studio", tall: false },
];
