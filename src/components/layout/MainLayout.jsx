import Sidebar from "./Sidebar";
import PreviewPanel from "./PreviewPanel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { downloadPDF } from "../../utils/pdfExport";

const loadState = (key, defaultValue) => {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
    } catch (e) {
        return defaultValue;
    }
};

export default function MainLayout() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(() => loadState("resume-template", "modern"));
    const [summary, setSummary] = useState(() => loadState("resume-summary", ""));
    const [personalInfo, setPersonalInfo] = useState(() => loadState("resume-personalInfo", {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        address: "",
        profileImage: ""
    }));
    const [education, setEducation] = useState(() => loadState("resume-education", [
        {
            id: Date.now(),
            degree: "",
            institute: "",
            startYear: "",
            endYear: ""
        }
    ]));
    const [experience, setExperience] = useState(() => loadState("resume-experience", []));
    const [skills, setSkills] = useState(() => loadState("resume-skills", []));
    const [projects, setProjects] = useState(() => loadState("resume-projects", []));
    const [languages, setLanguages] = useState(() => loadState("resume-languages", []));

    // Auto-save every change to localStorage
    useEffect(() => {
        localStorage.setItem("resume-template", JSON.stringify(selectedTemplate));
        localStorage.setItem("resume-summary", JSON.stringify(summary));
        localStorage.setItem("resume-personalInfo", JSON.stringify(personalInfo));
        localStorage.setItem("resume-education", JSON.stringify(education));
        localStorage.setItem("resume-experience", JSON.stringify(experience));
        localStorage.setItem("resume-skills", JSON.stringify(skills));
        localStorage.setItem("resume-projects", JSON.stringify(projects));
        localStorage.setItem("resume-languages", JSON.stringify(languages));
    }, [selectedTemplate, summary, personalInfo, education, experience, skills, projects, languages]);

    const handleDownload = async () => {
        setIsDownloading(true);
        const loadingToast = toast.loading("Generating high-quality PDF...");
        try {
            await downloadPDF("resume-preview-container", personalInfo.fullName);
            toast.success("Resume downloaded successfully!", { id: loadingToast });
        } catch (error) {
            toast.error("Failed to generate PDF.", { id: loadingToast });
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <Navbar onDownload={handleDownload} isDownloading={isDownloading} />
            <div className="container-fluid py-4 flex-grow-1">
                <div className="row">

                    {/* Left Side */}
                <div className="col-lg-4 mb-4 no-print">
                    <Sidebar
                        selectedTemplate={selectedTemplate}
                        setSelectedTemplate={setSelectedTemplate}
                        summary={summary}
                        setSummary={setSummary}
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
                        languages={languages}
                        setLanguages={setLanguages}
                    />

                </div>

                {/* Right Side */}
                <div className="col-lg-8 print-full-width">
                    <div id="resume-preview-container">
                        <PreviewPanel
                            selectedTemplate={selectedTemplate}
                            summary={summary}
                            personalInfo={personalInfo}
                            education={education}
                            experience={experience}
                            skills={skills}
                            projects={projects}
                            languages={languages}
                        />
                    </div>
                </div>

            </div>
            </div>
            <Footer />
        </div>
    );
}