import { useRef, useEffect } from "react";

export default function AutoResizeTextArea({
    label,
    value,
    placeholder,
    onChange,
    showCounts = false
}) {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    const characterCount = value.length;
    const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

    return (
        <div className="mb-3">
            {label && <label className="form-label">{label}</label>}
            <textarea
                ref={textareaRef}
                className="form-control"
                rows={3}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ overflow: "hidden", resize: "none" }}
            />
            {showCounts && (
                <div className="d-flex justify-content-between text-muted small mt-1">
                    <span>{wordCount} words</span>
                    <span>{characterCount} characters</span>
                </div>
            )}
        </div>
    );
}
