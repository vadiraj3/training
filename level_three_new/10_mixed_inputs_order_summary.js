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

function orderSummary(customerName, itemCount, isPaid, shippingAddress, tags) {
  // Step 1: Validate all parameter types one by one.
  // Step 2: Check required fields inside shippingAddress.
  // Step 3: Check tags is array; if empty, use default tag text.
  // Step 4: Use if/else to convert isPaid into "Paid" or "Payment Pending".
  // Step 5: Use if/else for itemCount (0, 1, many) and build correct wording.
  // Step 6: Combine everything into one readable summary sentence/object.
}

module.exports = orderSummary;
