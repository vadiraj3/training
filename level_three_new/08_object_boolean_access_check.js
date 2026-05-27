/*
Task 8: Object + Boolean Practice

Function name:
accessCheck

Parameters:
- user (object)
  expected fields:
  - name (string)
  - role (string) // "admin", "editor", "viewer"
  - isBlocked (boolean)
- adminOverride (boolean)

Goal:
Return whether user can access the dashboard.
*/

function accessCheck(user, adminOverride) {
  // Step 1: Validate user object and adminOverride boolean.
  // Step 2: Validate required user fields and their types.
  // Step 3: If user is blocked and no override, return "Access denied".
  // Step 4: Use if/else to allow admins/editors, deny viewers for edit area.
  // Step 5: Return a clear message with user name and access result.
}

module.exports = accessCheck;
