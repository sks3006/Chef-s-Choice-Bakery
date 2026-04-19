import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  badge?: string;
};

type MenuCategory = {
  label: string;
  emoji: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    label: "Deserts",
    emoji: "🧁",
    items: [
      {
        name: "Millets Cup Cake",
        price: "₹70",
        description: "A delectable and wholesome treat made with nutritious millets, perfect for satisfying your sweet cravings.",
      },
      {
        name: "Chocolate Brownie",
        price: "₹75",
        description: "Rich and decadent chocolate brownie that will satisfy your sweet tooth cravings.",
        badge: "Bestseller",
      },
      {
        name: "Donut",
        price: "₹75",
        description: "A delectable fried treat coated in a rich sweet glaze.",
      },
    ],
  },
  {
    label: "Cakes",
    emoji: "🎂",
    items: [
      { name: "Pineapple", price: "₹400" },
      {
        name: "Chocolate",
        price: "₹400",
        description: "Mouthwatering chocolate cake with rich and decadent flavors.",
      },
      { name: "Black Forest", price: "₹400" },
      { name: "Butterscotch", price: "₹400" },
      { name: "Blueberry Cake", price: "₹400" },
    ],
  },
  {
    label: "Desserts",
    emoji: "🍰",
    items: [
      { name: "Black Forest Pastry", price: "₹65" },
    ],
  },
];

export function Products() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Menu
          </motion.p>
          <motion.h3
            className="text-4xl md:text-5xl font-serif text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Baked Fresh Daily
          </motion.h3>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every item crafted with care and the goodness of millets.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {menu.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === idx
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-60">({cat.items.length})</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {menu[activeTab].items.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="flex items-center justify-between gap-4 bg-card border border-border/50 rounded-2xl px-6 py-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-serif font-bold text-foreground">{item.name}</h4>
                    {item.badge && (
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xl font-bold text-primary font-serif">{item.price}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-primary/30 hover:bg-primary/5 text-primary hidden sm:flex"
                    asChild
                  >
                    <a
                      href={`https://wa.me/918093556846?text=Hi, I'd like to order ${item.name} (${item.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Order CTA */}
        <p className="text-center text-xs text-muted-foreground mt-4 sm:hidden">
          Tap any item or call <a href="tel:+918093556846" className="text-primary font-medium">+91 80935 56846</a> to order.
        </p>

        {/* Swiggy CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-4">Also available on Swiggy for home delivery</p>
          <Button className="rounded-full px-8" asChild>
            <a
              href="https://www.swiggy.com/city/bhubaneswar/chefs-choice-ghatikia-khandagiri-rest/25572"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on Swiggy
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
