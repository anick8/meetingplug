import { CALENDLY_URL, LINKEDIN_URL, NAV_LINKS } from "@/lib/content";
import { LinkedInIcon } from "./icons";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <nav>
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-social">
          <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="btn btn-dark nav-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
