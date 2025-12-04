import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, 
  Construction, 
  ShieldCheck, 
  HandHeart,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ScopeOfWorkSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Consultation & Planning",
      icon: <ClipboardCheck className="h-8 w-8 text-construction" />,
      color: "bg-construction/10 text-construction",
      steps: [
        "Site visit and comprehensive needs assessment",
        "Feasibility study and detailed cost estimation",
        "Preliminary design & premium materials selection",
        "Permits and regulatory approvals coordination"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Construction & Installation",
      icon: <Construction className="h-8 w-8 text-construction" />,
      color: "bg-construction-light/10 text-construction",
      steps: [
        "Professional demolition and site preparation",
        "Structural works (foundation, framing, walls)",
        "Electrical and mechanical rough-in (wiring, plumbing, HVAC)",
        "Insulation, drywall, flooring, and premium finishes"
      ]
    },
    {
      phase: "Phase 3",
      title: "Quality & Safety",
      icon: <ShieldCheck className="h-8 w-8 text-construction" />,
      color: "bg-secondary/10 text-construction",
      steps: [
        "Comprehensive testing and commissioning of all systems",
        "Full compliance verification with local building codes",
        "Electrical, plumbing, mechanical, and fire safety inspections",
        "Detailed client walkthrough and quality assurance review"
      ]
    },
    {
      phase: "Phase 4",
      title: "Handover & Support", 
      icon: <HandHeart className="h-8 w-8 text-construction" />,
      color: "bg-accent/10 text-construction",
      steps: [
        "Professional final cleaning and project presentation",
        "Complete warranty documentation and maintenance guides",
        "Post-construction support and maintenance options",
        "Client satisfaction follow-up and relationship building"
      ]
    }
  ];

  return (
    <section id="scope" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-construction">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final handover, our comprehensive four-phase approach 
            ensures every project is delivered with precision, quality, and complete client satisfaction.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-construction via-construction-light to-construction-dark rounded-full opacity-20"></div>
          
          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-construction rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="group hover:shadow-elegant smooth-transition bg-card border-border">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${phase.color} group-hover:scale-110 smooth-transition`}>
                          {phase.icon}
                        </div>
                        <div>
                          <Badge className="mb-2 bg-construction hover:bg-construction-dark">
                            {phase.phase}
                          </Badge>
                          <CardTitle className="font-heading text-2xl mb-0">
                            {phase.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-construction flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 flex items-center text-construction font-medium text-sm group-hover:translate-x-2 smooth-transition">
                        <span>Learn more about this phase</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA 
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Ready to Start Your Project Journey?
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Experience our proven process that has delivered exceptional results for over 500 satisfied clients across Ontario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-construction hover:bg-gray-100 font-semibold rounded-md smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-construction font-semibold rounded-md smooth-transition"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
*/}
      </div>
    </section>
  );
};

export default ScopeOfWorkSection;