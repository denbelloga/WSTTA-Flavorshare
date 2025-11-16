// Sign-in logic (expand from prior)
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = '';

    if (!email.endsWith('@gmail.com')) {
        errorDiv.textContent = 'Email must be a @gmail.com address.';
        return;
    }
    // Mock success for any @gmail.com + password
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'landing-page.html'; // Redirect after login
});

// Sign-up toggle and logic
document.getElementById('showSignUp').addEventListener('click', () => {
    document.getElementById('signUpForm').style.display = 'block';
});
document.getElementById('signUpBtn').addEventListener('click', () => {
    const email = document.getElementById('signUpEmail').value.trim();
    const errorDiv = document.getElementById('signUpError');
    errorDiv.textContent = '';

    if (!email.endsWith('@gmail.com')) {
        errorDiv.textContent = 'Please use a valid @gmail.com email.';
        return;
    }
    alert('Account created!'); // Mock success
    document.getElementById('signUpForm').style.display = 'none';
});
