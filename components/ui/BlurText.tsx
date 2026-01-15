"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface BlurTextProps {
    text: string;
    delay?: number;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom";
    className?: string;
    onAnimationComplete?: () => void;
}

const BlurText = ({
    text,
    delay = 0,
    animateBy = "words",
    direction = "top",
    className,
    onAnimationComplete,
}: BlurTextProps) => {
    const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const elements = elementsRef.current.filter((el) => el !== null);
        if (elements.length === 0) return;

        const fromY = direction === "top" ? 20 : -20;

        gsap.fromTo(
            elements,
            {
                opacity: 0,
                filter: "blur(10px)",
                y: fromY,
            },
            {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: delay / 1000,
                onComplete: onAnimationComplete,
            }
        );
    }, [text, delay, direction, onAnimationComplete]);

    const items = animateBy === "words" ? text.split(" ") : text.split("");

    return (
        <div className={cn("inline-block", className)}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span
                        ref={(el) => {
                            elementsRef.current[index] = el;
                        }}
                        className="inline-block leading-[0.9]"
                    >
                        {item}
                    </span>
                    {animateBy === "words" && index < items.length - 1 && " "}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BlurText;
