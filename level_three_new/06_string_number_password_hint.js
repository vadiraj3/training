/*
Task 6: String + Number Practice

Function name:
passwordHint

Parameters:
- password (string)
- minLength (number)

Goal:
Return a hint message based on password length.
*/

export function passwordHint(password, minLength) {
  // console.log(password);
  // console.log(minLength);
  // console.log(typeof password);
  // console.log(typeof minLength);

  const TrimmedPassword = password.trim();
  console.log(TrimmedPassword);

  const trimmedPasswordLength = TrimmedPassword.length;
  console.log(trimmedPasswordLength);

  if (trimmedPasswordLength > minLength) {
    return "password length is valid";
  } else {
    return "password length is Invalid";
  }
  // Step 1: Validate types (password string, minLength number).
  // Step 2: Trim password to ignore extra spaces.
  // Step 3: Calculate current length.
  // Step 4: Use if/else to compare current length with minLength.
  // Step 5: If short, return how many characters are missing.
  // Step 6: If enough, return "Password length is valid".

  //lesssons
  // Take two parameters, one is password (string)-> "Sachings","sdfsdfs", minLength(number) ->8,9,10
  // Find out length of the password parameter. To find out the length of a string, which is password here, we need to use this: password.length, this will give us the length of the password in number,

  // We need to store the length of the password in a variable, to use later : const passwordLength = password.length

  //But before finding out the length of the password, we need to trim the password to remove extra spaces at the beginning and at the end. So: const trimmedPassword = password.trim();
  // Now we need to find the length: const trimmedPasswordLength = trimmedPassword.length;

  // Now that we have found the length of the password, we need to compare it with minLength to find out whether this password is a valid password or not

  // if(trimmedPasswordLength > minLength){
  //  return "Password is valid"
  //    } else{
  //    return "Password is invalid"
  ///   }
}
