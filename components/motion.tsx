"use client";

import type { ElementType, ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -8% 0px" } as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** A hairline that draws itself left to right, on scroll-in (default) or on mount. */
export function DrawRule({ delay = 0, duration = 1, mount = false, className = "" }: { delay?: number; duration?: number; mount?: boolean; className?: string }) {
  const trigger = mount ? { animate: { scaleX: 1 } } : { whileInView: { scaleX: 1 }, viewport: VIEWPORT };
  return <motion.span aria-hidden="true" className={`rule ${className}`} initial={{ scaleX: 0 }} {...trigger} transition={{ duration, ease: EASE, delay }} />;
}

type ResolveProps = {
  as?: "div" | "span" | "p" | "h2" | "h3";
  delay?: number;
  y?: number;
  scale?: number;
  wipe?: boolean;
  mount?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Content resolves into place: fades in with a small rise. Only the properties that
 * actually animate are set, so a CSS transform on the element (e.g. the vertical
 * side label) is never overwritten by an inline one.
 */
export function Resolve({ as = "div", delay = 0, y = 12, scale, wipe = false, mount = false, className = "", children }: ResolveProps) {
  const Tag = motion[as] as unknown as ElementType;
  const hidden: Record<string, number | string> = { opacity: 0 };
  const shown: Record<string, number | string> = { opacity: 1 };
  if (y) {
    hidden.y = y;
    shown.y = 0;
  }
  if (scale && scale !== 1) {
    hidden.scale = scale;
    shown.scale = 1;
  }
  if (wipe) {
    hidden.clipPath = "inset(0 0 100% 0)";
    shown.clipPath = "inset(0 0 0% 0)";
  }
  const trigger = mount ? { animate: shown } : { whileInView: shown, viewport: VIEWPORT };
  return (
    <Tag className={`${className}${wipe ? " is-wipe" : ""}`.trim() || undefined} initial={hidden} {...trigger} transition={{ duration: 0.6, ease: EASE, delay }}>
      {children}
    </Tag>
  );
}

const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
};
const bodyVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: 0.12 } },
};
const popVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 15, delay: 0.2 } },
};

/** A ruled list: each item draws its own hairline, then its content resolves. A closing rule ends the list. */
export function RuledList({ className = "", gap = 0.08, children }: { className?: string; gap?: number; children: ReactNode }) {
  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: gap } } };
  return (
    <motion.div role="list" className={className || undefined} variants={container} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      {children}
      <motion.span aria-hidden="true" className="rule" variants={ruleVariants} />
    </motion.div>
  );
}

export function RuledItem({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div role="listitem" className="row-item" variants={{ hidden: {}, show: {} }}>
      <motion.span aria-hidden="true" className="rule" variants={ruleVariants} />
      <motion.div className={className || undefined} variants={bodyVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

/** The 32px tick square: springs in with its row. */
export function Tick({ children }: { children: ReactNode }) {
  return (
    <motion.span className="tick" variants={popVariants}>
      {children}
    </motion.span>
  );
}

/** Anchor styled as a button. Press feedback only; hover is a CSS colour swap. */
export function PressLink({ href, className, target, rel, children }: { href: string; className?: string; target?: string; rel?: string; children: ReactNode }) {
  return (
    <motion.a href={href} className={className} target={target} rel={rel} whileTap={{ scale: 0.98 }} transition={{ duration: 0.12 }}>
      {children}
    </motion.a>
  );
}
