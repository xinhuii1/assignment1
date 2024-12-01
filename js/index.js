document.addEventListener('DOMContentLoaded', () => {
    // Email validation function
    function isValidEmail(email) {
        const emailSub = /\S+@\S+\.\S+/; // Checks for basic email pattern like @, . and etc
        return emailSub.test(email); 
    }

    // Locate the subscription form in the footer
    const subscriptionForm = document.querySelector('.footer-subscription form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(event) {
            // Gather the email input
            const emailInput = document.querySelector('.footer-subscription input[type="email"]');
            const emailValue = emailInput.value;
            if (!isValidEmail(emailValue)) {
                event.preventDefault();  // Prevent form submission
                alert('Please enter a valid email address.');
            } else {
                event.preventDefault();  // Prevent form submission to show success message
                alert('Thank you for subscribing to our newsletter!');
            }
        });
    }

    // Smooth Scroll for Mobile Navigation Links (href)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent default anchor click behavior
            const targetId = link.getAttribute('href').substring(1);  // Get element with section ID
            const targetElement = document.getElementById(targetId); // ensure the href in the link correspond to existing section

            window.scrollTo({
                top: targetElement.offsetTop - 50,  
                behavior: 'smooth'  // Smooth scrolling
            });
        });
    });
});
