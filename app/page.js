import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Simple Hero / About Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-navy/90 z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center pt-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Vendax Systems Labs
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              A US-based technology company delivering innovative operations solutions globally.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
              Global Operations Center: San Francisco, CA
            </div>
          </div>
        </div>
      </section>

      {/* Operations Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Operations</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Vendax Systems Labs operates at the intersection of technology and efficiency.
              We are dedicated to building robust infrastructures and advancing technological
              paradigms for our partners worldwide, driven by our world-class engineering team based in the United States.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
