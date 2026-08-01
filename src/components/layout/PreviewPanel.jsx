import ModernResume from "../../templates/ModernResume";
import MinimalResume from "../../templates/MinimalResume";
import ProfessionalResume from "../../templates/ProfessionalResume";
import CreativeResume from "../../templates/CreativeResume";

export default function PreviewPanel({ 
    selectedTemplate, 
    summary, 
    personalInfo,
    additionalInfo,
    visibleAdditionalFields, 
    education, 
    experience, 
    skills, 
    languages, 
    projects 
}) {
    
    // Group props to easily pass them down
    const resumeData = { 
        summary, 
        personalInfo,
        additionalInfo,
        visibleAdditionalFields, 
        education, 
        experience, 
        skills, 
        languages, 
        projects 
    };

    switch (selectedTemplate) {
        case "minimal":
            return <MinimalResume {...resumeData} />;
        case "professional":
            return <ProfessionalResume {...resumeData} />;
        case "creative":
            return <CreativeResume {...resumeData} />;
        case "modern":
        default:
            return <ModernResume {...resumeData} />;
    }
}