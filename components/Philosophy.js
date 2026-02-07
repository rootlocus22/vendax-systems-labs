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
                                Empowering Global Business with AI
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                For decades, the software industry has been served by fragmented, legacy thinking that treats AI as an afterthought.
                                Businesses have been forced to navigate clunky interfaces, expensive consultants, and manual processes just to keep moving.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We see a different future. At Vendax Systems Labs, we believe that software infrastructure should be as invisible and reliable as the code it runs on.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <h3 className="text-2xl font-bold text-navy mb-6">The Engineering Challenge</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                The average business spends countless hours annually just managing repetitive tasks and data entry.
                                This "administrative friction" is the silent killer of productivity and growth.
                            </p>

                            <h3 className="text-2xl font-bold text-navy mb-6 mt-10">Our Approach</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We don't just digitize forms; we re-engineer the workflow. By connecting directly with advanced AI models and secure APIs,
                                we eliminate the human error and latency that plague traditional methods. We turn weeks of work into a few clicks.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
