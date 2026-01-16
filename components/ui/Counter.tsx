"use client";

import { useEffect, useRef, useState } from "react";
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
        damping: 30,
        stiffness: 70,
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(prefix + (direction === "down" ? value : 0).toFixed(decimalPlaces) + suffix);

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [isInView, motionValue, direction, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(prefix + latest.toFixed(decimalPlaces) + suffix);
        });

        return () => unsubscribe();
    }, [springValue, prefix, suffix, decimalPlaces]);

    return <span ref={ref} className={className}>{displayValue}</span>;
}
