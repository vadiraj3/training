/**
 * LESSON 42: Grouping Data with Array.prototype.reduce()
 *
 * Array.prototype.reduce() is the Swiss Army Knife of JavaScript arrays. It can build any kind of structure,
 * including reducing a list of objects into a grouped classification map.
 *
 * WHAT TO DO:
 * Create a function 'groupProductsByCategory' that takes an array 'products' of objects containing:
 * { name: '...', category: '...', price: number }
 *
 * The function should return a single object where:
 * - Each key is a unique category name.
 * - Each value is an array of product names (strings) belonging to that category.
 *
 * HINT:
 * function groupProductsByCategory(products) {
 *   return products.reduce((acc, product) => {
 *     const cat = product.category;
 *     if (!acc[cat]) {
 *       acc[cat] = [];
 *     }
 *     acc[cat].push(product.name);
 *     return acc;
 *   }, {});
 * }
 *
 * IMPORTANT: Call 'groupProductsByCategory' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function groupProductsByCategory(products) {
  // TODO: Implement this function
}

// Export for validation
export const lesson42 = {
  groupProductsByCategory: typeof groupProductsByCategory !== "undefined" ? groupProductsByCategory : null,
};
