"use client";

import { motion } from "framer-motion";
import { Users, Phone, ShieldCheck } from "lucide-react";

export default function Trust() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight"
                    >
                        Real experts. <span className="text-electric">Real answers.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 leading-relaxed font-medium"
                    >
                        We don't hide behind chatbots. When you have a product question, you get a direct line to a specialist who knows the technology inside out.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Phone size={32} />,
                            title: "Real Human Support",
                            desc: "Direct access to knowledgeable specialists, not just help desk scripts. We answer the phone."
                        },
                        {
                            icon: <ShieldCheck size={32} />,
                            title: "Accuracy Guaranteed",
                            desc: "Our combination of AI validation and human oversight means fewer rejections and absolute peace of mind."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "Partner-Centric",
                            desc: "We don't just sell software; we build long-term relationships with fleets and banking partners."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6 text-navy group-hover:text-electric group-hover:scale-110 transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-electric transition-colors">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
