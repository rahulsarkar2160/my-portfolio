export default function ProjectCard({ project }) {
    return (
        <div className="project-card scroll-appear">
            <div className="project-content">

                <h2>{project.title}</h2>

                <div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        Live Project
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        GitHub
                    </a>
                </div>

                <img src={project.photo} alt={project.title} />

                <p>{project.description}</p>

            </div>
        </div>
    );
}