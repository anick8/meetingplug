"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** A hairline that draws itself left to right the first time it scrolls into view. */
export function DrawRule({ delay = 0, duration = 1, className = "" }: { delay?: number; duration?: number; className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`rule ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    />
  );
}
