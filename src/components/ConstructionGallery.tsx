import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample construction process images (you can replace with your 30+ actual images)
const constructionImages = [
  { id: 1, phase: "Site Preparation", image: "gallary/1.jpg" },
  { id: 2, phase: "Land Survey", image: "gallary/2.jpg" },
  { id: 3, phase: "Excavation Begins", image: "gallary/3.jpg" },
  { id: 4, phase: "Foundation Layout", image: "gallary/4.jpg" },
  { id: 5, phase: "Foundation Pouring", image: "gallary/5.jpg" },
  { id: 6, phase: "Foundation Curing", image: "gallary/6.jpg" },
  { id: 7, phase: "Framing Starts", image: "gallary/7.jpg" },
  { id: 8, phase: "Wall Framing", image: "gallary/8.jpg" },
  { id: 9, phase: "Roof Framing", image: "gallary/9.jpg" },
  { id: 10, phase: "Window Installation", image: "gallary/10.jpg" },
  { id: 11, phase: "Electrical Rough-In", image: "gallary/11.jpg" },
  { id: 12, phase: "Plumbing Rough-In",image: "gallary/12.jpg" },
  { id: 13, phase: "HVAC Installation", image: "gallary/13.jpg" },
  { id: 14, phase: "Insulation",image: "gallary/14.jpg" },
  { id: 15, phase: "Drywall Hanging",image: "gallary/15.jpg" },
  { id: 16, phase: "Drywall Taping",  image: "gallary/16.jpg" },
  { id: 17, phase: "Interior Painting", image: "gallary/17.jpg" },
  { id: 18, phase: "Flooring Installation", image: "gallary/18.jpg" },
  { id: 19, phase: "Kitchen Cabinets", image: "gallary/19.jpg" },
  { id: 20, phase: "Countertops", image: "gallary/20.jpg" },
  { id: 21, phase: "Bathroom Fixtures",image: "gallary/21.jpg" },
  { id: 22, phase: "Trim Work", image: "gallary/22.jpg" },
  { id: 23, phase: "Doors Installation",image: "gallary/23.jpg" }, 
  { id: 24, phase: "Light Fixtures", image: "gallary/24.jpg" },
  { id: 25, phase: "Exterior Siding", image: "gallary/25.jpg" },
  { id: 26, phase: "Roofing", image: "gallary/26.jpg" },
  { id: 27, phase: "Landscaping", image: "gallary/27.jpg" },
  { id: 28, phase: "Driveway", image: "gallary/28.jpg" },
  { id: 29, phase: "Final Inspection", image: "gallary/29.jpg" },
  { id: 30, phase: "Move-In Ready", image: "gallary/30.jpg" },
    { id: 30, phase: "Move-In Ready", image: "gallary/31.jpg" },
  { id: 30, phase: "Move-In Ready", image: "gallary/32.jpg" },

];

const ConstructionGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    if (newIndex === 0) {
      setIsModalOpen(true);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    if (newIndex === constructionImages.length - 1) {
      setIsModalOpen(true);
    }
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < constructionImages.length - 1;

  // Get 3 images for modal: current, previous, and next
  const getModalImages = () => {
    const images = [];
    if (currentIndex > 0) images.push(constructionImages[currentIndex - 1]);
    images.push(constructionImages[currentIndex]);
    if (currentIndex < constructionImages.length - 1) images.push(constructionImages[currentIndex + 1]);
    return images;
  };

  const modalImages = getModalImages();

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Watch Your <span className="text-construction">Home Come to Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the complete construction journey through 30+ detailed process images
          </p>
        </div>

        {/* Main Gallery */}
        <div className="max-w-5xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentIndex + 1} of {constructionImages.length}
              </span>
              <span className="text-sm font-medium text-construction">
                {constructionImages[currentIndex].phase}
              </span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-construction transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / constructionImages.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Image Container */}
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-elegant">
            <div className="aspect-[16/10] relative">
              <img
                src={constructionImages[currentIndex].image}
                alt={constructionImages[currentIndex].phase}
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute top-4 left-4">
                <Badge className="text-lg px-4 py-2 bg-construction hover:bg-construction-dark">
                  {String(currentIndex + 1).padStart(2, '0')}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {constructionImages[currentIndex].phase}
                </h3>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-construction hover:underline font-medium"
            >
              View  Gallery
            </button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleNext}
              disabled={!canGoNext}
              className="gap-2"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-8 overflow-x-auto">
            <div className="flex gap-3 pb-4">
              {constructionImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                    idx === currentIndex 
                      ? 'ring-4 ring-construction scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.image}
                    alt={img.phase}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3D Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl p-0 bg-background/95 backdrop-blur-xl border-2 border-construction/20">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Construction Journey <span className="text-construction">Highlights</span>
            </h3>

            {/* 3D Layout: 1 main image on top, 2 below */}
            <div className="space-y-6 perspective-1000">
              {/* Main Image */}
              {modalImages.length > 0 && (
                <div className="relative animate-scale-in" style={{ animationDelay: '0ms' }}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={modalImages[Math.floor(modalImages.length / 2)].image}
                      alt={modalImages[Math.floor(modalImages.length / 2)].phase}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <Badge className="mb-2 bg-construction">Main View</Badge>
                      <h4 className="text-white text-xl font-bold">
                        {modalImages[Math.floor(modalImages.length / 2)].phase}
                      </h4>
                    </div>
                  </div>
                </div>
              )}

              {/* Two Secondary Images */}
              <div className="grid grid-cols-2 gap-6">
                {modalImages.length > 1 && modalImages[0] !== modalImages[Math.floor(modalImages.length / 2)] && (
                  <div 
                    className="relative animate-scale-in" 
                    style={{ 
                      animationDelay: '150ms',
                      transform: 'translateY(20px)'
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                      <img
                        src={modalImages[0].image}
                        alt={modalImages[0].phase}
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                        <Badge className="mb-1 text-xs bg-construction/80">Previous</Badge>
                        <h5 className="text-white text-sm font-bold">
                          {modalImages[0].phase}
                        </h5>
                      </div>
                    </div>
                  </div>
                )}

                {modalImages.length > 2 && (
                  <div 
                    className="relative animate-scale-in" 
                    style={{ 
                      animationDelay: '300ms',
                      transform: 'translateY(20px)'
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                      <img
                        src={modalImages[2].image}
                        alt={modalImages[2].phase}
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                        <Badge className="mb-1 text-xs bg-construction/80">Next</Badge>
                        <h5 className="text-white text-sm font-bold">
                          {modalImages[2].phase}
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  if (canGoPrevious) {
                    handlePrevious();
                  }
                }}
                disabled={!canGoPrevious}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Step
              </Button>

              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {constructionImages.length}
              </span>

              <Button
                variant="outline"
                onClick={() => {
                  if (canGoNext) {
                    handleNext();
                  }
                }}
                disabled={!canGoNext}
                className="gap-2"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ConstructionGallery;