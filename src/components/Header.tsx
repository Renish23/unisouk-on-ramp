import { Button } from "@/components/ui/button";
// import unisoukLogo from "@/assets/unisouk-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">U</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-brand-green">UniSouk</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-foreground hover:text-brand-orange transition-colors">
            How It Works
          </a>
          <a href="#success-stories" className="text-foreground hover:text-brand-orange transition-colors">
            Success Stories
          </a>
          <a href="#faq" className="text-foreground hover:text-brand-orange transition-colors">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline-orange" size="sm" className="hidden md:inline-flex">
            Call +91-98XXXXXX
          </Button>
          <Button variant="hero" size="sm">
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;