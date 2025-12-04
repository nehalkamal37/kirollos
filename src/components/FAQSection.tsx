import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate with local authorities for required inspections. Our team is familiar with Markham and Ontario building codes, ensuring full compliance throughout your project. We take care of all the paperwork so you don't have to worry about regulatory requirements."
    },
    {
      question: "What are typical project timelines?",
      answer: "Project timelines vary based on scope: Kitchen renovations typically take 3-6 weeks, bathroom remodels 2-4 weeks, full home renovations 8-16 weeks, and room additions 6-12 weeks. We provide detailed timelines during consultation and keep you updated throughout the process. Weather and permit approval times may affect outdoor projects."
    },
    {
      question: "How do you determine project costs?",
      answer: "We provide transparent, detailed quotes based on materials, labor, permits, and project complexity. After our free consultation and site assessment, you'll receive a comprehensive breakdown with no hidden fees. We offer competitive pricing and work within your budget to maximize value while maintaining our quality standards."
    },
    {
      question: "What warranty do you provide?",
      answer: "We offer comprehensive warranties: 1 year on workmanship, 2-5 years on materials (varies by manufacturer), and lifetime warranty on structural work. Our warranty covers defects in materials and workmanship, giving you peace of mind. We also provide ongoing support and maintenance services after project completion."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Kirollos Developing Inc. is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage. All our electricians and plumbers hold valid Ontario licenses. We provide insurance certificates upon request and ensure all work meets or exceeds industry standards."
    },
    {
      question: "Can you work within my budget?",
      answer: "Absolutely! We work with budgets ranging from $5,000 to $200,000+. During consultation, we discuss your priorities and explore options to maximize value within your budget. We can suggest alternative materials or phased approaches to help achieve your goals while staying within financial comfort zones."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with reputable financing companies to offer flexible payment plans and renovation loans. Options include 0% interest promotions, extended payment terms, and competitive rates. We can help you explore financing solutions that make your dream renovation affordable and manageable."
    },
    /*
    {
      question: "How do you handle project changes?",
      answer: "We understand that projects may evolve. Any changes are documented with written change orders detailing scope, cost, and timeline impacts. We discuss all options with you before proceeding and provide updated estimates. Our goal is transparency and ensuring you're completely satisfied with the final result."
    },
    {
      question: "What safety measures do you implement?",
      answer: "Safety is our top priority. We follow strict safety protocols, provide proper equipment and training to all workers, maintain clean worksites, and conduct regular safety meetings. All team members are trained in construction safety, and we carry comprehensive insurance to protect you and our workers."
    },
    {
      question: "Can you work around my schedule?",
      answer: "Yes, we're flexible with scheduling to minimize disruption to your daily routine. We can work evenings, weekends, or in phases to accommodate your needs. For occupied homes, we coordinate work schedules and provide clear communication about daily activities and any temporary limitations."
    }
      */
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-construction">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about permits, timelines, costs, warranties, and our construction process. 
            Don't see your question? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-3">
            <Card className="card-elevated border-0">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-construction py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-elevated border-l-4 border-l-construction bg-gradient-card">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-construction" />
                  Still Have Questions?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team is here to provide personalized answers to your specific questions about your construction or renovation project.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-construction hover:bg-construction-dark group"
                    size="sm"
                  >
                    <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 smooth-transition" />
                    Call (647) 287-5335
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-construction text-construction hover:bg-construction hover:text-white"
                    size="sm"
                  >
                    Send Message
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center">
                    <strong>Free consultations available</strong><br/>
                    Monday-Friday: 7AM-6PM<br/>
                    Saturday: 8AM-4PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-heading text-lg font-semibold mb-2">
                  Ready to Get Started?
                </h4>
                <p className="text-sm text-white/90 mb-4">
                  Schedule your free consultation and get a detailed quote for your project.
                </p>
                <Button 
                  className="w-full bg-white text-construction hover:bg-gray-100 font-semibold"
                  size="sm"
                >
                  Get Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;