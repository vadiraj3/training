/*
Task 9: Array of Objects Practice

Function name:
activeUsersReport

Parameters:
- users (array of objects)
  each user:
  - name (string)
  - isActive (boolean)

Goal:
Return a report with active user count and names.
Use basic loops and if/else (no map/filter required).
*/

export function activeUsersReport(users) {
  console.log(users);

  if (!Array.isArray(users)) {
    return "users is not a Array";
  }

  if (users.length === 0) {
    return "No users available";
  }

  const activeCount = 0;
  const activeNames = [];

  users.map((user) => {
    console.log(user.isActive);
    if (user === "object" || user.isActive === true) {
      activeCount;
      if (activeNames) {
        user.name;
      }
    } else {
      return "user is  Inactive";
    }
  });

  // Step 1: Validate users is an array.
  // Step 2: If array is empty, return "No users available".
  // Step 3: Create variables: activeCount and activeNames.
  // Step 4: Loop through users with for loop.
  // Step 5: Inside loop, validate each user object and check isActive with if/else.
  // Step 6: Update activeCount and activeNames for active users.
  // Step 7: Return a final summary string/object.
}
