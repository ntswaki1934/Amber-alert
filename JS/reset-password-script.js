document.addEventListener('DOMContentLoaded', function() {
    const otpSection = document.getElementById('otp-section');
    const resetMessage = document.getElementById('reset-message');

    function sendOTP() {
        const email = document.getElementById('email').value;

        // Simulate sending OTP via email
        if (email === "") {
            resetMessage.textContent = "Please enter a valid email address.";
            resetMessage.style.color = "red";
            resetMessage.style.display = "block";
        } else {
            resetMessage.textContent = "OTP has been sent to your email.";
            resetMessage.style.color = "green";
            resetMessage.style.display = "block";
            otpSection.style.display = "block";
        }
    }

    function verifyOTP() {
        const otp = document.getElementById('otp').value;
        const newPassword = document.getElementById('new-password').value;

        // Simulate OTP verification and password reset
        if (otp === "123456" && newPassword !== "") {
            resetMessage.textContent = "Password has been reset successfully!";
            resetMessage.style.color = "green";
            resetMessage.style.display = "block";
        } else {
            resetMessage.textContent = "Invalid OTP or password.";
            resetMessage.style.color = "red";
            resetMessage.style.display = "block";
        }
    }

    window.sendOTP = sendOTP;
    window.verifyOTP = verifyOTP;
});
