// Book class: Represent A Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class :handle UI task
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book one",
        author: "John Doe",
        isbn: "3435343"
      },
      {
        title: "Book two",
        author: "Jane Doe",
        isbn: "454564"
      }
    ];
    const books = StoredBooks;
    books.forEach(book => {
      UI.addBookToList(book);
    });
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
      `;
    list.appendChild(row);
  }
}

// Store Class: Handle Storage

// Event :Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event :Add a Book

// Event : Remove a book
