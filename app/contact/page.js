"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Get in Touch</h1>
                        <p className="text-slate-600 text-lg">
                            Have questions about our products or partnership opportunities?
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center"
                        >
                            <h3 className="text-2xl font-bold text-navy mb-8">Contact Information</h3>

                            <div className="space-y-8 text-left max-w-md mx-auto">
                                <div className="flex items-start gap-6">
                                    <div className="bg-blue-50 p-4 rounded-xl text-electric shrink-0">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Email Us</p>
                                        <a href="mailto:support@vendaxsystemlabs.com" className="text-lg text-slate-600 hover:text-electric transition-colors block mb-1">support@vendaxsystemlabs.com</a>
                                        <p className="text-sm text-slate-400">Typical response time: 2-4 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-blue-50 p-4 rounded-xl text-electric shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Corporate Headquarters</p>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Vendax Systems LLC<br />
                                            28 Geary St STE 650 Suite #500<br />
                                            San Francisco, California 94108<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
