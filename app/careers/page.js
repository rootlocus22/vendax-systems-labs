"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Join Our Mission</h1>
                        <p className="text-slate-600 text-lg">
                            We're building the financial operating system for the American logistics industry.
                            Join a team of engineers, designers, and industry experts solving critical problems at scale.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl mx-auto">
                        <div className="p-8 md:p-12 text-center">
                            <h3 className="text-2xl font-bold text-navy mb-4">No Open Positions</h3>
                            <p className="text-slate-600 mb-8">
                                We are currently not hiring for specific roles, but we are always looking for exceptional talent.
                                If you believe you can make a significant impact at Vendax Systems, we want to hear from you.
                            </p>

                            <a
                                href="mailto:careers@vendaxsystemlabs.com"
                                className="inline-flex items-center gap-2 bg-electric hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg"
                            >
                                Email Your Resume
                                <ArrowRight size={20} />
                            </a>
                        </div>

                        <div className="bg-slate-50 p-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                            <span>San Francisco, CA</span>
                            <span>•</span>
                            <span>Remote Friendly</span>
                            <span>•</span>
                            <span>Competitive Equity</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
