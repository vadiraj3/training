export const lessons = [
  {
    id: 1,
    title: "Defining a Function",
    topic: "Basic Syntax",
    difficulty: "Beginner",
    explanation: "A function is a reusable block of code designed to perform a particular task. In JavaScript, you can define a function using the 'function' keyword (Normal) or the '=>' syntax (Arrow). Understanding how to convert between these two styles is essential for modern JS development.",
    syntax: {
      normal: "function functionName() {\n  // code to be executed\n}",
      arrow: "const functionName = () => {\n  // code to be executed\n}"
    },
    teacherExample: {
      description: "Defining a simple greeting function.",
      normal: "function sayHello() {\n  console.log('Hello World!');\n}",
      arrow: "const sayHelloArrow = () => {\n  console.log('Hello from Arrow Function!');\n}"
    },
    traineeTask: {
      description: "Create a function that logs a welcome message to the console.",
      requirements: [
        { id: 'l1r1', text: "Define a normal function named 'welcomeTrainee'", check: (ex) => typeof ex?.lesson1?.welcomeTrainee === 'function' },
        { id: 'l1r2', text: "Define an arrow function named 'welcomeTraineeArrow'", check: (ex) => typeof ex?.lesson1?.welcomeTraineeArrow === 'function' }
      ],
      expectedResult: "Two functions defined and ready to be called."
    }
  },
  {
    id: 2,
    title: "Function Parameters",
    topic: "Sending Data",
    difficulty: "Beginner",
    explanation: "Parameters are placeholders used to send values into a function. When you call the function, you provide 'arguments' that fill these placeholders.",
    syntax: {
      normal: "function functionName(parameter) {\n  console.log(parameter);\n}",
      arrow: "const functionName = (parameter) => {\n  console.log(parameter);\n}"
    },
    teacherExample: {
      description: "A function that takes a person's name as a parameter.",
      normal: "function greetPerson(name) {\n  console.log('Hello, ' + name + '!');\n}",
      arrow: "const greetPersonArrow = (name) => {\n  console.log('Hello, ' + name + '!');\n}"
    },
    traineeTask: {
      description: "Create a function that calculates and logs the square of a number.",
      requirements: [
        { id: 'l2r1', text: "Define a normal function named 'calculateSquare' with one parameter", check: (ex) => typeof ex?.lesson2?.calculateSquare === 'function' && ex.lesson2.calculateSquare.length === 1 },
        { id: 'l2r2', text: "Define an arrow function named 'calculateSquareArrow' with one parameter", check: (ex) => typeof ex?.lesson2?.calculateSquareArrow === 'function' && ex.lesson2.calculateSquareArrow.length === 1 }
      ],
      expectedResult: "Functions that log the square of whatever number is passed to them."
    }
  },
  {
    id: 3,
    title: "Using Functions",
    topic: "Execution & Events",
    difficulty: "Beginner",
    explanation: "Functions can be executed (called) directly in your code or triggered by events, such as a user clicking a button. To call a function, use its name followed by parentheses.",
    syntax: {
      direct: "functionName();",
      button: "<button onClick={functionName}>Click Me</button>"
    },
    teacherExample: {
      description: "Calling a function directly vs using an event handler.",
      code: "function showAlert() {\n  alert('Button was clicked!');\n}\n\n// Direct call:\nshowAlert();\n\n// Button usage (React syntax):\n// <Button onClick={showAlert}>Trigger Alert</Button>"
    },
    traineeTask: {
      description: "Implement a button that triggers a console log message when clicked.",
      requirements: [
        { id: 'l3r1', text: "Define a function named 'handleButtonClick'", check: (ex) => typeof ex?.lesson3?.handleButtonClick === 'function' },
        { id: 'l3r2', text: "Function should log a message (manual verification needed)", check: (ex) => typeof ex?.lesson3?.handleButtonClick === 'function' }
      ],
      expectedResult: "A message appears in the console whenever the button is clicked."
    }
  },
  {
    id: 4,
    title: "Multiple Parameters & Default Values",
    topic: "Advanced Parameters",
    difficulty: "Intermediate",
    explanation: "Functions can accept multiple parameters separated by commas. You can also provide 'default values' in case an argument is not provided during the function call.",
    syntax: {
      multiple: "function name(p1, p2, p3) { ... }",
      default: "function name(p1, p2 = defaultValue) { ... }"
    },
    teacherExample: {
      description: "A function that calculates price with a default quantity.",
      normal: "function calculateTotal(price, quantity = 1) {\n  console.log('Total: ' + (price * quantity));\n}",
      arrow: "const calculateTotalArrow = (price, quantity = 1) => {\n  console.log('Total: ' + (price * quantity));\n}"
    },
    traineeTask: {
      description: "Create a function that introduces a user with an optional title.",
      requirements: [
        { id: 'l4r1', text: "Define 'introduceUser' with 2 parameters", check: (ex) => typeof ex?.lesson4?.introduceUser === 'function' && ex.lesson4.introduceUser.length >= 1 },
        { id: 'l4r2', text: "Set default value for 'title' (detected by length property)", check: (ex) => typeof ex?.lesson4?.introduceUser === 'function' && ex.lesson4.introduceUser.length === 1 }
      ],
      expectedResult: "Correct introduction logged even if the title is missing."
    }
  },
  {
    id: 5,
    title: "Return Values",
    topic: "Getting Results Back",
    difficulty: "Intermediate",
    explanation: "Functions often process data and then 'return' the result back to the caller using the 'return' keyword. This value can then be stored in a variable or used in other expressions.",
    syntax: {
      normal: "function add(a, b) {\n  return a + b;\n}",
      arrow: "const add = (a, b) => a + b; // Implicit return for single-line arrows"
    },
    teacherExample: {
      description: "Storing and logging a returned value.",
      code: "function multiply(a, b) {\n  return a * b;\n}\n\nconst result = multiply(5, 4);\nconsole.log('The result is: ' + result);"
    },
    traineeTask: {
      description: "Create a function that calculates the area of a rectangle and returns it.",
      requirements: [
        { id: 'l5r1', text: "Define 'getRectangleArea' that returns a value", check: (ex) => typeof ex?.lesson5?.getRectangleArea === 'function' && ex.lesson5.getRectangleArea(5, 4) === 20 },
        { id: 'l5r2', text: "Define 'getRectangleAreaArrow' that returns a value", check: (ex) => typeof ex?.lesson5?.getRectangleAreaArrow === 'function' && ex.lesson5.getRectangleAreaArrow(5, 4) === 20 }
      ],
      expectedResult: "The area is calculated, returned, and then logged outside the function."
    }
  },
  {
    id: 6,
    title: "Inline & Anonymous Functions",
    topic: "Practical Patterns",
    difficulty: "Intermediate",
    explanation: "Sometimes you don't need to give a function a name if you're only using it once, like inside a button's onClick or as an argument to another function. These are called anonymous or inline functions.",
    syntax: {
      inline: "<Button onClick={() => console.log('Clicked!')}>Click</Button>"
    },
    teacherExample: {
      description: "Using an anonymous arrow function for a simple event.",
      code: "// Instead of defining handleTask:\n// <Button onClick={() => alert('Quick Action!')}>Quick Action</Button>"
    },
    traineeTask: {
      description: "Use an inline arrow function to log a message.",
      requirements: [
        { id: 'l6r1', text: "Create an MUI Button with inline onClick", check: () => true }, // Hard to validate statically
        { id: 'l6r2', text: "The inline function should log: 'Inline function executed!'", check: () => true }
      ],
      expectedResult: "Buttons work without having separate function definitions in the component body."
    }
  },
  {
    id: 7,
    title: "Multiple Parameters & Logic",
    topic: "Logic within Functions",
    difficulty: "Intermediate",
    explanation: "Functions can handle complex logic using if/else statements. This allows you to make decisions based on the input arguments. It's common to use parameters as inputs for these decisions.",
    syntax: {
      multiple: "function evaluate(a, b) {\n  if (a > b) return 'Greater';\n  else return 'Smaller';\n}"
    },
    teacherExample: {
      description: "A function that checks if a number is within a range.",
      code: "function isBetween(num, min, max) {\n  if (num >= min && num <= max) {\n    return true;\n  } else {\n    return false;\n  }\n}"
    },
    traineeTask: {
      description: "Create a function 'evaluateScore' that takes two parameters: 'score' and 'passingGrade'. It should return 'Pass' if score is greater than or equal to passingGrade, and 'Fail' otherwise.",
      requirements: [
        { id: 'l7r1', text: "Define 'evaluateScore' with 2 parameters", check: (ex) => typeof ex?.lesson7?.evaluateScore === 'function' && ex.lesson7.evaluateScore.length === 2 },
        { id: 'l7r2', text: "Should return 'Pass' for 80, 50", check: (ex) => ex?.lesson7?.evaluateScore?.(80, 50) === 'Pass' },
        { id: 'l7r3', text: "Should return 'Fail' for 40, 50", check: (ex) => ex?.lesson7?.evaluateScore?.(40, 50) === 'Fail' }
      ],
      expectedResult: "'Pass' or 'Fail' string based on the comparison."
    }
  },
  {
    id: 8,
    title: "Function Composition",
    topic: "Calling Functions",
    difficulty: "Intermediate",
    explanation: "One of the most powerful features of functions is that they can call other functions. This helps in breaking down complex problems into smaller, manageable pieces (Composition).",
    syntax: {
      normal: "function first() { ... }\nfunction second() {\n  first(); // calling another function\n}"
    },
    teacherExample: {
      description: "Combining string parts using a helper function.",
      code: "function formatName(name) {\n  return name.trim();\n}\n\nfunction welcomeUser(name) {\n  const cleanName = formatName(name);\n  return 'Welcome, ' + cleanName + '!';\n}"
    },
    traineeTask: {
      description: "Create two functions: 1. 'getFullName(first, last)' which returns 'first last'. 2. 'greetUser(first, last)' which calls 'getFullName' and returns 'Hello, [Full Name]!'.",
      requirements: [
        { id: 'l8r1', text: "Define 'getFullName' correctly", check: (ex) => ex?.lesson8?.getFullName?.('John', 'Doe') === 'John Doe' },
        { id: 'l8r2', text: "Define 'greetUser' correctly", check: (ex) => ex?.lesson8?.greetUser?.('John', 'Doe') === 'Hello, John Doe!' }
      ],
      expectedResult: "'Hello, John Doe!' when calling greetUser('John', 'Doe')."
    }
  },
  {
    id: 9,
    title: "Helper Functions",
    topic: "Modularity",
    difficulty: "Intermediate",
    explanation: "Helper functions are small, focused functions that perform a specific task used by larger functions. This promotes DRY (Don't Repeat Yourself) principles and makes code easier to test.",
    teacherExample: {
      description: "A tax calculator used by an invoice generator.",
      code: "const getTax = (amount) => amount * 0.15;\n\nfunction calculateTotal(price) {\n  return price + getTax(price);\n}"
    },
    traineeTask: {
      description: "Create 'square(n)' which returns n*n. Then create 'sumOfSquares(a, b)' which calls 'square' for both a and b, and returns their sum.",
      requirements: [
        { id: 'l9r1', text: "Define 'square' function", check: (ex) => ex?.lesson9?.square?.(4) === 16 },
        { id: 'l9r2', text: "Define 'sumOfSquares' using 'square'", check: (ex) => ex?.lesson9?.sumOfSquares?.(3, 4) === 25 }
      ],
      expectedResult: "sumOfSquares(3, 4) should return 25."
    }
  },
  {
    id: 10,
    title: "Functions & Arrays",
    topic: "Data Transformation",
    difficulty: "Advanced",
    explanation: "Functions are often used to process collections of data. You can pass an array as a single parameter to a function and loop through it or use array methods.",
    syntax: {
      arrayParam: "function processList(items) {\n  items.forEach(item => console.log(item));\n}"
    },
    teacherExample: {
      description: "Finding the maximum number in an array.",
      code: "function findMax(numbers) {\n  return Math.max(...numbers);\n}"
    },
    traineeTask: {
      description: "Create a function 'sumArray(numbers)' that takes an array of numbers and returns their sum using a loop or reduce.",
      requirements: [
        { id: 'l10r1', text: "Define 'sumArray' that takes 1 parameter", check: (ex) => typeof ex?.lesson10?.sumArray === 'function' && ex.lesson10.sumArray.length === 1 },
        { id: 'l10r2', text: "Correctly sums [1, 2, 3, 4]", check: (ex) => ex?.lesson10?.sumArray?.([1, 2, 3, 4]) === 10 },
        { id: 'l10r3', text: "Returns 0 for empty array", check: (ex) => ex?.lesson10?.sumArray?.([]) === 0 }
      ],
      expectedResult: "The total sum of all numbers in the array."
    }
  },
  {
    id: 11,
    title: "Temperature Converter",
    topic: "Math & Return Values",
    difficulty: "Intermediate",
    explanation: "Functions are perfect for mathematical conversions. You take an input, apply a formula, and return the result. This keeps your conversion logic in one place.",
    teacherExample: {
      description: "Converting Kilometers to Miles.",
      code: "function toMiles(km) {\n  return km * 0.621371;\n}\n\nconst miles = toMiles(10);\nconsole.log(miles);"
    },
    traineeTask: {
      description: "Create a function 'toFahrenheit' that converts Celsius to Fahrenheit. The formula is (Celsius * 9/5) + 32. After defining it, call it with a value and export the result.",
      requirements: [
        { id: 'l11r1', text: "Define 'toFahrenheit' function", check: (ex) => typeof ex?.lesson11?.toFahrenheit === 'function' },
        { id: 'l11r2', text: "Correctly converts 0°C to 32°F", check: (ex) => ex?.lesson11?.toFahrenheit?.(0) === 32 },
        { id: 'l11r3', text: "Call the function and export 'currentTemp'", check: (ex) => ex?.lesson11?.currentTemp !== undefined }
      ],
      expectedResult: "The Fahrenheit equivalent of your input temperature."
    }
  },
  {
    id: 12,
    title: "Tip Calculator",
    topic: "Multiple Arguments",
    difficulty: "Intermediate",
    explanation: "When a function needs multiple pieces of data, like a bill amount and a tip percentage, we pass them as separate parameters. Order matters when calling the function!",
    teacherExample: {
      description: "Calculating a simple discount.",
      code: "function getDiscount(price, percent) {\n  return price * (percent / 100);\n}"
    },
    traineeTask: {
      description: "Create 'calculateTip' which takes a bill amount and a tip percentage. It should return the tip amount. Then, call it with 100 and 15, and export the result as 'tipAmount'.",
      requirements: [
        { id: 'l12r1', text: "Define 'calculateTip' with 2 parameters", check: (ex) => typeof ex?.lesson12?.calculateTip === 'function' && ex.lesson12.calculateTip.length === 2 },
        { id: 'l12r2', text: "Correctly calculates 15% of 200", check: (ex) => ex?.lesson12?.calculateTip?.(200, 15) === 30 },
        { id: 'l12r3', text: "Call the function and export 'tipAmount'", check: (ex) => ex?.lesson12?.tipAmount !== undefined }
      ],
      expectedResult: "The calculated tip amount based on your inputs."
    }
  },
  {
    id: 13,
    title: "Greeting Logic",
    topic: "Conditions (If/Else)",
    difficulty: "Intermediate",
    explanation: "Functions often need to behave differently based on the input. We use if/else statements inside the function to return different values.",
    teacherExample: {
      description: "Checking if a number is positive or negative.",
      code: "function checkSign(num) {\n  if (num >= 0) return 'Positive';\n  else return 'Negative';\n}"
    },
    traineeTask: {
      description: "Create 'getGreeting' that takes an 'hour' (0-23). If hour is less than 12, return 'Good Morning'. Otherwise, return 'Good Day'. Call it with any hour and export as 'myGreeting'.",
      requirements: [
        { id: 'l13r1', text: "Define 'getGreeting' function", check: (ex) => typeof ex?.lesson13?.getGreeting === 'function' },
        { id: 'l13r2', text: "Returns 'Good Morning' for 10", check: (ex) => ex?.lesson13?.getGreeting?.(10) === 'Good Morning' },
        { id: 'l13r3', text: "Returns 'Good Day' for 14", check: (ex) => ex?.lesson13?.getGreeting?.(14) === 'Good Day' },
        { id: 'l13r4', text: "Call it and export 'myGreeting'", check: (ex) => ex?.lesson13?.myGreeting !== undefined }
      ],
      expectedResult: "'Good Morning' or 'Good Day' depending on the time."
    }
  },
  {
    id: 14,
    title: "Password Validator",
    topic: "Boolean Returns",
    difficulty: "Intermediate",
    explanation: "Many functions are used to 'validate' something. These functions usually return true or false (Booleans).",
    teacherExample: {
      description: "Checking if a string is empty.",
      code: "function isEmpty(text) {\n  return text.length === 0;\n}"
    },
    traineeTask: {
      description: "Create 'isPasswordValid' that takes a password string. It should return true if the password is 8 characters or longer, and false otherwise. Call it and export 'isValid'.",
      requirements: [
        { id: 'l14r1', text: "Define 'isPasswordValid'", check: (ex) => typeof ex?.lesson14?.isPasswordValid === 'function' },
        { id: 'l14r2', text: "Returns true for 'password123'", check: (ex) => ex?.lesson14?.isPasswordValid?.('password123') === true },
        { id: 'l14r3', text: "Returns false for '123'", check: (ex) => ex?.lesson14?.isPasswordValid?.('123') === false },
        { id: 'l14r4', text: "Call it and export 'isValid'", check: (ex) => ex?.lesson14?.isValid !== undefined }
      ],
      expectedResult: "A boolean value (true or false)."
    }
  },
  {
    id: 15,
    title: "Circle Area Calculator",
    topic: "Math Constants",
    difficulty: "Intermediate",
    explanation: "JavaScript has a built-in Math object. You can use Math.PI for the value of Pi (3.14159...).",
    teacherExample: {
      description: "Calculating the perimeter of a square.",
      code: "function getPerimeter(side) {\n  return side * 4;\n}"
    },
    traineeTask: {
      description: "Create 'getCircleArea' that takes a radius. Use Math.PI * r * r to calculate the area. Call it with radius 10 and export as 'area'.",
      requirements: [
        { id: 'l15r1', text: "Define 'getCircleArea'", check: (ex) => typeof ex?.lesson15?.getCircleArea === 'function' },
        { id: 'l15r2', text: "Calculates area correctly (approx 314.159)", check: (ex) => Math.round(ex?.lesson15?.getCircleArea?.(10)) === 314 },
        { id: 'l15r3', text: "Call it and export 'area'", check: (ex) => ex?.lesson15?.area !== undefined }
      ],
      expectedResult: "The area of a circle with radius 10."
    }
  },
  {
    id: 16,
    title: "Seconds Converter",
    topic: "Unit Conversion",
    difficulty: "Intermediate",
    explanation: "Simple multiplication functions are the building blocks of larger applications. They are easy to read and reuse.",
    teacherExample: {
      description: "Hours to Minutes.",
      code: "const toMinutes = (hours) => hours * 60;"
    },
    traineeTask: {
      description: "Create 'toSeconds' that takes minutes and returns the total seconds. Call it with 5 and export as 'seconds'.",
      requirements: [
        { id: 'l16r1', text: "Define 'toSeconds' function", check: (ex) => typeof ex?.lesson16?.toSeconds === 'function' },
        { id: 'l16r2', text: "Returns 300 for 5 minutes", check: (ex) => ex?.lesson16?.toSeconds?.(5) === 300 },
        { id: 'l16r3', text: "Call it and export 'seconds'", check: (ex) => ex?.lesson16?.seconds !== undefined }
      ],
      expectedResult: "300 (or whatever value matches your input)."
    }
  },
  {
    id: 17,
    title: "Even or Odd",
    topic: "The Modulo Operator",
    difficulty: "Intermediate",
    explanation: "The % (modulo) operator returns the remainder of a division. For example, 10 % 2 is 0, while 11 % 2 is 1. This is perfect for checking if a number is even.",
    teacherExample: {
      description: "Checking if a number is divisible by 5.",
      code: "function isDivBy5(n) {\n  return n % 5 === 0;\n}"
    },
    traineeTask: {
      description: "Create 'checkEvenOdd' that takes a number. Return the string 'Even' if it is even, and 'Odd' if it is odd. Call it with any number and export as 'evenOddResult'.",
      requirements: [
        { id: 'l17r1', text: "Define 'checkEvenOdd'", check: (ex) => typeof ex?.lesson17?.checkEvenOdd === 'function' },
        { id: 'l17r2', text: "Returns 'Even' for 8", check: (ex) => ex?.lesson17?.checkEvenOdd?.(8) === 'Even' },
        { id: 'l17r3', text: "Returns 'Odd' for 7", check: (ex) => ex?.lesson17?.checkEvenOdd?.(7) === 'Odd' },
        { id: 'l17r4', text: "Call it and export 'evenOddResult'", check: (ex) => ex?.lesson17?.evenOddResult !== undefined }
      ],
      expectedResult: "'Even' or 'Odd'."
    }
  },
  {
    id: 18,
    title: "Composition: Math Chain",
    topic: "Function Composition",
    difficulty: "Intermediate",
    explanation: "Composition is when you use the output of one function as the input for another. It allows you to build complex logic from simple parts.",
    teacherExample: {
      description: "Doubling and then adding ten.",
      code: "const double = (n) => n * 2;\nfunction doubleAndAddTen(n) {\n  return double(n) + 10;\n}"
    },
    traineeTask: {
      description: "Create two functions: 1. 'square(n)' which returns n*n. 2. 'squareAndDouble(n)' which calls 'square' first and then doubles that result. Call it with 3 and export as 'mathResult'.",
      requirements: [
        { id: 'l18r1', text: "Define 'square' function", check: (ex) => ex?.lesson18?.square?.(4) === 16 },
        { id: 'l18r2', text: "Define 'squareAndDouble' correctly", check: (ex) => ex?.lesson18?.squareAndDouble?.(3) === 18 },
        { id: 'l18r3', text: "Call it and export 'mathResult'", check: (ex) => ex?.lesson18?.mathResult !== undefined }
      ],
      expectedResult: "18 (if you used 3 as input)."
    }
  },
  {
    id: 19,
    title: "Range Checker",
    topic: "Logical Operators",
    difficulty: "Intermediate",
    explanation: "You can use && (AND) and || (OR) to check multiple conditions at once inside a function.",
    teacherExample: {
      description: "Checking if a number is between 1 and 10.",
      code: "function isSmall(n) {\n  return n >= 1 && n <= 10;\n}"
    },
    traineeTask: {
      description: "Create 'isInRange' that takes three numbers: 'num', 'min', and 'max'. Return true if num is between min and max (inclusive), otherwise false. Call it and export 'rangeCheck'.",
      requirements: [
        { id: 'l19r1', text: "Define 'isInRange' with 3 parameters", check: (ex) => typeof ex?.lesson19?.isInRange === 'function' && ex.lesson19.isInRange.length === 3 },
        { id: 'l19r2', text: "Returns true for (5, 1, 10)", check: (ex) => ex?.lesson19?.isInRange?.(5, 1, 10) === true },
        { id: 'l19r3', text: "Returns false for (15, 1, 10)", check: (ex) => ex?.lesson19?.isInRange?.(15, 1, 10) === false },
        { id: 'l19r4', text: "Call it and export 'rangeCheck'", check: (ex) => ex?.lesson19?.rangeCheck !== undefined }
      ],
      expectedResult: "A boolean result."
    }
  },
  {
    id: 20,
    title: "Simple Calculator",
    topic: "Switch/Case or Multi-If",
    difficulty: "Intermediate",
    explanation: "A calculator function is a classic example of logic-heavy functions. It chooses which math operation to perform based on a string input.",
    teacherExample: {
      description: "A simple color picker logic.",
      code: "function getColor(name) {\n  if (name === 'red') return '#FF0000';\n  if (name === 'blue') return '#0000FF';\n  return '#000000';\n}"
    },
    traineeTask: {
      description: "Create 'simpleCalc' that takes 'a', 'b', and 'op' (operation). If op is 'add' return a+b. If op is 'sub' return a-b. If op is 'mult' return a*b. Call it with (10, 5, 'add') and export as 'calcResult'.",
      requirements: [
        { id: 'l20r1', text: "Define 'simpleCalc' with 3 parameters", check: (ex) => typeof ex?.lesson20?.simpleCalc === 'function' },
        { id: 'l20r2', text: "Adds correctly", check: (ex) => ex?.lesson20?.simpleCalc?.(10, 5, 'add') === 15 },
        { id: 'l20r3', text: "Subtracts correctly", check: (ex) => ex?.lesson20?.simpleCalc?.(10, 5, 'sub') === 5 },
        { id: 'l20r4', text: "Multiplies correctly", check: (ex) => ex?.lesson20?.simpleCalc?.(10, 5, 'mult') === 50 },
        { id: 'l20r5', text: "Call it and export 'calcResult'", check: (ex) => ex?.lesson20?.calcResult !== undefined }
      ],
      expectedResult: "The result of the specified operation."
    }
  }
];
