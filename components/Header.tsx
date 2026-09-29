import { CALENDLY_URL, LINKEDIN_URL, NAV_LINKS } from "@/lib/content";
import { LinkedInIcon } from "./icons";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="frame nav">
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="btn btn-ink btn-sm" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
