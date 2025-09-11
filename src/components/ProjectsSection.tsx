import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useCallback } from "react";

const ProjectsSection = () => {
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

  // Build a flat list of images (Before/After)
  const gallery = projects.flatMap(p => ([
    { key: `${p.id}-before`, src: p.beforeImage, tag: "Before", title: p.title },
    { key: `${p.id}-after`,  src: p.afterImage,  tag: "After",  title: p.title }
  ]));

  // Carousel logic (arrow buttons scroll by "one viewport" of visible cards)
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollByViewport = useCallback((dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;

    const firstItem = el.querySelector<HTMLDivElement>('[data-slide="true"]');
    if (!firstItem) return;

    const gap = 16; // gap-4
    const cardWidth = firstItem.offsetWidth + gap;
    const viewportCount = Math.max(1, Math.floor(el.clientWidth / cardWidth));
    const delta = cardWidth * viewportCount * (dir === "next" ? 1 : -1);

    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every project tells a story of transformation, excellence, and dreams brought to life. 
            Discover how we've helped homeowners across Markham create spaces they love.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-elegant smooth-transition bg-card border-border">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative">
                      <img
                        src={project.beforeImage}
                        alt={`${project.title} - Before`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src={project.afterImage}
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                
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

        {/* ===========================
            Arrow Carousel (4 visible)
            =========================== */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Project Gallery
            </h3>
            <p className="text-sm text-muted-foreground">Use arrows to browse</p>
          </div>

          <div className="relative">
            {/* Arrows */}
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

            {/* Track */}
            <div
              ref={trackRef}
              className={`
                flex gap-4 overflow-x-auto scroll-smooth px-2 py-2 rounded-xl bg-card ring-1 ring-border
                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              `}
              role="list"
              aria-label="Project gallery"
            >
              {gallery.map((img) => (
                <figure
                  key={img.key}
                  role="listitem"
                  data-slide="true"
                  className={`
                    group relative flex-none
                    basis-[80%] sm:basis-[50%] md:basis-[33.333%] lg:basis-[25%] 
                    rounded-2xl overflow-hidden
                    shadow-[0_10px_25px_-10px_rgba(0,0,0,0.35)]
                    ring-1 ring-border
                    bg-background
                    perspective-[1200px]
                  `}
                >
                  <div
                    className={`
                      relative h-48 w-full
                      transition-transform duration-500 ease-out transform-gpu
                      group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-4px)]
                    `}
                  >
                    <img
                      src={img.src}
                      alt={`${img.title} — ${img.tag}`}
                      className="h-full w-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                    {/* subtle inner highlight for 3D pop */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />
                  </div>

                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-sm text-white px-3 py-2 text-sm flex items-center justify-between">
                    <span className="font-medium line-clamp-1">{img.title}</span>
                    <span className="ml-3 inline-flex items-center rounded-md bg-white/15 px-2 py-0.5 text-[11px] uppercase tracking-wide">
                      {img.tag}
                    </span>
                  </figcaption>

                  {/* outer glow for "protruding" look */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl shadow-[0_20px_35px_-15px_rgba(0,0,0,0.45)]" />
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
    </section>
  );
};

export default ProjectsSection;
