import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = async (elementId, name) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Optional: add a class to adjust styles for PDF generation if needed
    element.classList.add("pdf-export-mode");

    try {
        const canvas = await html2canvas(element, {
            scale: 2, // High quality for crisp text
            useCORS: true, // Handle cross-origin images if any
            logging: false,
            backgroundColor: null, // Let CSS handle background
        });

        element.classList.remove("pdf-export-mode");

        const imgData = canvas.toDataURL("image/png");
        
        // A4 size in mm
        const pdfWidth = 210;
        const pdfHeight = 297;
        
        const pdf = new jsPDF("p", "mm", "a4");
        
        // Calculate image dimensions to fit A4 horizontally
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Add additional pages if resume content exceeds one A4 page
        while (heightLeft > 0) {
            // position shifts the image up to show the next chunk
            position = heightLeft - imgHeight; 
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        // Generate Filename (e.g. Hilal_Hussain_Resume.pdf)
        const formattedName = name ? name.trim().replace(/\s+/g, "_") : "User";
        pdf.save(`${formattedName}_Resume.pdf`);
        
    } catch (error) {
        console.error("Error generating PDF:", error);
        element.classList.remove("pdf-export-mode");
    }
};
