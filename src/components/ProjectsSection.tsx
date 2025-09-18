import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useRef, useCallback, useMemo, useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryItem = { key: string; src: string; title: string };
type LightboxSource = "gallery" | "projects";

const ProjectsSection = () => {
  // ===== Projects (تفضل زي ما هي) =====
  const projects = [
    { id: 1, title: "Modern Kitchen Renovation", category: "Renovation", description: "Complete kitchen transformation with modern appliances and elegant design.", beforeImage: "/k1.jpg", afterImage: "/k2.jpg", testimonial: "Every brick tells a story of excellence." },
    { id: 2, title: "Residential Electrical Upgrade", category: "Electrical", description: "Full electrical system modernization for enhanced safety and efficiency.", beforeImage: "/e1.jpg", afterImage: "/e2.jpg", testimonial: "Powering dreams with precision." },
    { id: 3, title: "Exterior Home Renovation", category: "Construction", description: "Stunning exterior makeover enhancing curb appeal and structural integrity.", beforeImage: "/h1.jpg", afterImage: "/h2.jpg", testimonial: "Strength that lasts generations." },
    { id: 4, title: "HVAC System Installation", category: "Mechanical", description: "Complete heating and cooling system installation for year-round comfort.", beforeImage: "/b1.jpg", afterImage: "/b2.jpg", testimonial: "Comfort, safety, and efficiency delivered." },
    { id: 5, title: "Basement Finishing", category: "Construction", description: "Transform unused space into a beautiful, functional living area.", beforeImage: "/m1.jpg", afterImage: "/m2.jpg", testimonial: "From concept to completion, dreams realized." },
    { id: 6, title: "Bathroom Modernization", category: "Renovation", description: "Luxury bathroom renovation with premium fixtures and elegant finishes.", beforeImage: "/s1.jpg", afterImage: "/s2.jpg", testimonial: "Every detail crafted with passion." }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Construction": return "bg-construction text-white";
      case "Electrical": return "bg-construction-light text-construction";
      case "Mechanical": return "bg-secondary text-foreground";
      case "Renovation": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const heroFor = (p: (typeof projects)[number]) => p.afterImage || p.beforeImage;

  // ===== Project lightbox items (من نفس projects) =====
  const projectItems: GalleryItem[] = useMemo(
    () => projects.map((p) => ({ key: `p-${p.id}`, src: heroFor(p), title: p.title })),
    [projects]
  );

  // ===== Gallery items (من /public/new فقط) =====
 
  const gallery: GalleryItem[] = useMemo(
    () => [
      { key: "g1", src: "/new/2.jpg", title: "Modern Kitchen Renovation" },
      { key: "g2", src: "/new/6.jpg", title: "Residential Electrical Upgrade" },
      { key: "g3", src: "/new/3.jpg", title: "Exterior Home Renovation" },
      { key: "g4", src: "/new/5.jpg", title: "HVAC System Installation" },
            { key: "g5", src: "/new/4.jpg", title: "Basement Finishing" },
      { key: "g6", src: "/new/1.jpg", title: "Bathroom Modernization" },

      // زوّد باقي الصور بنفس الشكل
    ],
    []
  );


  // ===== Lightbox State (موحّد للمجموعتين) =====
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxSource, setLightboxSource] = useState<LightboxSource>("gallery");

  const lightboxItems = lightboxSource === "gallery" ? gallery : projectItems;

  const openGalleryAt = (index: number) => {
    setLightboxSource("gallery");
    setActiveIndex(index);
    setIsOpen(true);
  };

  const openProjectAt = (index: number) => {
    setLightboxSource("projects");
    setActiveIndex(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % lightboxItems.length),
    [lightboxItems.length]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + lightboxItems.length) % lightboxItems.length),
    [lightboxItems.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "Escape")     close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  // ===== Carousel (لـ /new gallery) =====
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollByViewport = useCallback((dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const firstItem = el.querySelector<HTMLDivElement>('[data-slide="true"]');
    if (!firstItem) return;
    const gap = 16;
    const cardWidth = firstItem.offsetWidth + gap;
    const viewportCount = Math.max(1, Math.floor(el.clientWidth / cardWidth));
    const delta = cardWidth * viewportCount * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Projects ===== */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every project tells a story of transformation, excellence, and dreams brought to life. 
            Discover how we've helped homeowners across Markham create spaces they love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const hero = heroFor(project);
            return (
              <Card key={project.id} className="group hover:shadow-elegant smooth-transition bg-card border-border">
                <CardContent className="p-0">
                  {/* خلّي صورة الكارد clickable وتفتح المودال الخاص بالـ projects */}
                  <button
                    type="button"
                    onClick={() => openProjectAt(idx)}
                    aria-label={`${project.title} preview (open)`}
                    className="relative block w-full overflow-hidden rounded-t-lg"
                  >
                    <div className="relative w-full aspect-video bg-black/5">
                      <img
                        src={hero}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 h-full w-full object-contain select-none"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </button>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`text-xs ${getCategoryColor(project.category)}`}>{project.category}</Badge>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <blockquote className="border-l-4 border-construction pl-4 italic text-construction font-medium">
                      "{project.testimonial}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ===== Project Gallery (from /public/new) ===== */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Project Gallery
            </h3>
            <p className="text-sm text-muted-foreground">Use arrows to browse</p>
          </div>

          <div className="relative">
            <button
              aria-label="Previous"
              onClick={() => scrollByViewport("prev")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md ring-1 ring-border hover:bg-background shadow-md transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByViewport("next")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md ring-1 ring-border hover:bg-background shadow-md transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={trackRef}
              className={`flex gap-4 overflow-x-auto scroll-smooth px-2 py-2 rounded-xl bg-card ring-1 ring-border
                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
              role="list"
              aria-label="Project gallery"
            >
              {gallery.map((img, index) => (
                <figure
                  key={img.key}
                  role="listitem"
                  data-slide="true"
                  className="group relative flex-none
                    basis-[80%] sm:basis-[50%] md:basis-[33.333%] lg:basis-[25%]
                    rounded-2xl overflow-hidden ring-1 ring-border bg-background cursor-zoom-in"
                >
                  <button
                    type="button"
                    onClick={() => openGalleryAt(index)}
                    className="block w-full h-full text-left"
                    aria-label={`Open ${img.title}`}
                  >
                    <div className="relative h-48 w-full bg-black/5">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="h-full w-full object-contain select-none"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>

                    <figcaption className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-sm text-white px-3 py-2 text-sm">
                      <span className="font-medium line-clamp-1">{img.title}</span>
                    </figcaption>
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl font-heading text-foreground mb-8">Ready to start your transformation story?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-construction hover:bg-construction-dark text-white font-semibold rounded-md smooth-transition shadow-construction hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>

      {/* ===== Lightbox Dialog (موحّد) ===== */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-5xl p-0 border-0 bg-transparent shadow-none"
          aria-label={
            lightboxItems[activeIndex]
              ? `${lightboxItems[activeIndex].title}`
              : "Gallery image"
          }
        >
          <div className="relative w-full">
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-2 top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-md ring-1 ring-border hover:bg-background shadow-md transition"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md ring-1 ring-border hover:bg-background shadow-md transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md ring-1 ring-border hover:bg-background shadow-md transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <figure className="relative">
              <img
                src={lightboxItems[activeIndex]?.src}
                alt={lightboxItems[activeIndex]?.title || "Gallery image"}
                className="w-full h-[70vh] object-contain rounded-lg bg-black/5"
                draggable={false}
              />
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                <span className="font-medium">{lightboxItems[activeIndex]?.title}</span>
                <span className="mx-2">•</span>
                {activeIndex + 1} / {lightboxItems.length}
                <span className="mx-2">•</span>
                {lightboxSource === "projects" ? "Projects" : "Gallery"}
              </figcaption>
            </figure>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
