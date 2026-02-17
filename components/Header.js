"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/#hero" },
        { name: "Products", href: "/#products" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const handleNavClick = (e, href) => {
        if (href.startsWith("/#")) {
            // Logic for anchor links on home page
            const hash = href.replace("/", "");

            if (pathname === "/") {
                e.preventDefault();
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                }
            } else {
                // Allow default behavior (navigation to home with hash)
                setMobileMenuOpen(false);
            }
        } else {
            // Standard page navigation
            setMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || pathname !== "/"
                ? "bg-navy/80 backdrop-blur-md border-slate-700 py-4"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <img src="/logo.png" alt="Vendax Logo" className="h-10 w-auto" />
                    <span className="text-white font-bold text-xl tracking-tight block ml-2">Vendax Systems Labs</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#"
                        className="bg-electric hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    >
                        Contact Sales
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy border-t border-slate-800"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-slate-300 hover:text-white text-left py-2 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
