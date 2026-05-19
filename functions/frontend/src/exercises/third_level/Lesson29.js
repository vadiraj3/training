/**
 * LESSON 29: Dynamic Key Update
 *
 * Modifying objects dynamically using dynamic keys.
 *
 * WHAT TO DO:
 * Create a function 'updateConfig' that takes three parameters: 'config' (an object),
 * 'key' (a string representing the property name), and 'value' (any type representing the property value).
 * The function should set the property 'key' of 'config' to 'value' and return the updated 'config' object.
 * Hint: Use square bracket notation (config[key] = value).
 *
 * IMPORTANT: Call 'updateConfig' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function updateConfig(config, key, value) {
  if (config && typeof config === "object" && typeof key === "string") {
    config[key] = value;
  }
  return config;
}

// Export for validation
export const lesson29 = {
  updateConfig: typeof updateConfig !== "undefined" ? updateConfig : null,
};
