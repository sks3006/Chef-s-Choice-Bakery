import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { WhyMillets } from "@/components/why-millets";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyMillets />
        <Testimonials />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
