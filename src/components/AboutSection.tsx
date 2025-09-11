import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-construction" />,
      number: "15+",
      title: "Years Experience",
      description: "Proven track record of excellence"
    },
    {
      icon: <Users className="h-8 w-8 text-construction" />,
      number: "500+",
      title: "Projects Completed",
      description: "Satisfied clients across Ontario"
    },
    {
      icon: <Clock className="h-8 w-8 text-construction" />,
      number: "98%",
      title: "On-Time Delivery",
      description: "Reliable and efficient service"
    },
    {
      icon: <Shield className="h-8 w-8 text-construction" />,
      number: "100%",
      title: "Safety Certified",
      description: "Fully licensed and insured"
    }
  ];

  return (
    <section id="about" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Meet <span className="text-construction">M. Albert Meleka</span>
              </h2>
              <h3 className="text-xl text-muted-foreground mb-6">Founder & Lead Contractor</h3>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                With over 15 years of experience in construction and renovation, Albert Meleka founded 
                Kirollos Developing Inc. with a simple yet powerful vision: to transform spaces while 
                strengthening the communities we serve.
              </p>
              
              <p>
                Our company stands on three pillars: <strong className="text-construction">Excellence</strong> in 
                craftsmanship, <strong className="text-construction">Integrity</strong> in every interaction, 
                and <strong className="text-construction">Community</strong> commitment that goes beyond business.
              </p>

              <p>
                From residential renovations to commercial construction, we approach every project with 
                the same dedication to quality, safety, and client satisfaction that has made us a trusted 
                name in Markham and throughout Ontario.
              </p>
            </div>

            <blockquote className="border-l-4 border-construction pl-6 italic text-lg text-muted-foreground">
              "Every project is an opportunity to create something extraordinary while giving back to the 
              community that supports us." - Albert Meleka
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src="/logo.png"
                alt="M. Albert Meleka and the professional team at Kirollos Developing Inc."
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 " />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-elevated hover-lift border-0">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <div className="font-heading text-3xl font-bold text-construction mb-2">
                  {achievement.number}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {achievement.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;