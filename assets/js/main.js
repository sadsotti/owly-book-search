document.addEventListener('DOMContentLoaded', () => {

    const categoryInput = document.getElementById('categoryInput');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const bookList = document.getElementById('bookList');
    const descriptionModal = document.getElementById('descriptionModal');
    const closeButton = descriptionModal.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthors = document.getElementById('modalAuthors');
    const modalDescription = document.getElementById('modalDescription');
    const loadingSpinner = document.getElementById('loadingSpinner');

    descriptionModal.style.display = 'none';
    const existingMessageBox = document.querySelector('.message-box-overlay');
    if (existingMessageBox) {
        existingMessageBox.remove();
    }
    bookList.innerHTML = '';

    const toggleLoadingSpinner = (show) => {
        if (show) {
            loadingSpinner.style.display = 'block'; 
        } else {
            loadingSpinner.style.display = 'none'; 
        }
    };

    const searchBooks = async () => {
        const category = categoryInput.value.trim();
        if (!category) {
            bookList.innerHTML = '<p class="no-books-found">Please enter a book category.</p>';
            return;
        }

        toggleLoadingSpinner(true); 
        bookList.innerHTML = ''; 

        try {
            const url = `https://openlibrary.org/subjects/${encodeURIComponent(category)}.json`;
            const response = await fetch(url); 
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const data = await response.json(); 

            if (data.works && data.works.length > 0) {
                data.works.forEach(book => {

                    const bookCard = document.createElement('div');
                    bookCard.className = 'card'; 

                    bookCard.dataset.key = book.key;

                    const titleElement = document.createElement('h3');
                    titleElement.className = 'book-title'; 
                    titleElement.textContent = book.title;

                    const authorsElement = document.createElement('p');
                    authorsElement.className = 'book-authors'; 
                    const authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown Author';
                    authorsElement.textContent = `Author(s): ${authors}`;

                    bookCard.appendChild(titleElement);
                    bookCard.appendChild(authorsElement);

                    bookCard.addEventListener('click', () => fetchBookDescription(book.key));

                    bookList.appendChild(bookCard);
                });
            } else {

                bookList.innerHTML = '<p class="no-books-found">No books found for this category. Try another one!</p>';
            }
        } catch (error) {

            console.error('Error during book search:', error);
            bookList.innerHTML = `<p class="error-message">An error occurred during the search: ${error.message}. Please try again.</p>`;
        } finally {
            toggleLoadingSpinner(false); 
        }
    };

    const fetchBookDescription = async (bookKey) => {
        toggleLoadingSpinner(true); 
        try {
            const url = `https://openlibrary.org${bookKey}.json`;
            const response = await fetch(url); 
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const data = await response.json();

            const clickedBookCard = document.querySelector(`[data-key="${bookKey}"]`);
            const title = clickedBookCard ? clickedBookCard.querySelector('h3').textContent : 'Unknown Title';
            const authors = clickedBookCard ? clickedBookCard.querySelector('p').textContent : 'Unknown Author(s)';

            let description = 'Descrizione non disponibile.';
            if (data.description) {
                description = typeof data.description === 'object' ? data.description.value : data.description;
            }

            modalTitle.textContent = title;
            modalAuthors.textContent = authors;
            modalDescription.textContent = description;

            descriptionModal.style.display = 'flex'; 
        } catch (error) {
            console.error('Error fetching book description:', error);

            descriptionModal.style.display = 'none';
            displayMessageBox('Could not load book description. Please try again.');
        } finally {
            toggleLoadingSpinner(false); 
        }
    };

    const displayMessageBox = (message) => {

        const messageBox = document.createElement('div');
        messageBox.className = 'message-box-overlay'; 
        messageBox.innerHTML = `
            <div class="message-box-content">
                <p class="message-box-text">${message}</p>
                <button class="btn-primary message-box-close-button">OK</button>
            </div>
        `;
        document.body.appendChild(messageBox);

        document.querySelector('.message-box-close-button').addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
    };

    const clearSearch = () => {
        categoryInput.value = '';
        bookList.innerHTML = '';
        bookList.innerHTML = '<p class="no-books-found">Enter a category to find your next book!</p>'; 
    };

    searchButton.addEventListener('click', searchBooks);
    clearButton.addEventListener('click', clearSearch);

    categoryInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchBooks(); 
        }
    });

    closeButton.addEventListener('click', () => {
        descriptionModal.style.display = 'none'; 
    });

    window.addEventListener('click', (event) => {
        if (event.target === descriptionModal) {
            descriptionModal.style.display = 'none'; 
        }
    });
});
