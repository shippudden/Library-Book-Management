import books from "./Library.js";

// function to display books in the library
function displayBooks () {
    const bookList = document.getElementById("bookList")
    bookList.innerHTML = '' // clears the list container to prevent repetition

    if (books.length === 0) {
        bookList.innerHTML = '<li> No books in the library. </li>'
    } else {
        books.forEach((book, index) => {
            const li = document.createElement('li')
            li.innerHTML = `
            ${index + 1}. ${book} <button class="remove-btn" data-book="${book}"> Remove </button>`
                
                bookList.append(li)
        });
    }
}

export default displayBooks