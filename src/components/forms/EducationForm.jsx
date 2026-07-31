import InputField from "../common/InputField";
export default function EducationForm({ education, setEducation }) {

    const handleChange = (id, e) => {
        const { name, value } = e.target;

        setEducation(
            education.map((item) =>
                item.id === id
                    ? { ...item, [name]: value }
                    : item
            )
        );
    };

    const handleDelete = (id) => {

        setEducation(
            education.filter((item) => item.id !== id)
        );
    };

    const addEducation = () => {
        setEducation([
            ...education,
            {
                id: Date.now(),
                degree: "",
                institute: "",
                startYear: "",
                endYear: ""
            }
        ]);
    };

    return (
        <div className="mt-5">

            <h5 className="mb-3">
                Education
            </h5>

            {education.map((item, index) => (

                <div
                    key={item.id}
                    className="card shadow-sm border-0 mb-4"
                >

                    <div className="card-body">

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h6 className="mb-0">
                                Education #{index + 1}
                            </h6>

                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>

                        </div>

                        {/* Degree */}

                        <div className="mb-3">

                            <label className="form-label">
                                Degree
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="degree"
                                placeholder="e.g. BS Computer Science"
                                value={item.degree}
                                onChange={(e) => handleChange(item.id, e)}
                            />



                        </div>

                        {/* Institute */}

                        <div className="mb-3">

                            <InputField
                                label="Institute / University"
                                name="institute"
                                value={item.institute}
                                placeholder="e.g. University of Peshawar"
                                onChange={(e) => handleChange(item.id, e)}
                            />

                        </div>

                        {/* Years */}

                        <div className="row">

                            <div className="col-md-6 mb-3">



                                <InputField
                                    label="Start Year"
                                    type="number"
                                    name="startYear"
                                    value={item.startYear}
                                    placeholder="2020"
                                    onChange={(e) => handleChange(item.id, e)}
                                />

                            </div>

                            <div className="col-md-6 mb-3">



                                <InputField
                                    label="End Year"
                                    type="number"
                                    name="endYear"
                                    value={item.endYear}
                                    placeholder="2024"
                                    onChange={(e) => handleChange(item.id, e)}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            ))
            }

            <div className="d-grid">

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={addEducation}
                >
                    + Add Education
                </button>

            </div>

        </div >
    );
}