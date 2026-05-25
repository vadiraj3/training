/**
 * LESSON 39: Dynamic Object Property Merging
 *
 * This exercise works with object mutations and dynamic property keys using arrays.
 *
 * WHAT TO DO:
 * Create a function 'mergeConfigKeys' that takes three parameters:
 * 1. 'target' (object) - the original configuration object to be updated.
 * 2. 'settings' (object) - the new configuration settings containing potential updates.
 * 3. 'keysArray' (array of strings) - a list of specific key names that are allowed to be updated.
 *
 * The function should check each key in 'keysArray'. If the key exists in the 'settings' object,
 * update the 'target' object's property of that key to match the value from 'settings'.
 * Return the updated 'target' object.
 *
 * HINT:
 * Loop over keysArray (e.g. using .forEach() or a standard loop).
 * If settings[key] !== undefined, set target[key] = settings[key].
 *
 * IMPORTANT: Call 'mergeConfigKeys' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function mergeConfigKeys(target, settings, keysArray) {
  // TODO: Implement this function
}

// Export for validation
export const lesson39 = {
  mergeConfigKeys: typeof mergeConfigKeys !== "undefined" ? mergeConfigKeys : null,
};
