import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section className="services" id="offer">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What We Offer</span>
          <h2>Comprehensive email marketing solutions</h2>
          <p>Designed to maximize outreach effectiveness for established B2B businesses.</p>
        </div>
        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={s.title}>
              <div className="icon">{String(i + 1).padStart(2, "0")}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
