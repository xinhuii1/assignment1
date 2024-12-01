document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.exit-scroll-arrow');

    // Scroll arrow click functionality (Redirect to index.html) - home page
    scrollArrow.addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });
});