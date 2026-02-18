"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
            >
                <div className="relative h-56 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-navy opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
                    <img
                        src={post.image || "/hero-bg.png"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-4 py-1.5 bg-electric text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                        <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <User size={12} />
                            {post.author}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-electric transition-colors leading-tight">
                        {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{post.readTime} Read</span>
                        <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
