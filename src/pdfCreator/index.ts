import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();
let page = 0

export const savePDF = () => {
    doc.save('a4.pdf')
} 

export const addPage = () => {
    doc.addPage()
    doc.setFontSize(12)
    doc.setTextColor(150);
    doc.text(`Page ${page} of 8`, 180, 290)
    doc.setFontSize(18)
    doc.setTextColor('black');
    page += 1;

}


export default doc;