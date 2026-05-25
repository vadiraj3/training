/**
 * LESSON 37: Function Borrowing (call, apply, bind)
 *
 * In JavaScript, you can invoke a function and explicitly set its 'this' context using
 * '.call()', '.apply()', or '.bind()'. This is called function borrowing.
 *
 * We have defined a generic formatter object below containing a function:
 * function printDetails(prefix) {
 *   return `${prefix}: ${this.name} (${this.role})`;
 * }
 *
 * WHAT TO DO:
 * Create a function 'borrowFormatter' that takes two parameters:
 * 1. 'userObj' - an object with { name: '...', role: '...' }
 * 2. 'prefix' - a string representing the details prefix
 *
 * The function should call 'printDetails' from the 'formatter' object below,
 * using '.call()' or '.apply()' to execute it with 'userObj' as the 'this' context,
 * passing 'prefix' as the argument. Return the formatted string result.
 *
 * IMPORTANT: Call 'borrowFormatter' in index.js to see it marked as completed!
 */

export const formatter = {
  printDetails(prefix) {
    return `${prefix}: ${this.name} (${this.role})`;
  }
};

// YOUR CODE HERE
function borrowFormatter(userObj, prefix) {
  // TODO: Implement this function
}

// Export for validation
export const lesson37 = {
  borrowFormatter: typeof borrowFormatter !== "undefined" ? borrowFormatter : null,
};
