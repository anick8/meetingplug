import { SERVICES } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function Services() {
  return (
    <section className="services" id="offer">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">What We Offer</span>
          <h2>Comprehensive email marketing solutions</h2>
          <p>Designed to maximize outreach effectiveness for established B2B businesses.</p>
        </Reveal>
        <Stagger className="service-grid">
          {SERVICES.map((s, i) => (
            <StaggerItem hover className="service-card" key={s.title}>
              <div className="icon">{String(i + 1).padStart(2, "0")}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
