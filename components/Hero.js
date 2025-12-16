"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToMission = () => {
        document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden pt-20">
            {/* Background Visual */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-navy/80 z-10"></div>
                <img
                    src="/hero-logistics.png"
                    alt="Logistics Operations Control Center"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                            Serving 10,000+ Carriers Nationwide
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Compliance Without <br className="hidden md:block" />
                            <span className="text-white relative">
                                The Chaos
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-electric opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light shadow-black/50">
                            We solve the boring, critical compliance problems so your trucks keep moving.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="w-full sm:w-auto px-8 py-4 bg-electric hover:bg-blue-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-electric/40 flex items-center justify-center gap-2 group"
                            >
                                Explore Our Solutions
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={scrollToMission}
                                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
                            >
                                Our Mission
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
