/**
 * LESSON 7: Multiple Parameters & Logic
 * 
 * In this lesson, we learn that functions can handle more than one piece of information at a time.
 * We also learn how to use 'if' statements inside functions to make decisions.
 * 
 * WHAT TO DO:
 * 1. Create a function named 'evaluateScore'.
 * 2. It needs two inputs (parameters): 'score' and 'passingGrade'.
 * 3. Inside the function, use an 'if' statement:
 *    - If score >= passingGrade, return the string "Pass"
 *    - Otherwise, return the string "Fail"
 * 
 * EXAMPLE:
 * evaluateScore(80, 50) -> should return "Pass"
 */

// YOUR CODE HERE



// Export for validation
export const lesson7 = {
  evaluateScore: typeof evaluateScore !== 'undefined' ? evaluateScore : null,
};
