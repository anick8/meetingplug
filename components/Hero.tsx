import { CALENDLY_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow">B2B Lead Generation Agency</div>
        <h1>
          Double Your Sales
          <br />
          Pipeline Value
        </h1>
        <p className="hero-sub">Predictably fill your pipeline with qualified prospects.</p>
        <div className="hero-actions">
          <a className="btn btn-coral" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book A Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
