import { HOW_STEPS } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">How It Works</span>
          <h2>From cold prospect to signed client</h2>
        </Reveal>
        <Stagger className="how-grid" gap={0.14}>
          <StaggerItem variant="draw" className="how-line" />
          {HOW_STEPS.map((label, i) => (
            <div className="how-step" key={label}>
              <StaggerItem variant="pop" className="circle">
                {i + 1}
              </StaggerItem>
              <StaggerItem className="lbl">{label}</StaggerItem>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
