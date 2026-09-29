"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { EASE } from "./motion";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export default function CountUp({ value, prefix = "", delay = 0, className }: { value: number; prefix?: string; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => prefix + fmt(v));

  useEffect(() => {
    if (reduce) {
      count.set(value);
      return;
    }
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.5, delay, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, count, value, delay]);

  return (
    <>
      <motion.span ref={ref} className={className} aria-hidden="true">
        {text}
      </motion.span>
      <span className="sr-only">
        {prefix}
        {fmt(value)}
      </span>
    </>
  );
}
