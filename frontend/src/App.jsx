import Overlay from "./components/layout/Overlay";
import ScrollContainer from "./components/layout/ScrollContainer";
import BodyBackground from "./components/layout/BodyBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import useScrollSection from "./hooks/useScrollSection";

export default function App() {
    const totalSections = 4;
    const { currentSection } = useScrollSection(totalSections);

    return (
        <div className="h-screen overflow-hidden">
            <BodyBackground />
            <Overlay color="rgb(20,20,20)" />
            <Navbar />

            <ScrollContainer currentSection={currentSection}>
                <Hero />

                <About />

                <Project title="Section 3" />

                <Contact title="Section 4" />
            </ScrollContainer>
        </div>
    );
}
