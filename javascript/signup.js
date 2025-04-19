// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function toggleConfirmPassword() {
    const confirmPasswordField = document.getElementById('confirm-password');
    if (confirmPasswordField.type === 'password') {
        confirmPasswordField.type = 'text';
    } else {
        confirmPasswordField.type = 'password';
    }
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // At least 8 characters, 1 letter, 1 number
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters with at least one letter and one number');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (!document.getElementById('agree-terms').checked) {
        alert('You must agree to the terms and conditions');
        return;
    }
    
    // Show loading state
    const submitButton = document.querySelector('.signup-button');
    submitButton.textContent = 'Creating account...';
    submitButton.disabled = true;
    
    // Simulate API call (replace with actual fetch)
    setTimeout(() => {
        console.log('Signup data:', { name, email, password });
        alert('Account created successfully! Redirecting to login...');
        
        // Redirect to login page after successful signup
        window.location.href = 'login.html';
    }, 1500);
});