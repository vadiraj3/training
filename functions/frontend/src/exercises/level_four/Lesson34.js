/**
 * LESSON 34: Inventory Filter & Map
 *
 * This exercise combines array filtering and transformation using multiple parameters.
 *
 * WHAT TO DO:
 * Create a function 'filterAndMapBooks' that takes two parameters:
 * 1. 'books' (array of objects) - e.g. [{ title: "Book A", genre: "Sci-Fi", stock: 5 }, { title: "Book B", genre: "Sci-Fi", stock: 0 }]
 * 2. 'targetGenre' (string) - e.g. "Sci-Fi"
 *
 * The function should:
 * - Filter the books to only keep those that belong to the 'targetGenre' AND have 'stock > 0'.
 * - Map the filtered books array into an array of just their titles (strings).
 * - Return the final array of titles.
 *
 * If no books match or the input array is empty, return an empty array [].
 *
 * HINT:
 * Use .filter() first, then use .map() on the result.
 *
 * IMPORTANT: Call 'filterAndMapBooks' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function filterAndMapBooks(books, targetGenre) {
  // TODO: Implement this function
}

// Export for validation
export const lesson34 = {
  filterAndMapBooks: typeof filterAndMapBooks !== "undefined" ? filterAndMapBooks : null,
};
