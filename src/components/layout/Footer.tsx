import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">Hypenest</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-xs">
              Connecting brands with creators for authentic, high-performing campaigns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Brands */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">For Brands</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/browse" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Browse Creators
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Post Campaign
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">For Creators</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/creator-signup" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Join as Creator
                </Link>
              </li>
              <li>
                <Link to="/creator-resources" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/creator-tools" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Creator Tools
                </Link>
              </li>
              <li>
                <Link to="/payouts" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Payouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Hypenest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary text-sm transition-smooth">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-secondary-foreground/60 hover:text-primary text-sm transition-smooth">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;