import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, TrendingUp } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Sushma Stores",
      location: "Lucknow",
      story: "I sold my first 30 sarees in 10 days! Thanks to UniSouk, my business is now famous in four cities!",
      growth: "500+ new customers",
      rating: 5,
      avatar: "SS"
    },
    {
      name: "Muthu Traders", 
      location: "Tiruchi",
      story: "No computer needed. I sent photos on WhatsApp, and UniSouk handled the rest. I get customers from all over India.",
      growth: "3x monthly revenue",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Delhi Spice House",
      location: "Delhi",
      story: "From local shop to pan-India delivery! ONDC with UniSouk transformed my spice business completely.",
      growth: "1000+ orders/month",
      rating: 5,
      avatar: "DS"
    }
  ];

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our UniSouk Heroes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real sellers, real results, real success stories from across India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="border-2 border-transparent hover:border-brand-orange transition-all duration-300 hover:shadow-brand group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{story.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{story.story}"
                </blockquote>
                
                <div className="flex items-center space-x-2 pt-4 border-t border-border">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-500">{story.growth}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline-orange" size="lg">
            See More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;