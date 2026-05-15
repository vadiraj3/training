/**
 * LESSON 8: Function Composition (Calling a Function within a Function)
 *
 * Functions are like LEGO bricks. You can use one brick to build another!
 * Here, you will create a helper function and then use it inside another function.
 *
 * WHAT TO DO:
 * 1. Define a function 'getFullName' that takes 'first' and 'last' name and returns them combined with a space.
 * 2. Define a second function 'greetUser' that also takes 'first' and 'last'.
 * 3. Inside 'greetUser', call 'getFullName(first, last)' to get the full name.
 * 4. Return the string: "Hello, " + fullName + "!"
 *
 * WHY? This keeps your code organized and prevents you from writing the same logic twice.
 */

// YOUR CODE HERE
function getFullName(first, last) {
  return first + " " + last;
}

function greetUser(first, last) {
  const fullName = getFullName(first, last);
  return "Hello, " + fullName + "!";
}

// Export for validation
export const lesson8 = {
  getFullName: typeof getFullName !== "undefined" ? getFullName : null,
  greetUser: typeof greetUser !== "undefined" ? greetUser : null,
};
