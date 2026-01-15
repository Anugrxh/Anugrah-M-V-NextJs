"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassButton from "../ui/GlassButton";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "py-3" : "py-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                    ANUGRAH <span className="text-white/40">M V</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 glass-morphism px-2 py-2 rounded-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <GlassButton href="#contact">Contact Me</GlassButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
                <div
                    className={cn(
                        "absolute right-0 top-0 bottom-0 w-3/4 max-w-sm glass border-l border-white/10 p-10 flex flex-col gap-8 transition-transform duration-300",
                        isOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-semibold text-white/80 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto">
                        <GlassButton href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                            Contact Me
                        </GlassButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
