import Image from "next/image";
import { FOUNDER, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import { LinkedInIcon, YouTubeIcon } from "./icons";
import { Resolve } from "./motion";
import Section from "./Section";

export default function Founder() {
  return (
    <Section id="founder" label="About">
      <div className="split split-founder">
        <Resolve wipe y={0} className="founder-photo">
          <Image src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of MeetingPlug`} width={768} height={752} sizes="(min-width: 820px) 28vw, 100vw" />
        </Resolve>
        <div className="founder-text">
          <Resolve as="h3" className="h3" delay={0.15}>
            {FOUNDER.name} — {FOUNDER.role}
          </Resolve>
          {FOUNDER.bio.map((p, i) => (
            <Resolve as="p" key={p} delay={0.25 + i * 0.1}>
              {p}
            </Resolve>
          ))}
          <Resolve className="socials" delay={0.45}>
            <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="icon-link" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </Resolve>
        </div>
      </div>
    </Section>
  );
}
