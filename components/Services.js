"use client";

import { motion } from "framer-motion";
import { FileText, PenTool, Share2, UserCheck, LayoutDashboard } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-navy text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-electric blur-[128px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-electric font-semibold uppercase tracking-widest text-sm">Our Product Suite</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Career Acceleration <br />Tools</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        We build specialized software solutions that solve real-world problems with AI precision.
                        High-impact tools for the modern professional.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "AI Resume Builder",
                            desc: "Create professional, ATS-optimized resumes that pass the screening algorithms used by 99% of Fortune 500 companies.",
                            benefit: "Stand out with formatted, keyword-rich resumes generated in seconds.",
                            icon: FileText
                        },
                        {
                            title: "Cover Letter Generator",
                            desc: "Instantly generate tailored cover letters that match your resume tone and specific job descriptions.",
                            benefit: "Never write a generic cover letter again. Personalized and persuasive every time.",
                            icon: PenTool
                        },
                        {
                            title: "LinkedIn Optimization",
                            desc: "Turn your LinkedIn profile into a recruiter magnet with AI-driven headline and summary enhancements.",
                            benefit: "Increase profile visibility and attract more inbound opportunities.",
                            icon: Share2
                        },
                        {
                            title: "Career Coaching",
                            desc: "Get personalized career advice and interview prep from our advanced AI career coach.",
                            benefit: "Ace your interviews with confidence and strategic preparation.",
                            icon: UserCheck
                        },
                        {
                            title: "Job Application Tracker",
                            desc: "Organize your job search with a smart dashboard that tracks every application and interview status.",
                            benefit: "Stay organized and never miss a follow-up opportunity.",
                            icon: LayoutDashboard // Using LayoutDashboard as a proxy for a tracker icon if needed, or stick to what's available.
                        }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all group flex flex-col md:flex-row gap-6"
                        >
                            <div className="shrink-0">
                                <div className="h-14 w-14 bg-slate-700/50 rounded-xl flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all shadow-inner border border-slate-600">
                                    <service.icon size={28} />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-electric transition-colors">{service.title}</h3>
                                <p className="text-slate-400 mb-4 leading-relaxed text-sm border-b border-slate-700 pb-4">
                                    {service.desc}
                                </p>
                                <p className="text-slate-300 font-medium text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
                                    {service.benefit}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
