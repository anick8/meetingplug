import { PIPELINE_CHECKS } from "@/lib/content";
import Check from "./Check";

export default function ChecksSection() {
  return (
    <section className="checks-section">
      <div className="wrap checks-inner">
        <h2>A done-for-you system that fills your pipeline</h2>
        <div className="check-grid">
          {PIPELINE_CHECKS.map((t) => (
            <Check key={t}>{t}</Check>
          ))}
        </div>
      </div>
    </section>
  );
}
