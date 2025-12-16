"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mission from "@/components/Mission";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            {/* Hero Section of About Page */}
            <section className="pt-32 pb-16 bg-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Building the Future of Logistics
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Vendax Systems LLC is a technology holding company dedicated to modernizing the metabolic system of the American economy: the supply chain.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Our Story</h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-6">
                            Founded in San Francisco, Vendax Systems LLC emerged from a simple observation: the logistics industry—responsible for moving 70% of all freight in the U.S.—was running on software built two decades ago.
                        </p>
                        <p className="mb-6">
                            Independent owner-operators and small fleets were being left behind, forced to use clunky, expensive, and insecure tools to manage their compliance. We set out to change that.
                        </p>
                        <p>
                            By combining top-tier Silicon Valley engineering talent with deep industry expertise, we build tools that are not just "compliant", but delightful to use. QuickTruckTax is just the beginning.
                        </p>
                    </div>
                </div>
            </section>

            <Mission />

            <Footer />
        </main>
    );
}
