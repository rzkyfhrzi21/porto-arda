import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Sidebar />
      <TopBar />
      <MobileNav />

      {/* Main Content */}
      <main className="lg:ml-72 pt-[100px] px-6 max-w-6xl mx-auto flex flex-col gap-[120px] pb-[120px]">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
