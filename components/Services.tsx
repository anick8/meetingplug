import { SERVICES } from "@/lib/content";
import { Resolve, RuledItem, RuledList } from "./motion";
import Section from "./Section";

export default function Services() {
  return (
    <Section id="offer" label="What We Offer">
      <div className="split">
        <Resolve className="split-head">
          <h2 className="h2">Comprehensive email marketing solutions</h2>
          <p className="lede">Designed to maximize outreach effectiveness for established B2B businesses.</p>
        </Resolve>
        <RuledList className="split-body">
          {SERVICES.map((s) => (
            <RuledItem className="row-svc" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </RuledItem>
          ))}
        </RuledList>
      </div>
    </Section>
  );
}
