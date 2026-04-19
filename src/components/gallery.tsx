import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    { src: "/images/millet-cake.png", alt: "Millet Celebration Cake", className: "col-span-2 row-span-2 aspect-square md:aspect-auto" },
    { src: "/images/bakery-display.png", alt: "Bakery Display", className: "col-span-1 row-span-1 aspect-square" },
    { src: "/images/millet-pastries.png", alt: "Fresh Pastries", className: "col-span-1 row-span-1 aspect-square" },
    { src: "/images/millet-cookies.png", alt: "Millet Cookies", className: "col-span-1 row-span-1 aspect-square" },
    { src: "/images/hero-bakery.png", alt: "Bakery Interior", className: "col-span-1 row-span-1 aspect-square" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-serif text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Feast for the Eyes
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`${img.className} rounded-2xl overflow-hidden relative group`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
