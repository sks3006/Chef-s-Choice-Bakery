import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyMillets() {
  const benefits = [
    "Rich in dietary fiber for better digestion",
    "Naturally gluten-free options available",
    "Low glycemic index (Diabetic friendly)",
    "Packed with essential minerals and vitamins",
    "Sustainable and eco-friendly crop",
    "Provides sustained energy throughout the day"
  ];

  return (
    <section id="why-millets" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary-foreground/80 uppercase mb-3">Health & Wellness</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">Why Choose Millets?</h3>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              For decades, baking has relied heavily on refined flours that offer empty calories. We're bringing back the wisdom of our ancestors. Millets aren't just a trend—they are nutritional powerhouses that transform your favorite treats into wholesome nourishment.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-white/20 p-4">
              <div className="w-full h-full rounded-full border border-white/40 p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="/images/baker-hands.png" 
                    alt="Millet grains" 
                    className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
