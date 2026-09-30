import Image from "next/image";
import { CASE_STUDIES } from "@/lib/content";
import CountUp from "./CountUp";
import { Resolve, RuledItem, RuledList } from "./motion";
import Section from "./Section";

export default function Results() {
  return (
    <Section id="results" label="Case Studies">
      <Resolve as="h2" className="h2 h2-wide">
        Proven results from live campaigns
      </Resolve>
      <Resolve as="p" className="lede" delay={0.1}>
        Click a screenshot to explore the full case study.
      </Resolve>
      <RuledList className="cases" gap={0.15}>
        {CASE_STUDIES.map((c) => (
          <RuledItem key={c.href}>
            <a className="case" href={c.href} target="_blank" rel="noopener noreferrer">
              <Resolve y={0} scale={0.98} className="shot">
                <Image src={c.image} alt="Campaign case study screenshot" width={c.width} height={c.height} sizes="(min-width: 820px) 62vw, 100vw" />
              </Resolve>
              <dl className="case-stats">
                {c.stats.map((s, i) => (
                  <div className="case-stat" key={s.l}>
                    <dt>{s.l}</dt>
                    <dd>
                      <CountUp className={`num${i === c.stats.length - 1 ? " num-signal" : ""}`} value={s.value} prefix={s.prefix} delay={i * 0.15} />
                    </dd>
                  </div>
                ))}
              </dl>
            </a>
          </RuledItem>
        ))}
      </RuledList>
    </Section>
  );
}
