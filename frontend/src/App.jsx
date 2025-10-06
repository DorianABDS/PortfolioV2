import Overlay from './components/Overlay';
import ScrollContainer from './components/ScrollContainer';
import BodyBackground from './components/BodyBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';
import ContactSection from './components/sections/ContactSection';
import useScrollSection from './hooks/useScrollSection';

export default function App() {
  const totalSections = 4;
  const { currentSection } = useScrollSection(totalSections);

  return (
    <div className="h-screen overflow-hidden">
      <BodyBackground />
      <Overlay color="rgb(20,20,20)" />
      <Navbar />

      <ScrollContainer currentSection={currentSection}>
        <HeroSection />

        <AboutSection title="Section 2" />

        <ProjectSection title="Section 3" />

        <ContactSection title="Section 4" />
      </ScrollContainer>
    </div>
  );
}