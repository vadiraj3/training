/*
Task 3: Boolean Input Practice

Function name:
booleanStatusMessage

Parameters:
- isActive (boolean)
- label (string)

Goal:
Return a user-friendly status message.
Example: "Account A is active" or "Account A is inactive".
*/

export function booleanStatusMessage(isActive, label) {
  console.log(isActive);
  console.log(label);
  console.log(typeof isActive);
  console.log(typeof label);

  if (typeof isActive !== "boolean") {
    return "isActive is not a boolean";
  }

  if (typeof label !== "string") {
    return "label is not a string";
  }

  const labeledTrim = label.trim();
  console.log(labeledTrim);

  if (labeledTrim === "") {
    return "Invalid Input";
  }

  if (isActive === true) {
    return "Account A is active";
  } else {
    return "Account A is inactive";
  }

  // Step 1: Check isActive is boolean.
  // Step 2: Check label is string and not empty after trim.
  // Step 3: If validation fails, return "Invalid input".
  // Step 4: Use if/else with isActive.
  // Step 5: Return a meaningful status sentence.
}
