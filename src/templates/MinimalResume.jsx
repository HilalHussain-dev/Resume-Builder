export default function MinimalResume({ summary, personalInfo, education, experience, skills, languages, projects }) {
    return (
        <div className="resume-a4 p-5" style={{ backgroundColor: 'var(--theme-content-bg, #fff)' }}>
            
            {/* Header */}
            <div className="text-center border-bottom pb-4 mb-4" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                <h1 style={{ fontWeight: 300, color: 'var(--theme-text-primary, #333)', letterSpacing: '2px', fontSize: '3rem' }}>
                    {personalInfo?.fullName || "Your Name"}
                </h1>
                <h4 style={{ color: 'var(--theme-accent, #666)', fontWeight: 400, marginBottom: '1.5rem' }}>
                    {personalInfo?.jobTitle || "Professional Title"}
                </h4>
                
                <div className="d-flex justify-content-center flex-wrap gap-3" style={{ fontSize: '0.9rem', color: 'var(--theme-text-secondary, #666)' }}>
                    {personalInfo?.email && <span>{personalInfo.email}</span>}
                    {personalInfo?.email && personalInfo?.phone && <span>|</span>}
                    {personalInfo?.phone && <span>{personalInfo.phone}</span>}
                    {(personalInfo?.email || personalInfo?.phone) && personalInfo?.address && <span>|</span>}
                    {personalInfo?.address && <span>{personalInfo.address}</span>}
                </div>
            </div>

            {/* Summary */}
            {summary && (
                <div className="mb-5 text-center px-4">
                    <p style={{ whiteSpace: "pre-wrap", color: "var(--theme-text-dark, #444)", fontSize: "1rem", lineHeight: "1.7", fontStyle: "italic" }}>
                        {summary}
                    </p>
                </div>
            )}

            {/* Content Split */}
            <div className="row">
                <div className="col-md-8 pe-4">
                    {/* Experience */}
                    <h4 className="text-uppercase mb-4 pb-2 border-bottom" style={{ color: 'var(--theme-text-primary, #333)', borderColor: 'var(--theme-divider, #eee) !important', letterSpacing: '1px' }}>
                        Experience
                    </h4>
                    {experience?.length > 0 ? (
                        experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                                <div className="d-flex justify-content-between align-items-baseline mb-1">
                                    <h5 className="mb-0" style={{ fontWeight: 600, color: 'var(--theme-text-primary, #333)' }}>{exp.position || "Job Title"}</h5>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--theme-text-light, #999)' }}>{exp.startDate || "Start Date"} – {exp.endDate || "Present"}</span>
                                </div>
                                <div className="mb-2" style={{ fontWeight: 500, color: 'var(--theme-text-secondary, #666)' }}>{exp.company || "Company Name"}</div>
                                {exp.responsibilities && (
                                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--theme-text-dark, #555)', fontSize: '0.95rem' }}>
                                        {exp.responsibilities
                                            .split("\n")
                                            .filter(line => line.trim() !== "")
                                            .map((line, index) => (
                                                <li key={index} className="mb-1">{line}</li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-muted small mb-4">No experience added.</p>
                    )}

                    {/* Projects */}
                    {projects?.length > 0 && (
                        <>
                            <h4 className="text-uppercase mb-4 mt-5 pb-2 border-bottom" style={{ color: 'var(--theme-text-primary, #333)', borderColor: 'var(--theme-divider, #eee) !important', letterSpacing: '1px' }}>
                                Projects
                            </h4>
                            {projects.map((proj) => (
                                <div key={proj.id} className="mb-4">
                                    <h5 className="mb-1" style={{ fontWeight: 600, color: 'var(--theme-text-primary, #333)' }}>{proj.title || "Project Title"}</h5>
                                    <p className="mb-1" style={{ fontSize: "0.95rem", color: "var(--theme-text-dark, #555)" }}>
                                        {proj.description || "Project description goes here."}
                                    </p>
                                    {proj.link && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", color: "var(--theme-accent, #666)" }}>
                                            {proj.link}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="col-md-4 border-start ps-4" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>
                    {/* Education */}
                    <h4 className="text-uppercase mb-4 pb-2 border-bottom" style={{ color: 'var(--theme-text-primary, #333)', borderColor: 'var(--theme-divider, #eee) !important', letterSpacing: '1px' }}>
                        Education
                    </h4>
                    {education?.length > 0 ? (
                        education.map((edu) => (
                            <div key={edu.id} className="mb-4">
                                <h6 className="mb-1" style={{ fontWeight: 600, color: 'var(--theme-text-primary, #333)' }}>{edu.degree || "Degree"}</h6>
                                <div style={{ fontSize: '0.9rem', color: 'var(--theme-text-secondary, #666)', marginBottom: '0.2rem' }}>{edu.institute || "Institution"}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--theme-text-light, #999)' }}>{edu.startYear || "Start"} – {edu.endYear || "End"}</div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted small mb-4">No education added.</p>
                    )}

                    {/* Skills */}
                    <h4 className="text-uppercase mb-4 mt-5 pb-2 border-bottom" style={{ color: 'var(--theme-text-primary, #333)', borderColor: 'var(--theme-divider, #eee) !important', letterSpacing: '1px' }}>
                        Skills
                    </h4>
                    {skills?.length > 0 ? (
                        <div className="d-flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1" style={{ backgroundColor: 'var(--theme-divider, #f5f5f5)', color: 'var(--theme-text-dark, #333)', fontSize: '0.85rem', borderRadius: '4px' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted small">No skills added.</p>
                    )}

                    {/* Languages */}
                    <h4 className="text-uppercase mb-4 mt-5 pb-2 border-bottom" style={{ color: 'var(--theme-text-primary, #333)', borderColor: 'var(--theme-divider, #eee) !important', letterSpacing: '1px' }}>
                        Languages
                    </h4>
                    {languages?.length > 0 ? (
                        <ul className="list-unstyled" style={{ color: 'var(--theme-text-dark, #555)', fontSize: '0.95rem' }}>
                            {languages.map((lang, index) => (
                                <li key={index} className="mb-2">{lang}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-muted small">No languages added.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
