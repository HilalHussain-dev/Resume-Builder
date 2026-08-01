import { optionalFieldsConfig } from "../config/additionalFields";

export default function ModernResume({ summary, personalInfo, additionalInfo, visibleAdditionalFields, education, experience, skills, languages, projects }) {
    return (
        <div className="resume-a4">
            <div className="row g-0 h-100">
                
                {/* Left Sidebar */}
                <div className="col-md-4 resume-sidebar">
                    {/* Profile Photo */}
                    <div className="profile-img-container">
                        {personalInfo?.profileImage ? (
                            <img src={personalInfo.profileImage} alt="Profile" />
                        ) : (
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted bg-dark">
                                <span style={{fontSize: '1rem', color: '#7f8c8d'}}>No Photo</span>
                            </div>
                        )}
                    </div>

                    {/* Contact Info */}
                    <h5>Contact</h5>
                    <div className="resume-contact-item">
                        <strong>Email</strong><br/>
                        <span className="text-break">{personalInfo?.email || "example@email.com"}</span>
                    </div>
                    <div className="resume-contact-item">
                        <strong>Phone</strong><br/>
                        <span>{personalInfo?.phone || "+1 234 567 890"}</span>
                    </div>
                    <div className="resume-contact-item">
                        <strong>Location</strong><br/>
                        <span className="text-break">{personalInfo?.address || "City, Country"}</span>
                    </div>

                    {/* Additional Info */}
                    {visibleAdditionalFields?.map(key => {
                        const fieldConfig = optionalFieldsConfig.find(f => f.key === key);
                        const value = additionalInfo?.[key];
                        if (!fieldConfig || !value) return null;
                        return (
                            <div key={key} className="resume-contact-item">
                                <strong>{fieldConfig.label}</strong><br/>
                                <span className="text-break">{value}</span>
                            </div>
                        );
                    })}

                    {/* Skills */}
                    <h5>Skills</h5>
                    {skills?.length > 0 ? (
                        <div>
                            {skills.map((skill, index) => (
                                <span key={index} className="badge-skill">{skill}</span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted small">No skills added.</p>
                    )}

                    {/* Languages */}
                    <h5>Languages</h5>
                    {languages?.length > 0 ? (
                        <div>
                            {languages.map((lang, index) => (
                                <span key={index} className="badge-skill">{lang}</span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted small">No languages added.</p>
                    )}
                </div>

                {/* Right Content */}
                <div className="col-md-8 resume-content">
                    {/* Header */}
                    <h1 className="resume-name">{personalInfo?.fullName || "Your Name"}</h1>
                    <h3 className="resume-title">{personalInfo?.jobTitle || "Professional Title"}</h3>

                    {/* Summary */}
                    {summary && (
                        <div className="mb-4">
                            <p style={{ whiteSpace: "pre-wrap", color: "var(--theme-text-dark, #444)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                {summary}
                            </p>
                        </div>
                    )}

                    {/* Experience */}
                    <h4 className="resume-section-title">Experience</h4>
                    {experience?.length > 0 ? (
                        experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                                <div className="d-flex justify-content-between align-items-baseline mb-1">
                                    <h5 className="resume-item-title mb-0">{exp.position || "Job Title"}</h5>
                                    <span className="resume-item-date">{exp.startDate || "Start Date"} – {exp.endDate || "Present"}</span>
                                </div>
                                <div className="resume-item-subtitle mb-2">{exp.company || "Company Name"}</div>
                                {exp.responsibilities && (
                                    <ul className="resume-list">
                                        {exp.responsibilities
                                            .split("\n")
                                            .filter(line => line.trim() !== "")
                                            .map((line, index) => (
                                                <li key={index}>{line}</li>
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
                            <h4 className="resume-section-title">Projects</h4>
                            {projects.map((proj) => (
                                <div key={proj.id} className="mb-4">
                                    <h5 className="resume-item-title mb-1">{proj.title || "Project Title"}</h5>
                                    <p className="mb-1" style={{ fontSize: "0.95rem", color: "var(--theme-text-dark, #444)" }}>
                                        {proj.description || "Project description goes here."}
                                    </p>
                                    {proj.link && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", color: "var(--theme-accent, #3498db)" }}>
                                            {proj.link}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </>
                    )}

                    {/* Education */}
                    <h4 className="resume-section-title">Education</h4>
                    {education?.length > 0 ? (
                        education.map((edu) => (
                            <div key={edu.id} className="mb-3">
                                <div className="d-flex justify-content-between align-items-baseline mb-1">
                                    <h5 className="resume-item-title mb-0">{edu.degree || "Degree/Program"}</h5>
                                    <span className="resume-item-date">{edu.startYear || "Start"} – {edu.endYear || "End"}</span>
                                </div>
                                <div className="resume-item-subtitle">{edu.institute || "Institution Name"}</div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted small">No education added.</p>
                    )}

                </div>
            </div>
        </div>
    );
}
