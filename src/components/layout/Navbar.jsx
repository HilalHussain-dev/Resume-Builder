export default function Navbar({ onDownload, isDownloading, onNewResume, onOpenSettings }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top no-print" style={{ zIndex: 1000 }}>
            <div className="container-fluid px-4">
                <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
                    <i className="bi bi-file-earmark-person-fill text-primary fs-3 me-2"></i>
                    <span>Resume<span className="text-primary">Pro</span></span>
                </a>
                
                <div className="d-flex ms-auto align-items-center gap-3 gap-md-4">
                    <span className="text-muted small d-none d-md-flex align-items-center">
                        <i className="bi bi-cloud-check-fill text-success me-2 fs-5"></i> 
                        Auto-saved
                    </span>
                    
                    <button 
                        className="btn btn-outline-secondary fw-bold shadow-sm d-flex align-items-center gap-2 px-3 px-md-4 rounded-pill transition-all"
                        onClick={onNewResume}
                        disabled={isDownloading}
                    >
                        <i className="bi bi-plus-circle"></i> <span className="d-none d-sm-inline">New Resume</span>
                    </button>

                    <button 
                        className="btn btn-dark fw-bold shadow-sm d-flex align-items-center gap-2 px-3 px-md-4 rounded-pill transition-all"
                        onClick={onOpenSettings}
                        disabled={isDownloading}
                    >
                        <i className="bi bi-gear-fill"></i> <span className="d-none d-sm-inline">Resume Settings</span>
                    </button>

                    <button 
                        className="btn btn-primary fw-bold shadow-sm d-flex align-items-center gap-2 px-4 rounded-pill transition-all"
                        onClick={onDownload}
                        disabled={isDownloading}
                        style={{ transform: isDownloading ? 'scale(0.98)' : 'scale(1)' }}
                    >
                        {isDownloading ? (
                            <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Generating...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-download"></i> Download PDF
                            </>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
