import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-[100svh]
        flex items-center justify-center overflow-hidden
        pt-20 md:pt-24
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional construction and renovation projects by Kirollos Developing Inc."
          className="
            w-full h-full object-cover
            object-[center_30%] sm:object-center  /* tighter top focus only on phones */
          "
        />

        {/* Stronger overlay on mobile for readability */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        {/* Softer overlay on tablets/desktop to let the image breathe */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mx-auto max-w-5xl lg:max-w-6xl">
       <h1
  className="
    font-heading font-extrabold
    mb-4 md:mb-6
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    leading-tight md:leading-[1.15]
    break-words
    drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)]
  "
>
  Complete Residential,
  
<h2> Construction & Renovation</h2>
  <span className="block text-construction-light">
    Electrical, Mechanical & Structural Solutions
  </span>
</h1>


          <p
            className="
              text-base sm:text-xl md:text-2xl
              mb-6 md:mb-8 text-gray-100
              max-w-[38rem] md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]
            "
          >
            Professional construction and renovation services that transform spaces and inspire lives.
            From concept to completion, we build with precision, passion, and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={() => (window.location.href = "#contact")}
              className="bg-construction hover:bg-construction-dark text-white font-semibold px-8 py-4 text-lg group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>

            <a href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="
                  border-2 border-white text-white bg-transparent
                  hover:bg-white hover:text-construction
                  font-semibold px-8 py-4 text-lg
                "
              >
                View Our Work
              </Button>
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-construction-light" />
              <span className="font-medium">647-287-5335</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-construction-light" />
              <span className="font-medium">magedmeleka@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
