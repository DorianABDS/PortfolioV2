import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:scale-105 duration-300">
            {/* Project Image */}
            <div className="h-48 overflow-hidden bg-gray-800">
                <img
                    src={project.image || "/img/placeholder.jpg"}
                    alt={project.titre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "/img/placeholder.jpg";
                    }}
                />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-white font-orbitron text-xl font-bold mb-2">
                    {project.titre}
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tags/Technologies */}
                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-[#206C85] text-white text-xs rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-[#206C85] transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span className="text-sm">Code</span>
                        </a>
                    )}
                    {project.siteUrl && (
                        <a
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white
                            hover:text-[#206C85] transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span className="text-sm">Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
