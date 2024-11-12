function validateForm() {
    // Clear previous error messages
    document.getElementById('error-message').textContent = '';

    // Get form values
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const dob = document.getElementById('dob').value;

    // // Validate Full Name
    // if (fullname === '') {
    //     showError('Full name is required.');
    //     return false;
    // }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('Please enter a valid email address.');
        return false;
    }

    // Validate Password (minimum 8 characters, at least one number and one letter)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        showError('Password must be at least 8 characters long and contain at least one letter and one number.');
        return false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return false;
    }

    // Validate Date of Birth (user must be 18 years or older)
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const month = new Date().getMonth() - birthDate.getMonth();
    if (age < 18 || (age === 18 && month < 0)) {
        showError('You must be at least 18 years old to register.');
        return false;
    }

    // If all validations pass
    return true;
}

// Helper function to display error messages
function showError(message) {
    document.getElementById('error-message').textContent = message;
}
