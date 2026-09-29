import type { ReactNode } from "react";
import { DrawRule } from "./motion";

/** Ruled section: heavy top rule that draws in, side label, 10-column body. */
export default function Section({ id, label, className = "", children }: { id?: string; label?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`sec ${className}`}>
      <div className="frame">
        <DrawRule className="rule-heavy" />
        <div className="sec-inner">
          {label && <span className="side-label">{label}</span>}
          <div className="sec-main">{children}</div>
        </div>
      </div>
    </section>
  );
}
