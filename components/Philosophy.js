"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-electric font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
                            <h2 className="text-4xl font-bold text-navy mb-8 leading-tight">
                                Bridging the Digital Gap in American Logistics
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                For decades, the trucking industry has been served by fragmented, legacy software that treats compliance as an afterthought.
                                Carriers have been forced to navigate clunky government portals, expensive legal consultants, and manual spreadsheets just to keep their trucks on the road.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We see a different future. At Vendax Systems Labs, we believe that compliance infrastructure should be as invisible and reliable as the asphalt beneath your wheels.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <h3 className="text-2xl font-bold text-navy mb-6">The "Chaos" Problem</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                The average carrier spends countless hours annually just managing registration renewals, fuel tax reports, and authority updates.
                                This "administrative friction" is the silent killer of profitability in the supply chain.
                            </p>

                            <h3 className="text-2xl font-bold text-navy mb-6 mt-10">The Vendax Solution</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We don't just digitize forms; we re-engineer the workflow. By connecting directly with federal and state databases via secure APIs,
                                we eliminate the human error and latency that plague traditional filing methods. We turn a week of paperwork into a few clicks.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
