import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import ProductShowcase from "@/components/ProductShowcase";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Philosophy from "@/components/Philosophy";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Trust />
      <ProductShowcase />
      <Team />
      <Services />
      <Mission />
      <Philosophy />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
}
