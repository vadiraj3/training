/**
 * LESSON 4: Multiple Parameters & Default Values
 *
 * Task:
 * 1. Define a function named 'introduceUser' that takes two parameters: 'name' and 'title'.
 * 2. Set the default value of 'title' to 'Student'.
 * 3. The function should log: 'Name: [name], Title: [title]'.
 */

// YOUR CODE HERE
function introduceUser(name, title = "Student") {
  console.log("Name: " + name + "," + "Title: " + title);
}

// Export it
export const lesson4 = {
  introduceUser: typeof introduceUser !== "undefined" ? introduceUser : null,
};
