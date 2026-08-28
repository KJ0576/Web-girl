import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CastSection from "@/components/CastSection";
import StaffSection from "@/components/StaffSection";
import MessageSection from "@/components/MessageSection";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import AmbientEffects from "@/components/AmbientEffects";
import { imageExists } from "@/lib/checkImage";

export default function Home() {
  const heroHasImage = imageExists("/images/hero.jpg");

  return (
    <>
      <AmbientEffects />
      <Header />
      <main>
        <Hero hasImage={heroHasImage} />
        <Introduction />
        <CastSection />
        <StaffSection />
        <MessageSection />
        <Access />
      </main>
      <Footer />
    </>
  );
}
