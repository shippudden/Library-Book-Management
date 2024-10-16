import books from "./Library.js";

function removeBook (bookTitle) {
    let bookIndex = books.indexOf(bookTitle)

    if (bookIndex !== -1) { // this condition ensures we proceed with the removal only if the book is actually present in the array.
        books.splice(bookIndex, 1)
        alert(`${bookTitle} has been removed from the library`)
    } else {
        alert(`${bookTitle} is not found in the library`)
    }
}


export default removeBook