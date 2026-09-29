"use client";

import { motion, type Variants } from "motion/react";
import { CALENDLY_URL } from "@/lib/content";
import { EASE, MotionLink, riseVariants } from "./motion";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } };
const heading: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const word: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

const LINES = [["Double", "Your", "Sales"], ["Pipeline", "Value"]];

export default function Hero() {
  return (
    <section className="hero">
      <motion.div className="blob blob-a" aria-hidden="true" animate={{ x: [0, 60, -20], y: [0, 40, 80], scale: [1, 1.15, 0.95] }} transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
      <motion.div className="blob blob-b" aria-hidden="true" animate={{ x: [0, -70, 30], y: [0, -50, 20], scale: [1, 0.9, 1.1] }} transition={{ duration: 17, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
      <motion.div className="wrap" variants={container} initial="hidden" animate="show">
        <motion.div className="eyebrow" variants={riseVariants}>
          B2B Lead Generation Agency
        </motion.div>
        <motion.h1 variants={heading}>
          {LINES.map((words, i) => (
            <span key={i}>
              {words.map((w) => (
                <span key={w}>
                  <motion.span variants={word} style={{ display: "inline-block" }}>
                    {w}
                  </motion.span>{" "}
                </span>
              ))}
              {i < LINES.length - 1 && <br />}
            </span>
          ))}
        </motion.h1>
        <motion.p className="hero-sub" variants={riseVariants}>
          Predictably fill your pipeline with qualified prospects.
        </motion.p>
        <motion.div className="hero-actions" variants={riseVariants}>
          <MotionLink className="btn btn-coral" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book A Free Call
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
