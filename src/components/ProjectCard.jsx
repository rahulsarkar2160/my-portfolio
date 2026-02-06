export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-content">
                <h3>
                    <a className="project-title" href={project.link} target="_blank" rel="noreferrer">
                        {project.title}
                    </a>
                </h3>
                <img src={project.photo} alt="" />

                <p>{project.description}</p>
            </div>

            <div className="project-footer">
                <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}