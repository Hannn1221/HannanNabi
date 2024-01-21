// Example: Toggle mobile menu visibility
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('visible');
});
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var formData = {};
    formData['name'] = document.querySelector('#contact input[name="name"]').value;
    formData['email'] = document.querySelector('#contact input[name="email"]').value;
    formData['message'] = document.querySelector('#contact textarea[name="description"]').value;

    // Store the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
});
var storedFormData = JSON.parse(localStorage.getItem('formData'));
console.log(storedFormData); // Logs the stored form data to the console
