document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form'); //target the login form
    
    // Add the submit event listener once the page loads
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submission to perform validation

        //gather the user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Email validation (basic pattern)
        const emailLogin = /\S+@\S+\.\S+/; // Checks for basic email pattern like @, ., etc.
        if (!emailLogin.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stop further execution if email is invalid
        }

        // Password validation (must be at least 8 characters)
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return; // Stop  execution if password is invalid
        }

        // If validation passes, alert and redirect to index.html
        alert('Sign In successful!');
        window.location.href = 'index.html'; // Redirect to home page
    });
});
