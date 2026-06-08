/*
Task 1: String Input Practice

Function name:
cleanAndGreet

Parameters:
- nameInput (string)
- cityInput (string)

Goal:
Return a clean greeting sentence.
Example idea: "Hello Riya from Pune!"
*/

export function cleanAndGreet(nameInput, cityInput) {
  console.log(nameInput);
  console.log(cityInput);
  console.log(typeof nameInput);
  console.log(typeof cityInput);
  if (typeof nameInput !== "string") {
    return "Name of input not a String";
  }
  if (typeof cityInput !== "string") {
    return "City of input not a string";
  }
  const nameTrimmed = nameInput.trim();
  console.log(nameTrimmed);

  const CityTrimmed = cityInput.trim();
  console.log(CityTrimmed);

  if (nameTrimmed === "") {
    return "Invalid Input";
  }
  if (CityTrimmed === "") {
    return "Invalid Input";
  }

  return `Hello${nameInput}from${cityInput}!`;

  // add export
  // call this functoin from index.js and send values
  // STep A: console.log(nameInput, cityInput)
  // log type console.log(typeof nameInput)  //string
  // Step 1: Check both parameters are strings. if(typeof nameInput !== 'string')
  // Step 2: Trim extra spaces from both strings.
  // Step 3: If any value is empty ("") after trim, return "Invalid input".
  // Step 5: Build and return one greeting sentence.
}
