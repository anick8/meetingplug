import { PIPELINE_CHECKS } from "@/lib/content";
import { CheckIcon } from "./icons";
import Section from "./Section";

export default function ChecksSection() {
  return (
    <Section>
      <div className="split">
        <h2 className="h2 split-head">A done-for-you system that fills your pipeline</h2>
        <ul className="rows split-body">
          {PIPELINE_CHECKS.map((t) => (
            <li className="row row-check" key={t}>
              <span className="tick">
                <CheckIcon />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
