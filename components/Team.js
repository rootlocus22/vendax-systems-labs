"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Cpu, Terminal } from "lucide-react";

export default function Team() {
    const skills = [
        { icon: BrainCircuit, label: "Machine Learning" },
        { icon: Code2, label: "Full-Stack Development" },
        { icon: Cpu, label: "Infrastructure Scaling" },
        { icon: Terminal, label: "API Engineering" }
    ];

    return (
        <section id="team" className="py-24 bg-navy relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-electric blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-electric font-bold uppercase tracking-widest text-sm mb-4 block">Our DNA</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Built by AI Engineers, <br />
                            <span className="text-electric">For the Global Scale</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            At Vendax Systems Labs, we aren't just developers—we are AI Engineers. We don't just write code; we architect intelligent systems that solve high-stakes problems in the American supply chain and career sectors.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/80">
                                    <div className="p-2 bg-white/10 rounded-lg text-electric">
                                        <skill.icon size={20} />
                                    </div>
                                    <span className="font-medium">{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-white/10 z-10"></div>
                            <img
                                src="/hero-bg.png"
                                alt="AI Engineering Team Workspace"
                                className="w-full h-auto grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </div>

                        {/* Decorative floating card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 md:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl z-20 max-w-[240px]"
                        >
                            <p className="text-white font-bold text-lg mb-1">AI-First Approach</p>
                            <p className="text-slate-300 text-xs">Every component we build is designed with intelligence at its core.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
