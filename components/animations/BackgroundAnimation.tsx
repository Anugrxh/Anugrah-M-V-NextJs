"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BackgroundAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Create subtle floating orbs
            const orbs = document.querySelectorAll(".orb");
            orbs.forEach((orb) => {
                gsap.to(orb, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none"
        >
            {/* Subtle Gradient Glows */}
            <div
                className="orb absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px]"
                style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
            />
            <div
                className="orb absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[150px]"
                style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
            />
            <div
                className="orb absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full opacity-10 blur-[100px]"
                style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
            />

            {/* Grain / Noise Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default BackgroundAnimation;
