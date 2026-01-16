"use client";

import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 pt-16 pb-12 bg-black/20 backdrop-blur-md relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left Side: Brand & Contact */}
                    <div className="space-y-6 max-w-md">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold text-white tracking-tighter">Anugrah M V</h2>
                            <p className="text-emerald-400 font-medium tracking-wide text-lg">Full Stack Developer</p>
                        </div>

                        <div className="flex flex-col gap-3 text-white/60 text-sm">
                            <a
                                href="mailto:amvanugrah@gmail.com"
                                className="flex items-center gap-2 hover:text-emerald-400 transition-colors w-fit group"
                            >
                                <Mail size={16} className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
                                amvanugrah@gmail.com
                            </a>
                            <a
                                href="tel:+917356718496"
                                className="flex items-center gap-2 hover:text-emerald-400 transition-colors w-fit group"
                            >
                                <Phone size={16} className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
                                +91 7356718496 (Call)
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Socials & Credits */}
                    <div className="flex flex-col md:items-end space-y-8 w-full md:w-auto">
                        {/* Social Icons */}
                        <div className="flex gap-5">
                            {[
                                {
                                    icon: Linkedin,
                                    href: "https://linkedin.com/in/anugrahmv",
                                    label: "LinkedIn",
                                    color: "hover:text-[#0077b5]"
                                },
                                {
                                    icon: Github,
                                    href: "https://github.com/Anugrxh",
                                    label: "GitHub",
                                    color: "hover:text-[#fafafa]"
                                },
                                {
                                    icon: Instagram,
                                    href: "https://www.instagram.com/anu_grxhh_?igsh=MXcxbTd0anZsa2t2cw%3D%3D",
                                    label: "Instagram",
                                    color: "hover:text-[#e1306c]"
                                },
                                {
                                    icon: MessageCircle,
                                    href: "https://wa.me/917356718496",
                                    label: "WhatsApp",
                                    color: "hover:text-[#25D366]"
                                }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`p-3 rounded-full bg-white/5 text-white/40 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>

                        {/* Bottom Credit */}
                        <div className="pt-4 border-t border-white/5 md:text-right space-y-1">
                            <p className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase">
                                Designed & Developed by Anugrah M V
                            </p>
                            <p className="text-white/20 text-[10px] font-mono">
                                © {currentYear} ALL RIGHTS RESERVED
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
