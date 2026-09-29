import { PIPELINE_CHECKS } from "@/lib/content";
import Check from "./Check";
import { Reveal, Stagger } from "./motion";

export default function ChecksSection() {
  return (
    <section className="checks-section">
      <div className="wrap checks-inner">
        <Reveal as="h2">A done-for-you system that fills your pipeline</Reveal>
        <Stagger className="check-grid">
          {PIPELINE_CHECKS.map((t) => (
            <Check key={t}>{t}</Check>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
