document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.exit-scroll-arrow');
    const images = document.querySelectorAll('.book-grid img');
    const tabs = document.querySelectorAll('.tab');

    // Scroll arrow click functionality (Redirect to index.html) - home page
    scrollArrow.addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });

    // Handle tab switching and active class 
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        });
    });

    // Image hover effects 
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.add('hover');  //find the class hover to implement the effect
        });
        image.addEventListener('mouseleave', () => {
            // Remove hover effect when mouse leaves
            image.classList.remove('hover');
        });
    });
});
