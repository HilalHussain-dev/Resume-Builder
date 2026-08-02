export default function FontSelector({ fontFamily, setFontFamily }) {
    const fonts = [
        { id: "Inter", name: "Inter" },
        { id: "Roboto", name: "Roboto" },
        { id: "Poppins", name: "Poppins" },
        { id: "Lato", name: "Lato" },
        { id: "Open Sans", name: "Open Sans" },
        { id: "Montserrat", name: "Montserrat" }
    ];

    return (
        <div className="mb-4">
            <h6 className="text-muted fw-bold mb-2 small text-uppercase">
                <i className="bi bi-type me-2"></i>Typography
            </h6>
            <select 
                className="form-select form-select-sm shadow-sm font-selector-select"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                style={{ cursor: "pointer", borderRadius: '8px', padding: '0.6rem 1rem', transition: 'all 0.2s ease-in-out' }}
                aria-label="Select typography"
            >
                {fonts.map(font => (
                    <option key={font.id} value={font.id} style={{ fontFamily: font.id }}>
                        {font.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
