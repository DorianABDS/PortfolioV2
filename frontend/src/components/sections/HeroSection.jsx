import HeroRectangleCard from '../HeroRectangleCard';

export default function HeroSection() {
    // Base styles
    const sectionBase = "flex items-center justify-center";
    const containerBase = "w-full h-full relative rounded-[30px] overflow-hidden";
    const contentBase = "relative z-10 w-full h-full flex flex-col justify-end";
    const titleBase = "uppercase font-orbitron leading-[1] text-white font-normal";
    const descriptionBase = "text-white font-light";

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

    // Responsive classes for content
    const contentSizes = {
        sm: "pb-20",
        md: "md:pb-44",
        lg: "lg:pb-56",
        xl: "xl:pb-50",
        "2xl": "2xl:pb-72",
    };

    // Responsive classes for title
    const titleSizes = {
        sm: "text-3xl",
        md: "md:text-7xl",
        lg: "lg:text-[90px]",
        xl: "xl:text-[120px]",
        "2xl": "2xl:text-[150px]",
    };

    // Responsive classes for description
    const descriptionSizes = {
        sm: "text-sm w-auto mb-72",
        md: "md:text-base md:max-w-[550px] md:mb-60",
        lg: "lg:text-base lg:max-w-[600px] lg:mb-40",
        xl: "xl:text-2xl xl:max-w-[800px] xl:mb-28",
        "2xl": "2xl:text-xl 2xl:max-w-[900px] 2xl:mb-20",
    };

    // Assembling responsive classes
    const sectionClass = `${sectionBase} ${sectionSizes.sm} ${sectionSizes.md} ${sectionSizes.lg} ${sectionSizes.xl} ${sectionSizes["2xl"]}`;
    const containerClass = `${containerBase} ${containerSizes.sm} ${containerSizes.md} ${containerSizes.lg} ${containerSizes.xl} ${containerSizes["2xl"]}`;
    const contentClass = `${contentBase} ${contentSizes.sm} ${contentSizes.md} ${contentSizes.lg} ${contentSizes.xl} ${contentSizes["2xl"]}`;
    const titleClass = `${titleBase} ${titleSizes.sm} ${titleSizes.md} ${titleSizes.lg} ${titleSizes.xl} ${titleSizes["2xl"]}`;
    const descriptionClass = `${descriptionBase} ${descriptionSizes.sm} ${descriptionSizes.md} ${descriptionSizes.lg} ${descriptionSizes.xl} ${descriptionSizes["2xl"]}`;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                <img
                    src="/img/bg-pf.webp"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Background"
                />

                <div className={contentClass}>
                    {/* Title */}
                    <h1 className={titleClass}>
                        developper
                        <br />
                        fullstack
                    </h1>
                    {/* Description */}
                    <p className={descriptionClass}>
                        Développeur web polyvalent, je mets ma créativité et mes
                        compétences techniques au service de projets innovants
                        et durables
                    </p>
                </div>

                {/* Rectangle Card */}
                <HeroRectangleCard />
            </div>
        </section>
    );
}