function generatePDF() {
    const { jsPDF } = window.jspdf;

    const name = document.getElementById("userName").value;
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    // Convert name to Title Case
    const titleCaseName = name.replace(/\b\w/g, char => char.toUpperCase());

    // Create a horizontal rectangle PDF
    const doc = new jsPDF({
        orientation: 'landscape',   // Set landscape orientation
        unit: 'mm',
        format: [210, 150]  // Width 210mm, Height 150mm (horizontal rectangle)
    });

    const background = new Image();
    background.src = 'certificate-bg.png'; // Path to your background image

    background.onload = () => {
        // Add background image covering the horizontal rectangle
        doc.addImage(background, 'PNG', 0, 0, 210, 150); 

        // Add user's name in title case
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.setTextColor(26, 188, 156); // Color: #1abc9c
        doc.text(titleCaseName, 105, 75, { align: 'center' }); // Centered text

        // Save the generated PDF
        doc.save( titleCaseName + 'certificate.pdf');

        // Reset the input field
        document.getElementById("userName").value = '';
    };
}
