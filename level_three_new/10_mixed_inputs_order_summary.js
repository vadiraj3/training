/*
Task 10: Mixed Input Final Practice

Function name:
orderSummary

Parameters:
- customerName (string)
- itemCount (number)
- isPaid (boolean)
- shippingAddress (object) // { city: string, pincode: number }
- tags (array of strings)

Goal:
Return one meaningful order summary.
This combines all basic data types in one function.
*/

export function orderSummary(
  customerName,
  itemCount,
  isPaid,
  shippingAddress,
  tags = ["gouri"],
) {
  console.log(customerName);
  console.log(itemCount);
  console.log(isPaid);
  console.log(shippingAddress);
  console.log(tags);

  if (typeof customerName !== "string") {
    return "customerName is not a string";
  }
  if (typeof itemCount !== "number") {
    return "Itemcount is not a number";
  }
  if (typeof isPaid !== "boolean") {
    return "isPaid is not a boolean";
  }
  if (typeof shippingAddress !== "object") {
    return "shippingAddress is not a object";
  }

  if (
    typeof shippingAddress === "string" ||
    typeof shippingAddress === "number"
  ) {
    return "shippingAddress is a not string and number";
  }

  // if (isPaid !== true) {
  //   return "paid";
  // } else {
  //   return "Payment Pending";
  // }

  if (itemCount === 0) {
    ("no active here");
  } else if (itemCount === 1) {
    ("1 is active here");
  }
  return "many itemcount active here";

  // Step 1: Validate all parameter types one by one.
  // Step 2: Check required fields inside shippingAddress.
  // Step 3: Check tags is array; if empty, use default tag text.
  // Step 4: Use if/else to convert isPaid into "Paid" or "Payment Pending".
  // Step 5: Use if/else for itemCount (0, 1, many) and build correct wording.
  // Step 6: Combine everything into one readable summary sentence/object.
}
