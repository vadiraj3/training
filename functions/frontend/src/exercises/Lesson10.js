/**
 * LESSON 10: Functions & Arrays
 *
 * Functions can also process lists of data, called Arrays.
 * To do this, we usually pass the whole array as one argument.
 *
 * WHAT TO DO:
 * 1. Create a function 'sumArray' that takes one parameter: 'numbers' (which will be an array).
 * 2. Inside the function, you need to add up every number in that list.
 * 3. Return the final total.
 *
 * HINT: You can use a 'for' loop, or if you're feeling fancy, the '.reduce()' method!
 * Don't forget to handle empty arrays (the sum should be 0).
 */

// YOUR CODE HERE
// const string = "sdsdfs";
// const object = { key: "value" };
// const boolean = true;
// const number = 32;
// const arrayOfNumber = [1, 2, 3, 43];
// const arrayOfString = ["df", "sdfsd"];
// const arrayOfObjects = [
//   { key: "value", secondKey: "value" },
//   { key: "value", secondKey: "value" },
// ];

function sumArray(numbers) {
  let sum = 0;
  numbers.map((item) => {
    sum = sum + item;
  });
  return sum;
}

// Export for validation
export const lesson10 = {
  sumArray: typeof sumArray !== "undefined" ? sumArray : null,
};
