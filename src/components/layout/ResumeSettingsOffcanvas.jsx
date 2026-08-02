import { useState } from "react";
import ThemeSelector from "../common/ThemeSelector";
import TemplateSelector from "../common/TemplateSelector";
import FontSelector from "../common/FontSelector";
import SectionManagerButton from "../common/SectionManagerButton";
import SectionManagerModal from "../common/SectionManagerModal";
import { defaultSectionsConfig } from "../../config/sectionsConfig";

export default function ResumeSettingsOffcanvas({
    isOpen,
    onClose,
    selectedTemplate,
    setSelectedTemplate,
    fontFamily,
    setFontFamily,
    sectionsConfig,
    setSectionsConfig
}) {
    const [isSectionManagerOpen, setIsSectionManagerOpen] = useState(false);

    return (
        <>
            {/* Backdrop for Offcanvas */}
            {isOpen && (
                <div 
                    className="offcanvas-backdrop fade show" 
                    onClick={onClose}
                    style={{ zIndex: 1040 }}
                ></div>
            )}

            {/* Offcanvas Panel */}
            <div 
                className={`offcanvas offcanvas-end shadow ${isOpen ? 'show' : ''}`} 
                tabIndex="-1" 
                id="resumeSettingsOffcanvas" 
                style={{ 
                    visibility: isOpen ? 'visible' : 'hidden', 
                    zIndex: 1045,
                    borderLeft: 'none'
                }}
                aria-labelledby="resumeSettingsOffcanvasLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fw-bold" id="resumeSettingsOffcanvasLabel" style={{ color: '#2c3e50', letterSpacing: '-0.5px' }}>
                        <i className="bi bi-gear-fill me-2 text-primary"></i>Resume Settings
                    </h5>
                    <button type="button" className="btn-close text-reset" onClick={onClose} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ThemeSelector />
                    
                    <hr className="my-4 text-muted" style={{ opacity: 0.1 }} />
                    
                    <TemplateSelector
                        selectedTemplate={selectedTemplate}
                        setSelectedTemplate={setSelectedTemplate}
                    />
                    
                    <FontSelector 
                        fontFamily={fontFamily}
                        setFontFamily={setFontFamily}
                    />
                    
                    <hr className="my-4 text-muted" style={{ opacity: 0.1 }} />
                    
                    <SectionManagerButton 
                        onClick={() => setIsSectionManagerOpen(true)}
                    />
                </div>
            </div>

            {/* Section Manager Modal */}
            <SectionManagerModal
                isOpen={isSectionManagerOpen}
                onClose={() => setIsSectionManagerOpen(false)}
                sectionsConfig={sectionsConfig}
                setSectionsConfig={setSectionsConfig}
                resetLayout={() => setSectionsConfig(defaultSectionsConfig)}
            />
        </>
    );
}
