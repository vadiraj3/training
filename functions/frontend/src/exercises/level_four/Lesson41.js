/**
 * LESSON 41: Object Getters and Setters
 *
 * JavaScript allows you to define 'get' and 'set' accessor properties on objects.
 * They look and act like normal properties on the outside, but execute functions behind the scenes
 * to compute or update properties dynamically.
 *
 * WHAT TO DO:
 * Create a function 'createInteractiveUser' that takes 'firstName' and 'lastName' as parameters.
 * It should return an object that:
 * 1. Has properties 'firstName' and 'lastName' set to the passed values.
 * 2. Has a getter 'fullName' that returns the string `${firstName} ${lastName}`.
 * 3. Has a setter 'fullName' that takes a string 'nameStr' (e.g. "John Doe"),
 *    splits it by a space, and updates both 'firstName' and 'lastName' properties.
 *
 * HINT:
 * function createInteractiveUser(firstName, lastName) {
 *   return {
 *     firstName,
 *     lastName,
 *     get fullName() {
 *       return `${this.firstName} ${this.lastName}`;
 *     },
 *     set fullName(nameStr) {
 *       const parts = nameStr.split(" ");
 *       this.firstName = parts[0] || "";
 *       this.lastName = parts[1] || "";
 *     }
 *   };
 * }
 *
 * IMPORTANT: Call 'createInteractiveUser' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function createInteractiveUser(firstName, lastName) {
  return {
    firstName,
    lastName,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(nameStr) {
      const parts = nameStr.split(" ");
      this.firstName = parts[0] || "";
      this.lastName = parts[1] || "";
    }
  };
}

// Export for validation
export const lesson41 = {
  createInteractiveUser: typeof createInteractiveUser !== "undefined" ? createInteractiveUser : null,
};
