import Image from "next/image";
import { FOUNDER, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/content";
import { LinkedInIcon, YouTubeIcon } from "./icons";

export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="wrap">
        <div className="founder-grid">
          <div className="founder-photo">
            <Image src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of MeetingPlug`} width={768} height={752} sizes="150px" />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
