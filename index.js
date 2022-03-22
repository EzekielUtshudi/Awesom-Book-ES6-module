import BookLibrary from './modules/CreateBook.js';
import navigate from './modules/pageNav.js';
import date from './modules/Date.js';

const bookLibrary = new BookLibrary();

navigate();
date();

const addBtn = document.querySelector('.add-book-btn');
const addBook = () => {
  addBtn.addEventListener('click', () => {
    // add book

    const titleElement = document.getElementById('title');
    const authorElement = document.getElementById('author');
    const title = titleElement.value;
    const author = authorElement.value;
    if (!title || !author) {
      return;
    }
    bookLibrary.addBook(title, author);
    titleElement.value = '';
    authorElement.value = '';
  });
};
addBook();
