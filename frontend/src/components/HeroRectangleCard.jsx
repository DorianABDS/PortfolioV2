export default function HeroRectangleCard() {
    // Base styles
    const rectangleBase = "absolute bottom-0 left-0 z-10 bg-[#585858]/20 backdrop-blur-xs rounded-[30px]";
    const rectangleWrapperBase = "flex text-white";
    const rectangleImageBase = "rounded-full object-cover";
    const rectangleTextContainerBase = "flex flex-col";
    const rectangleTitleBase = "";
    const rectangleSubtitleBase = "italic text-[#747474]";
    const rectangleHighlightBase = "";
    const rectangleButtonContainerBase = "flex items-center justify-center";

    // Responsive classes for rectangle
    const rectangleSizes = {
        sm: "m-4 right-0 h-32 p-3",
        md: "md:m-5 md:right-auto md:w-96 md:h-48 md:p-5",
        lg: "lg:m-6 lg:w-[450px] lg:h-56 lg:p-6",
        xl: "xl:m-8 xl:w-[500px] xl:h-64 xl:p-7",
        "2xl": "2xl:m-10 2xl:w-[550px] 2xl:h-72 2xl:p-8",
    };

    // Responsive classes for rectangle wrapper
    const rectangleWrapperSizes = {
        sm: "gap-2 items-start",
        md: "md:gap-4",
        lg: "lg:gap-5",
        xl: "xl:gap-6",
        "2xl": "2xl:gap-7",
    };

    // Responsive classes for rectangle image
    const rectangleImageSizes = {
        sm: "w-12 h-12",
        md: "md:w-14 md:h-14",
        lg: "lg:w-14 lg:h-14",
        xl: "xl:w-16 xl:h-16",
        "2xl": "2xl:w-16 2xl:h-16",
    };

    // Responsive classes for text container
    const rectangleTextContainerSizes = {
        sm: "gap-0.5 text-xs leading-tight",
        md: "md:gap-1.5 md:text-sm md:leading-normal",
        lg: "lg:gap-2 lg:text-base",
        xl: "xl:gap-2.5 xl:text-lg",
        "2xl": "2xl:gap-3 2xl:text-xl",
    };

    // Responsive classes for title
    const rectangleTitleSizes = {
        sm: "text-sm",
        md: "md:text-lg",
        lg: "lg:text-xl",
        xl: "xl:text-2xl",
        "2xl": "2xl:text-3xl",
    };

    // Responsive classes for subtitle
    const rectangleSubtitleSizes = {
        sm: "text-xs",
        md: "md:text-base",
        lg: "lg:text-lg",
        xl: "xl:text-xl",
        "2xl": "2xl:text-2xl",
    };

    // Responsive classes for rectangle highlight span
    const rectangleHighlightSizes = {
        sm: "font-bold text-[#206C85]",
        md: "md:font-bold",
        lg: "lg:font-bold",
        xl: "xl:font-bold",
        "2xl": "2xl:font-bold",
    };

    // Responsive classes for rectangle button container
    const rectangleButtonContainerSizes = {
        sm: "mt-2",
        md: "md:mt-4",
        lg: "lg:mt-5",
        xl: "xl:mt-6",
        "2xl": "2xl:mt-7",
    };

    // Assembling responsive classes
    const rectangleClass = `${rectangleBase} ${rectangleSizes.sm} ${rectangleSizes.md} ${rectangleSizes.lg} ${rectangleSizes.xl} ${rectangleSizes["2xl"]}`;
    const rectangleWrapperClass = `${rectangleWrapperBase} ${rectangleWrapperSizes.sm} ${rectangleWrapperSizes.md} ${rectangleWrapperSizes.lg} ${rectangleWrapperSizes.xl} ${rectangleWrapperSizes["2xl"]}`;
    const rectangleImageClass = `${rectangleImageBase} ${rectangleImageSizes.sm} ${rectangleImageSizes.md} ${rectangleImageSizes.lg} ${rectangleImageSizes.xl} ${rectangleImageSizes["2xl"]}`;
    const rectangleTextContainerClass = `${rectangleTextContainerBase} ${rectangleTextContainerSizes.sm} ${rectangleTextContainerSizes.md} ${rectangleTextContainerSizes.lg} ${rectangleTextContainerSizes.xl} ${rectangleTextContainerSizes["2xl"]}`;
    const rectangleTitleClass = `${rectangleTitleBase} ${rectangleTitleSizes.sm} ${rectangleTitleSizes.md} ${rectangleTitleSizes.lg} ${rectangleTitleSizes.xl} ${rectangleTitleSizes["2xl"]}`;
    const rectangleSubtitleClass = `${rectangleSubtitleBase} ${rectangleSubtitleSizes.sm} ${rectangleSubtitleSizes.md} ${rectangleSubtitleSizes.lg} ${rectangleSubtitleSizes.xl} ${rectangleSubtitleSizes["2xl"]}`;
    const rectangleHighlightClass = `${rectangleHighlightBase} ${rectangleHighlightSizes.sm} ${rectangleHighlightSizes.md} ${rectangleHighlightSizes.lg} ${rectangleHighlightSizes.xl} ${rectangleHighlightSizes["2xl"]}`;
    const rectangleButtonContainerClass = `${rectangleButtonContainerBase} ${rectangleButtonContainerSizes.sm} ${rectangleButtonContainerSizes.md} ${rectangleButtonContainerSizes.lg} ${rectangleButtonContainerSizes.xl} ${rectangleButtonContainerSizes["2xl"]}`;

    return (
        <div className={rectangleClass}>
            <div className={rectangleWrapperClass}>
                {/* My picture */}
                <img
                    className={rectangleImageClass}
                    src="/img/pp_do_01.09.25.png"
                    alt="Photo de ABBADESSA Dorian"
                />

                {/* Text content */}
                <div className={rectangleTextContainerClass}>
                    <h3 className={rectangleTitleClass}>
                        ABBADESSA Dorian
                    </h3>
                    <span className={rectangleSubtitleClass}>
                        …Signal faible détecté…
                    </span>
                    <p>
                        Ici<span className={rectangleHighlightClass}> Dorian</span>, station créative en orbite.
                        <br />
                        Projets et idées en approche.
                        <br />
                        Bip… Bip… Transmission ouverte.
                        <br />
                        Réponse attendue.
                    </p>
                </div>
            </div>

            {/* Message Button */}
            <div className={rectangleButtonContainerClass}>

            </div>
        </div>
    );
}