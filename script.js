// On page load, check if logged in (from sign-in)
window.addEventListener('load', () => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        document.querySelector('nav ul li:last-child a').textContent = 'Sign Out';
        document.querySelector('nav ul li:last-child a').href = '#'; // Add sign-out logic
    }
});
