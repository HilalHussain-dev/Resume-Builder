export default function Footer() {
    return (
        <footer className="bg-white py-4 mt-5 border-top no-print">
            <div className="container-fluid px-4 d-flex justify-content-between align-items-center flex-wrap">
                <p className="text-muted mb-0 small">
                    © {new Date().getFullYear()} ResumePro. All rights reserved.
                </p>
                <div className="d-flex gap-3 text-muted">
                    <i className="bi bi-github" style={{cursor: 'pointer'}}></i>
                    <i className="bi bi-twitter" style={{cursor: 'pointer'}}></i>
                    <i className="bi bi-linkedin" style={{cursor: 'pointer'}}></i>
                </div>
            </div>
        </footer>
    );
}
