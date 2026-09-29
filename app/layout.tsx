import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MeetingPlug — Double Your Sales Pipeline Value",
  description: "MeetingPlug helps B2B businesses set up and manage cold email systems that predictably fill their pipeline with qualified prospects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${poppins.variable} ${sourceSans.variable}`}>
      <body>
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
