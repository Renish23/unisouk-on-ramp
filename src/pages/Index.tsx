import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyONDC from "@/components/WhyONDC";
import WhyUniSouk from "@/components/WhyUniSouk";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SuccessStories";
import ProductCategories from "@/components/ProductCategories";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyONDC />
      <WhyUniSouk />
      <HowItWorks />
      <SuccessStories />
      <ProductCategories />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
