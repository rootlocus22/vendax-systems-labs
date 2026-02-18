"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, ExternalLink, Activity, Target } from "lucide-react";

export default function ProductShowcase() {
    const products = [
        {
            id: "expert-resume",
            name: "ExpertResume.us",
            tagline: "The Future of Career Advancement",
            description: "The comprehensive, AI-powered career platform. Build ATS-friendly resumes, generate cover letters, and optimize your LinkedIn profile in minutes. Achieve 90+ ATS scores and practice with AI mock interviews.",
            features: [
                { icon: Zap, text: "AI Resume & Cover Letter Builder" },
                { icon: Shield, text: "90+ ATS Optimization Engine" },
                { icon: Check, text: "AI Mock Interview Simulator" }
            ],
            link: "https://expertresume.us",
            image: "/expert-resume-landing.png",
            color: "electric",
            accent: "blue-50"
        },
        {
            id: "healthgyani",
            name: "HealthGyani.com",
            tagline: "Metabolic Food Intelligence",
            description: "Stop guessing. Start controlling. A clinical food verification system that provides clarity on metabolic impact. Track glycemic spikes and manage prediabetes, diabetes, and cholesterol with data-backed intelligence.",
            features: [
                { icon: Activity, text: "Food Metabolic Verification" },
                { icon: Target, text: "Clinical Personalized Insights" },
                { icon: Check, text: "Decision Intelligence System" }
            ],
            link: "https://healthgyani.com",
            image: "/healthgyani-landing.png",
            color: "green-500",
            accent: "green-50"
        }
    ];

    return (
        <section id="products" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-electric font-semibold uppercase tracking-wider text-sm">Our Flagship Products</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2">Engineering Solutions for the US Market</h2>
                </motion.div>

                <div className="space-y-24">
                    {products.map((product, idx) => (
                        <div
                            key={product.id}
                            className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 grid md:grid-cols-2 gap-0 max-w-6xl mx-auto ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className={`p-12 md:p-16 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`h-12 w-12 bg-${product.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                                        {product.name.charAt(0)}
                                    </div>
                                    <h3 className="text-3xl font-bold text-navy">{product.name}</h3>
                                </div>

                                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide text-sm">{product.tagline}</p>

                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {product.features.map((item, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3">
                                            <div className={`p-2 bg-${product.accent} text-${product.color} rounded-full`}>
                                                <item.icon size={18} />
                                            </div>
                                            <span className="font-medium text-slate-700">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.a
                                    href={product.link}
                                    target="_blank"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-md"
                                >
                                    Visit {product.name}
                                    <ExternalLink size={18} />
                                </motion.a>
                            </div>

                            {/* Visual Side */}
                            <div className="bg-slate-100 relative p-10 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative z-10 w-full"
                                >
                                    <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} Interface`}
                                            className="w-full h-auto hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
