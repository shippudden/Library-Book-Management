import books from "./Library.js";

function loadBooksFromLocalStorage () {
    const storedBooks = localStorage.getItem('libraryBooks')

    if (storedBooks) {
        const loadedBooks = JSON.parse(storedBooks)
        books.length = 0 // This clears the books array by setting its length to 0. To prevent duplicates
        books.push(...loadedBooks)
    }
}

export default loadBooksFromLocalStorage