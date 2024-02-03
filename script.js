const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

    // Function to trigger the PDF download
    function downloadResume() {
        // Replace 'path/to/resume.pdf' with the actual path to your PDF file
        var pdfPath = 'Resume.pdf';

        // Create an invisible link element
        var link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Function to open the email client to send an email
    function sendEmail() {
        // Replace 'hannannabi@gmail.com' with your actual email address
        var emailAddress = 'hannannabi@gmail.com';
        
        // Use mailto with the subject and body parameters
        var subject = 'Job Opportunity';
        var body = 'I am interested in hiring you.';

        window.location.href = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }


