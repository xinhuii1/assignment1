document.addEventListener('DOMContentLoaded', () => {
    const genreLinks = document.querySelectorAll('.nav-genre a');  // Locate the nav genre a element
    const books = document.querySelectorAll('.ranking-book');  
    const scrollArrow = document.querySelector('.exit-scroll-arrow');

    // Book genre filtering functionality
    genreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove the active class from all links
            genreLinks.forEach(link => link.classList.remove('active'));

            // Add the active class to the clicked link, when clicked the effect will be shown from CSS
            event.target.classList.add('active');

            const genre = event.target.innerText.trim().toLowerCase();  // Trim() to remove extra spaces (case sensitivity)

            // Filter books based on the selected genre
            books.forEach(book => {
                const bookGenre = book.querySelector('.book-info p:last-of-type').innerText.trim().toLowerCase(); // Get the genre from the last <p>
                if (genre === 'all' || bookGenre.includes(genre)) {  // Conditions
                    book.style.display = 'flex';
                } else {
                    book.style.display = 'none';
                }
            });
        });
    });

    // Scroll arrow click functionality (Redirect to index.html) - home page
    scrollArrow.addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });
});
