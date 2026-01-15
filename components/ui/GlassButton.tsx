"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

const GlassButton = ({ children, className, href, ...props }: GlassButtonProps) => {
    const content = (
        <button
            className={cn(
                "relative px-6 py-2 rounded-full font-medium transition-all duration-300",
                "glass hover:bg-white/10 hover:border-white/20 active:scale-95",
                "text-white/80 hover:text-white",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                {content}
            </a>
        );
    }

    return content;
};

export default GlassButton;
