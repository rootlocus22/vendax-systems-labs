"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare, Globe2 } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-navy rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                    {/* Visual pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-electric font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Let's Build the Future Together
                            </h2>
                            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                                Have a vision for an AI-driven product? Reach out to our engineering team and let's discuss how we can help.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="mailto:support@vendaxsystemlabs.com"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-electric transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm">Official Support Email</p>
                                        <p className="text-white font-bold group-hover:text-electric transition-colors">support@vendaxsystemlabs.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                                        <Globe2 size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm">Global Operations</p>
                                        <p className="text-white font-bold">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2rem]">
                            <h3 className="text-2xl font-bold text-white mb-8">Drop us an Email</h3>
                            <p className="text-slate-300 mb-10">
                                Our support team is active 24/7 to help you with your queries and partnership proposals.
                            </p>

                            <motion.a
                                href="mailto:support@vendaxsystemlabs.com"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-electric hover:bg-blue-600 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-electric/20"
                            >
                                Contact Support
                                <ArrowRight size={20} />
                            </motion.a>

                            <p className="text-center text-slate-500 text-sm mt-6">
                                Typical response time: <span className="text-slate-300">Under 2 hours</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
