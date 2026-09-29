"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQS } from "@/lib/content";
import { EASE, Reveal, Stagger, StaggerItem } from "./motion";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">FAQ</span>
          <h2>Frequently asked questions</h2>
        </Reveal>
        <Stagger className="faq-list" gap={0.08}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem className="faq-item" key={f.q}>
                <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  {f.q}
                  <motion.span className="plus" aria-hidden="true" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25, ease: EASE }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      className="faq-a"
                      id={`faq-a-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
