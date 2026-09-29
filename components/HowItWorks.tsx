import { HOW_STEPS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How It Works</span>
          <h2>From cold prospect to signed client</h2>
        </div>
        <div className="how-grid">
          {HOW_STEPS.map((label, i) => (
            <div className="how-step" key={label}>
              <div className="circle">{i + 1}</div>
              <div className="lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
