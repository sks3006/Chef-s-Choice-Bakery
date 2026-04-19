import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Location() {
  return (
    <section id="location" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Visit Us
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-serif text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Come Say Hello
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
          <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold text-foreground mb-8">Chef's Choice</h4>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-foreground mb-1">Address</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    Bhalia chaka, BHUJABALA COMPLEX, Ghatikia Main Rd, near Hanuman Temple, Ghatikia, Bhubaneswar, Odisha 751029, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-foreground mb-1">Opening Hours</h5>
                  <p className="text-muted-foreground">Open daily</p>
                  <p className="text-muted-foreground">Closes at 11:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-foreground mb-1">Contact</h5>
                  <a href="tel:+918093556846" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 80935 56846
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8!2d85.7882!3d20.2693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a76d1e85e7ab%3A0x16c6d9f2ef814cca!2sChef's%20Choice%20(Millets%20Bakery%20Manufacturer%20)!5e0!3m2!1sen!2sin!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen 
              loading="lazy"
              title="Chef's Choice Bakery Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
