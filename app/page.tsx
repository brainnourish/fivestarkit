import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import BeforeAfter from "@/components/sections/BeforeAfter";
import WhoItsFor from "@/components/sections/WhoItsFor";
import WhyReviews from "@/components/sections/WhyReviews";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <WhatsIncluded />
        <BeforeAfter />
        <WhoItsFor />
        <WhyReviews />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
