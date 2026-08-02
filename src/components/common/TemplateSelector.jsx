export default function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
    const templates = [
        { id: "modern", name: "Modern" },
        { id: "professional", name: "Professional" },
        { id: "minimal", name: "Minimal" },
        { id: "creative", name: "Creative" }
    ];

    return (
        <div className="mb-4">
            <h5 className="mb-3">Resume Template</h5>
            <select
                className="form-select shadow-sm"
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                style={{ cursor: "pointer" }}
            >
                {templates.map(tpl => (
                    <option key={tpl.id} value={tpl.id}>
                        {tpl.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
