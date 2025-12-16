"use client";

import { motion } from "framer-motion";
import { FileText, Truck, Map, Receipt, Fuel } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Form 2290 Filing",
            desc: "The Heavy Vehicle Use Tax (HVUT) is a mandatory annual federal tax for vehicles with a gross weight of 55,000 pounds or more. Filing incorrectly can lead to significant penalties and registration blocks.",
            benefit: "Get your stamped Schedule 1 in minutes directly from the IRS, ensuring your fleet stays road-legal without delays.",
            icon: FileText
        },
        {
            title: "MCS-150 Update",
            desc: " The FMCSA requires all USDOT number holders to update their registration details every two years (biennial update), regardless of whether your company information has changed.",
            benefit: "We automate this cycle, preventing deactivation of your authority and keeping your CSA scores accurate.",
            icon: Truck
        },
        {
            title: "UCR Registration",
            desc: "The Unified Carrier Registration (UCR) takes the place of individual state registration systems. If you operate a truck in interstate or international commerce, this is non-negotiable.",
            benefit: "Instant proof of payment and multi-state compliance through a single, streamlined dashboard.",
            icon: Map
        },
        {
            title: "Form 8849 Refund",
            desc: "Did you sell a vehicle? Was one destroyed? You are entitled to a prorated tax refund from the IRS. Many carriers leave this money on the table due to complex paperwork.",
            benefit: "We identify eligible refunds automatically and handle the reclaiming process for you.",
            icon: Receipt
        },
        {
            title: "IFTA Filing",
            desc: "The International Fuel Tax Agreement simplifies fuel tax reporting for interstate carriers. However, calculating taxable miles and fuel purchase distribution across jurisdictions is prone to error.",
            benefit: "Our system calculates exact tax liabilities across all jurisdictions, eliminating audit risks.",
            icon: Fuel
        }
    ];

    return (
        <section id="services" className="py-24 bg-navy text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-electric blur-[128px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-electric font-semibold uppercase tracking-widest text-sm">Comprehensive Authority</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Regulatory Compliance, <br />Demystified.</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        The logistics landscape is governed by a complex web of federal and state regulations.
                        We provide the digital infrastructure to navigate them with precision, ensuring your operations never face a compliance bottleneck.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, i) => (
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
