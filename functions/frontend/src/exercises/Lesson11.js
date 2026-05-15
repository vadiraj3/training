/**
 * LESSON 11: Object Parameters & Destructuring
 *
 * Sometimes we have too many arguments to pass. Instead of passing 10 things, we pass 1 Object.
 * "Destructuring" is a shortcut to grab exactly what we need from that object immediately.
 *
 * WHAT TO DO:
 * 1. Create a function 'formatUserCard'.
 * 2. It takes ONE argument: an object that looks like { username: "...", email: "..." }.
 * 3. Use destructuring in the parameter line: ({ username, email }) => { ... }
 * 4. Return the string: "User: " + username + ", Contact: " + email
 *
 * WHY? It makes your code much easier to read and you don't have to worry about the order of arguments!
 */

// YOUR CODE HERE
function formatUserCard({ username, email }) {
  return "User: " + username + ", Contact: " + email;
}

const UserCard = {
  username: "jsmith",
  email: "j@s.com",
};

console.log(formatUserCard(UserCard));

// Export for validation
export const lesson11 = {
  formatUserCard: typeof formatUserCard !== "undefined" ? formatUserCard : null,
};
