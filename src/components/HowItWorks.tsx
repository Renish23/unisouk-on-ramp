import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Upload, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: "Register with UniSouk",
      description: "Takes 2 mins - just Aadhar & bank details",
      color: "bg-brand-orange"
    },
    {
      number: "2", 
      icon: <Upload className="w-8 h-8 text-white" />,
      title: "List Products Easily",
      description: "Upload photo or send on WhatsApp",
      color: "bg-brand-green"
    },
    {
      number: "3",
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Go Live & Get Orders",
      description: "We set up everything for free!",
      color: "bg-brand-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Start Selling in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No technical knowledge required. We guide you through every step.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2 z-0">
            <div className="h-full bg-gradient-to-r from-brand-orange via-brand-green to-brand-orange rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    {step.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-orange transition-colors">
                      <span className="text-brand-orange font-bold">Step {step.number}:</span>{" "}
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{step.description}</p>
                  </div>
                  
                  {index === steps.length - 1 && (
                    <div className="pt-4">
                      <Button variant="hero" className="w-full group-hover:bg-brand-green transition-colors">
                        Start Step {step.number}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;