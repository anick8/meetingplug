"use client";

import { CASE_STUDIES } from "@/lib/content";
import CountUp from "./CountUp";
import { DrawRule } from "./motion";

const STEP = 0.35;

export default function HeroProof() {
  const c = CASE_STUDIES[0];
  const summary = c.stats.map((s) => `${s.prefix ?? ""}${s.value.toLocaleString("en-US")} ${s.l}`).join(", ");
  return (
    <a className="proof" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`Case study: ${summary}`}>
      {c.stats.map((s, i) => (
        <div className="proof-row" key={s.l}>
          <DrawRule delay={i * STEP} />
          <div className="proof-line">
            <CountUp className={`num${i === c.stats.length - 1 ? " num-signal" : ""}`} value={s.value} prefix={s.prefix} delay={i * STEP + 0.25} />
            <span className="proof-label">{s.l}</span>
          </div>
        </div>
      ))}
      <DrawRule delay={c.stats.length * STEP} />
    </a>
  );
}
