import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const reviews = [
    {
      name: "Priyanka S.",
      text: "The millet chocolate cake we ordered for my daughter's birthday was an absolute hit! It was moist, rich, and you'd never guess it was a healthy alternative. Chef's Choice is our new favorite in Bhubaneswar.",
      rating: 5
    },
    {
      name: "Ranjan M.",
      text: "I'm diabetic and have missed having pastries. Their millet-based baked goods have been a blessing. The taste is incredibly authentic and earthy. Highly recommend their everyday cookies.",
      rating: 5
    },
    {
      name: "Ankita D.",
      text: "Beautiful little bakery near the Hanuman Temple. The aroma when you walk in is heavenly. The quality of ingredients is evident in every bite. Their customer service is top-notch too.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Customer Love</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground">Loved by Our Community</h3>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-md border border-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl font-bold text-foreground">4.8</div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-sm font-medium text-muted-foreground">Based on 98 Google Reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="font-bold text-foreground">{review.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
