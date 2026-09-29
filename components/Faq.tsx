"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQS } from "@/lib/content";
import { PlusIcon } from "./icons";
import { EASE } from "./motion";
import Section from "./Section";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" label="FAQ">
      <div className="split">
        <h2 className="h2 split-head">Frequently asked questions</h2>
        <div className="rows split-body">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="row row-faq" key={f.q}>
                <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  {f.q}
                  <motion.span className="plus" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25, ease: EASE }}>
                    <PlusIcon />
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
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
