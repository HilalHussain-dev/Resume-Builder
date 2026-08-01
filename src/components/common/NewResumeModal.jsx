export default function NewResumeModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 1055 }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content border-0 shadow-lg rounded-4">
                        <div className="modal-header border-bottom-0 pt-4 pb-0 px-4">
                            <h5 className="modal-title fw-bold text-dark d-flex align-items-center">
                                <i className="bi bi-file-earmark-plus text-primary fs-4 me-2"></i>
                                Start New Resume
                            </h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-4 py-4 text-center">
                            <div className="mb-3 text-danger">
                                <i className="bi bi-exclamation-circle-fill" style={{ fontSize: "3rem" }}></i>
                            </div>
                            <p className="fs-5 fw-bold mb-2">Are you sure you want to start a new resume?</p>
                            <p className="text-muted mb-0">This action will permanently remove your current resume data and cannot be undone.</p>
                        </div>
                        <div className="modal-footer border-top-0 pb-4 px-4 d-flex justify-content-center gap-3">
                            <button type="button" className="btn btn-light px-4 py-2 fw-medium rounded-pill border" onClick={onClose}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger px-4 py-2 fw-medium rounded-pill" onClick={onConfirm}>
                                Start New Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Backdrop */}
            <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}></div>
        </>
    );
}
