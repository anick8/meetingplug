import { CALENDLY_URL, CALL_IS_FOR } from "@/lib/content";
import { CheckIcon } from "./icons";

export default function CloseCta() {
  return (
    <section className="close">
      <div className="frame close-grid">
        <div className="close-main">
          <h2>Let&apos;s Get Introduced</h2>
          <p>This is a conversation to get to know you, your business, and see if there&apos;s potential to help.</p>
          <p>Even if we decide we can&apos;t help you, you&apos;ll still walk away with actionable tactics to implement on your own.</p>
          <a className="btn btn-ink" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book A Free Call
          </a>
        </div>
        <div className="close-for">
          <p className="close-for-title">This call is for:</p>
          <ul className="rows">
            {CALL_IS_FOR.map((t) => (
              <li className="row row-check" key={t}>
                <span className="tick">
                  <CheckIcon />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
