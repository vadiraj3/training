/**
 * LESSON 5: Return Values
 * 
 * Task:
 * 1. Define a function named 'getRectangleArea' that takes 'length' and 'width'.
 * 2. Return the product of 'length' and 'width'.
 * 3. Define an arrow function named 'getRectangleAreaArrow' that does the same.
 */

// YOUR CODE HERE


// Export it
export const lesson5 = {
  getRectangleArea: typeof getRectangleArea !== 'undefined' ? getRectangleArea : null,
  getRectangleAreaArrow: typeof getRectangleAreaArrow !== 'undefined' ? getRectangleAreaArrow : null,
};
