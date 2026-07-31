export default function PreviewPanel({ personalInfo, education, experience, skills }) {
    return (
        <div className="bg-white rounded shadow-sm p-4 h-100">

            {/* Profile Image */}
            <div className="text-center mb-4">
                {personalInfo.profileImage ? (
                    <img
                        src={personalInfo.profileImage}
                        alt="Profile"
                        className="rounded-circle border"
                        width="140"
                        height="140"
                        style={{
                            objectFit: "cover",
                            border: "4px solid #0d6efd",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                        }}
                    />
                ) : (
                    <div
                        className="rounded-circle bg-secondary mx-auto"
                        style={{
                            width: "140px",
                            height: "140px"
                        }}
                    ></div>
                )}
            </div>

            {/* Personal Information */}
            <h2 className="fw-bold text-center">
                {personalInfo.fullName || "Your Name"}
            </h2>

            <h5 className="text-primary text-center mb-4">
                {personalInfo.jobTitle || "Your Job Title"}
            </h5>

            <hr />

            <h5>Contact</h5>

            <p>
                <strong>Email:</strong>{" "}
                {personalInfo.email || "example@email.com"}
            </p>

            <p>
                <strong>Phone:</strong>{" "}
                {personalInfo.phone || "+1 234 567 890"}
            </p>

            <p>
                <strong>Address:</strong>{" "}
                {personalInfo.address || "Your Address"}
            </p>
            <hr />

            <h4 className="mt-4 mb-3">
                Education
            </h4>

            {
                education.map((item) => (

                    <div
                        key={item.id}
                        className="mb-3"
                    >

                        <h6 className="fw-bold">
                            {item.degree || "Degree"}
                        </h6>

                        <p className="mb-0">
                            {item.institute || "Institute"}
                        </p>

                        <small className="text-muted">
                            {item.startYear || "Start"} - {item.endYear || "End"}
                        </small>

                    </div>

                ))
            }
            <hr />

            <h4 className="mt-4 mb-3">
                Experience
            </h4>

            {
                experience.length === 0 ? (

                    <p className="text-muted">
                        No experience added.
                    </p>

                ) : (

                    experience.map((item) => (

                        <div
                            key={item.id}
                            className="mb-4"
                        >

                            <div className="d-flex justify-content-between">

                                <h6 className="fw-bold mb-1">
                                    {item.position || "Job Title"}
                                </h6>

                                <small className="text-muted">
                                    {item.startDate || "Start"} - {item.endDate || "Present"}
                                </small>

                            </div>

                            <p className="mb-1 fw-semibold">
                                {item.company || "Company Name"}
                            </p>

                            {
                                item.responsibilities && (

                                    <ul className="mb-0 ps-3">

                                        {
                                            item.responsibilities
                                                .split("\n")
                                                .filter(line => line.trim() !== "")
                                                .map((line, index) => (

                                                    <li key={index}>
                                                        {line}
                                                    </li>

                                                ))
                                        }

                                    </ul>

                                )
                            }

                        </div>

                    ))

                )
            }
            <hr />

            <h4 className="mt-4 mb-3">
                Skills
            </h4>

            {
                skills.length === 0 ? (

                    <p className="text-muted">
                        No skills added.
                    </p>

                ) : (

                    <div>

                        {skills.map((skill, index) => (

                            <span
                                key={index}
                                className="badge bg-dark me-2 mb-2 p-2"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                )
            }

        </div>
    );
}