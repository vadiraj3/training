/*
Task 5: Array Input Practice

Function name:
arrayBasicReport

Parameters:
- items (array)

Goal:
Return a basic report about the array.
Example: count, first item, last item.
*/

export function arrayBasicReport(items) {
  console.log(items);
  if (!Array.isArray(items)) {
    return "items is not a Array";
  }
  if (items.length === 0) {
    return "No items found";
  }
  const totalCount = items.length;
  const first = items[0];
  const last = items[items.length - 1];

  return `count${totalCount} firstitem ${first} lastitem${last}`;

  // Step 1: Check items is an array.
  // Step 2: If array length is 0, return "No items found".
  // Step 3: Read total count from items.length.
  // Step 4: Get first item using index 0.
  // Step 5: Get last item using items.length - 1.
  // Step 6: Return a summary sentence/object with count, first, and last.
}
