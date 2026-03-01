import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

export async function downloadPDF() {
    const cover = document.getElementById("lab-record-preview");
    if (!cover) {
        console.error("Lab record preview element not found!");
        return;
    }

    try {
        const imgData = await toPng(cover, {
            quality: 1.0,
            backgroundColor: '#ffffff',
            pixelRatio: 3 // high resolution
        });

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        // Calculate height dynamically matching element aspect ratio
        const elemWidth = cover.offsetWidth;
        const elemHeight = cover.offsetHeight;
        const pdfHeight = (elemHeight * pdfWidth) / elemWidth;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Lab_Record_Cover.pdf");
        return true;
    } catch (error) {
        console.error("Failed to generate PDF:", error);
        return false;
    }
}
