import ChecksSection from "@/components/ChecksSection";
import CloseCta from "@/components/CloseCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChecksSection />
        <Services />
        <HowItWorks />
        <Results />
        <Faq />
        <Founder />
        <CloseCta />
      </main>
      <Footer />
    </>
  );
}
