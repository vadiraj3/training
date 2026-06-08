/*
Task 7: Number + Boolean Practice

Function name:
discountLabel

Parameters:
- totalAmount (number)
- isMember (boolean)

Goal:
Return final amount text after discount rules.
Rule idea: members get discount, non-members do not.
*/

export function discountLabel(totalAmount, isMember) {
  console.log(totalAmount);
  console.log(isMember);

  if (typeof totalAmount !== "number") {
    return "totalAmount is not a number";
  }
  if (typeof isMember !== "boolean") {
    return "isMember is not a boolean";
  }

  if (totalAmount < 0) {
    return "Invalid amount";
  }

  let discountpercentage;
  if (isMember) {
    discountpercentage: 0.1;
  } else {
    discountpercentage: 0.0;
  }

  const discountAmount = totalAmount * discountpercentage;
  const finalAmount = totalAmount - discountAmount;
  return finalAmount;

  // Step 1: Validate totalAmount is number and isMember is boolean.
  // Step 2: If totalAmount is less than 0, return "Invalid amount".
  // Step 3: Create one discount percentage using if/else and isMember.
  // Step 4: Compute discounted amount.
  // Step 5: Return a readable sentence with original and final amount.
}
