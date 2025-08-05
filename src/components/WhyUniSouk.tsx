import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart3, HeadphonesIcon, Zap } from "lucide-react";

const WhyUniSouk = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-brand-orange" />,
      title: "Free, Quick ONDC Onboarding",
      description: "Zero setup fee. No tech headaches. Start selling today."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-orange" />,
      title: "Manage All Sales, All Apps—In One Place",
      description: "Sell not just on ONDC, but also Amazon, Flipkart, WhatsApp & more from ONE simple dashboard."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-brand-orange" />,
      title: "Local Support, Indian Languages",
      description: "Our team speaks your language. We help by phone, WhatsApp, and in-person if needed."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-orange" />,
      title: "Real Results, Real Growth",
      description: "Our sellers grow 2x faster on ONDC—more orders, more profit, more happy customers."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose UniSouk for ONDC?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We make selling online simple, profitable, and stress-free for every small business owner.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group border-2 border-transparent hover:border-brand-orange transition-all duration-300 hover:shadow-brand">
              <CardContent className="p-8 flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-orange/10 rounded-xl p-3 group-hover:bg-brand-orange/20 transition-colors">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-12 py-6">
            See Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUniSouk;