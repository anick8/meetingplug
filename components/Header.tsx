"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { CALENDLY_URL, LINKEDIN_URL, NAV_LINKS } from "@/lib/content";
import { LinkedInIcon } from "./icons";
import Logo from "./Logo";
import { EASE, MotionLink } from "./motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  return (
    <motion.header className={scrolled ? "scrolled" : undefined} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: EASE }}>
      <nav>
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-social">
          <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <MotionLink className="btn btn-dark nav-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Contact Us
          </MotionLink>
        </div>
      </nav>
    </motion.header>
  );
}
