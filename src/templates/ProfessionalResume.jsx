import { optionalFieldsConfig } from "../config/additionalFields";

export default function ProfessionalResume({ summary, personalInfo, additionalInfo, visibleAdditionalFields, education, experience, skills, languages, projects, sectionsConfig = [] }) {
    const renderSection = (sectionId) => {
        switch (sectionId) {
            case "summary":
                return summary && (
                    <div key="summary" className="mb-4 pb-4 border-bottom" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                        <h5 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--theme-sidebar-bg, #2c3e50)', letterSpacing: '1px' }}>Professional Summary</h5>
                        <p style={{ whiteSpace: "pre-wrap", color: "var(--theme-text-dark, #444)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                            {summary}
                        </p>
                    </div>
                );
            case "experience":
                return experience?.length > 0 && (
                    <div key="experience" className="mb-4 pb-4 border-bottom" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                        <h5 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--theme-sidebar-bg, #2c3e50)', letterSpacing: '1px' }}>Experience</h5>
                        {experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                                <div className="d-flex justify-content-between align-items-baseline mb-1">
                                    <h6 className="mb-0 fw-bold" style={{ color: 'var(--theme-text-primary, #333)' }}>{exp.position || "Job Title"}</h6>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--theme-text-light, #999)', fontWeight: 600 }}>{exp.startDate || "Start Date"} – {exp.endDate || "Present"}</span>
                                </div>
                                <div className="mb-2" style={{ fontWeight: 500, color: 'var(--theme-accent, #3498db)', fontStyle: 'italic' }}>{exp.company || "Company Name"}</div>
                                {exp.responsibilities && (
                                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--theme-text-dark, #555)', fontSize: '0.9rem' }}>
                                        {exp.responsibilities
                                            .split("\n")
                                            .filter(line => line.trim() !== "")
                                            .map((line, index) => (
                                                <li key={index} className="mb-1">{line}</li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case "projects":
                return projects?.length > 0 && (
                    <div key="projects" className="mb-4 pb-4 border-bottom" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                        <h5 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--theme-sidebar-bg, #2c3e50)', letterSpacing: '1px' }}>Projects</h5>
                        {projects.map((proj) => (
                            <div key={proj.id} className="mb-3">
                                <h6 className="mb-1 fw-bold" style={{ color: 'var(--theme-text-primary, #333)' }}>{proj.title || "Project Title"}</h6>
                                <p className="mb-1" style={{ fontSize: "0.9rem", color: "var(--theme-text-dark, #555)" }}>
                                    {proj.description || "Project description goes here."}
                                </p>
                                {proj.link && (
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--theme-accent, #3498db)" }}>
                                        {proj.link}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case "education":
                return education?.length > 0 && (
                    <div key="education" className="mb-4 pb-4 border-bottom" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                        <h5 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--theme-sidebar-bg, #2c3e50)', letterSpacing: '1px' }}>Education</h5>
                        {education.map((edu) => (
                            <div key={edu.id} className="mb-3">
                                <h6 className="mb-1 fw-bold" style={{ color: 'var(--theme-text-primary, #333)' }}>{edu.degree || "Degree"}</h6>
                                <div style={{ fontSize: '0.9rem', color: 'var(--theme-accent, #3498db)', marginBottom: '0.2rem' }}>{edu.institute || "Institution"}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--theme-text-light, #999)', fontWeight: 600 }}>{edu.startYear || "Start"} – {edu.endYear || "End"}</div>
                            </div>
                        ))}
                    </div>
                );
            case "skills":
                return skills?.length > 0 && (
                    <div key="skills" className="mb-4 pb-4 border-bottom" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                        <h5 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--theme-sidebar-bg, #2c3e50)', letterSpacing: '1px' }}>Skills</h5>
                        <div className="d-flex flex-wrap gap-1">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 mb-1 me-1" style={{ backgroundColor: 'var(--theme-sidebar-bg, #2c3e50)', color: 'var(--theme-sidebar-text, #fff)', fontSize: '0.8rem', fontWeight: 500 }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            case "languages":
                return languages?.length > 0 && (
                    <div key="languages" className="mb-4 pb-4 border-bottom" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                        <h5 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--theme-sidebar-bg, #2c3e50)', letterSpacing: '1px' }}>Languages</h5>
                        <ul className="list-unstyled" style={{ color: 'var(--theme-text-dark, #555)', fontSize: '0.9rem' }}>
                            {languages.map((lang, index) => (
                                <li key={index} className="mb-2">{lang}</li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="resume-a4" style={{ backgroundColor: 'var(--theme-content-bg, #fff)' }}>

            {/* Header Block */}
            <div className="p-4 px-5 text-white" style={{ backgroundColor: 'var(--theme-sidebar-bg, #2c3e50)' }}>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 style={{ fontWeight: 700, margin: 0, letterSpacing: '1px', fontSize: '2.8rem', color: 'var(--theme-sidebar-text, #fff)' }}>
                            {personalInfo?.fullName || "Your Name"}
                        </h1>
                        <h4 style={{ fontWeight: 400, marginTop: '0.5rem', marginBottom: 0, opacity: 0.9, color: 'var(--theme-sidebar-text, #fff)' }}>
                            {personalInfo?.jobTitle || "Professional Title"}
                        </h4>
                    </div>
                    <div className="col-md-4 text-end" style={{ fontSize: '0.9rem', color: 'var(--theme-sidebar-text, #fff)', opacity: 0.85 }}>
                        {personalInfo?.email && <div className="mb-1">{personalInfo.email}</div>}
                        {personalInfo?.phone && <div className="mb-1">{personalInfo.phone}</div>}
                        {personalInfo?.address && <div className="mb-1">{personalInfo.address}</div>}

                        {visibleAdditionalFields?.map(key => {
                            const fieldConfig = optionalFieldsConfig.find(f => f.key === key);
                            const value = additionalInfo?.[key];
                            if (!fieldConfig || !value) return null;
                            return (
                                <div key={key} className="mb-1">
                                    <span style={{ opacity: 0.7 }}>{fieldConfig.label}:</span> {value}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="p-5 pt-4">
                {sectionsConfig.filter(s => s.visible).map(section => renderSection(section.id))}
            </div>
        </div>
    );
}
