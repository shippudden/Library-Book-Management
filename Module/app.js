import addBook from './addBook.js';
import removeBook from './removeBook.js';
import books from "./Library.js";
import displayBooks from "./displayBooks.js";
import loadBooksFromLocalStorage from "./loadbooks.js";
import saveBooksToLocalStorage from "./saveBooks.js";

function loadParticlesBasedOnTheme () {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: prefersDarkScheme ? '#ffffff' : '#000000'
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: prefersDarkScheme ? '#ffffff' : '#000000',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

loadParticlesBasedOnTheme()

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
  loadParticlesBasedOnTheme()
})


document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("bookList");
    const button = document.getElementById('btn')
    const bookTitleInput = document.getElementById("bookTitle");

    button.addEventListener('click', (e) => {
      e.preventDefault()
      addBookAndUpdateList()
    })

    bookTitleInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { // Check if Enter key is pressed
          e.preventDefault(); // Prevent form submission (optional, since the form already has a submit event)
          addBookAndUpdateList();
      }
  });

  // Function to add book and update list
  function addBookAndUpdateList() {
      const bookTitle = bookTitleInput.value.trim();
      if (bookTitle) {
          addBook(bookTitle);
          saveBooksToLocalStorage();
          bookTitleInput.value = ''; // Clear the input
          displayBooks(); // Update book list
      }
  }

    // Display books from local storage to the browser(if any)
    loadBooksFromLocalStorage()
    displayBooks()

    // Remove book event (Event Delegation)
    bookList.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const bookTitle = e.target.dataset.book;
            removeBook(bookTitle);
            saveBooksToLocalStorage()
            displayBooks(); // Update book list
        }
    });
});
