/**
 * LESSON 27: List Filtering by Property
 *
 * Filtering an array of objects based on a boolean status.
 *
 * WHAT TO DO:
 * Create a function 'filterActiveProducts' that takes an array 'products' containing object elements.
 * Each object has an 'isActive' boolean property.
 * The function should return a new array containing only the product objects where 'isActive' is true.
 *
 * IMPORTANT: Call 'filterActiveProducts' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function filterActiveProducts(products) {
  return products.filter((product) => product.isActive === true);
}

// Export for validation
export const lesson27 = {
  filterActiveProducts:
    typeof filterActiveProducts !== "undefined" ? filterActiveProducts : null,
};
