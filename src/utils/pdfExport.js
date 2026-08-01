import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = async (elementId, name) => {
    const originalElement = document.getElementById(elementId);
    if (!originalElement) return;

    // A4 dimensions in pixels at 96 DPI
    // 210mm = 793.7px, 297mm = 1122.5px
    const A4_WIDTH_PX = 794;

    // Create a headless temporary container
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "absolute";
    tempContainer.style.top = "0";
    tempContainer.style.left = "-9999px";
    tempContainer.style.width = `${A4_WIDTH_PX}px`;
    tempContainer.style.backgroundColor = "#ffffff";
    tempContainer.style.zIndex = "-1000";

    // Clone the element to preserve the original DOM
    const clone = originalElement.cloneNode(true);
    // Force the clone to fill the fixed width container without constraints
    clone.style.width = "100%";
    clone.style.maxWidth = "none";
    clone.style.margin = "0";
    clone.style.padding = "0";
    clone.style.boxShadow = "none";

    // Adding classes for PDF specific styling if needed
    clone.classList.add("pdf-export-mode");

    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);

    try {
        const canvas = await html2canvas(clone, {
            scale: 2, // High quality for crisp text
            useCORS: true, // Handle cross-origin images
            logging: false,
            width: A4_WIDTH_PX,
            windowWidth: A4_WIDTH_PX, // Trick responsive layout to think it's a desktop
            backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/jpeg", 1.0);

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
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pdfHeight;

        // Add additional pages if resume content exceeds one A4 page
        while (heightLeft > 0) {
            position = position - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, '', 'FAST');
            heightLeft -= pdfHeight;
        }

        // Generate Filename (e.g. Hilal_Hussain_Resume.pdf)
        const formattedName = name ? name.trim().replace(/\s+/g, "_") : "User";
        pdf.save(`${formattedName}_Resume.pdf`);

    } catch (error) {
        console.error("Error generating PDF:", error);
    } finally {
        // Cleanup the temporary container
        document.body.removeChild(tempContainer);
    }
};
