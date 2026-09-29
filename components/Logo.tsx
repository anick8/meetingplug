import Image from "next/image";

export default function Logo() {
  return (
    <a href="#" className="logo" aria-label="MeetingPlug">
      <Image src="/images/meetingplug-logo-dark-1.png" alt="MeetingPlug" width={452} height={69} priority />
    </a>
  );
}
