import InputField from "../common/InputField";

export default function ExperienceForm({
    experience,
    setExperience
}) {

    const handleChange = (id, e) => {

        const { name, value } = e.target;

        setExperience(
            experience.map((item) =>
                item.id === id
                    ? { ...item, [name]: value }
                    : item
            )
        );

    };

    const addExperience = () => {

        setExperience([
            ...experience,
            {
                id: Date.now(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                responsibilities: ""
            }
        ]);

    };

    const deleteExperience = (id) => {

        setExperience(
            experience.filter((item) => item.id !== id)
        );

    };

    return (

        <div className="mt-5">

            <h5 className="mb-3">
                Experience
            </h5>

            {experience.length === 0 ? (

                <div className="alert alert-secondary text-center">
                    No experience added yet.
                </div>

            ) : (

                experience.map((item, index) => (

                    <div
                        key={item.id}
                        className="card shadow-sm border-0 mb-4"
                    >

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <h6 className="mb-0">
                                    Experience #{index + 1}
                                </h6>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => deleteExperience(item.id)}
                                >
                                    Delete
                                </button>

                            </div>

                            <InputField
                                label="Company"
                                name="company"
                                value={item.company}
                                placeholder="Google"
                                onChange={(e) => handleChange(item.id, e)}
                            />

                            <InputField
                                label="Job Title"
                                name="position"
                                value={item.position}
                                placeholder="Frontend Developer"
                                onChange={(e) => handleChange(item.id, e)}
                            />

                            <div className="row">

                                <div className="col-md-6">

                                    <InputField
                                        label="Start Date"
                                        type="month"
                                        name="startDate"
                                        value={item.startDate}
                                        onChange={(e) => handleChange(item.id, e)}
                                    />

                                </div>

                                <div className="col-md-6">

                                    <InputField
                                        label="End Date"
                                        type="month"
                                        name="endDate"
                                        value={item.endDate}
                                        onChange={(e) => handleChange(item.id, e)}
                                    />

                                </div>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Responsibilities
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    name="responsibilities"
                                    value={item.responsibilities}
                                    placeholder="Describe your responsibilities..."
                                    onChange={(e) => handleChange(item.id, e)}
                                />

                            </div>

                        </div>

                    </div>

                ))

            )}

            <div className="d-grid">

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={addExperience}
                >
                    + Add Experience
                </button>

            </div>

        </div>

    );

}