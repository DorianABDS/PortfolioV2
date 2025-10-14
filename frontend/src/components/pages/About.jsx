import { useState, useEffect } from "react";

export default function About() {
    const [skills, setSkills] = useState({
        frontend: [],
        backend: [],
        tools: [],
    });
    const [loading, setLoading] = useState(true);

    // Retrieve skills from the API
    useEffect(() => {
        fetch("http://localhost:5000/api/skills")
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // Base styles
    const sectionBase = "flex items-center justify-center";
    const containerBase =
        "w-full h-full relative rounded-[30px] overflow-hidden";
    const contentBase =
        "relative z-10 w-full pt-10 flex flex-col overflow-y-auto";
    const titleBase =
        "uppercase font-orbitron leading-[1] text-white font-normal text-2xl";
    const descriptionBase = "text-white font-light text-justify";

    // Responsive classes for section
    const sectionSizes = {
        sm: "h-screen p-[10px]",
        md: "md:p-[10px]",
        lg: "lg:p-[10px]",
        xl: "xl:p-[10px]",
        "2xl": "2xl:p-[10px]",
    };

    // Responsive classes for container
    const containerSizes = {
        sm: "p-6",
        md: "md:p-12",
        lg: "lg:p-16",
        xl: "xl:p-20",
        "2xl": "2xl:p-[100px]",
    };

    // Responsive classes for title
    const titleSizes = {
        sm: "text-4xl",
        md: "md:text-6xl",
        lg: "lg:text-7xl",
        xl: "xl:text-8xl",
        "2xl": "2xl:text-9xl",
    };

    // Responsive classes for description
    const descriptionSizes = {
        sm: "text-sm w-full mt-6",
        md: "md:text-base md:w-full md:mt-8",
        lg: "lg:text-base lg:w-full lg:mt-10",
        xl: "xl:text-base xl:w-full xl:mt-12",
        "2xl": "2xl:text-lg 2xl:w-full 2xl:mt-16",
    };

    // Responsive classes for skills section
    const skillsSectionSizes = {
        sm: "mt-8 pb-8",
        md: "md:mt-10 md:pb-10",
        lg: "lg:mt-12 lg:pb-12",
        xl: "xl:mt-14 xl:pb-14",
        "2xl": "2xl:mt-16 2xl:pb-16",
    };

    // Assembling responsive classes
    const sectionClass = `${sectionBase} ${sectionSizes.sm} ${sectionSizes.md} ${sectionSizes.lg} ${sectionSizes.xl} ${sectionSizes["2xl"]}`;
    const containerClass = `${containerBase} ${containerSizes.sm} ${containerSizes.md} ${containerSizes.lg} ${containerSizes.xl} ${containerSizes["2xl"]}`;
    const contentClass = `${contentBase}`;
    const titleClass = `${titleBase} ${titleSizes.sm} ${titleSizes.md} ${titleSizes.lg} ${titleSizes.xl} ${titleSizes["2xl"]}`;
    const descriptionClass = `${descriptionBase} ${descriptionSizes.sm} ${descriptionSizes.md} ${descriptionSizes.lg} ${descriptionSizes.xl} ${descriptionSizes["2xl"]}`;
    const skillsSectionClass = `${skillsSectionSizes.sm} ${skillsSectionSizes.md} ${skillsSectionSizes.lg} ${skillsSectionSizes.xl} ${skillsSectionSizes["2xl"]}`;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                <div className={contentClass}>
                    {/* Title */}
                    <h1 className={titleClass}>à propos</h1>

                    {/* Description */}
                    <p className={descriptionClass}>
                        Je suis{" "}
                        <span className="font-extrabold">développeur fullstack</span>, passionné par la création d'applications web complètes. Je suis ouvert à de{" "}
                        <span className="font-extrabold">nouvelles opportunités</span>.
                    </p>

                    {/* Skills Section */}
                    <div className={skillsSectionClass}>
                        {loading ? (
                            <p className="text-white/60 text-sm">
                                Chargement des compétences...
                            </p>
                        ) : (
                            <div className="space-y-4">
                                {/* Frontend Skills */}
                                {skills.frontend &&
                                    skills.frontend.length > 0 && (
                                        <div>
                                            <h3 className="font-orbitron text-sm uppercase mb-3 text-[#206C85]">
                                                Frontend
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.frontend.map(
                                                    (skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-all"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}

                                {/* Backend Skills */}
                                {skills.backend &&
                                    skills.backend.length > 0 && (
                                        <div>
                                            <h3 className="font-orbitron text-sm uppercase mb-3 text-[#206C85]">
                                                Backend
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.backend.map(
                                                    (skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-all"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}

                                {/* Tools */}
                                {skills.tools && skills.tools.length > 0 && (
                                    <div>
                                        <h3 className="font-orbitron text-sm uppercase mb-3 text-[#206C85]">
                                            Tools
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.tools.map(
                                                (skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-all"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
