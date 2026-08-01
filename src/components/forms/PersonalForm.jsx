import { optionalFieldsConfig } from "../../config/additionalFields";

export default function PersonalForm({ 
    personalInfo, 
    setPersonalInfo,
    additionalInfo,
    setAdditionalInfo,
    visibleAdditionalFields,
    setVisibleAdditionalFields 
}) {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            setPersonalInfo({
                ...personalInfo,
                profileImage: reader.result
            });
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value
        });
    };

    const handleAdditionalChange = (e) => {
        const { name, value } = e.target;
        setAdditionalInfo({
            ...additionalInfo,
            [name]: value
        });
    };

    const addField = (key) => {
        if (!visibleAdditionalFields.includes(key)) {
            setVisibleAdditionalFields([...visibleAdditionalFields, key]);
        }
    };

    const removeField = (key) => {
        setVisibleAdditionalFields(visibleAdditionalFields.filter(f => f !== key));
        setAdditionalInfo({
            ...additionalInfo,
            [key]: ""
        });
    };

    const renderAdditionalInput = (field) => {
        return (
            <div className="mb-3 position-relative" key={field.key}>
                <label className="form-label">{field.label}</label>
                <div className="d-flex gap-2 align-items-center">
                    {field.type === 'select' ? (
                        <select
                            className="form-select"
                            name={field.key}
                            value={additionalInfo[field.key] || ""}
                            onChange={handleAdditionalChange}
                        >
                            <option value="">Select {field.label}</option>
                            {field.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            className="form-control"
                            name={field.key}
                            value={additionalInfo[field.key] || ""}
                            onChange={handleAdditionalChange}
                        />
                    )}
                    <button 
                        type="button" 
                        className="btn btn-outline-danger px-3 py-2 border-0" 
                        onClick={() => removeField(field.key)}
                        title="Remove field"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            <h5 className="mb-3">
                Personal Information
            </h5>
            <div className="mb-3">
                <label className="form-label">
                    Profile Image
                </label>
                <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={personalInfo.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Job Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="jobTitle"
                    value={personalInfo.jobTitle}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Phone
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label className="form-label">
                    Address
                </label>
                <textarea
                    rows="3"
                    className="form-control"
                    name="address"
                    value={personalInfo.address}
                    onChange={handleChange}
                />
            </div>

            {/* Dynamic Render of Visible Additional Fields */}
            {visibleAdditionalFields.map(key => {
                const field = optionalFieldsConfig.find(f => f.key === key);
                return field ? renderAdditionalInput(field) : null;
            })}

            {/* Additional Information Pills */}
            <div className="mt-4 pt-3 border-top">
                <h6 className="mb-3 text-muted">Additional Information</h6>
                <div className="d-flex flex-wrap gap-2">
                    {optionalFieldsConfig.map(field => {
                        if (!visibleAdditionalFields.includes(field.key)) {
                            return (
                                <button
                                    key={field.key}
                                    type="button"
                                    className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
                                    onClick={() => addField(field.key)}
                                >
                                    <i className="bi bi-plus"></i> {field.label}
                                </button>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
}

