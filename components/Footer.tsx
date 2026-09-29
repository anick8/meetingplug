import { CONTACT_EMAIL, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-blurb">Cold email systems that predictably fill B2B pipelines with qualified prospects.</p>
          </div>
          <div>
            <h5>About</h5>
            <a href="#founder">About Us</a>
          </div>
          <div>
            <h5>Legal</h5>
            {/* TODO: point at real Privacy Policy / Terms pages once they exist */}
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-conditions">Terms &amp; Conditions</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Meeting Plug. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
