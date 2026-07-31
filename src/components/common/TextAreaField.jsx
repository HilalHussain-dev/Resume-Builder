export default function TextAreaField({
    label,
    name,
    value,
    rows = 4,
    placeholder,
    onChange
}) {

    return (

        <div className="mb-3">

            <label className="form-label">
                {label}
            </label>

            <textarea
                className="form-control"
                rows={rows}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>

    );

}