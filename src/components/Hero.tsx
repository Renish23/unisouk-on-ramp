import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-shopkeeper.jpg";
import { ArrowRight, CheckCircle, Shield, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brand-orange text-white border-0">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  100% Free ONDC Onboarding
                </Badge>
                <Badge className="bg-white/20 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  No Hidden Charges
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Sell More. Grow Fast.{" "}
                <span className="text-brand-orange">Join ONDC</span> with UniSouk!
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                <strong>India's easiest way to tap lakhs of buyers & boost your business online.</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://dashboard.unisouk.com/auth/login/', '_blank')}
              >
                Get Started in Minutes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-brand-green"
                onClick={() => window.open('https://app.storylane.io/share/szxlx9zg6i2j', '_blank')}
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-brand-orange" />
                <span className="text-sm">Trusted by 7.5 lakhs + sellers across India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-brand-orange" />
                <span className="text-sm">2-minute setup</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Happy Indian shopkeeper using smartphone for online selling"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-brand-orange rounded-full p-3 shadow-lg animate-bounce">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <span className="text-brand-green font-bold text-sm">₹ Profit ↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;