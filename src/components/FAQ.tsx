import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need to be a computer expert?",
      answer: "No! It's as easy as using WhatsApp. Our team helps at every step. You can send product photos via WhatsApp and we'll handle the technical setup for you."
    },
    {
      question: "How will buyers find me?",
      answer: "Your shop becomes visible to lakhs of buyers using top shopping apps and websites in India! ONDC connects you to multiple platforms simultaneously."
    },
    {
      question: "Is there any hidden cost?",
      answer: "No setup fees. You only pay a small commission after you get orders. We believe in your success - you only pay when you earn!"
    },
    {
      question: "Can I talk to someone in my language?",
      answer: "Yes – Hindi, Gujarati, Tamil, Bengali, Marathi and more! Our support team speaks local languages and provides help via phone, WhatsApp, and in-person visits when needed."
    },
    {
      question: "How quickly can I start selling?",
      answer: "You can start selling within 2-5 minutes! Just provide your Aadhar and bank details, upload a few product photos, and you're live on ONDC."
    },
    {
      question: "What if I already sell on other platforms?",
      answer: "Perfect! UniSouk helps you manage all platforms from one dashboard - ONDC, Amazon, Flipkart, WhatsApp Business, and more. No need to juggle multiple apps."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQs – Selling on ONDC with UniSouk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have answers! Still need help? Our team is always ready to assist.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-brand-orange transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;