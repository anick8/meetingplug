import { CONTACT_EMAIL, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import Logo from "./Logo";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Stagger className="footer-grid" gap={0.1}>
          <StaggerItem>
            <Logo />
            <p className="footer-blurb">Cold email systems that predictably fill B2B pipelines with qualified prospects.</p>
          </StaggerItem>
          <StaggerItem>
            <h5>About</h5>
            <a href="#founder">About Us</a>
          </StaggerItem>
          <StaggerItem>
            <h5>Legal</h5>
            {/* TODO: point at real Privacy Policy / Terms pages once they exist */}
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-conditions">Terms &amp; Conditions</a>
          </StaggerItem>
          <StaggerItem>
            <h5>Contact</h5>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </StaggerItem>
        </Stagger>
        <Reveal className="footer-bottom" y={12}>
          <span>© 2026 Meeting Plug. All rights reserved.</span>
        </Reveal>
      </div>
    </footer>
  );
}
