import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Specialties", href: "#products" },
    { name: "Why Millets", href: "#why-millets" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex flex-col items-start z-50 relative">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">Chef's Choice</span>
          <span className="text-xs text-muted-foreground uppercase tracking-widest hidden sm:block">Millets Bakery</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://wa.me/918093556846" target="_blank" rel="noopener noreferrer">
              Order Now <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50 relative text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 ${
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild size="lg" className="rounded-full mt-4">
              <a href="https://wa.me/918093556846" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                Order Now
              </a>
            </Button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
