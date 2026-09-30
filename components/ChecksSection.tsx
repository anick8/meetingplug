import { PIPELINE_CHECKS } from "@/lib/content";
import { CheckIcon } from "./icons";
import { Resolve, RuledItem, RuledList, Tick } from "./motion";
import Section from "./Section";

export default function ChecksSection() {
  return (
    <Section>
      <div className="split">
        <Resolve as="h2" className="h2 split-head">
          A done-for-you system that fills your pipeline
        </Resolve>
        <RuledList className="split-body">
          {PIPELINE_CHECKS.map((t) => (
            <RuledItem className="row-check" key={t}>
              <Tick>
                <CheckIcon />
              </Tick>
              <span>{t}</span>
            </RuledItem>
          ))}
        </RuledList>
      </div>
    </Section>
  );
}
