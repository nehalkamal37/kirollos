import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-construction" />,
      title: "Phone",
      details: "647-287-5335",
      description: "Call for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-construction" />,
      title: "Email", 
      details: "magedmeleka@yahoo.com",
      description: "Send us your project details"
    },
    {
      icon: <MapPin className="h-6 w-6 text-construction" />,
      title: "Address",
      details: "62 Cobbler Cres., Markham, ON, L3P 6P1",
      description: "Visit our office in Markham"
    },
    {
      icon: <Clock className="h-6 w-6 text-construction" />,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM",
      description: "We're here when you need us"
    }
  ];

  const services = [
    "Kitchen Renovation",
    "Bathroom Remodeling", 
    "Home Addition",
    "Electrical Work",
    "Plumbing Services",
    "HVAC Installation",
    "Roofing & Siding",
    "Commercial Renovation",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Request Your <span className="text-construction">Free Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us today for a free consultation and detailed quote 
            for your construction or renovation project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help bring your vision to life. Whether you have questions about our services 
                or are ready to start your next project, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-l-4 border-l-construction bg-gradient-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {info.icon}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="font-medium text-construction text-sm mb-1">
                          {info.details}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-card rounded-xl p-6 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-construction" />
                Why Choose Us?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-construction flex-shrink-0" />
                  Licensed & Fully Insured
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-construction flex-shrink-0" />
                  15+ Years Experience
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-construction flex-shrink-0" />
                  Free Consultations & Quotes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-construction flex-shrink-0" />
                  100% Satisfaction Guarantee
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elevated border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  Send Us Your Project Details
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(647) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Project Address</Label>
                  <Input id="address" placeholder="Where is your project located?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <select id="service" className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <select id="timeline" className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">When would you like to start?</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="planning">Just planning ahead</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <select id="budget" className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">Select budget range (optional)</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project in detail. Include dimensions, materials, special requirements, or any other relevant information."
                    rows={5}
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-construction hover:bg-construction-dark font-semibold group"
                >
                  Send Message & Get Free Quote
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Kirollos Developing Inc. 
                  regarding your project inquiry. We respect your privacy and never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;