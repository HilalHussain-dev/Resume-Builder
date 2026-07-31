import { useState } from "react";

export default function SkillsForm({
    skills,
    setSkills
}) {

    const [skill, setSkill] = useState("");

    const addSkill = () => {

        const newSkill = skill.trim();

        if (!newSkill) return;

        if (skills.includes(newSkill)) {
            setSkill("");
            return;
        }

        setSkills([
            ...skills,
            newSkill
        ]);

        setSkill("");
    };

    const removeSkill = (index) => {

        setSkills(
            skills.filter((_, i) => i !== index)
        );

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }

    };

    return (

        <div className="mt-5">

            <h5 className="mb-3">
                Skills
            </h5>

            <div className="input-group mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a skill..."
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={addSkill}
                >
                    Add
                </button>

            </div>

            <div>

                {skills.map((item, index) => (

                    <span
                        key={index}
                        className="badge bg-primary me-2 mb-2 fs-6"
                    >
                        {item}

                        <button
                            type="button"
                            className="btn-close btn-close-white ms-2"
                            style={{ fontSize: "10px" }}
                            onClick={() => removeSkill(index)}
                        />

                    </span>

                ))}

            </div>

        </div>

    );

}