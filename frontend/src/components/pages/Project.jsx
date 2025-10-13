export default function Project() {
    // Base styles
    const sectionBase = "flex items-center justify-center";
    const containerBase = "w-full h-full relative rounded-[30px] overflow-hidden";
    const contentBase = "relative z-10 w-full h-full pt-10 flex flex-col overflow-y-auto";
    const titleBase = "uppercase font-orbitron leading-[1] text-white font-normal text-2xl";

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

    // Responsive classes for projects section
    const projectsSectionSizes = {
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
    const projectsSectionClass = `${projectsSectionSizes.sm} ${projectsSectionSizes.md} ${projectsSectionSizes.lg} ${projectsSectionSizes.xl} ${projectsSectionSizes["2xl"]}`;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                <div className={contentClass}>
                    {/* Title */}
                    <h1 className={titleClass}>projets</h1>

                    {/* Projects Section */}
                    <div className={projectsSectionClass}>
                        {/* Vos projets ici */}
                        <p className="text-white">Contenu</p>
                    </div>
                </div>
            </div>
        </section>
    );
}