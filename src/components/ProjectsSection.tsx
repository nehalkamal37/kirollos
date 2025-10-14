import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useRef, useCallback, useMemo, useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryItem = { key: string; src: string; title: string };

const ProjectsSection = () => {
  // ===== Projects =====
  const projects = [
    {
      id: 1,
      title: "Elegant Staircase Transformation",
      category: "Renovation",
      description:
        "A complete redesign blending natural wood tones with sleek black iron balusters — where timeless craftsmanship meets modern charm.",
      beforeImage: "3/a11.jpg",
      afterImage: "3/a2.jpg",
      testimonial: "Every step reflects a touch of excellence.",
    },
    {
  id: 2,
  title: "Luxury Bathroom Renovation",
  category: "Renovation",
  description:
    "Modern bathroom upgrade featuring a sleek rainfall shower panel, ambient LED lighting, and a clean tile finish for a spa-like experience.",
  beforeImage: "3/b1.jpg",
  afterImage: "3/b2.jpg",
  testimonial: "Where everyday comfort meets modern luxury.",
},


    {
  id: 3,
  title: "Front Entrance Renovation",
  category: "Construction",
  description:
    "Beautifully rebuilt front steps with durable stone tiles, combining safety, strength, and modern design for a welcoming entrance.",
  beforeImage: "3/c1.jpg",
  afterImage: "3/c2.jpg",
  testimonial: "Every step built to impress and endure.",
},

    {
      id: 4,
      title: "Backyard Deck Refinishing",
      category: "Outdoor Renovation",
      description:
        "Rejuvenated wood deck with premium stain and seal for long-lasting color and protection.",
      beforeImage: "before/1.jpg",
      afterImage: "before/2.jpg",
      testimonial: "Revive, protect, enjoy.",
    },
    {
      id: 5,
      title: "Garden Walkway Refresh",
      category: "Landscaping",
      description:
        "Re-set uneven pavers, added edge restraint, and re-sanded joints for a smooth, safe path.",
      beforeImage: "before/bas1.jpg",
      afterImage: "before/bas2.jpg",
      testimonial: "Smooth walk, tidy borders.",
    },
    {
      id: 6,
      title: "Deck & Outdoor Upgrade",
      category: "Renovation",
      description:
        "Elegant wooden deck renovation with fresh paint, durable railing, and modern lattice design.",
      beforeImage: "before/last1.jpg",
      afterImage: "before/last2.jpg",
      testimonial: "Bringing new life to your outdoor living space.",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Construction":
        return "bg-construction text-white";
      case "Electrical":
        return "bg-construction text-white";
      case "Mechanical":
        return "bg-secondary text-foreground";
      case "Renovation":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  // ===== Gallery items =====
  const gallery: GalleryItem[] = useMemo(
    () => [
      { key: "g1", src: "/new/2.jpg", title: "Modern Kitchen Renovation" },
      { key: "g2", src: "/new/6.jpg", title: "Residential Electrical Upgrade" },
      { key: "g3", src: "/new/3.jpg", title: "Exterior Home Renovation" },
      { key: "g4", src: "/new/5.jpg", title: "HVAC System Installation" },
      { key: "g5", src: "/new/4.jpg", title: "Basement Finishing" },
      { key: "g6", src: "/new/1.jpg", title: "Bathroom Modernization" },
    ],
    []
  );

  // ===== Lightbox State (dynamic items per source) =====
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxLabel, setLightboxLabel] = useState<"gallery" | "project">(
    "gallery"
  );

  const openGalleryAt = (index: number) => {
    setLightboxItems(gallery);
    setLightboxLabel("gallery");
    setActiveIndex(index);
    setIsOpen(true);
  };

  const openProjectAt = (projectIndex: number) => {
    const p = projects[projectIndex];
    const pair: GalleryItem[] = [
      {
        key: `p-${p.id}-before`,
        src: p.beforeImage,
        title: `${p.title} (Before)`,
      },
      {
        key: `p-${p.id}-after`,
        src: p.afterImage,
        title: `${p.title} (After)`,
      },
    ];
    setLightboxItems(pair);
    setLightboxLabel("project");
    setActiveIndex(0); // Start on "Before"
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
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  // ===== Carousel for gallery =====
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
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className="group hover:shadow-elegant smooth-transition bg-card border-border"
            >
              <CardContent className="p-0">
                {/* Clickable Before/After Block */}
                <button
                  type="button"
                  onClick={() => openProjectAt(idx)}
                  aria-label={`${project.title} preview (open)`}
                  className="relative block w-full overflow-hidden rounded-t-lg"
                >
                  <div className="relative grid grid-cols-2 gap-1 w-full h-60 bg-black/5">
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} before`}
                      className="h-full w-full object-cover select-none"
                      loading="lazy"
                      draggable={false}
                    />
                    <img
                      src={project.afterImage}
                      alt={`${project.title} after`}
                      className="h-full w-full object-cover select-none"
                      loading="lazy"
                      draggable={false}
                    />

                    <span className="absolute left-2 top-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                      Before
                    </span>
                    <span className="absolute right-2 top-2 bg-green-700 text-white px-2 py-1 text-xs rounded">
                      After
                    </span>
                  </div>
                </button>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </Badge>
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
          ))}
        </div>

        {/* ===== Project Gallery (bottom) ===== */}
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
          <p className="text-2xl font-heading text-foreground mb-8">
            Ready to start your transformation story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-construction hover:bg-construction-dark text-white font-semibold rounded-md smooth-transition shadow-construction hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>

      {/* ===== Lightbox Dialog ===== */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-5xl p-0 border-0 bg-transparent shadow-none"
          aria-label={lightboxItems[activeIndex]?.title ?? "Gallery image"}
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
              disabled={lightboxItems.length === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md ring-1 ring-border hover:bg-background shadow-md transition"
              disabled={lightboxItems.length === 0}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <figure className="relative">
              {lightboxItems[activeIndex]?.src && (
                <img
                  src={lightboxItems[activeIndex].src}
                  alt={lightboxItems[activeIndex].title}
                  className="w-full h-[70vh] object-contain rounded-lg bg-black/5"
                  draggable={false}
                />
              )}
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                <span className="font-medium">
                  {lightboxItems[activeIndex]?.title ?? ""}
                </span>
                {lightboxItems.length > 0 && (
                  <>
                    <span className="mx-2">•</span>
                    {activeIndex + 1} / {lightboxItems.length}
                    <span className="mx-2">•</span>
                    {lightboxLabel === "project" ? "Project" : "Gallery"}
                  </>
                )}
              </figcaption>
            </figure>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
