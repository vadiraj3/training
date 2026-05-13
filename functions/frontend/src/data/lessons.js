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
    title: "Object Parameters & Destructuring",
    topic: "Clean Code",
    difficulty: "Advanced",
    explanation: "Instead of passing many individual arguments, you can pass a single object. Using destructuring in the function parameters makes the code much cleaner and avoids order-dependent bugs.",
    syntax: {
      destructure: "function printUser({ name, age }) {\n  console.log(name + ' is ' + age);\n}"
    },
    teacherExample: {
      description: "Using destructuring to handle configuration objects.",
      code: "function createButton({ text, color = 'blue', size = 'medium' }) {\n  return `Button: ${text}, Style: ${color}, Size: ${size}`;\n}"
    },
    traineeTask: {
      description: "Create a function 'formatUserCard' that takes an object with 'username' and 'email' properties, and returns a string: 'User: username, Contact: email'.",
      requirements: [
        { id: 'l11r1', text: "Define 'formatUserCard'", check: (ex) => typeof ex?.lesson11?.formatUserCard === 'function' },
        { id: 'l11r2', text: "Correctly formats the output string", check: (ex) => ex?.lesson11?.formatUserCard?.({ username: 'jsmith', email: 'j@s.com' }) === 'User: jsmith, Contact: j@s.com' }
      ],
      expectedResult: "'User: jsmith, Contact: j@s.com'"
    }
  },
  {
    id: 12,
    title: "Callback Functions",
    topic: "Functional Programming",
    difficulty: "Advanced",
    explanation: "A callback is a function passed as an argument to another function. This is a fundamental concept for handling asynchronous code and event-driven programming.",
    syntax: {
      callback: "function execute(task) {\n  console.log('Starting...');\n  task();\n}"
    },
    teacherExample: {
      description: "A custom filter-like behavior using a callback.",
      code: "function checkCondition(val, callback) {\n  return callback(val);\n}\n\ncheckCondition(5, (x) => x > 0); // returns true"
    },
    traineeTask: {
      description: "Create a function 'applyOperation(a, b, operation)' where 'operation' is a function. It should return the result of calling 'operation' with a and b.",
      requirements: [
        { id: 'l12r1', text: "Define 'applyOperation' with 3 parameters", check: (ex) => typeof ex?.lesson12?.applyOperation === 'function' && ex.lesson12.applyOperation.length === 3 },
        { id: 'l12r2', text: "Correctly applies addition callback", check: (ex) => ex?.lesson12?.applyOperation?.(10, 5, (x, y) => x + y) === 15 },
        { id: 'l12r3', text: "Correctly applies multiplication callback", check: (ex) => ex?.lesson12?.applyOperation?.(10, 5, (x, y) => x * y) === 50 }
      ],
      expectedResult: "The result of the operation function."
    }
  }
];
