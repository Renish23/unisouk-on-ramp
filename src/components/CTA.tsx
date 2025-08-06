import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Futuristic animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/30 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-pink-400/30 rotate-45 animate-bounce"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Glowing badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-white/90 font-medium">Limited Time: Free Forever Plan</span>
            <Zap className="w-5 h-5 text-yellow-400 animate-bounce" />
          </div>
          
          {/* Main heading with gradient text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Don't Let Big Players
              </span>
              <br />
              <span className="text-white">Take All the Business</span>
            </h2>
            
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
              <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
              <span>Join ONDC with UniSouk NOW!</span>
            </div>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Start selling on ONDC today, even if you have never sold online before.
              <span className="text-cyan-400 font-semibold"> The future belongs to those who act today.</span>
            </p>
          </div>
          
          {/* CTA Button with enhanced styling */}
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group relative text-xl px-16 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white border-0 shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Begin Your ONDC Journey FREE
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </Button>
          </div>
          
          {/* Urgency text */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mx-auto max-w-2xl">
            <p className="text-lg text-white/90">
              ⚡ <strong className="text-yellow-400">Over 10,000+ sellers</strong> have already joined ONDC. 
              <br />
              <span className="text-cyan-400">Don't wait while your competitors capture your customers.</span>
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-white/70">
                Need help? Contact us: <span className="text-cyan-400">+91 9033002465</span> | <span className="text-cyan-400">connect@unisouk.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;