function generatePDF() {
    const { jsPDF } = window.jspdf;

    const name = document.getElementById("userName").value;
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    // Convert name to Title Case
    const titleCaseName = name.replace(/\b\w/g, char => char.toUpperCase());

    const doc = new jsPDF({
        unit: 'mm',          // Set unit to millimeters
        format: [210, 210]   // Set the format to 210x210mm (square)
    });

    const background = new Image();
    background.src = 'certificate-bg.png'; // Path to your background image

    background.onload = () => {
        // Add the background image, filling the entire square page (no white space)
        doc.addImage(background, 'PNG', 0, 0, 210, 210);

        // Add the user's name to the certificate in title case
        doc.setFont('Roboto', 'bold');
        doc.setFontSize(30);
        doc.setTextColor(26, 188, 156); // Color: #1abc9c
        doc.text(titleCaseName, 105, 105, { align: 'center' });  // Positioning the text

        // Save the PDF
        doc.save(titleCaseName + '_Certificate.pdf');

        // Reset the input box after generating the certificate
        document.getElementById("userName").value = '';
    };
}
