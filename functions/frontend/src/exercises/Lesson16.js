/**
 * LESSON 16: Address Formatter
 *
 * You can destructure objects directly in the function's parameter list.
 *
 * WHAT TO DO:
 * 1. Create a function 'formatAddress'.
 * 2. It should take ONE object as input with 'city' and 'zip' properties.
 * 3. Use destructuring in the parameters: ({ city, zip }) => { ... }
 * 4. Return a string: "City: " + city + ", Zip: " + zip.
 *
 * IMPORTANT: Call your function in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function formatAddress(Address) {
  const { city, zip } = Address;
  return "City: " + city + ", Zip: " + zip;
}

// Export for validation
export const lesson16 = {
  formatAddress: typeof formatAddress !== "undefined" ? formatAddress : null,
};
