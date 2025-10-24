// ProjectModal.jsx
import { Github, ExternalLink, X } from "lucide-react";

export default function ProjectModal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    const {
        titre = "Projet sans titre",
        description = "Aucune description disponible",
        image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        tags = [],
        githubUrl = "",
        siteUrl = ""
    } = project;

    // Modal styles
    const modalOverlay = "fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200";
    const modalContent = "bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 relative";
    const closeButton = "absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10";
    const closeIcon = "w-6 h-6 text-white";

    // Modal content styles
    const modalImage = "h-64 md:h-96 overflow-hidden rounded-t-3xl";
    const imageStyle = "w-full h-full object-cover";
    const modalBody = "p-8";
    const modalTitle = "text-white font-bold text-3xl md:text-4xl mb-4";
    const modalDescription = "text-white/80 text-base md:text-lg mb-6 leading-relaxed";

    // Tags section styles
    const tagsSection = "mb-6";
    const tagsTitle = "text-white/60 text-sm uppercase tracking-wider mb-3";
    const tagsContainer = "flex flex-wrap gap-2";
    const tagBadge = "px-4 py-2 bg-[#206C85] hover:bg-[#1a5568] text-white text-sm rounded-full transition-colors";

    // Buttons section styles
    const buttonsContainer = "flex flex-wrap gap-4 pt-4 border-t border-white/10";
    const buttonBase = "flex items-center gap-2 px-6 py-3 text-white rounded-xl transition-all hover:scale-105";
    const githubButton = `${buttonBase} bg-white/10 hover:bg-white/20`;
    const demoButton = `${buttonBase} bg-[#206C85] hover:bg-[#1a5568]`;
    const buttonIcon = "w-5 h-5";
    const buttonText = "font-medium";

    return (
        <div className={modalOverlay} onClick={onClose}>
            <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button onClick={onClose} className={closeButton}>
                    <X className={closeIcon} />
                </button>

                {/* Project picture */}
                <div className={modalImage}>
                    <img src={image} alt={titre} className={imageStyle} />
                </div>

                {/* content */}
                <div className={modalBody}>
                    {/* Titre */}
                    <h2 className={modalTitle}>{titre}</h2>

                    {/* Description */}
                    <p className={modalDescription}>{description}</p>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className={tagsSection}>
                            <h3 className={tagsTitle}>Technologies</h3>
                            <div className={tagsContainer}>
                                {tags.map((tag, index) => (
                                    <span key={index} className={tagBadge}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className={buttonsContainer}>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={githubButton}
                            >
                                <Github className={buttonIcon} />
                                <span className={buttonText}>Voir le code</span>
                            </a>
                        )}
                        {siteUrl && (
                            <a
                                href={siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={demoButton}
                            >
                                <ExternalLink className={buttonIcon} />
                                <span className={buttonText}>Voir la démo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}