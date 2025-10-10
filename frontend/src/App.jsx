import BodyBackground from "./components/layout/BodyBackground";
import Overlay from "./components/layout/Overlay";
import Navbar from "./components/layout/Navbar";
import ScrollContainer from "./components/layout/ScrollContainer";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import useScrollSection from "./hooks/useScrollSection";

export default function App() {
  const totalSections = 4;
  const { currentSection, setCurrentSection } = useScrollSection(totalSections);

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Backgrounds */}
      <BodyBackground />
      <Overlay color="rgb(20,20,20)" />

      {/* Navbar avec navigation */}
      <Navbar setCurrentSection={setCurrentSection} />

      {/* Container scrollable */}
      <ScrollContainer currentSection={currentSection}>
        {/* Chaque section doit avoir h-screen pour prendre tout l’écran */}
        <Hero title="Section 1" />
        <About title="Section 2" />
        <Project title="Section 3" />
        <Contact title="Section 4" />
      </ScrollContainer>
    </div>
  );
}
