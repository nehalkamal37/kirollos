import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-professional-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-construction-light">
              Kirollos Developing Inc.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Professional construction and renovation services that transform spaces and strengthen communities. 
              Building dreams with precision, passion, and purpose since 2008.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                Licensed • Insured • 15+ Years Experience
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-construction-light">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-construction-light flex-shrink-0" />
                <span className="text-gray-300">647-287-5335</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-construction-light flex-shrink-0" />
                <span className="text-gray-300">magedmeleka@yahoo.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-construction-light flex-shrink-0 mt-1" />
                <span className="text-gray-300">62 Cobbler Cres., Markham, ON, L3P 6P1</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-construction-light flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency Only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-construction-light">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Construction & Renovation</li>
              <li>• Electrical Works</li>
              <li>• Mechanical Works</li>
              <li>• Exterior Works</li>
              <li>• Kitchen & Bathroom Remodeling</li>
              <li>• HVAC & Plumbing</li>
              <li>• Commercial Projects</li>
              <li>• Emergency Repairs</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Kirollos Developing Inc. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-construction-light smooth-transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-construction-light smooth-transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-construction-light smooth-transition">
                Licensing
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-sm text-gray-500">
            Building Dreams, Strengthening Communities - Proudly Serving Ontario
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;