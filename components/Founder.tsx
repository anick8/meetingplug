import Image from "next/image";
import { FOUNDER, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import { LinkedInIcon, YouTubeIcon } from "./icons";
import Section from "./Section";

export default function Founder() {
  return (
    <Section id="founder" label="About">
      <div className="split split-founder">
        <div className="founder-photo">
          <Image src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of MeetingPlug`} width={768} height={752} sizes="(min-width: 820px) 28vw, 100vw" />
        </div>
        <div className="founder-text">
          <h3 className="h3">
            {FOUNDER.name} — {FOUNDER.role}
          </h3>
          {FOUNDER.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="socials">
            <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="icon-link" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
