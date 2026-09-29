import { SERVICES } from "@/lib/content";
import Section from "./Section";

export default function Services() {
  return (
    <Section id="offer" label="What We Offer">
      <div className="split">
        <div className="split-head">
          <h2 className="h2">Comprehensive email marketing solutions</h2>
          <p className="lede">Designed to maximize outreach effectiveness for established B2B businesses.</p>
        </div>
        <ul className="rows split-body">
          {SERVICES.map((s) => (
            <li className="row row-svc" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
