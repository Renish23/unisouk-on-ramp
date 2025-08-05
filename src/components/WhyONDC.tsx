import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, DollarSign, Users, Shield } from "lucide-react";

const WhyONDC = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: "Reach Millions",
      description: "Your shop gets seen by buyers all over India—on mobile apps and top partner platforms."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand-orange" />,
      title: "No Middlemen",
      description: "You control prices. You keep more profit."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-orange" />,
      title: "Easy to Use",
      description: "Simple process. No technical skills needed. We hold your hand, step by step."
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-orange" />,
      title: "Secure Payments",
      description: "Extra safe. Your money comes directly to your bank."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Sell on ONDC?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ONDC is India's new UPI for commerce – made for small businesses by the government.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-brand-green rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ONDC is India's new UPI for commerce
          </h3>
          <p className="text-xl mb-6 text-white/90">
            Made for small businesses by the government. Trusted, secure, and powerful.
          </p>
          <Button variant="hero" size="lg" className="bg-brand-orange hover:bg-brand-orange-light">
            Talk to Our Local Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyONDC;