"use client";

import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

import StarBorder from './StarBorder';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-emerald-400 transition-colors">
                        <User size={20} />
                    </div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all backdrop-blur-xl hover:bg-black/60"
                    />
                </div>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-emerald-400 transition-colors">
                        <Mail size={20} />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all backdrop-blur-xl hover:bg-black/60"
                    />
                </div>

                <div className="relative group">
                    <div className="absolute top-4 left-4 pointer-events-none text-white/40 group-focus-within:text-emerald-400 transition-colors">
                        <MessageSquare size={20} />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all backdrop-blur-xl hover:bg-black/60 resize-none"
                    />
                </div>

                <div className="flex justify-center">
                    <StarBorder as="button" type="submit" color="#10b981" speed="4s" className="w-full md:w-auto">
                        <div className="flex items-center gap-2 px-8">
                            <span>Send Message</span>
                            <Send size={18} />
                        </div>
                    </StarBorder>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
