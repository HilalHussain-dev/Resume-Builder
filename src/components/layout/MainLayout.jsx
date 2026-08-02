import Sidebar from "./Sidebar";
import PreviewPanel from "./PreviewPanel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewResumeModal from "../common/NewResumeModal";
import ResumeSettingsOffcanvas from "./ResumeSettingsOffcanvas";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { downloadPDF } from "../../utils/pdfExport";
import { useTheme } from "../../context/ThemeContext";
import { defaultAdditionalInfo } from "../../config/additionalFields";
import { defaultSectionsConfig } from "../../config/sectionsConfig";
const loadState = (key, defaultValue) => {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
    } catch (e) {
        return defaultValue;
    }
};

const defaultPersonalInfo = {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    profileImage: ""
};

export default function MainLayout() {
    const { setTheme } = useTheme();
    const [isDownloading, setIsDownloading] = useState(false);
    const [showNewResumeModal, setShowNewResumeModal] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const [selectedTemplate, setSelectedTemplate] = useState(() => loadState("resume-template", "modern"));
    const [fontFamily, setFontFamily] = useState(() => loadState("resume-fontFamily", "Inter"));
    const [summary, setSummary] = useState(() => loadState("resume-summary", ""));
    const [personalInfo, setPersonalInfo] = useState(() => loadState("resume-personalInfo", defaultPersonalInfo));

    // New States for Optional Fields
    const [additionalInfo, setAdditionalInfo] = useState(() => loadState("resume-additionalInfo", defaultAdditionalInfo));
    const [visibleAdditionalFields, setVisibleAdditionalFields] = useState(() => loadState("resume-visibleAdditionalFields", []));

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

    // Section Manager State
    const [sectionsConfig, setSectionsConfig] = useState(() => loadState("resume-sectionsConfig", defaultSectionsConfig));
    // Auto-save every change to localStorage
    useEffect(() => {
        localStorage.setItem("resume-template", JSON.stringify(selectedTemplate));
        localStorage.setItem("resume-fontFamily", JSON.stringify(fontFamily));
        localStorage.setItem("resume-summary", JSON.stringify(summary));
        localStorage.setItem("resume-personalInfo", JSON.stringify(personalInfo));
        localStorage.setItem("resume-additionalInfo", JSON.stringify(additionalInfo));
        localStorage.setItem("resume-visibleAdditionalFields", JSON.stringify(visibleAdditionalFields));
        localStorage.setItem("resume-education", JSON.stringify(education));
        localStorage.setItem("resume-experience", JSON.stringify(experience));
        localStorage.setItem("resume-skills", JSON.stringify(skills));
        localStorage.setItem("resume-projects", JSON.stringify(projects));
        localStorage.setItem("resume-languages", JSON.stringify(languages));
        localStorage.setItem("resume-sectionsConfig", JSON.stringify(sectionsConfig));
    }, [selectedTemplate, fontFamily, summary, personalInfo, additionalInfo, visibleAdditionalFields, education, experience, skills, projects, languages, sectionsConfig]);

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

    const isResumeEmpty = () => {
        const hasPersonalInfo = Object.values(personalInfo).some(val => val !== "");
        const hasAdditionalInfo = Object.values(additionalInfo).some(val => val !== "");
        const hasSummary = summary.trim() !== "";
        const hasExperience = experience.length > 0;
        const hasSkills = skills.length > 0;
        const hasProjects = projects.length > 0;
        const hasLanguages = languages.length > 0;

        let hasEducation = false;
        if (education.length > 1) {
            hasEducation = true;
        } else if (education.length === 1) {
            const edu = education[0];
            hasEducation = edu.degree !== "" || edu.institute !== "" || edu.startYear !== "" || edu.endYear !== "";
        }

        return !(hasPersonalInfo || hasAdditionalInfo || hasSummary || hasExperience || hasSkills || hasProjects || hasLanguages || hasEducation);
    };

    const handleNewResumeClick = () => {
        if (isResumeEmpty()) {
            toast("Your resume is already empty.", { icon: "ℹ️" });
        } else {
            setShowNewResumeModal(true);
        }
    };

    const handleConfirmNewResume = () => {
        // Reset states
        setSelectedTemplate("modern");
        setTheme("modernBlue");
        setSummary("");
        setPersonalInfo(defaultPersonalInfo);
        setAdditionalInfo(defaultAdditionalInfo);
        setVisibleAdditionalFields([]);
        setEducation([{ id: Date.now(), degree: "", institute: "", startYear: "", endYear: "" }]);
        setExperience([]);
        setSkills([]);
        setProjects([]);
        setLanguages([]);
        setSectionsConfig(defaultSectionsConfig);

        // Clear local storage for these keys
        const keysToRemove = [
            "resume-template",
            "resume-theme",
            "resume-fontFamily",
            "resume-summary",
            "resume-personalInfo",
            "resume-additionalInfo",
            "resume-visibleAdditionalFields",
            "resume-education",
            "resume-experience",
            "resume-skills",
            "resume-projects",
            "resume-languages",
            "resume-sectionsConfig"
        ];
        keysToRemove.forEach(key => localStorage.removeItem(key));

        setShowNewResumeModal(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.success("New resume created successfully.");
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <Navbar 
                onDownload={handleDownload} 
                isDownloading={isDownloading} 
                onNewResume={handleNewResumeClick} 
                onOpenSettings={() => setIsSettingsOpen(true)}
            />
            <div className="container-fluid py-4 flex-grow-1" style={{ marginTop: '76px' }}>
                <div className="row">
                    {/* Left Side */}
                    <div className="col-lg-4 mb-4 no-print">
                        <Sidebar
                            summary={summary}
                            setSummary={setSummary}
                            personalInfo={personalInfo}
                            setPersonalInfo={setPersonalInfo}
                            additionalInfo={additionalInfo}
                            setAdditionalInfo={setAdditionalInfo}
                            visibleAdditionalFields={visibleAdditionalFields}
                            setVisibleAdditionalFields={setVisibleAdditionalFields}
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
                                fontFamily={fontFamily}
                                summary={summary}
                                personalInfo={personalInfo}
                                additionalInfo={additionalInfo}
                                visibleAdditionalFields={visibleAdditionalFields}
                                education={education}
                                experience={experience}
                                skills={skills}
                                projects={projects}
                                languages={languages}
                                sectionsConfig={sectionsConfig}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <ResumeSettingsOffcanvas
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
                sectionsConfig={sectionsConfig}
                setSectionsConfig={setSectionsConfig}
            />

            <NewResumeModal
                isOpen={showNewResumeModal}
                onClose={() => setShowNewResumeModal(false)}
                onConfirm={handleConfirmNewResume}
            />
        </div>
    );
}