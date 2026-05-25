/**
 * LESSON 37: Student Grade Classifier
 *
 * This exercise covers mapping array elements and computing conditional object properties.
 *
 * WHAT TO DO:
 * Create a function 'classifyStudents' that takes an array of student objects:
 * [{ name: "Alice", score: 85 }, { name: "Bob", score: 55 }]
 *
 * The function should return a NEW array where each student object is transformed into:
 * {
 *   name: string,
 *   pass: boolean (true if score >= 60, false otherwise),
 *   grade: string ('A' if score >= 90, 'B' if score >= 80, 'C' if score >= 70, 'D' if score >= 60, else 'F')
 * }
 *
 * HINT:
 * Use Array.prototype.map() to iterate over and transform each student object.
 *
 * IMPORTANT: Call 'classifyStudents' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function classifyStudents(students) {
  // TODO: Implement this function
}

// Export for validation
export const lesson37 = {
  classifyStudents: typeof classifyStudents !== "undefined" ? classifyStudents : null,
};
