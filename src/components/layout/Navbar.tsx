import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-secondary">Hypenest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-foreground hover:text-primary transition-smooth font-medium">
              Browse Creators
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-smooth font-medium">
              How It Works
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-smooth font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-smooth font-medium">
              Blog
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/auth">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/browse"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Browse Creators
              </Link>
              <Link
                to="/how-it-works"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Blog
              </Link>
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/auth">
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/auth">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;