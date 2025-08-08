import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-brand-orange rounded-full opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-full opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">
              🚀 Join 7.5 Lakh+ Successful Sellers
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Scale Your
              <span className="block bg-gradient-to-r from-orange-200 to-orange-100 bg-clip-text text-transparent">
                Business with ONDC?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Start selling on ONDC today, even if you have never sold online before.
              <span className="text-orange-200 font-semibold"> The future belongs to those who act today.</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-6 space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-brand-green hover:bg-orange-50 transition-all duration-300 text-xl px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 font-semibold"
              onClick={() => window.open('https://dashboard.unisouk.com/auth/login/', '_blank')}
            >
              Start Selling Today - It's Free!
            </Button>
          </div>
          
          {/* Supporting Text */}
          <div className="space-y-4 pt-8">
            <p className="text-white/80 text-lg">
              Join thousands of sellers who chose growth over waiting.
              <br />
              <span className="text-orange-200">Don't wait while your competitors capture your customers.</span>
            </p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm text-white/70">
                Need help? Contact us: <span className="text-orange-200">+91 9033002465</span> | <span className="text-orange-200">connect@unisouk.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;