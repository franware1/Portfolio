interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export default function Project({ title, description, tags, githubUrl, liveUrl }: ProjectProps) {
    return (
        <div className="project-container">
            <div className="project">
                <h2>
                    {githubUrl
                        ? <a href={githubUrl} target="_blank" rel="noopener noreferrer">{title}</a>
                        : title
                    }
                </h2>

                <div className="project-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>

                <p className="project-description">{description}</p>

                {liveUrl && (
                    <div className="project-links">
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                )}
            </div>
        </div>
    );
}
