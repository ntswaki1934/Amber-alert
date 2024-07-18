document.addEventListener('DOMContentLoaded', function() {
    // Function to validate the form
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;
        const message = document.getElementById('message').value;

        if (name === "" || email === "" || phone === "" || location === "" || message === "") {
            alert("Please fill in all the fields.");
            return false;
        }

        // Display a success message
        document.getElementById('form-message').style.display = 'block';
        // Hide the form after submission
        document.getElementById('contact-police-form').style.display = 'none';

        return true; // Submit the form
    }

    // Attach the validateForm function to the window object
    window.validateForm = validateForm;
});
