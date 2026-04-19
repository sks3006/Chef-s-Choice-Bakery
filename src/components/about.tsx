import { motion } from "framer-motion";
import { Heart, Leaf, Wheat } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Wheat className="w-6 h-6 text-primary" />,
      title: "Ancient Grains",
      description: "We use locally sourced millets, bringing back the forgotten superfoods of India into everyday treats."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Baked with Love",
      description: "Every cake, cookie, and pastry is handcrafted by artisans who care deeply about quality and taste."
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Wholesome Choice",
      description: "Guilt-free indulgence. Our products are naturally nutritious, rich in fiber, and deeply satisfying."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              <img 
                src="/images/baker-hands.png" 
                alt="Baker preparing millet dough" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block">
              <div className="text-4xl font-serif font-bold text-primary mb-2">4.8★</div>
              <p className="text-sm text-muted-foreground font-medium">Rated by 98+ happy customers in Bhubaneswar.</p>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">The Neighborhood Bakery That Feels Like Home.</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nestled in the heart of Ghatikia, Bhubaneswar, Chef's Choice is more than just a bakery. We are on a mission to redefine indulgence by marrying the nutritional power of ancient Indian millets with the joy of classic baking.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Whether you're celebrating a birthday or just need a comforting morning treat, our golden-brown creations offer the perfect balance of health and heavenly taste.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
