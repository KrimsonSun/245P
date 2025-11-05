// Define the data structure as provided
const books = [
  { title: 1984, author: "George Orwell" },
  { title: "In Search of Lost Time", author: "Marcel Proust" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/**
 * Challenge 1: Filter out Orwell
 * This function filters the list and logs the result to the console.
 */
function printWithoutOrwell() {
  // Use the .filter() method on the 'books' array
  // The filter method creates a new array with all elements that pass the test.
  // The test is an arrow function (book => ...) that checks each item.
  // 'book' represents the current object being processed (e.g., {title: 1984, author: "George Orwell"})
  const filteredBooks = books.filter((book) => {
    // We access the 'author' property of the 'book' object
    // If the author is NOT "George Orwell", the test returns true, and the book is kept.
    return book.author !== "George Orwell";
  });

  // Log the resulting new array to the browser's console
  console.log("--- List without Orwell ---");
  console.log(filteredBooks);
}

/**
 * Challenge 2: Filter out Orwell AND Melville
 * This function filters out books from two different authors.
 */
function printWithoutOrwellAndMelville() {
  const filteredBooks = books.filter((book) => {
    // We use the '&&' (AND) operator to combine two conditions.
    // The book is kept ONLY IF:
    // 1. The author is NOT "George Orwell"
    // AND
    // 2. The author is NOT "Herman Melville"
    return book.author !== "George Orwell" && book.author !== "Herman Melville";
  });

  // Log the final list to the console
  console.log("--- List without Orwell AND Melville ---");
  console.log(filteredBooks);
}

// --- To run the functions ---
// You can call them directly in your script to see the output when the page loads
printWithoutOrwell();
printWithoutOrwellAndMelville();