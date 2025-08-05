import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Smartphone, Package, Sparkles, UtensilsCrossed, Monitor } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    { icon: <Shirt className="w-8 h-8" />, name: "Textiles & Clothing", color: "text-purple-500" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, name: "Food Items", color: "text-green-500" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Mobile Accessories", color: "text-blue-500" },
    { icon: <Sparkles className="w-8 h-8" />, name: "Beauty Products", color: "text-pink-500" },
    { icon: <Monitor className="w-8 h-8" />, name: "Electronics", color: "text-orange-500" },
    { icon: <Package className="w-8 h-8" />, name: "Everything Else", color: "text-brand-orange" }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            List Any Product, Any Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Textiles, food items, mobile accessories, clothing, beauty, electronics—list everything you sell!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardContent className="p-6 text-center space-y-3">
                <div className={`${category.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-foreground text-center leading-tight">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            <span className="font-semibold text-brand-orange">Drag & drop</span> photos or send them via{" "}
            <span className="font-semibold text-brand-green">WhatsApp</span> - it's that simple!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;