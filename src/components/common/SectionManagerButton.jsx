export default function SectionManagerButton({ onClick }) {
    return (
        <div className="mb-4">
            <h6 className="text-muted fw-bold mb-2 small text-uppercase">
                <i className="bi bi-layout-wtf me-2"></i>Resume Sections
            </h6>
            <button 
                className="btn btn-outline-dark w-100 shadow-sm fw-bold d-flex align-items-center justify-content-center section-manager-btn"
                onClick={onClick}
                style={{ borderRadius: '8px', padding: '0.6rem', transition: 'all 0.2s ease-in-out' }}
            >
                <i className="bi bi-layout-text-sidebar me-2 fs-5 text-primary"></i> Manage Sections
            </button>
        </div>
    );
}
