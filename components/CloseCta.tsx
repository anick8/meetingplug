import { CALENDLY_URL, CALL_IS_FOR } from "@/lib/content";
import Check from "./Check";

export default function CloseCta() {
  return (
    <section className="close">
      <div className="wrap">
        <div className="close-inner">
          <div>
            <h2>Let&apos;s Get Introduced</h2>
            <p>This is a conversation to get to know you, your business, and see if there&apos;s potential to help.</p>
            <p>Even if we decide we can&apos;t help you, you&apos;ll still walk away with actionable tactics to implement on your own.</p>
            <a className="btn btn-coral close-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book A Free Call
            </a>
          </div>
          <div>
            <p className="close-for">This call is for:</p>
            <div className="close-checks">
              {CALL_IS_FOR.map((t) => (
                <Check key={t}>{t}</Check>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
