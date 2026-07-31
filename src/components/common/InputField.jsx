export default function InputField({
    label,
    type = "text",
    name,
    value,
    placeholder,
    onChange
}) {
    return (
        <div className="mb-3">

            <label className="form-label">
                {label}
            </label>

            <input
                type={type}
                className="form-control"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>
    );
}