import Image from "next/image";
import { FOUNDER, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import { LinkedInIcon, YouTubeIcon } from "./icons";
import { Reveal } from "./motion";

export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="wrap">
        <Reveal className="founder-grid" y={32}>
          <Reveal className="founder-photo" y={0} scale={0.8} spring delay={0.15}>
            <Image src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of MeetingPlug`} width={768} height={752} sizes="150px" />
          </Reveal>
          <Reveal x={32} y={0} delay={0.25}>
            <h3>
              {FOUNDER.name} — {FOUNDER.role}
            </h3>
            {FOUNDER.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="founder-social">
              <a className="icon-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="icon-link" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
