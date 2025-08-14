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
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-muted/5 to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Start Selling in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No technical knowledge required. We guide you through every step.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-brand-orange via-brand-green to-brand-orange"></div>
          
          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange via-brand-green to-brand-orange"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } group`}
              >
                {/* Step Number Badge */}
                <div className={`relative z-20 w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 lg:mx-8 mb-6 lg:mb-0`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                
                {/* Content Card */}
                <Card className={`relative w-full lg:w-80 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 ${
                  index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                } animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 ${step.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-orange transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                  
                  {/* Connector Line for Desktop */}
                  <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-border ${
                    index % 2 === 0 ? '-right-8' : '-left-8'
                  }`}></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Ready to transform your business?
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open('https://dashboard.unisouk.com/auth/login/', '_blank')}
            className="animate-fade-in"
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;