class BookLibrary {
  constructor() {
    this.booksCollection = document.querySelector('.books');
    this.bookList = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList.forEach((book) => {
      this.createBookElement(book.title, book.author);
    });
    this.noBooksSpan = document.querySelector('.books .no-books');
  }

  addBook(title, author) {
    this.noBooksSpan.style.display = 'none';
    this.bookList.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.bookList));
    this.createBookElement(title, author);
  }

  createBookElement(title, author) {
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
    <p>"${title}" by ${author}</p>
    `;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', () => {
      this.removeBook(div, title, author);
    });

    div.appendChild(removeBtn);

    this.booksCollection.appendChild(div);
  }

  removeBook(element, title, author) {
    this.bookList = this.bookList.filter(
      (book) => book.title !== title || book.author !== author,
    );
    if (this.bookList.length === 0) {
      this.noBooksSpan.style.display = 'block';
    }
    localStorage.setItem('books', JSON.stringify(this.bookList));
    element.remove();
  }
}
export default BookLibrary;