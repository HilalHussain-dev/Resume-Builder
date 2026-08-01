import { optionalFieldsConfig } from "../config/additionalFields";

export default function CreativeResume({ summary, personalInfo, additionalInfo, visibleAdditionalFields, education, experience, skills, languages, projects }) {
    return (
        <div className="resume-a4" style={{ backgroundColor: 'var(--theme-content-bg, #fff)', position: 'relative' }}>

            {/* Left Accent Strip */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', backgroundColor: 'var(--theme-accent, #3498db)' }}></div>

            <div className="p-5" style={{ marginLeft: '40px' }}>
                <div className="row mb-5 align-items-center">
                    <div className="col-md-8">
                        <h1 style={{ fontWeight: 900, fontSize: '3.5rem', color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '0.5rem' }}>
                            {personalInfo?.fullName?.split(' ')[0] || "First"} <br />
                            <span style={{ color: 'var(--theme-accent, #3498db)' }}>{personalInfo?.fullName?.split(' ').slice(1).join(' ') || "Last"}</span>
                        </h1>
                        <h3 style={{ fontWeight: 300, fontSize: '1.5rem', color: 'var(--theme-text-secondary, #666)', letterSpacing: '2px', marginTop: '1rem' }}>
                            {personalInfo?.jobTitle || "Creative Title"}
                        </h3>
                    </div>
                    <div className="col-md-4 text-end">
                        {personalInfo?.profileImage ? (
                            <img src={personalInfo.profileImage} alt="Profile" style={{ width: '130px', height: '130px', borderRadius: '30%', objectFit: 'cover', border: '5px solid var(--theme-divider, #eee)' }} />
                        ) : (
                            <div style={{ width: '130px', height: '130px', borderRadius: '30%', backgroundColor: 'var(--theme-divider, #eee)', display: 'inline-block' }}></div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 pe-4 border-end" style={{ borderColor: 'var(--theme-divider, #eee) !important' }}>

                        {/* Contact Info */}
                        <div className="mb-5">
                            <h5 style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--theme-accent, #3498db)', display: 'inline-block', marginRight: '10px' }}></span> Contact
                            </h5>
                            <div style={{ fontSize: '0.9rem', color: 'var(--theme-text-dark, #555)', wordBreak: 'break-word' }}>
                                {personalInfo?.email && <p className="mb-2"><strong>E.</strong> {personalInfo.email}</p>}
                                {personalInfo?.phone && <p className="mb-2"><strong>T.</strong> {personalInfo.phone}</p>}
                                {personalInfo?.address && <p className="mb-2"><strong>A.</strong> {personalInfo.address}</p>}

                                {visibleAdditionalFields?.map(key => {
                                    const fieldConfig = optionalFieldsConfig.find(f => f.key === key);
                                    const value = additionalInfo?.[key];
                                    if (!fieldConfig || !value) return null;
                                    return (
                                        <p key={key} className="mb-2">
                                            <strong title={fieldConfig.label}>{fieldConfig.label.substring(0, 1)}.</strong> {value}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="mb-5">
                            <h5 style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--theme-accent, #3498db)', display: 'inline-block', marginRight: '10px' }}></span> Education
                            </h5>
                            {education?.length > 0 ? (
                                education.map((edu) => (
                                    <div key={edu.id} className="mb-3">
                                        <div style={{ fontSize: '0.8rem', color: 'var(--theme-accent, #3498db)', fontWeight: 700 }}>{edu.startYear || "Start"} – {edu.endYear || "End"}</div>
                                        <h6 className="mb-1" style={{ fontWeight: 700, color: 'var(--theme-text-primary, #333)' }}>{edu.degree || "Degree"}</h6>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--theme-text-secondary, #666)' }}>{edu.institute || "Institution"}</div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted small mb-4">No education added.</p>
                            )}
                        </div>

                        {/* Skills */}
                        <div className="mb-5">
                            <h5 style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--theme-accent, #3498db)', display: 'inline-block', marginRight: '10px' }}></span> Expertise
                            </h5>
                            {skills?.length > 0 ? (
                                <div className="d-flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span key={index} style={{ backgroundColor: 'transparent', color: 'var(--theme-text-primary, #333)', fontSize: '0.9rem', fontWeight: 600, border: '1px solid var(--theme-accent, #3498db)', padding: '0.3rem 0.6rem', borderRadius: '20px' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted small">No skills added.</p>
                            )}
                        </div>
                    </div>

                    <div className="col-md-8 ps-5">

                        {/* Summary */}
                        {summary && (
                            <div className="mb-5">
                                <h5 style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--theme-accent, #3498db)', display: 'inline-block', marginRight: '10px' }}></span> Profile
                                </h5>
                                <p style={{ whiteSpace: "pre-wrap", color: "var(--theme-text-dark, #555)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                                    {summary}
                                </p>
                            </div>
                        )}

                        {/* Experience */}
                        <div className="mb-5">
                            <h5 style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--theme-accent, #3498db)', display: 'inline-block', marginRight: '10px' }}></span> Experience
                            </h5>
                            {experience?.length > 0 ? (
                                experience.map((exp) => (
                                    <div key={exp.id} className="mb-4 position-relative" style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--theme-divider, #eee)' }}>
                                        <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--theme-accent, #3498db)' }}></div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--theme-accent, #3498db)', fontWeight: 700, marginBottom: '0.2rem' }}>{exp.startDate || "Start Date"} – {exp.endDate || "Present"}</div>
                                        <h5 className="mb-1" style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)' }}>{exp.position || "Job Title"}</h5>
                                        <div className="mb-2" style={{ fontWeight: 600, color: 'var(--theme-text-secondary, #777)' }}>{exp.company || "Company Name"}</div>
                                        {exp.responsibilities && (
                                            <ul style={{ paddingLeft: '1rem', color: 'var(--theme-text-dark, #555)', fontSize: '0.9rem', lineHeight: '1.6' }}>
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
                        </div>

                        {/* Projects */}
                        {projects?.length > 0 && (
                            <div className="mb-5">
                                <h5 style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '30px', height: '4px', backgroundColor: 'var(--theme-accent, #3498db)', display: 'inline-block', marginRight: '10px' }}></span> Projects
                                </h5>
                                {projects.map((proj) => (
                                    <div key={proj.id} className="mb-4 p-4" style={{ backgroundColor: 'var(--theme-divider, #f9f9f9)', borderRadius: '8px', borderLeft: '4px solid var(--theme-accent, #3498db)' }}>
                                        <h6 className="mb-2" style={{ fontWeight: 800, color: 'var(--theme-text-primary, #333)' }}>{proj.title || "Project Title"}</h6>
                                        <p className="mb-2" style={{ fontSize: "0.9rem", color: "var(--theme-text-dark, #555)", lineHeight: '1.6' }}>
                                            {proj.description || "Project description goes here."}
                                        </p>
                                        {proj.link && (
                                            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--theme-accent, #3498db)", fontWeight: 700 }}>
                                                {proj.link}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
