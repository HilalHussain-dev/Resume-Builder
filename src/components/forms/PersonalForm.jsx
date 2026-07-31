export default function PersonalForm({ personalInfo, setPersonalInfo }) {
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

            <div className="mb-3">
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

        </>
    );
}

