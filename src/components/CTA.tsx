import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, MessageCircle, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Don't Let Big Players Take All the Business –{" "}
              <span className="text-brand-orange">Join ONDC with UniSouk!</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Start now. Grow big. Serve more customers. It's your time!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 bg-brand-orange hover:bg-brand-orange-light">
              Begin Your ONDC Journey FREE
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-3">
                <Clock className="w-8 h-8 text-brand-orange mx-auto" />
                <h3 className="font-semibold">Quick Setup</h3>
                <p className="text-sm text-white/80">Start selling in under 5 minutes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-3">
                <MessageCircle className="w-8 h-8 text-brand-orange mx-auto" />
                <h3 className="font-semibold">WhatsApp Support</h3>
                <p className="text-sm text-white/80">Help in your local language</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-3">
                <Phone className="w-8 h-8 text-brand-orange mx-auto" />
                <h3 className="font-semibold">Call Support</h3>
                <p className="text-sm text-white/80">Speak to our experts anytime</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-lg mb-4">Or call us directly at</p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-green text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              +91-98XXXXXX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;