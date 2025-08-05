// import unisoukLogo from "@/assets/unisouk-logo.png";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-2xl font-bold text-brand-orange">UniSouk</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              India's easiest way to join ONDC and grow your business online. Trusted by thousands of sellers across India.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-brand-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="opacity-80 hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#success-stories" className="opacity-80 hover:opacity-100 transition-opacity">Success Stories</a></li>
              <li><a href="#faq" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">ONDC Guide</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-brand-orange">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-98XXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@unisouk.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Available Pan-India</span>
              </li>
            </ul>
          </div>
          
          {/* Languages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-brand-orange">We Speak Your Language</h3>
            <div className="grid grid-cols-2 gap-1 text-sm opacity-80">
              <span>Hindi</span>
              <span>English</span>
              <span>Gujarati</span>
              <span>Tamil</span>
              <span>Bengali</span>
              <span>Marathi</span>
              <span>Telugu</span>
              <span>Kannada</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 UniSouk. All rights reserved. | ONDC Network Partner | Made in India for Indian Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;