"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CounterProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
    suffix?: string;
    prefix?: string;
    decimalPlaces?: number;
}

export default function Counter({
    value,
    direction = "up",
    className = "",
    suffix = "",
    prefix = "",
    decimalPlaces = 0
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 30, // Controls bounciness (higher = less bouncy)
        stiffness: 70, // Controls speed/tightness
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [isInView, motionValue, direction, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + latest.toFixed(decimalPlaces) + suffix;
            }
        });

        return () => springValue.destroy(); // Cleanup listener
    }, [springValue, prefix, suffix, decimalPlaces]);

    return <span ref={ref} className={className} />;
}
