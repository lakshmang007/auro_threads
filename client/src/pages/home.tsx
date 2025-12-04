import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { products } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts products={products} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
