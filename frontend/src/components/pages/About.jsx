export default function About() {
    // Base styles
    const sectionBase = "flex items-center justify-center";
    const containerBase =
        "w-full h-full relative rounded-[30px] overflow-hidden";
    const contentBase = "relative z-10 w-full pt-10 flex flex-col";
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

    // Assembling responsive classes
    const sectionClass = `${sectionBase} ${sectionSizes.sm} ${sectionSizes.md} ${sectionSizes.lg} ${sectionSizes.xl} ${sectionSizes["2xl"]}`;
    const containerClass = `${containerBase} ${containerSizes.sm} ${containerSizes.md} ${containerSizes.lg} ${containerSizes.xl} ${containerSizes["2xl"]}`;
    const contentClass = `${contentBase}`;
    const titleClass = `${titleBase} ${titleSizes.sm} ${titleSizes.md} ${titleSizes.lg} ${titleSizes.xl} ${titleSizes["2xl"]}`;
    const descriptionClass = `${descriptionBase} ${descriptionSizes.sm} ${descriptionSizes.md} ${descriptionSizes.lg} ${descriptionSizes.xl} ${descriptionSizes["2xl"]}`;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                <div className={contentClass}>
                    {/* Title */}
                    <h1 className={titleClass}>à propos</h1>
                    {/* Description */}
                    <p className={descriptionClass}>
                        JJe suis{" "}
                        <span className="font-extrabold">
                            développeur fullstack
                        </span>
                        , passionné par la création d'applications web complètes, du front-end à l'architecture back-end. Découvrez mes travaux dans la section{" "}
                        <span className="font-extrabold">Projets</span>.
                        <br />
                        <br />
                        Mon parcours m'a permis de renforcer mes compétences et d'élargir ma vision du développement. J'aime partager mes apprentissages et échanger avec d'autres développeurs.
                        <br />
                        <br />
                        Je suis ouvert à de{" "}
                        <span className="font-extrabold">nouvelles opportunités</span>
                        . Contactez-moi via{" "}
                        <a
                            href="https://www.linkedin.com/in/dorian-abbadessa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-extrabold text-[#206C85] hover:text-[#154555] transition-colors"
                        >
                            LinkedIn
                        </a>
                        , à consulter mon{" "}
                        <a
                            href="https://github.com/DorianABDS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-extrabold text-[#206C85] hover:text-[#154555] transition-colors"
                        >
                            GitHub
                        </a>
                        , ou à m'écrire directement par{" "}
                        <a
                            href="mailto:abbadessadorian@gmail.com"
                            className="font-extrabold text-[#206C85] hover:text-[#154555] transition-colors"
                        >
                            mail
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
