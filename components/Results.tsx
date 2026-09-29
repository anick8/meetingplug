import Image from "next/image";
import { CASE_STUDIES } from "@/lib/content";

export default function Results() {
  return (
    <section className="results" id="results">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Case Studies</span>
          <h2>Proven results from live campaigns</h2>
          <p>Click a screenshot to explore the full case study.</p>
        </div>
        <div className="result-grid">
          {CASE_STUDIES.map((c) => (
            <a className="result-card" key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
              <Image src={c.image} alt="Campaign case study screenshot" width={c.width} height={c.height} sizes="(min-width: 760px) 540px, 100vw" />
              <div className="result-stats">
                {c.stats.map((s) => (
                  <div className="stat" key={s.l}>
                    <span className="n">{s.n}</span>
                    <span className="l">{s.l}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
