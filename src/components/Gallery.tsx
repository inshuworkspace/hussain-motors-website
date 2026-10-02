import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/site";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="The Fleet, Up Close"
          description="A look at the kind of vehicles we offer. Photos are demo examples and can easily be swapped for the owner's own pictures."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((image, i) => (
            <Reveal
              key={image.src + i}
              delay={(i % 3) * 90}
              className="group overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1920}
                height={1280}
                className={
                  image.tall
                    ? "aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    : "aspect-[4/3] w-full self-center object-cover transition-transform duration-700 group-hover:scale-105"
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
