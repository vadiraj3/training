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
  }
];
