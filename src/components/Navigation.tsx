import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MessChain</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-smooth">
              Dashboard
            </a>
            <a href="#transactions" className="text-foreground hover:text-primary transition-smooth">
              Transactions
            </a>
            <a href="#analytics" className="text-foreground hover:text-primary transition-smooth">
              Analytics
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-smooth">
              Support
            </a>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button variant="default">Sign Up</Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-4">
            <a href="#dashboard" className="block text-foreground hover:text-primary transition-smooth">
              Dashboard
            </a>
            <a href="#transactions" className="block text-foreground hover:text-primary transition-smooth">
              Transactions
            </a>
            <a href="#analytics" className="block text-foreground hover:text-primary transition-smooth">
              Analytics
            </a>
            <a href="#support" className="block text-foreground hover:text-primary transition-smooth">
              Support
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button variant="ghost" className="justify-start">Login</Button>
              <Button variant="default" className="justify-start">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;