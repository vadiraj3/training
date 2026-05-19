/**
 * LESSON 15: User Profile Creator
 *
 * Functions can return complex data types like Objects.
 *
 * WHAT TO DO:
 * 1. Create a function 'createUser'.
 * 2. It should take two inputs: 'name' and 'role'.
 * 3. Return an object with two properties:
 *    - 'userName' should be the name.
 *    - 'userRole' should be the role.
 *
 * EXAMPLE: createUser("Ali", "Admin") -> { userName: "Ali", userRole: "Admin" }
 *
 * IMPORTANT: Call your function in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function createUser(name, role) {
  return {
    userName: name,
    userRole: role,
  };
}

// Export for validation
export const lesson15 = {
  createUser: typeof createUser !== "undefined" ? createUser : null,
};
