document.addEventListener('DOMContentLoaded', () => {
    // Get the form, checkbox, and button elements
    const form = document.querySelector('form'); //target the form
    const submitButton = document.querySelector('.btn');

    form.addEventListener('submit', (event) => {
        event.preventDefault();        // Prevent the  form from submission to perform validation

        // Gather the user input 
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Email validation (basic pattern)
        const emailCreate = /\S+@\S+\.\S+/; // Checks for basic email pattern like @, ., etc.
        if (!emailCreate.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stop further execution if email is invalid
        }

        // Password validation (must be at least 8 characters)
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return; // Stop  execution if password is invalid
        }

        // If validation passes, alert and redirect to index.html
        alert('Sign Up Successfully!');
        window.location.href = 'index.html';         // Redirect to index.html (home page)
    });
});
