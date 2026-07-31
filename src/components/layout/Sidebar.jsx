import PersonalForm from "../forms/PersonalForm";
import EducationForm from "../forms/EducationForm";
import ExperienceForm from "../forms/ExperienceForm";
import SkillsForm from "../forms/SkillsForm";
import ProjectsForm from "../forms/ProjectsForm";

export default function Sidebar({
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    experience,
    setExperience,
    skills,
    setSkills,
    projects,
    setProjects
}) {
    return (
        <div className="bg-white rounded shadow-sm p-4 h-100">
            <h4 className="mb-3">Resume Information</h4>

            <PersonalForm
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
            />
            <EducationForm
                education={education}
                setEducation={setEducation}
            />
            <ExperienceForm
                experience={experience}
                setExperience={setExperience}
            />
            <SkillsForm
                skills={skills}
                setSkills={setSkills}
            />
            <ProjectsForm
                projects={projects}
                setProjects={setProjects}
            />
        </div>
    );
}