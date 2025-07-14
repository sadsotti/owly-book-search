import '../css/style.less';
import _get from 'lodash.get';
import logoOwlyImage from '../img/logo-owly.png';
import noCoverImage from '../img/no-cover.jpg';

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

    bookList.innerHTML = '<p class="no-books-found">Enter a category to find your next book!</p>';

    const toggleLoadingSpinner = (show) => {
        if (show) {
            loadingSpinner.style.display = 'block';
        } else {
            loadingSpinner.style.display = 'none';
        }
    };

    const searchBooks = async () => {
        const category = categoryInput.value.trim().toLowerCase();

        bookList.innerHTML = '';

        if (!category) {
            displayMessageBox('Please enter a category to search for books.');
            bookList.innerHTML = '<p class="no-books-found">Enter a category to find your next book!</p>';
            return;
        }

        toggleLoadingSpinner(true);

        try {
            const url = `https://openlibrary.org/subjects/${encodeURIComponent(category)}.json?limit=20`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (_get(data, 'works.length', 0) > 0) {
                data.works.forEach(book => {
                    const bookCard = document.createElement('div');
                    bookCard.className = 'card';
                    bookCard.dataset.key = _get(book, 'key');

                    const titleElement = document.createElement('h3');
                    titleElement.textContent = _get(book, 'title', 'Unknown Title');
                    titleElement.className = 'book-title';

                    const authorsElement = document.createElement('p');
                    const authors = _get(book, 'authors', [])
                                         .map(author => _get(author, 'name', 'Unknown Author'))
                                         .join(', ') || 'Unknown Author';
                    authorsElement.textContent = `Author(s): ${authors}`;
                    authorsElement.className = 'book-authors';

                    const coverElement = document.createElement('img');
                    const coverId = _get(book, 'cover_id');
                    if (coverId) {
                        coverElement.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
                        coverElement.alt = `${titleElement.textContent} Cover`;
                    } else {
                        coverElement.src = noCoverImage;
                        coverElement.alt = 'No Cover Available';
                    }
                    coverElement.className = 'book-cover';

                    bookCard.appendChild(coverElement);
                    bookCard.appendChild(titleElement);
                    bookCard.appendChild(authorsElement);

                    bookCard.addEventListener('click', () => fetchBookDescription(book.key));

                    bookList.appendChild(bookCard);
                });
            } else {
                bookList.innerHTML = '<p class="no-books-found">No books found for this category.</p>';
            }
        } catch (error) {
            bookList.innerHTML = '<p class="no-books-found">Error loading books. Please try again.</p>';
            displayMessageBox('Could not load books. Please check your internet connection and try again.');
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

            let title = 'Unknown Title';
            let authors = 'Unknown Author(s)';

            if (clickedBookCard) {
                const titleElement = clickedBookCard.querySelector('h3.book-title');
                if (titleElement) {
                    title = titleElement.textContent;
                }

                const authorsElement = clickedBookCard.querySelector('p.book-authors');
                if (authorsElement) {
                    authors = authorsElement.textContent;
                }
            }

            let description = _get(data, 'description', 'Descrizione non disponibile.');
            if (typeof description === 'object' && description !== null) {
                description = _get(description, 'value', 'Descrizione non disponibile.');
            }

            modalTitle.textContent = title;
            modalAuthors.textContent = authors;
            modalDescription.textContent = description;

            descriptionModal.style.display = 'flex';
        } catch (error) {
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
        bookList.innerHTML = '<p class="no-books-found">Enter a category to find your next book!</p>';
    };

    const logoImageElement = document.querySelector('.logo-image');
    if (logoImageElement) {
        logoImageElement.src = logoOwlyImage;
    }

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
