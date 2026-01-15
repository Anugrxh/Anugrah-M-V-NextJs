"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: React.ReactNode;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
    delay?: number; // Added delay prop
}

const ScrollFloat = ({
    children,
    animationDuration = 1,
    ease = "power3.out",
    scrollStart = "center bottom+=50%",
    scrollEnd = "bottom bottom-=40%",
    stagger = 0,
    delay = 0,
    className = "",
}: ScrollFloatProps & { className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: animationDuration,
                ease: ease,
                stagger: stagger,
                delay: delay,
                scrollTrigger: {
                    trigger: el,
                    start: scrollStart,
                    end: scrollEnd,
                    toggleActions: "play none none reverse",
                    // markers: true, // Uncomment for debugging
                },
            }
        );
    }, [animationDuration, ease, scrollStart, scrollEnd, stagger, delay]);

    return <div ref={containerRef} className={className}>{children}</div>;
};

export default ScrollFloat;
