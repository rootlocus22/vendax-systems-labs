"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, BrainCircuit } from "lucide-react";
import Link from "next/link";

const blogData = {
    "scaling-intelligence-ai-first-approach": {
        title: "Scaling Intelligence: Our AI-First Approach to Product Engineering",
        date: "Feb 15, 2026",
        author: "Engineering Team",
        category: "Engineering",
        image: "/hero-logistics.png",
        content: `
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Vendax Systems Labs, we don't treat AI as a feature. We treat it as the foundation. In today's software landscape, being "AI-powered" isn't enough; you must be AI-First.
            </p>
            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">The AI-First Foundation</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
                Traditional SaaS products often bolt-on AI capabilities as an afterthought. Our approach starts with the intelligence layer. We architect our data structures and API integrations to feed into large language models and decision intelligence systems from day one.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
                This allows us to build products that don't just record data, but understand it. Our engineering team focuses on creating seamless feedback loops where every user interaction improves the underlying AI models.
            </p>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <BrainCircuit className="text-electric" />
                    Key Innovation: Adaptive Scaling
                </h3>
                <p className="text-slate-600 italic">
                    "We've developed a proprietary scaling engine that adjusts computational resources based on model complexity and real-time user demand, ensuring peak performance without overhead."
                </p>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-4">Engineering for Global Impact</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
                Scaling intelligence means more than just handling more users. It means handling more complexity. Our AI-First approach allows us to deploy updates that improve across our entire product suite simultaneously.
            </p>
        `
    },
    "reimagining-american-supply-chain-decision-intelligence": {
        title: "Reimagining the American Supply Chain with Decision Intelligence",
        date: "Feb 10, 2026",
        author: "Product Strategy",
        category: "Innovation",
        image: "/hero-bg.png",
        content: `
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The American logistics industry is a $1.2 trillion market that still largely relies on manual processes. We're changing that with decision intelligence.
            </p>
            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">Beyond Predictive Analytics</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
                Predictive analytics tells you what might happen. Decision intelligence tells you what to do about it. Our models analyze millions of data points across the supply chain—from fuel prices to port congestion—to provide actionable steps for fleet managers.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
                By integrating AI directly into the operational workflow, we've reduced administrative friction by over 40% for our enterprise partners.
            </p>
        `
    },
    "future-of-professional-career-growth": {
        title: "The Future of Professional Career Growth in an AI World",
        date: "Feb 05, 2026",
        author: "Core Lab",
        category: "SaaS",
        image: "/expert-resume-landing.png",
        content: `
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With ExpertResume.us, we've seen firsthand how AI can democratize career advancement. The future of talent acquisition is here.
            </p>
            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">Levelling the Playing Field</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
                99% of Fortune 500 companies use Applicant Tracking Systems (ATS) to filter resumes. Our AI tools help job seekers understand these algorithms and present their best selves to potential employers.
            </p>
        `
    }
};

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogData[slug];

    if (!post) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-navy mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-electric font-semibold hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-electric transition-colors mb-12 font-medium">
                        <ArrowLeft size={18} />
                        Back to Insights
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="px-4 py-1.5 bg-electric text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-md inline-block mb-6">
                            {post.category}
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-12 border-b border-slate-100 pb-8">
                            <span className="flex items-center gap-2">
                                <Calendar size={20} className="text-slate-300" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={20} className="text-slate-300" />
                                {post.author}
                            </span>
                        </div>

                        <div className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>

                        <div
                            className="blog-content prose prose-lg max-w-none prose-slate"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
