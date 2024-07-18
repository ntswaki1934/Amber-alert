document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate login validation
        if (username === "user" && password === "password") {
            loginMessage.textContent = "Login successful! Redirecting...";
            loginMessage.style.color = "green";
            loginMessage.style.display = "block";

            // Simulate a redirect after successful login
            setTimeout(function() {
                window.location.href = "index.html";
            }, 2000); // Redirect after 2 seconds
        } else {
            loginMessage.textContent = "Invalid username or password.";
            loginMessage.style.color = "red";
            loginMessage.style.display = "block";
        }
    });
});
