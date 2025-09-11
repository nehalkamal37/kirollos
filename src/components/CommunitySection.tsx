import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Users, Home } from "lucide-react";
import communityImage from "@/assets/community-impact.jpg";

const CommunitySection = () => {
  const initiatives = [
    {
      icon: <Home className="h-8 w-8 text-construction" />,
      title: "Habitat for Humanity",
      description: "Building homes for families in need throughout the Greater Toronto Area"
    },
    {
      icon: <HandHeart className="h-8 w-8 text-construction" />,
      title: "Senior Home Repairs",
      description: "Free safety repairs and accessibility improvements for elderly community members"
    },
    {
      icon: <Users className="h-8 w-8 text-construction" />,
      title: "Youth Training Programs",
      description: "Teaching construction skills to young people and providing career opportunities"
    }
  ];

  return (
    <section id="community" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={communityImage}
                alt="Kirollos Developing Inc. team volunteering for community construction projects and charity work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-construction text-white px-4 py-2 rounded-full font-semibold">
                Community Champions
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Building <span className="text-construction">Communities</span>,
                <br />Not Just Structures
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Corporate Social Responsibility in Action
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                At Kirollos Developing Inc., we believe that true success is measured not just by the 
                quality of our work, but by the positive impact we make in our community.
              </p>
              
              <p>
                Our commitment to <strong className="text-construction">corporate social responsibility</strong> 
                goes beyond business. We actively participate in charitable construction projects, 
                volunteer our expertise for community initiatives, and support local families in need.
              </p>
            </div>

            <blockquote className="border-l-4 border-construction pl-6 italic text-lg text-muted-foreground">
              "Every nail we hammer, every wall we build for charity, strengthens the foundation 
              of our entire community." - Albert Meleka
            </blockquote>

            {/* Community Initiatives */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-semibold flex items-center gap-2">
                <Heart className="h-5 w-5 text-construction" />
                Our Community Initiatives
              </h3>
              
              <div className="space-y-3">
                {initiatives.map((initiative, index) => (
                  <Card key={index} className="border-l-4 border-l-construction bg-gradient-card">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {initiative.icon}
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {initiative.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {initiative.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button 
                className="bg-construction hover:bg-construction-dark text-white font-semibold"
                size="lg"
              >
                Join Our Community Efforts
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-gradient-card">
            <div className="font-heading text-3xl font-bold text-construction mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Homes Built for Charity</div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-card">
            <div className="font-heading text-3xl font-bold text-construction mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Volunteer Hours</div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-card">
            <div className="font-heading text-3xl font-bold text-construction mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Youth Trained</div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-card">
            <div className="font-heading text-3xl font-bold text-construction mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Families Helped</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;