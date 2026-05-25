/**
 * LESSON 38: List Mapping & Object Transformation
 *
 * Array.prototype.map() is one of the most widely used methods in modern JavaScript/React.
 * It transforms a list of one shape into a new list of another shape.
 *
 * WHAT TO DO:
 * Create a function 'formatTraineeList' that takes an array 'trainees' of objects containing:
 * { firstName: '...', lastName: '...', age: number }
 *
 * The function should return a NEW array where each trainee object is transformed into:
 * { fullName: 'firstName lastName', isAdult: boolean } (where 'isAdult' is true if age >= 18, and false otherwise).
 *
 * HINT:
 * function formatTraineeList(trainees) {
 *   return trainees.map(t => ({
 *     fullName: `${t.firstName} ${t.lastName}`,
 *     isAdult: t.age >= 18
 *   }));
 * }
 *
 * IMPORTANT: Call 'formatTraineeList' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function formatTraineeList(trainees) {
  // TODO: Implement this function
}

// Export for validation
export const lesson38 = {
  formatTraineeList: typeof formatTraineeList !== "undefined" ? formatTraineeList : null,
};
