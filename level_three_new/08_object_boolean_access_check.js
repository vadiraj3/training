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

export function accessCheck(user, adminOverride) {
  console.log(user);
  console.log(adminOverride);

  if (user !== "object") {
    return "user is not a object";
  }
  if (adminOverride !== "boolean") {
    return " adminOverride is not a boolean";
  }

  if (
    typeof user.name !== "string" ||
    typeof user.role !== "string" ||
    typeof user.isBlocked !== "boolean" ||
    typeof user.adminOverride !== "boolean"
  ) {
    return "user is not a name,role,isblocked,adminOverride";
  }

  if (user.isBlocked && adminOverride) {
    return "Access denied";
  }

  if (role.admin || role.editors) {
    return "Allow to the edit area";
  } else {
    if (role.viewers) {
      return "not allow to the edit area";
    }
  }
  return `user${user.name}access${accessresult}`;

  // Step 1: Validate user object and adminOverride boolean.
  // Step 2: Validate required user fields and their types.
  // Step 3: If user is blocked and no override, return "Access denied".
  // Step 4: Use if/else to allow admins/editors, deny viewers for edit area.
  // Step 5: Return a clear message with user name and access result.
}
