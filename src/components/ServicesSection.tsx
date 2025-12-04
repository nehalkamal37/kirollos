import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hammer, 
  Zap, 
  Wrench, 
  Home, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-construction" />,
      title: "Construction & Renovation",
      tagline: "From concept to completion",
      description: "Complete home and commercial renovations, additions, and new construction projects.",
      features: [
        "Kitchen & Bathroom Remodeling",
        "Home Additions & Extensions", 
        "Basement Finishing",
        "Commercial Renovations"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-construction" />,
      title: "Electrical Works",
      tagline: "Powering homes with precision",
      description: "Professional electrical installation, repair, and upgrade services for residential and commercial properties.",
      features: [
        "Electrical Panel Upgrades",
        "Wiring & Rewiring",
        "Lighting Installation",
        "Electrical Safety Inspections"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-construction" />,
      title: "Mechanical Works",
      tagline: "Comfort, safety, and efficiency",
      description: "HVAC installation, plumbing services, and mechanical system maintenance for optimal performance.",
      features: [
        "HVAC Installation & Repair",
        "Plumbing Services", 
        "Water Heater Installation",
        "Ventilation Systems"
      ]
    },
    {
      icon: <Hammer className="h-12 w-12 text-construction" />,
      title: "Exterior Works", 
      tagline: "Strength that lasts generations",
      description: "Roofing, siding, landscaping, and outdoor construction projects built to withstand the elements.",
      features: [
        "Roofing & Roof Repairs",
        "Siding & Exterior Cladding",
        "Decks & Patios",
        "Landscaping & Hardscaping"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-construction">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and renovation services delivered with French sophistication 
            and developer-level precision. Every project is a masterpiece in the making.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="card-elevated hover-lift border-0 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-construction/10 group-hover:bg-construction/20 smooth-transition">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl mb-1">
                      {service.title}
                    </CardTitle>
                    <p className="text-construction font-medium italic">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-construction flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="group border-construction text-construction hover:bg-construction hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Get a free consultation and quote for your next construction or renovation project.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-construction hover:bg-gray-100 font-semibold px-8"
          >
            Get Free Quote
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default ServicesSection;