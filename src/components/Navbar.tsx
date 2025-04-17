
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InfoIcon, LogInIcon, UserPlusIcon, MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="text-xl font-bold text-foreground flex items-center group"
        >
          <span className="relative overflow-hidden inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:animate-glitch">
              Am I Paranoid?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50 blur-sm group-hover:opacity-70 transition-opacity"></span>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/faq" className="text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <InfoIcon size={16} />
            <span>Support</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <LogInIcon size={16} />
            <span>Login</span>
          </Button>
          <Button size="sm" className="flex items-center gap-1 animate-pulse-glow">
            <UserPlusIcon size={16} />
            <span>Sign Up</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/pricing" 
              className="py-2 px-3 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/features" 
              className="py-2 px-3 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/faq" 
              className="py-2 px-3 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2 border-t border-border/40 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">
                <InfoIcon size={16} className="mr-2" />
                Support
              </Button>
              <Button variant="outline" className="justify-start">
                <LogInIcon size={16} className="mr-2" />
                Login
              </Button>
              <Button className="justify-start">
                <UserPlusIcon size={16} className="mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
