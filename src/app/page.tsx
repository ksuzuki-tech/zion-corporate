import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { AboutSection } from "@/components/AboutSection";
import { RecruitSection } from "@/components/RecruitSection";
import { CompanySection } from "@/components/CompanySection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="section-divider" />
      <BrandsSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <RecruitSection />
      <div className="section-divider" />
      <CompanySection />
      <div className="section-divider" />
      <ContactSection />
    </main>
  );
}
