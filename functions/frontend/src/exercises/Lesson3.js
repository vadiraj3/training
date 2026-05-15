/**
 * LESSON 3: Using Functions
 
 * Task:
 * 1. Define a function named 'handleButtonClick'.
 * 2. The function should log 'The trainee clicked the button!' to the console.
 */

// YOUR CODE HERE
export function handleButtonClick() {
  console.log("The trainee clicked the button!");
}

export function handleClick() {
  console.log("manual verification needed");
}
// Export it
export const lesson3 = {
  handleButtonClick:
    typeof handleButtonClick !== "undefined" ? handleButtonClick : null,

  handleClick: typeof handleClick !== "undefined" ? handleClick : null,
};
