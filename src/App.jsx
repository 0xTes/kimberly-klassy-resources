import Footer from "./components/layout/Footer";
import SiteHeader from "./components/layout/SiteHeader";
import AboutSection from "./components/sections/AboutSection";
import CallToAction from "./components/sections/CallToAction";
import HeroSection from "./components/sections/HeroSection";
import ResourceSection from "./components/sections/ResourceSection";
import { brandConfig } from "./config/brand.config";
import { useDocumentMetadata } from "./hooks/useDocumentMetadata";

export default function App() {
  useDocumentMetadata(brandConfig.seo);

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-brand">
      <SiteHeader brand={brandConfig.identity} />
      <main>
        <HeroSection brand={brandConfig} />
        <ResourceSection resources={brandConfig.resources} />
        <AboutSection about={brandConfig.about} />
        <CallToAction cta={brandConfig.callToAction} />
      </main>
      <Footer footer={brandConfig.footer} brand={brandConfig.identity} />
    </div>
  );
}
