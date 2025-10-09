import { ArrowRight } from 'lucide-react';

export default function HeroRectangleCard() {
    // Base styles
    const rectangleBase =
        "absolute bottom-0 left-0 z-10 bg-[#585858]/20 backdrop-blur-xs rounded-[30px] overflow-hidden";
    const rectangleWrapperBase = "flex text-white";
    const rectangleImageBase = "rounded-full object-cover";
    const rectangleTextContainerBase = "flex flex-col";
    const rectangleTitleBase = "";
    const rectangleSubtitleBase = "italic text-[#747474]";
    const rectangleHighlightBase = "";
    const rectangleButtonContainerBase = "flex items-center justify-center";
    const rectangleButtonBase = "w-full text-white hover:text-black font-semibold rounded-full transition-colors duration-300 flex items-center justify-between cursor-pointer uppercase tracking-wide relative overflow-hidden group outline outline-2 outline-white -outline-offset-2";
    const rectangleButtonIconBase = "rounded-full bg-white flex items-center justify-center shrink-0 outline outline-white -outline-offset-2";
    const rectangleButtonAnimationBase = "absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full";

    // Responsive classes for rectangle
    const rectangleSizes = {
        sm: "mx-4 my-20 right-0 min-h-40 p-3 bg-[#585858]/40",
        md: "md:m-5 md:right-auto md:w-96 md:min-h-48 md:p-5",
        lg: "lg:m-6 lg:w-[450px] lg:min-h-56 lg:p-6",
        xl: "xl:m-8 xl:w-[400px] xl:min-h-52 xl:p-4",
        "2xl": "2xl:m-10 2xl:w-[550px] 2xl:min-h-72 2xl:p-8",
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
        xl: "xl:w-12 xl:h-12",
        "2xl": "2xl:w-16 2xl:h-16",
    };

    // Responsive classes for text container
    const rectangleTextContainerSizes = {
        sm: "gap-0.5 text-xs leading-tight flex-1",
        md: "md:gap-1.5 md:text-sm md:leading-normal",
        lg: "lg:gap-2 lg:text-base",
        xl: "xl:gap-2.5 xl:text-sm",
        "2xl": "2xl:gap-3 2xl:text-xl",
    };

    // Responsive classes for title
    const rectangleTitleSizes = {
        sm: "text-sm",
        md: "md:text-lg",
        lg: "lg:text-xl",
        xl: "xl:text-sm",
        "2xl": "2xl:text-3xl",
    };

    // Responsive classes for subtitle
    const rectangleSubtitleSizes = {
        sm: "text-xs",
        md: "md:text-base",
        lg: "lg:text-lg",
        xl: "xl:text-sm",
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
        sm: "mt-1",
        md: "md:mt-1",
        lg: "lg:mt-1",
        xl: "xl:mt-1",
        "2xl": "2xl:mt-1",
    };

    // Responsive classes for rectangle button
    const rectangleButtonSizes = {
        sm: "py-0 pl-4 pr-0 text-xs",
        md: "md:py-0 md:pl-5 md:pr-0 md:text-sm",
        lg: "lg:py-0 lg:pl-6 lg:pr-0 lg:text-base",
        xl: "xl:py-0 xl:pl-4 xl:pr-0 xl:text-sm xl:font-light",
        "2xl": "2xl:py-0 2xl:pl-8 2xl:pr-0 2xl:text-lg",
    };

    // Responsive classes for button icon circle
    const rectangleButtonIconSizes = {
        sm: "w-7 h-7",
        md: "md:w-8 md:h-8",
        lg: "lg:w-9 lg:h-9",
        xl: "xl:w-7 xl:h-7",
        "2xl": "2xl:w-11 2xl:h-11",
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
    const rectangleButtonClass = `${rectangleButtonBase} ${rectangleButtonSizes.sm} ${rectangleButtonSizes.md} ${rectangleButtonSizes.lg} ${rectangleButtonSizes.xl} ${rectangleButtonSizes["2xl"]}`;
    const rectangleButtonIconClass = `${rectangleButtonIconBase} ${rectangleButtonIconSizes.sm} ${rectangleButtonIconSizes.md} ${rectangleButtonIconSizes.lg} ${rectangleButtonIconSizes.xl} ${rectangleButtonIconSizes["2xl"]}`;
    const rectangleButtonAnimationClass = rectangleButtonAnimationBase;

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
                    <h3 className={rectangleTitleClass}>ABBADESSA Dorian</h3>
                    <p>
                        <span className={rectangleSubtitleClass}>
                            …Signal faible détecté…
                        </span>
                        <br />
                        Ici
                        <span className={rectangleHighlightClass}> Dorian</span>
                        , station créative en orbite.
                        <br />
                        Projets et idées en approche.
                        <br />
                        Bip… Bip… Transmission ouverte.
                        <br />
                        Réponse attendue.
                    </p>

                    {/* Message Button */}
                    <div className={rectangleButtonContainerClass}>
                        <button
                            className={rectangleButtonClass}
                            aria-label="Message instantanée"
                        >
                            {/* Animation background */}
                            <span className={rectangleButtonAnimationClass}></span>

                            {/* Button content */}
                            <span className="relative z-10">Message instantanée</span>
                            <div className={`${rectangleButtonIconClass} relative z-10`}>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 text-black" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}