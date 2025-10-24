// ProjectCard.jsx
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project = {} }) {
    const [isOpen, setIsOpen] = useState(false);

    // Default values
    const {
        titre = "Projet sans titre",
        image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    } = project;

    // Base styles for card
    const cardBase = "relative flex aspect-1/1 w-full overflow-hidden group transition-all duration-300";

    // Icon button styles
    const iconButton = "absolute bg-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:bg-gray-300 transition-all duration-150 z-50 p-2 md:p-3 lg:p-4 group";
    const iconArrow = "text-gray-800 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:rotate-45 transition-transform duration-300";

    // Responsive classes for title overlay padding
    const titleOverlaySizes = {
        sm: "p-2",
        md: "md:p-3",
        lg: "lg:p-4",
        xl: "xl:p-6"
    };

    // Responsive classes for title text
    const titleTextSizes = {
        sm: "text-xs",
        md: "md:text-sm",
        lg: "lg:text-base",
        xl: "xl:text-lg",
        "2xl": "2xl:text-xl"
    };

    // Card overlay styles
    const backgroundOverlay = "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300";
    const imageCard = "w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300";

    // Assembling responsive classes
    const cardClass = `${cardBase} relative z-10`;
    const titleOverlayClass = `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-20 ${titleOverlaySizes.sm} ${titleOverlaySizes.md} ${titleOverlaySizes.lg} ${titleOverlaySizes.xl}`;
    const titleTextClass = `text-white font-bold line-clamp-2 ${titleTextSizes.sm} ${titleTextSizes.md} ${titleTextSizes.lg} ${titleTextSizes.xl} ${titleTextSizes["2xl"]}`;

    return (
        <>
            {/* Card wrapper */}
            <div className="relative">
                {/* Card */}
                <div
                    className={cardClass}
                    style={{
                        clipPath: 'url(#concave-corner)',
                        borderRadius: '24px'
                    }}
                >
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="concave-corner" clipPathUnits="objectBoundingBox">
                                {/*
                                    M Start point (top-left after radius)
                                    Q Top-left corner radius
                                    L Left edge
                                    Q Bottom-left corner radius
                                    L Bottom edge (concave start)
                                    C Bottom concave corner radius
                                    C Concave diagonal curve
                                    C Right concave corner radius
                                    L Right edge
                                    Q Top-right corner radius & close
                                */}
                                <path d="
                                    M 0.05,0
                                    Q 0,0 0,0.05
                                    L 0,0.95
                                    Q 0,1 0.05,1
                                    L 0.5,1
                                    C 0.56,1 0.65,0.94 0.65,0.88
                                    C 0.65,0.71 0.71,0.65 0.88,0.65
                                    C 0.94,0.65 1,0.56 1,0.5
                                    L 1,0.0
                                    Q 1,0 0.95,0
                                    Z
                                " />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* background overlay */}
                    <div className={backgroundOverlay}>
                        <img src={image} alt={titre} className={imageCard} />
                    </div>

                    {/* Overlay title */}
                    <div className={titleOverlayClass}>
                        <h3 className={titleTextClass}>{titre}</h3>
                    </div>
                </div>

                {/* Open icon */}
                <div
                    onClick={() => setIsOpen(true)}
                    className={iconButton}
                    style={{
                        bottom: '15%',
                        right: '15%',
                        cursor: 'pointer'
                    }}
                >
                    <ArrowUpRight className={iconArrow} />
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                project={project}
            />
        </>
    );
}