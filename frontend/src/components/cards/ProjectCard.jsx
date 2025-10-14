import { useState } from "react";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project = {} }) {
    const [isOpen, setIsOpen] = useState(false);

    // Valeurs par défaut si project est undefined
    const {
        titre = "Projet sans titre",
        description = "Aucune description disponible",
        image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        tags = [],
        githubUrl = "",
        siteUrl = ""
    } = project;

    // Base styles for card
    const cardBase = "relative flex h-32 w-full overflow-hidden cursor-pointer group transition-all duration-300";

    // Responsive classes pour la hauteur de la card
    const cardHeights = {
        sm: "h-32",
        md: "md:h-40",
        lg: "lg:h-48"
    };

    // Responsive classes for icon position
    const iconSizes = {
        sm: "bottom-2 right-2 p-1.5",
        md: "md:bottom-3 md:right-3 md:p-2",
        lg: "lg:bottom-4 lg:right-4 lg:p-3"
    };

    // Responsive classes for icon size
    const iconDimensions = {
        sm: "w-3 h-3",
        md: "md:w-4 md:h-4",
        lg: "lg:w-5 lg:h-5",
        xl: "xl:w-6 xl:h-6"
    };

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

    // Assembling responsive classes
    const cardClass = `${cardBase} ${cardHeights.sm} ${cardHeights.md} ${cardHeights.lg} relative z-10`;
    const iconClass = `absolute bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 z-20 ${iconSizes.sm} ${iconSizes.md} ${iconSizes.lg}`;
    const iconSizeClass = `text-gray-800 ${iconDimensions.sm} ${iconDimensions.md} ${iconDimensions.lg} ${iconDimensions.xl}`;
    const titleOverlayClass = `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-20 ${titleOverlaySizes.sm} ${titleOverlaySizes.md} ${titleOverlaySizes.lg} ${titleOverlaySizes.xl}`;
    const titleTextClass = `text-white font-bold line-clamp-2 ${titleTextSizes.sm} ${titleTextSizes.md} ${titleTextSizes.lg} ${titleTextSizes.xl} ${titleTextSizes["2xl"]}`;

    return (
        <>
            {/* Card */}
            <div
                onClick={() => setIsOpen(true)}
                className={cardClass}
                style={{
                    borderRadius: "1.5rem 1.5rem 1.5rem 0",
                    clipPath: "path('M 0 24 Q 0 0 24 0 L calc(100% - 24) 0 Q 100% 0 100% 24 L 100% calc(100% - 40) Q 100% 100% calc(100% - 40) 100% L 24 100% Q 0 100% 0 calc(100% - 24) Z')"
                }}
            >
                {/* background overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                    <img
                        src={image}
                        alt={titre}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    />
                </div>

                {/* Open icon */}
                <div className={iconClass}>
                    <ArrowUpRight className={iconSizeClass} />
                </div>

                {/* Overlay title */}
                <div className={titleOverlayClass}>
                    <h3 className={titleTextClass}>
                        {titre}
                    </h3>
                </div>
            </div>

            {/* Popup / Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Project picture */}
                        <div className="h-64 md:h-96 overflow-hidden rounded-t-3xl">
                            <img
                                src={image}
                                alt={titre}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* content */}
                        <div className="p-8">
                            {/* Titre */}
                            <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
                                {titre}
                            </h2>

                            {/* Description */}
                            <p className="text-white/80 text-base md:text-lg mb-6 leading-relaxed">
                                {description}
                            </p>

                            {/* Tags */}
                            {tags && tags.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-white/60 text-sm uppercase tracking-wider mb-3">
                                        Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-[#206C85] hover:bg-[#1a5568] text-white text-sm rounded-full transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                {githubUrl && (
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all hover:scale-105"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="font-medium">Voir le code</span>
                                    </a>
                                )}
                                {siteUrl && (
                                    <a
                                        href={siteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-[#206C85] hover:bg-[#1a5568] text-white rounded-xl transition-all hover:scale-105"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span className="font-medium">Voir la démo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}