import books from "./Library.js";

function addBook (bookTitle) {
    if (bookTitle && !books.includes(bookTitle)) {
        books.push(bookTitle)
        alert(`${bookTitle} has been added to the library.`)
    } else {
        alert(`${bookTitle} is already in the library or the title is invalid`)
    }
}

export default addBook