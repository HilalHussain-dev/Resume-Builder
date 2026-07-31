import { useState } from "react";

export default function LanguagesForm({
    languages,
    setLanguages
}) {

    const [language, setLanguage] = useState("");

    const addLanguage = () => {

        const newLanguage = language.trim();

        if (!newLanguage) return;

        if (languages.includes(newLanguage)) {
            setLanguage("");
            return;
        }

        setLanguages([
            ...languages,
            newLanguage
        ]);

        setLanguage("");
    };

    const removeLanguage = (index) => {

        setLanguages(
            languages.filter((_, i) => i !== index)
        );

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            addLanguage();
        }

    };

    return (

        <div className="mt-5">

            <h5 className="mb-3">
                Languages
            </h5>

            <div className="input-group mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a language..."
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={addLanguage}
                >
                    Add
                </button>

            </div>

            <div>

                {languages.map((item, index) => (

                    <span
                        key={index}
                        className="badge bg-primary me-2 mb-2 fs-6"
                    >
                        {item}

                        <button
                            type="button"
                            className="btn-close btn-close-white ms-2"
                            style={{ fontSize: "10px" }}
                            onClick={() => removeLanguage(index)}
                        />

                    </span>

                ))}

            </div>

        </div>

    );

}
