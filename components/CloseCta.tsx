import { CALENDLY_URL, CALL_IS_FOR } from "@/lib/content";
import { CheckIcon } from "./icons";
import { DrawRule, PressLink, Resolve, RuledItem, RuledList, Tick } from "./motion";

export default function CloseCta() {
  return (
    <section className="close">
      <DrawRule className="rule-heavy" />
      <div className="frame close-grid">
        <div className="close-main">
          <Resolve as="h2" y={24}>
            Let&apos;s Get Introduced
          </Resolve>
          <Resolve as="p" delay={0.1}>
            This is a conversation to get to know you, your business, and see if there&apos;s potential to help.
          </Resolve>
          <Resolve as="p" delay={0.2}>
            Even if we decide we can&apos;t help you, you&apos;ll still walk away with actionable tactics to implement on your own.
          </Resolve>
          <Resolve delay={0.3}>
            <PressLink className="btn btn-ink" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book A Free Call
            </PressLink>
          </Resolve>
        </div>
        <div className="close-for">
          <Resolve as="p" className="close-for-title" delay={0.15}>
            This call is for:
          </Resolve>
          <RuledList>
            {CALL_IS_FOR.map((t) => (
              <RuledItem className="row-check" key={t}>
                <Tick>
                  <CheckIcon />
                </Tick>
                <span>{t}</span>
              </RuledItem>
            ))}
          </RuledList>
        </div>
      </div>
    </section>
  );
}
