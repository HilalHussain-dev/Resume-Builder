import { useState } from "react";
import PersonalForm from "../forms/PersonalForm";
import SummaryForm from "../forms/SummaryForm";
import EducationForm from "../forms/EducationForm";
import ExperienceForm from "../forms/ExperienceForm";
import SkillsForm from "../forms/SkillsForm";
import ProjectsForm from "../forms/ProjectsForm";
import LanguagesForm from "../forms/LanguagesForm";

export default function Sidebar({
    selectedTemplate,
    setSelectedTemplate,
    summary,
    setSummary,
    personalInfo,
    setPersonalInfo,
    additionalInfo,
    setAdditionalInfo,
    visibleAdditionalFields,
    setVisibleAdditionalFields,
    education,
    setEducation,
    experience,
    setExperience,
    skills,
    setSkills,
    projects,
    setProjects,
    languages,
    setLanguages
}) {
    const [openSection, setOpenSection] = useState('personal');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="bg-white rounded-4 shadow-sm p-4 h-100 no-print" style={{ border: '1px solid #eaeaea' }}>
            <h6 className="text-muted text-uppercase small fw-bold mb-3"><i className="bi bi-pencil-square me-2"></i>Content Editor</h6>

            <div className="accordion custom-accordion" id="resumeAccordion">

                {/* Personal Info */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'personal' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('personal')}
                            style={{ backgroundColor: openSection === 'personal' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-person-badge text-primary me-2 fs-5"></i> Personal Details
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'personal' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <PersonalForm
                                personalInfo={personalInfo}
                                setPersonalInfo={setPersonalInfo}
                                additionalInfo={additionalInfo}
                                setAdditionalInfo={setAdditionalInfo}
                                visibleAdditionalFields={visibleAdditionalFields}
                                setVisibleAdditionalFields={setVisibleAdditionalFields}
                            />
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'summary' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('summary')}
                            style={{ backgroundColor: openSection === 'summary' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-card-text text-primary me-2 fs-5"></i> Professional Summary
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'summary' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <SummaryForm summary={summary} setSummary={setSummary} />
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'experience' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('experience')}
                            style={{ backgroundColor: openSection === 'experience' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-briefcase-fill text-primary me-2 fs-5"></i> Work Experience
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'experience' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <ExperienceForm experience={experience} setExperience={setExperience} />
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'education' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('education')}
                            style={{ backgroundColor: openSection === 'education' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-mortarboard-fill text-primary me-2 fs-5"></i> Education
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'education' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <EducationForm education={education} setEducation={setEducation} />
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'projects' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('projects')}
                            style={{ backgroundColor: openSection === 'projects' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-kanban-fill text-primary me-2 fs-5"></i> Projects
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'projects' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <ProjectsForm projects={projects} setProjects={setProjects} />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'skills' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('skills')}
                            style={{ backgroundColor: openSection === 'skills' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-lightning-charge-fill text-primary me-2 fs-5"></i> Skills
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'skills' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <SkillsForm skills={skills} setSkills={setSkills} />
                        </div>
                    </div>
                </div>

                {/* Languages */}
                <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm bg-white" style={{ border: '1px solid #f0f0f0 !important' }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button rounded-3 fw-bold ${openSection === 'languages' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleSection('languages')}
                            style={{ backgroundColor: openSection === 'languages' ? '#f8f9fa' : '#fff', boxShadow: 'none' }}
                        >
                            <i className="bi bi-translate text-primary me-2 fs-5"></i> Languages
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openSection === 'languages' ? 'show' : ''}`}>
                        <div className="accordion-body pt-1">
                            <LanguagesForm languages={languages} setLanguages={setLanguages} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}