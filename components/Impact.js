"use client";

import { motion } from "framer-motion";

export default function Impact() {
    const metrics = [
        { label: "States Covered", value: "50+" },
        { label: "Carriers Served", value: "10k+" },
        { label: "Processed Annually", value: "$100M+" },
        { label: "Platform Uptime", value: "99.9%" }
    ];

    return (
        <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Delivering Impact at Scale</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our infrastructure is built to handle the complexities of the modern supply chain, ensuring reliability when it matters most.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-electric mb-2">{metric.value}</div>
                            <div className="text-slate-300 font-bold mb-3">{metric.label}</div>
                            <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-700 pt-3 mt-3">
                                {i === 0 && "Fully licensed to operate in every jurisdiction across the contiguous US and Canada."}
                                {i === 1 && "From independent owner-operators to enterprise fleets with 500+ units."}
                                {i === 2 && "Securely handling tax liabilities and registration fees with bank-grade precision."}
                                {i === 3 && "Redundant server infrastructure ensures you can file 24/7/365."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
