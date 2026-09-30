import { CALENDLY_URL, LINKEDIN_URL, NAV_LINKS } from "@/lib/content";
import { LinkedInIcon } from "./icons";
import Logo from "./Logo";
import { DrawRule, PressLink, Resolve } from "./motion";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="frame nav">
        <Resolve mount y={-8}>
          <Logo />
        </Resolve>
        <Resolve mount y={-8} delay={0.08} className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </Resolve>
        <Resolve mount y={-8} delay={0.16} className="nav-actions">
          <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <PressLink className="btn btn-ink btn-sm" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Contact Us
          </PressLink>
        </Resolve>
      </nav>
      <DrawRule mount duration={0.9} />
    </header>
  );
}
