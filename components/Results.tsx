import Image from "next/image";
import { CASE_STUDIES } from "@/lib/content";
import Section from "./Section";

export default function Results() {
  return (
    <Section id="results" label="Case Studies">
      <h2 className="h2 h2-wide">Proven results from live campaigns</h2>
      <p className="lede">Click a screenshot to explore the full case study.</p>
      <div className="cases">
        {CASE_STUDIES.map((c) => (
          <a className="case" key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
            <div className="shot">
              <Image src={c.image} alt="Campaign case study screenshot" width={c.width} height={c.height} sizes="(min-width: 820px) 62vw, 100vw" />
            </div>
            <dl className="case-stats">
              {c.stats.map((s, i) => (
                <div className="case-stat" key={s.l}>
                  <dt>{s.l}</dt>
                  <dd className={`num${i === c.stats.length - 1 ? " num-signal" : ""}`}>
                    {s.prefix}
                    {s.value.toLocaleString("en-US")}
                  </dd>
                </div>
              ))}
            </dl>
          </a>
        ))}
      </div>
    </Section>
  );
}
