import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
        <img 
          src="/images/hero-bakery.png" 
          alt="Warm interior of Chef's Choice Bakery" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Bhubaneswar's Finest Artisan Bakery</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Baked with Millets. <br/>
            <span className="text-primary italic">Made with Love.</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Welcome to Chef's Choice. We craft beautiful, wholesome cakes and pastries using ancient millet grains. Healthy, delicious, and deeply rooted in tradition.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base bg-primary hover:bg-primary/90" asChild>
              <a href="#products">
                Explore Our Menu <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-primary/20 hover:bg-primary/5" asChild>
              <a href="#location">
                <MapPin className="mr-2 w-5 h-5" /> Visit Us in Ghatikia
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
