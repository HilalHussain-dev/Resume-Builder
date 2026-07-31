import { useTheme } from "../../context/ThemeContext";

export default function ThemeSelector() {
    const { currentThemeId, setTheme, availableThemes } = useTheme();

    return (
        <div className="mb-4">
            <h5 className="mb-3">Resume Theme</h5>
            <div className="d-flex flex-wrap gap-2">
                {availableThemes.map((theme) => (
                    <button
                        key={theme.id}
                        type="button"
                        title={theme.name}
                        onClick={() => setTheme(theme.id)}
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: theme.swatch,
                            border: currentThemeId === theme.id ? "2px solid #000" : "2px solid transparent",
                            boxShadow: currentThemeId === theme.id ? "0 0 0 2px #fff inset" : "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.2s"
                        }}
                        aria-label={`Select ${theme.name} theme`}
                    />
                ))}
            </div>
        </div>
    );
}
