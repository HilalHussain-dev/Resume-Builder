import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";

export default function ProjectsForm({
    projects,
    setProjects
}) {

    const handleChange = (id, e) => {

        const { name, value } = e.target;

        setProjects(
            projects.map(project =>
                project.id === id
                    ? { ...project, [name]: value }
                    : project
            )
        );

    };

    const addProject = () => {

        setProjects([
            ...projects,
            {
                id: Date.now(),
                title: "",
                technologies: "",
                github: "",
                liveDemo: "",
                description: ""
            }
        ]);

    };

    const deleteProject = (id) => {

        setProjects(
            projects.filter(project => project.id !== id)
        );

    };

    return (

        <div className="mt-5">

            <h5 className="mb-3">
                Projects
            </h5>

            {
                projects.length === 0 ? (

                    <div className="alert alert-secondary">
                        No projects added yet.
                    </div>

                ) : (

                    projects.map((project, index) => (

                        <div
                            key={project.id}
                            className="card shadow-sm border-0 mb-4"
                        >

                            <div className="card-body">

                                <div className="d-flex justify-content-between align-items-center mb-3">

                                    <h6>
                                        Project #{index + 1}
                                    </h6>

                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => deleteProject(project.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                                <InputField
                                    label="Project Name"
                                    name="title"
                                    value={project.title}
                                    placeholder="Resume Builder"
                                    onChange={(e) => handleChange(project.id, e)}
                                />

                                <InputField
                                    label="Technologies"
                                    name="technologies"
                                    value={project.technologies}
                                    placeholder="React, Bootstrap, Firebase"
                                    onChange={(e) => handleChange(project.id, e)}
                                />

                                <InputField
                                    label="GitHub URL"
                                    type="url"
                                    name="github"
                                    value={project.github}
                                    placeholder="https://github.com/..."
                                    onChange={(e) => handleChange(project.id, e)}
                                />

                                <InputField
                                    label="Live Demo URL"
                                    type="url"
                                    name="liveDemo"
                                    value={project.liveDemo}
                                    placeholder="https://..."
                                    onChange={(e) => handleChange(project.id, e)}
                                />

                                <TextAreaField
                                    label="Description"
                                    rows={5}
                                    name="description"
                                    value={project.description}
                                    placeholder="Describe your project..."
                                    onChange={(e) => handleChange(project.id, e)}
                                />

                            </div>

                        </div>

                    ))

                )
            }

            <div className="d-grid">

                <button
                    className="btn btn-success"
                    onClick={addProject}
                >
                    + Add Project
                </button>

            </div>

        </div>

    );

}