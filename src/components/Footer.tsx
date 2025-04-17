
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TwitterIcon, 
  InstagramIcon, 
  GithubIcon, 
  LinkedinIcon, 
  ShieldIcon, 
  HeartIcon 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold text-foreground flex items-center mb-4">
              <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Am I Paranoid?
              </span>
            </Link>
            <p className="text-foreground/70 mb-4">
              Your privacy is our obsession. Temporary numbers for a surveilled world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <GithubIcon size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-foreground/70 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-foreground/70 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-foreground/70 hover:text-primary transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-foreground/70 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-foreground/70 hover:text-primary transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 mb-4 md:mb-0">
            &copy; {currentYear} Am I Paranoid? All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-foreground/60">
              <ShieldIcon size={16} className="mr-2" />
              <span>SOC2 Compliant</span>
            </div>
            <div className="flex items-center text-foreground/60">
              <HeartIcon size={16} className="mr-2" />
              <span>Made with paranoia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
