// login.js - JafariMart Login Functionality
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('remember');

  // Check if there are saved credentials from "Remember Me"
  if (localStorage.getItem('rememberedEmail')) {
      emailInput.value = localStorage.getItem('rememberedEmail');
      rememberCheckbox.checked = true;
  }

  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const rememberMe = rememberCheckbox.checked;

      // Validate email format
      if (!validateEmail(email)) {
          showError('Please enter a valid email address');
          return;
      }

      // Validate password (min 8 chars with letters and numbers)
      if (!validatePassword(password)) {
          showError('Password must be at least 8 characters and contain both letters and numbers');
          return;
      }

      // If "Remember Me" is checked, save email to localStorage
      if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
      } else {
          localStorage.removeItem('rememberedEmail');
      }

      // In a real app, you would send this to your server for verification
      // This is just a simulation for the frontend
      simulateLogin(email);
  });

  // Email validation function
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  // Password validation function (8+ chars with letters and numbers)
  function validatePassword(password) {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
  }

  // Show error message
  function showError(message) {
      // Remove any existing error messages
      const existingError = document.querySelector('.error-message');
      if (existingError) {
          existingError.remove();
      }

      // Create and display new error message
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.style.color = '#ff3333';
      errorElement.style.marginTop = '10px';
      errorElement.style.textAlign = 'center';
      errorElement.textContent = message;
      
      loginForm.appendChild(errorElement);
  }

  // Simulate successful login (replace with actual API call)
  function simulateLogin(email) {
      // Store user data in sessionStorage (clears when browser closes)
      sessionStorage.setItem('currentUser', email);
      
      // Redirect to main page
      window.location.href = 'index.html';
  }
});