import Sidebar from "./Sidebar";
import PreviewPanel from "./PreviewPanel";
import { useState } from "react";

export default function MainLayout() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        address: "",
        profileImage: ""
    });
    const [education, setEducation] = useState([
        {
            id: Date.now(),
            degree: "",
            institute: "",
            startYear: "",
            endYear: ""
        }
    ]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);

    return (
        <div className="container-fluid py-4">

            <div className="row">

                {/* Left Side */}
                <div className="col-lg-4 mb-4">
                    <Sidebar

                        personalInfo={personalInfo}
                        setPersonalInfo={setPersonalInfo}
                        education={education}
                        setEducation={setEducation}
                        experience={experience}
                        setExperience={setExperience}
                        skills={skills}
                        setSkills={setSkills}
                        projects={projects}
                        setProjects={setProjects}
                    />

                </div>

                {/* Right Side */}
                <div className="col-lg-8">
                    <PreviewPanel
                        personalInfo={personalInfo}
                        education={education}
                        experience={experience}
                        skills={skills}
                        projects={projects}

                    />
                </div>

            </div>

        </div>
    );
}