"use client";

import type { ElementType, ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.15 } as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  as?: "div" | "span" | "p" | "h2";
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  spring?: boolean;
  className?: string;
  children: ReactNode;
};

/** Fades + slides an element in the first time it scrolls into view. */
export function Reveal({ as = "div", delay = 0, x = 0, y = 24, scale = 1, spring = false, className, children }: RevealProps) {
  const Tag = motion[as] as unknown as ElementType;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={spring ? { type: "spring", stiffness: 140, damping: 16, delay } : { duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/** Parent that reveals its StaggerItem / Check descendants one after another. */
export function Stagger({ delay = 0, gap = 0.09, className, children }: { delay?: number; gap?: number; className?: string; children: ReactNode }) {
  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } };
  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      {children}
    </motion.div>
  );
}

export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
export const popVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 14 } },
};
const drawVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
};
const variantsByName = { rise: riseVariants, pop: popVariants, draw: drawVariants };

type ItemProps = {
  as?: "div" | "a" | "li";
  variant?: keyof typeof variantsByName;
  hover?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
};

/** Child of <Stagger>. `hover` adds a lift + shadow on hover. */
export function StaggerItem({ as = "div", variant = "rise", hover = false, children, ...rest }: ItemProps) {
  const Tag = motion[as] as unknown as ElementType;
  return (
    <Tag
      variants={variantsByName[variant]}
      whileHover={hover ? { y: -6, boxShadow: "0 18px 40px rgba(22,19,15,0.13)", transition: { duration: 0.25 } } : undefined}
      style={variant === "draw" ? { transformOrigin: "left center" } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

type LinkProps = { href: string; className?: string; target?: string; rel?: string; children: ReactNode };

/** Anchor styled as a button with a springy hover/tap. */
export function MotionLink({ children, ...rest }: LinkProps) {
  return (
    <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} {...rest}>
      {children}
    </motion.a>
  );
}
