"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap } from "lucide-react";

export default function ProductShowcase() {
    return (
        <section id="products" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-electric font-semibold uppercase tracking-wider text-sm">Our Flagship Product</span>
                    <h2 className="text-4xl font-bold text-navy mt-2">The Future of Truck Tax Filing</h2>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 grid md:grid-cols-2 gap-0 max-w-6xl mx-auto">
                    {/* Content Side */}
                    <div className="p-12 md:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-10 w-10 bg-electric rounded-lg flex items-center justify-center text-white font-bold text-xl">Q</div>
                            <h3 className="text-2xl font-bold text-navy">QuickTruckTax</h3>
                        </div>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            The fastest, AI-powered IRS Form 2290 filing solution for owner-operators. Reducing tax filing time from hours to minutes with automated accuracy checks.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                { icon: Zap, text: "Authorized E-File Integration" },
                                { icon: Shield, text: "Bank-Level Security (AES-256)" },
                                { icon: Check, text: "Instant Schedule 1 Delivery" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 text-electric rounded-full">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="font-medium text-slate-700">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="https://quicktrucktax.com"
                            target="_blank"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block text-center bg-navy hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
                        >
                            Visit QuickTruckTax.com
                        </motion.a>
                    </div>

                    {/* Visual Side */}
                    <div className="bg-slate-100 relative p-10 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>

                        {/* iPhone Mockup Image */}
                        <motion.div
                            initial={{ y: 50, opacity: 0, rotateX: 10 }}
                            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full max-w-[320px]"
                        >
                            <img
                                src="/app-mockup.png"
                                alt="QuickTruckTax Mobile App Interface"
                                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
