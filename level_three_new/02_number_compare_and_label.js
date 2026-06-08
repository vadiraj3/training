/*
Task 2: Number Input Practice

Function name:
compareAndLabel

Parameters:
- score (number)
- passMark (number)

Goal:
Return a meaningful result using if/else.
Example: "Pass", "Fail", or "Invalid score".
*/

export function compareAndLabel(score, passMark) {
  console.log(score);
  console.log(passMark);
  console.log(typeof score);
  console.log(typeof passMark);
  if (typeof score !== "number") {
    return " Score not a numer";
  }

  if (typeof passMark !== "number") {
    return "passmark is not a number";
  }

  if (score < 0) {
    return "Invalid score";
  }
  if (score > 100) {
    return "Invalid score";
  }

  if (score >= passMark) {
    return "Pass";
  } else {
    return "Fail";
  }

  // Step 1: Check both values are numbers.
  // Step 2: If score is less than 0, return "Invalid score".
  // Step 3: If score is greater than 100, return "Invalid score".
  // Step 5: Return "Pass" if score >= passMark, else return "Fail".
}
