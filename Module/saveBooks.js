import books from "./Library.js";

function saveBooksToLocalStorage () {
    localStorage.setItem('libraryBooks', JSON.stringify(books))
}

export default saveBooksToLocalStorage