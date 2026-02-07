"use client";

import { motion } from "framer-motion";
import { Zap, Shield, MousePointer2 } from "lucide-react";

export default function Mission() {
    const features = [
        {
            icon: <Zap size={32} />,
            title: "Speed",
            desc: "Real-time processing for instant compliance results."
        },
        {
            icon: <Shield size={32} />,
            title: "Security",
            desc: "Bank-level AES-256 encryption and SOC2 standards."
        },
        {
            icon: <MousePointer2 size={32} />,
            title: "Simplicity",
            desc: "Interfaces designed for humans, not just regulators."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                            Building Intelligent Software Solutions.
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Vendax Systems Labs combines modern Silicon Valley tech stacks with deep engineering expertise to deliver scalable, high-impact SaaS products for the world.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We believe that complex problems should be solved with elegant engineering and valid AI solutions.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-6 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="p-3 bg-blue-50 text-electric rounded-lg shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
