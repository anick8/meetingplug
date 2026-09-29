import { CALENDLY_URL } from "@/lib/content";
import HeroProof from "./HeroProof";
import { DrawRule } from "./motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="frame">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Double Your Sales
              <br />
              Pipeline Value
            </h1>
            <div className="hero-lower">
              <p className="hero-sub">Predictably fill your pipeline with qualified prospects.</p>
              <a className="btn btn-coral" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book A Free Call
              </a>
            </div>
          </div>
          <HeroProof />
        </div>
        <div className="hero-foot">
          <DrawRule />
          <span className="caption">B2B Lead Generation Agency</span>
        </div>
      </div>
    </section>
  );
}
