document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("sign-up-form");
    const formFeedback = document.getElementById("form-feedback");

    signUpForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            formFeedback.textContent = "Passwords do not match!";
            formFeedback.style.color = "red";
            return;
        }

        // Simulate a successful form submission
        formFeedback.textContent = "Sign up successful!";
        formFeedback.style.color = "green";

        // Clear form fields
        signUpForm.reset();
    });
});
