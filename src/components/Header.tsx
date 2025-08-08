import { Button } from "@/components/ui/button";
import unisoukLogo from "@/assets/unisouk-logo-dark.png";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <img 
              src={unisoukLogo} 
              alt="UniSouk Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
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
          <Button 
            variant="hero" 
            size="sm" 
            onClick={() => window.open('https://dashboard.unisouk.com/auth/login/', '_blank')}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;