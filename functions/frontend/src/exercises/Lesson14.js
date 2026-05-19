/**
 * LESSON 14: The Age Categorizer
 *
 * You can use nested logic or multiple if/else if statements to categorize inputs.
 *
 * WHAT TO DO:
 * 1. Create a function 'getAgeGroup'.
 * 2. It should take an 'age' number as input.
 * 3. Return:
 *    - "Child" if age is less than 13.
 *    - "Teen" if age is less than 20.
 *    - "Adult" otherwise.
 *
 * IMPORTANT: Call your function in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function getAgeGroup(age) {
  if (age < 20 && age >= 13) return "Teen";
  if (age < 13) return "Child";
  return "Adult";
}

// Export for validation
export const lesson14 = {
  getAgeGroup: typeof getAgeGroup !== "undefined" ? getAgeGroup : null,
};
