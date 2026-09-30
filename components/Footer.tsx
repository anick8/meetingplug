import { CONTACT_EMAIL, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import Logo from "./Logo";
import { DrawRule, Resolve } from "./motion";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame">
        <div className="footer-grid">
          <Resolve className="footer-brand">
            <Logo />
            <p>Cold email systems that predictably fill B2B pipelines with qualified prospects.</p>
          </Resolve>
          <Resolve delay={0.08}>
            <h5>About</h5>
            <a href="#founder">About Us</a>
          </Resolve>
          <Resolve delay={0.16}>
            <h5>Legal</h5>
            {/* TODO: point at real Privacy Policy / Terms pages once they exist */}
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-conditions">Terms &amp; Conditions</a>
          </Resolve>
          <Resolve delay={0.24}>
            <h5>Contact</h5>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </Resolve>
        </div>
        <div className="footer-rule">
          <DrawRule />
        </div>
        <Resolve className="footer-bottom" y={8}>
          <span>© 2026 Meeting Plug. All rights reserved.</span>
        </Resolve>
      </div>
    </footer>
  );
}
