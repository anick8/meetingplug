import { HOW_STEPS } from "@/lib/content";
import { DrawRule } from "./motion";
import Section from "./Section";

export default function HowItWorks() {
  return (
    <Section label="How It Works">
      <h2 className="h2 h2-wide">From cold prospect to signed client</h2>
      <div className="rail">
        <DrawRule className="rule-signal" duration={1.6} />
        <ol className="rail-steps">
          {HOW_STEPS.map((label, i) => (
            <li className="rail-step" key={label}>
              <span className="rail-n">{i + 1}</span>
              <span className="rail-label">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
