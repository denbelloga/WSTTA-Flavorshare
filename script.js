// On page load, check if logged in (from sign-in)
window.addEventListener('load', () => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        document.querySelector('nav ul li:last-child a').textContent = 'Sign Out';
        document.querySelector('nav ul li:last-child a').href = '#'; // Add sign-out logic
    }
});
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
function openModal(title) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalTitle').textContent = title;
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
// Close on outside click
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) closeModal();
};

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const desc = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value;
    const errorDiv = document.getElementById('uploadError');
    errorDiv.textContent = '';

    if (!title || !desc || !ingredients) {
        errorDiv.textContent = 'All fields are required.';
        return;
    }
    alert('Recipe uploaded successfully!'); // Mock success
});
