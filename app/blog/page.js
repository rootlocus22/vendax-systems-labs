"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
    const posts = [
        {
            slug: "scaling-intelligence-ai-first-approach",
            title: "Scaling Intelligence: Our AI-First Approach to Product Engineering",
            excerpt: "At Vendax Systems Labs, we don't treat AI as a feature. We treat it as the foundation. Discover how we build products that scale from zero to world-class in record time.",
            category: "Engineering",
            date: "Feb 15, 2026",
            author: "Engineering Team",
            readTime: "6 min",
            image: "/hero-logistics.png"
        },
        {
            slug: "reimagining-american-supply-chain-decision-intelligence",
            title: "Reimagining the American Supply Chain with Decision Intelligence",
            excerpt: "How our proprietary AI models are helping logistics companies predict failures and optimize routes before they cost thousands of dollars.",
            category: "Innovation",
            date: "Feb 10, 2026",
            author: "Product Strategy",
            readTime: "8 min",
            image: "/hero-bg.png"
        },
        {
            slug: "future-of-professional-career-growth",
            title: "The Future of Professional Career Growth in an AI World",
            excerpt: "With ExpertResume.us, we've helped thousands of users achieve 90+ ATS scores. Here's why vertical AI for career advancement is the next big frontier.",
            category: "SaaS",
            date: "Feb 05, 2026",
            author: "Core Lab",
            readTime: "5 min",
            image: "/expert-resume-landing.png"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-electric font-bold uppercase tracking-widest text-xs mb-4 block">Vendax Insights</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Innovative Thinking. <br /> AI Engineering.</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Sharing our journey in building the digital backbone of the modern economy through an AI-First approach.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <BlogCard key={idx} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
