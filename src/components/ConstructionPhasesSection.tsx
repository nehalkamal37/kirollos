import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import phaseFoundation from "@/assets/phase-foundation.jpg";
import phaseFraming from "@/assets/phase-framing.jpg";
import phaseRoughin from "@/assets/phase-roughin.jpg";
import phaseExterior from "@/assets/phase-exterior.jpg";
import phaseInterior from "@/assets/phase-interior.jpg";
import phaseComplete from "@/assets/phase-complete.jpg";

const ConstructionPhasesSection = () => {
  const phases = [
    {
      number: "01",
      title: "Foundation & Excavation",
      description: "Site preparation, excavation, and concrete foundation pouring to ensure structural integrity.",
      image: phaseFoundation,
      duration: "2-3 weeks"
    },
    {
      number: "02",
      title: "Framing & Structure",
      description: "Building the skeleton of the house with wooden or steel framing, walls, and roof structure.",
      image: phaseFraming,
      duration: "3-4 weeks"
    },
    {
      number: "03",
      title: "Rough-In (Electrical & Mechanical)",
      description: "Installing electrical wiring, plumbing pipes, HVAC ducts, and other essential systems.",
      image: phaseRoughin,
      duration: "2-3 weeks"
    },
    {
      number: "04",
      title: "Exterior Finishing",
      description: "Roofing, siding, windows, doors, and exterior cladding to protect and beautify the structure.",
      image: phaseExterior,
      duration: "3-4 weeks"
    },
    {
      number: "05",
      title: "Interior Finishing",
      description: "Drywall installation, painting, flooring, cabinetry, and interior trim work.",
      image: phaseInterior,
      duration: "4-5 weeks"
    },
    {
      number: "06",
      title: "Final Completion",
      description: "Final touches, landscaping, inspections, and handover to proud homeowners.",
      image: phaseComplete,
      duration: "1-2 weeks"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Your <span className="text-construction">Dream Home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From foundation to completion - watch the journey unfold through six key phases.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {phases.map((phase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant smooth-transition overflow-hidden bg-card border-border"
            >
              {/* Phase Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={phase.image} 
                  alt={phase.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="text-xs px-2 py-1 bg-construction hover:bg-construction-dark font-bold">
                    {phase.number}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-medium">⏱️ {phase.duration}</p>
                </div>
              </div>

              {/* Phase Content */}
              <CardContent className="p-3">
                <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                  {phase.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                  {phase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8 p-4 bg-gradient-subtle rounded-xl">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            <strong className="text-construction">Every project tells a story.</strong> We're with you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConstructionPhasesSection;