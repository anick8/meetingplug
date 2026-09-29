import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeetingPlug — Double Your Sales Pipeline Value",
  description: "MeetingPlug helps B2B businesses set up and manage cold email systems that predictably fill their pipeline with qualified prospects.",
};

const CONTRACT = `<!--
THESIS: The page's picture is its proof: case-study numerals at poster scale on a rigid grid. Refuses the pastel-gradient hero and the icon-card grid.
OWN-WORLD: newsprint gray-white ground #EDEDEA, ink #16130F, coral #F1502F as the only signal (CTA, money figure, closing field). Archivo heavy grotesk, hairline rules, square corners, no shadows.
STORY: A sales leader sees results first, reads the five-step system on a ruled rail, meets the founder, books the call.
FIRST VIEWPORT: 12-col grid. Cols 1-7 headline, sub, coral CTA. Cols 9-12 stack 994 / 5 / $180,000 between hairlines that draw in. Running caption strip at the foot.
FORM: Swiss Pipeline Poster, candidate 4 of 7, seed key 6240c77a.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <MotionProvider>{children}</MotionProvider>
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=f5c6ec65-77b2-4ea6-80d9-c0935677ef67"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
