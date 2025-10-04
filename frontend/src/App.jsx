import { useState } from 'react';
import Overlay from './components/Overlay';
import ScrollContainer from './components/ScrollContainer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';
import ContactSection from './components/sections/ContactSection';
import useScrollSection from './hooks/useScrollSection';
import bgImage from "./assets/img/bg-pf.webp";

export default function App() {
  const totalSections = 4;
  const { currentSection, setCurrentSection } = useScrollSection(totalSections);

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Overlay />

      <ScrollContainer currentSection={currentSection}>
        <HeroSection
          bgImage={bgImage}
          title="HeroSection"
        />

        <AboutSection title="AboutSection" />

        <ProjectSection title="ProjectSection" />

        <ContactSection title="ContactSection" />
      </ScrollContainer>
    </div>
  );
}