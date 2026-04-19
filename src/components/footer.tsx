import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4 tracking-tight">Chef's Choice</h2>
            <p className="text-secondary-foreground/70 max-w-sm mb-6 text-lg">
              Baked with Millets. Made with Love. <br />
              Bringing wholesome, ancient grains back to the modern bakery.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-secondary-foreground/70 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#products" className="text-secondary-foreground/70 hover:text-primary transition-colors">Specialties</a></li>
              <li><a href="#why-millets" className="text-secondary-foreground/70 hover:text-primary transition-colors">Why Millets</a></li>
              <li><a href="#gallery" className="text-secondary-foreground/70 hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5" />
                <a href="tel:+918093556846" className="hover:text-primary transition-colors">
                  +91 80935 56846
                </a>
              </li>
              <li>
                <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full" asChild>
                  <a href="https://wa.me/918093556846" target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Chef's Choice (Millets Bakery Manufacturer). All rights reserved.</p>
          <p>Designed for Bhubaneswar with love.</p>
        </div>
      </div>
    </footer>
  );
}
