export default function Footer() {
    return (
        <footer className="bg-white py-4 mt-5 border-top no-print">
            <div className="container-fluid px-4 d-flex justify-content-between align-items-center flex-wrap">
                <p className="text-muted mb-0 small">
                    © {new Date().getFullYear()} ResumePro. All rights reserved.
                </p>
                <div className="d-flex gap-3 text-muted">
                    <a href="https://www.linkedin.com/in/hilal-hussain-970b60368" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none">
                        <i className="bi bi-linkedin" style={{cursor: 'pointer'}}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
