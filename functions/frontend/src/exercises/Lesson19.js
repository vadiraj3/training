/**
 * LESSON 19: Helper Functions - Circle Stats
 *
 * Helper functions handle specific sub-tasks for a main function.
 *
 * WHAT TO DO:
 * 1. Create a function 'getDiameter' that takes 'radius' and returns radius * 2.
 * 2. Create a function 'getCircleInfo' that takes 'radius'.
 * 3. Use 'getDiameter' to get the diameter inside 'getCircleInfo'.
 * 4. Return the string: "Radius: [radius], Diameter: [diameter]".
 *
 * IMPORTANT: Call your function in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function getDiameter(radius) {
  return radius * 2;
}
function getCircleInfo(radius) {
  const diameter = getDiameter(radius);
  return "Radius: " + radius + ", Diameter: " + diameter;
}

// Export for validation
export const lesson19 = {
  getDiameter: typeof getDiameter !== "undefined" ? getDiameter : null,
  getCircleInfo: typeof getCircleInfo !== "undefined" ? getCircleInfo : null,
};
