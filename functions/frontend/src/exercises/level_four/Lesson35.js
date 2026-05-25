/**
 * LESSON 35: Safe Connection URL Lookup
 *
 * This exercise focuses on safe nested property access and fallback handling.
 *
 * WHAT TO DO:
 * Create a function 'getServerUrl' that takes a single 'config' object:
 * {
 *   server: {
 *     connection: {
 *       host: "127.0.0.1",
 *       port: 8080
 *     }
 *   }
 * }
 *
 * The function should extract the host and port and return a string in the format:
 * "http://host:port" (e.g. "http://127.0.0.1:8080")
 *
 * If either 'host' or 'port' (or connection/server objects) is missing or undefined,
 * it should fallback to returning "http://localhost:3000".
 *
 * HINT:
 * You can use nested checks, optional chaining (?.), or short-circuit evaluations.
 *
 * IMPORTANT: Call 'getServerUrl' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function getServerUrl(config) {
  // TODO: Implement this function
}

// Export for validation
export const lesson35 = {
  getServerUrl: typeof getServerUrl !== "undefined" ? getServerUrl : null,
};
