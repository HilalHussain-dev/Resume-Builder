import AutoResizeTextArea from "../common/AutoResizeTextArea";

export default function SummaryForm({ summary, setSummary }) {
    return (
        <div className="mt-4">
            <h5 className="mb-3">Professional Summary</h5>
            <AutoResizeTextArea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="e.g. Frontend Developer with 2+ years of experience building scalable React applications..."
                showCounts={true}
            />
        </div>
    );
}
