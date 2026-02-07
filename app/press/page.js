"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

export default function PressPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-navy mb-12">Press & Media</h1>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-2xl font-bold text-navy mb-4">About Vendax Systems</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Vendax Systems LLC is a technology holding company focused on modernizing career development infrastructure.
                                Our flagship product, ExpertResume.us, serves thousands of job seekers nationwide, generating professional resumes and cover letters in minutes.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Founded in San Francisco, we combine Silicon Valley engineering with deep industry expertise to build the future of work.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-navy mb-6">Media Contact</h3>
                            <p className="text-slate-600 mb-2">For press inquiries, please contact:</p>
                            <a href="mailto:press@vendaxsystemlabs.com" className="text-electric font-medium hover:underline block mb-6">
                                press@vendaxsystemlabs.com
                            </a>

                            <div className="pt-6 border-t border-slate-100">
                                <button className="flex items-center gap-3 text-slate-700 hover:text-electric transition-colors font-medium">
                                    <Download size={20} />
                                    Download Media Kit (Logos & Assets)
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-16">
                        <h2 className="text-2xl font-bold text-navy mb-8">Latest News</h2>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 mb-4">
                            <span className="text-sm text-electric font-semibold mb-2 block">December 10, 2025</span>
                            <h3 className="text-xl font-bold text-navy mb-2">Vendax Systems Launches ExpertResume.us</h3>
                            <p className="text-slate-600">
                                New AI-powered platform helps job seekers create ATS-friendly resumes 10x faster.
                            </p>
                        </div>
                        {/* More placeholder news items can go here */}
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
