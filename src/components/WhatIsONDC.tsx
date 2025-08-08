import { Card, CardContent } from "@/components/ui/card";
import { Globe, ShoppingCart, Link2, ShieldCheck, Users, Store } from "lucide-react";

const WhatIsONDC = () => {
  const steps = [
    {
      icon: <Users className="w-6 h-6 text-brand-orange" />,
      title: "Buyers use any app",
      description: "Customers search on their favorite buyer apps (Paytm, PhonePe, etc.).",
    },
    {
      icon: <Link2 className="w-6 h-6 text-brand-orange" />,
      title: "Apps connect via ONDC",
      description: "ONDC is an open network that connects buyer apps with seller apps.",
    },
    {
      icon: <Store className="w-6 h-6 text-brand-orange" />,
      title: "Orders reach your store",
      description: "Your products appear across apps and the order comes to you.",
    },
  ];

  return (
    <section id="what-is-ondc" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is ONDC?
          </h2>
          <p className="text-lg text-muted-foreground">
            ONDC (Open Network for Digital Commerce) is like UPI for online selling. It lets any buyer app discover products from any seller app — creating a fair, open marketplace.
          </p>
        </header>

        <article className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Card key={i} className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </article>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="border-border">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-orange" />
                How ONDC helps your business
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Get discovered by buyers across multiple apps instantly</li>
                <li>Own your pricing and catalog — no platform lock-in</li>
                <li>Secure transactions with standardized protocols</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-orange" />
                Simple explanation
              </h3>
              <p className="text-muted-foreground">
                Think of ONDC as the road network for e-commerce. Your shop is a destination. More roads mean more people can reach you — no matter which route (app) they choose.
              </p>
            </CardContent>
          </Card>
        </div>

        <script
          type="application/ld+json"
          // Using JSON.stringify to avoid JSX escaping issues
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'What is ONDC?',
              description:
                'ONDC (Open Network for Digital Commerce) connects buyer and seller apps, helping businesses reach more customers across India.',
              articleSection: 'Awareness',
            }),
          }}
        />
      </div>
    </section>
  );
};

export default WhatIsONDC;
