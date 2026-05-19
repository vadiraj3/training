/**
 * LESSON 18: Composition - The Full Name Greet
 *
 * Modular code means using small functions to build larger ones.
 *
 * WHAT TO DO:
 * 1. Create a function 'joinNames' that takes 'first' and 'last' and returns "first last".
 * 2. Create a function 'welcomeMessage' that takes 'first' and 'last'.
 * 3. Inside 'welcomeMessage', call 'joinNames' to get the full name.
 * 4. Return the string: "Welcome, [Full Name]!".
 *
 * IMPORTANT: Call 'welcomeMessage' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function joinNames(first, last) {
  return first + " " + last;
}

function welcomeMessage(first, last) {
  const FullName = joinNames(first, last);
  return "Wellcome, " + FullName + "!";
}

// Export for validation
export const lesson18 = {
  joinNames: typeof joinNames !== "undefined" ? joinNames : null,
  welcomeMessage: typeof welcomeMessage !== "undefined" ? welcomeMessage : null,
};
