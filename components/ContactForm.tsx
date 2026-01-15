"use client";

import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import StarBorder from './StarBorder';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset back to idle after 5 seconds to allow sending another message
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message);
            // Reset to idle after 3 seconds so they can try again
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, y: -20 }}
                        className="flex flex-col items-center justify-center py-12 px-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                        >
                            <CheckCircle2 size={80} className="text-emerald-400 mb-6" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-emerald-400/80 text-xl font-medium">I'll get back to you soon.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="relative group">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block ml-1 group-focus-within:text-emerald-400 transition-colors">Your Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-400 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === 'sending'}
                                        placeholder="John Doe"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/30 transition-all backdrop-blur-xl hover:bg-black/60 active:scale-[0.99] disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block ml-1 group-focus-within:text-emerald-400 transition-colors">Your Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-400 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'sending'}
                                        placeholder="john@example.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/30 transition-all backdrop-blur-xl hover:bg-black/60 active:scale-[0.99] disabled:opacity-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <label className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2 block ml-1 group-focus-within:text-emerald-400 transition-colors">Your Message</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-5 text-white/20 group-focus-within:text-emerald-400 transition-colors" size={20} />
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={status === 'sending'}
                                    placeholder="Hey, let's build something amazing together..."
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/30 transition-all backdrop-blur-xl hover:bg-black/60 resize-none active:scale-[0.99] disabled:opacity-50"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 relative min-h-[80px]">
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-6 left-0 right-0 flex items-center justify-center gap-2 text-red-400 text-sm font-medium"
                                >
                                    <AlertCircle size={16} />
                                    {errorMessage}
                                </motion.div>
                            )}

                            <StarBorder
                                as="button"
                                type="submit"
                                color="#10b981"
                                speed="3s"
                                thickness={2}
                                className="w-full"
                                disabled={status === 'sending'}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin text-emerald-400" />
                                            <span className="font-bold tracking-widest uppercase text-sm">Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="font-bold tracking-widest uppercase text-sm">Send Message</span>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </div>
                            </StarBorder>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
