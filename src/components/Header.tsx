import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  // Always use theme-aware foreground colors
  const textColorClass = "text-foreground";
  const hoverColorClass = "hover:text-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            &lt;Rajshri Gupta/&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textColorClass} ${hoverColorClass} transition-colors duration-200`}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button variant="default" size="sm" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-card/95 backdrop-blur-md rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-sm text-foreground">Theme:</span>
              <ThemeToggle />
            </div>
            <Button variant="default" size="sm" className="w-full" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Hire Me
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;