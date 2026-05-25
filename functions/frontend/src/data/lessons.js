export const lessons = [
  {
    id: 1,
    title: "Defining a Function",
    topic: "Basic Syntax",
    difficulty: "Beginner",
    explanation:
      "A function is a reusable block of code designed to perform a particular task. In JavaScript, you can define a function using the 'function' keyword (Normal) or the '=>' syntax (Arrow). Understanding how to convert between these two styles is essential for modern JS development.",
    syntax: {
      normal: "function functionName() {\n  // code to be executed\n}",
      arrow: "const functionName = () => {\n  // code to be executed\n}",
    },
    teacherExample: {
      description: "Defining a simple greeting function.",
      normal: "function sayHello() {\n  console.log('Hello World!');\n}",
      arrow:
        "const sayHelloArrow = () => {\n  console.log('Hello from Arrow Function!');\n}",
    },
    traineeTask: {
      description:
        "Create a function that logs a welcome message to the console.",
      requirements: [
        {
          id: "l1r1",
          text: "Define a normal function named 'welcomeTrainee'",
          check: (ex) => typeof ex?.lesson1?.welcomeTrainee === "function",
        },
        {
          id: "l1r2",
          text: "Define an arrow function named 'welcomeTraineeArrow'",
          check: (ex) => typeof ex?.lesson1?.welcomeTraineeArrow === "function",
        },
        {
          id: "l1r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson1?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "Two functions defined and ready to be called.",
    },
  },
  {
    id: 2,
    title: "Function Parameters",
    topic: "Sending Data",
    difficulty: "Beginner",
    explanation:
      "Parameters are placeholders used to send values into a function. When you call the function, you provide 'arguments' that fill these placeholders.",
    syntax: {
      normal:
        "function functionName(parameter) {\n  console.log(parameter);\n}",
      arrow:
        "const functionName = (parameter) => {\n  console.log(parameter);\n}",
    },
    teacherExample: {
      description: "A function that takes a person's name as a parameter.",
      normal:
        "function greetPerson(name) {\n  console.log('Hello, ' + name + '!');\n}",
      arrow:
        "const greetPersonArrow = (name) => {\n  console.log('Hello, ' + name + '!');\n}",
    },
    traineeTask: {
      description:
        "Create a function that calculates and logs the square of a number.",
      requirements: [
        {
          id: "l2r1",
          text: "Define a normal function named 'calculateSquare' with one parameter",
          check: (ex) =>
            typeof ex?.lesson2?.calculateSquare === "function" &&
            ex.lesson2.calculateSquare.length === 1,
        },
        {
          id: "l2r2",
          text: "Define an arrow function named 'calculateSquareArrow' with one parameter",
          check: (ex) =>
            typeof ex?.lesson2?.calculateSquareArrow === "function" &&
            ex.lesson2.calculateSquareArrow.length === 1,
        },
        {
          id: "l2r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson2?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "Functions that log the square of whatever number is passed to them.",
    },
  },
  {
    id: 3,
    title: "Using Functions",
    topic: "Execution & Events",
    difficulty: "Beginner",
    explanation:
      "Functions can be executed (called) directly in your code or triggered by events, such as a user clicking a button. To call a function, use its name followed by parentheses.",
    syntax: {
      direct: "functionName();",
      button: "<button onClick={functionName}>Click Me</button>",
    },
    teacherExample: {
      description: "Calling a function directly vs using an event handler.",
      code: "function showAlert() {\n  alert('Button was clicked!');\n}\n\n// Direct call:\nshowAlert();\n\n// Button usage (React syntax):\n// <Button onClick={showAlert}>Trigger Alert</Button>",
    },
    traineeTask: {
      description:
        "Implement a button that triggers a console log message when clicked.",
      requirements: [
        {
          id: "l3r1",
          text: "Define a function named 'handleButtonClick'",
          check: (ex) => typeof ex?.lesson3?.handleButtonClick === "function",
        },
        {
          id: "l3r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson3?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "A message appears in the console whenever the button is clicked.",
    },
  },
  {
    id: 4,
    title: "Multiple Parameters & Default Values",
    topic: "Advanced Parameters",
    difficulty: "Intermediate",
    explanation:
      "Functions can accept multiple parameters separated by commas. You can also provide 'default values' in case an argument is not provided during the function call.",
    syntax: {
      multiple: "function name(p1, p2, p3) { ... }",
      default: "function name(p1, p2 = defaultValue) { ... }",
    },
    teacherExample: {
      description: "A function that calculates price with a default quantity.",
      normal:
        "function calculateTotal(price, quantity = 1) {\n  console.log('Total: ' + (price * quantity));\n}",
      arrow:
        "const calculateTotalArrow = (price, quantity = 1) => {\n  console.log('Total: ' + (price * quantity));\n}",
    },
    traineeTask: {
      description:
        "Create a function that introduces a user with an optional title.",
      requirements: [
        {
          id: "l4r1",
          text: "Define 'introduceUser' with 2 parameters",
          check: (ex) =>
            typeof ex?.lesson4?.introduceUser === "function" &&
            ex.lesson4.introduceUser.length >= 1,
        },
        {
          id: "l4r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson4?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "Correct introduction logged even if the title is missing.",
    },
  },
  {
    id: 5,
    title: "Return Values",
    topic: "Getting Results Back",
    difficulty: "Intermediate",
    explanation:
      "Functions often process data and then 'return' the result back to the caller using the 'return' keyword. This value can then be stored in a variable or used in other expressions.",
    syntax: {
      normal: "function add(a, b) {\n  return a + b;\n}",
      arrow:
        "const add = (a, b) => a + b; // Implicit return for single-line arrows",
    },
    teacherExample: {
      description: "Storing and logging a returned value.",
      code: "function multiply(a, b) {\n  return a * b;\n}\n\nconst result = multiply(5, 4);\nconsole.log('The result is: ' + result);",
    },
    traineeTask: {
      description:
        "Create a function that calculates the area of a rectangle and returns it.",
      requirements: [
        {
          id: "l5r1",
          text: "Define 'getRectangleArea' that returns a value",
          check: (ex) =>
            typeof ex?.lesson5?.getRectangleArea === "function" &&
            ex.lesson5.getRectangleArea(5, 4) === 20,
        },
        {
          id: "l5r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson5?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "The area is calculated, returned, and then logged outside the function.",
    },
  },
  {
    id: 6,
    title: "Inline & Anonymous Functions",
    topic: "Practical Patterns",
    difficulty: "Intermediate",
    explanation:
      "Sometimes you don't need to give a function a name if you're only using it once, like inside a button's onClick or as an argument to another function. These are called anonymous or inline functions.",
    syntax: {
      inline: "<Button onClick={() => console.log('Clicked!')}>Click</Button>",
    },
    teacherExample: {
      description: "Using an anonymous arrow function for a simple event.",
      code: "// Instead of defining handleTask:\n// <Button onClick={() => alert('Quick Action!')}>Quick Action</Button>",
    },
    traineeTask: {
      description: "Use an inline arrow function to log a message.",
      requirements: [
        {
          id: "l6r1",
          text: "Create an MUI Button with inline onClick",
          check: () => true,
        },
        {
          id: "l6r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson6?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "Buttons work without having separate function definitions in the component body.",
    },
  },
  {
    id: 7,
    title: "Multiple Parameters & Logic",
    topic: "Logic within Functions",
    difficulty: "Intermediate",
    explanation:
      "Functions can handle complex logic using if/else statements. This allows you to make decisions based on the input arguments. It's common to use parameters as inputs for these decisions.",
    syntax: {
      multiple:
        "function evaluate(a, b) {\n  if (a > b) return 'Greater';\n  else return 'Smaller';\n}",
    },
    teacherExample: {
      description: "A function that checks if a number is within a range.",
      code: "function isBetween(num, min, max) {\n  if (num >= min && num <= max) {\n    return true;\n  } else {\n    return false;\n  }\n}",
    },
    traineeTask: {
      description:
        "Create a function 'evaluateScore' that takes two parameters: 'score' and 'passingGrade'. It should return 'Pass' if score is greater than or equal to passingGrade, and 'Fail' otherwise.",
      requirements: [
        {
          id: "l7r1",
          text: "Define 'evaluateScore' with 2 parameters",
          check: (ex) =>
            typeof ex?.lesson7?.evaluateScore === "function" &&
            ex.lesson7.evaluateScore.length === 2,
        },
        {
          id: "l7r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson7?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "'Pass' or 'Fail' string based on the comparison.",
    },
  },
  {
    id: 8,
    title: "Function Composition",
    topic: "Calling Functions",
    difficulty: "Intermediate",
    explanation:
      "One of the most powerful features of functions is that they can call other functions. This helps in breaking down complex problems into smaller, manageable pieces (Composition).",
    syntax: {
      normal:
        "function first() { ... }\nfunction second() {\n  first(); // calling another function\n}",
    },
    teacherExample: {
      description: "Combining string parts using a helper function.",
      code: "function formatName(name) {\n  return name.trim();\n}\n\nfunction welcomeUser(name) {\n  const cleanName = formatName(name);\n  return 'Welcome, ' + cleanName + '!';\n}",
    },
    traineeTask: {
      description:
        "Create two functions: 1. 'getFullName(first, last)' which returns 'first last'. 2. 'greetUser(first, last)' which calls 'getFullName' and returns 'Hello, [Full Name]!'.",
      requirements: [
        {
          id: "l8r1",
          text: "Define 'getFullName' correctly",
          check: (ex) =>
            ex?.lesson8?.getFullName?.("John", "Doe") === "John Doe",
        },
        {
          id: "l8r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson8?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "'Hello, John Doe!' when calling greetUser('John', 'Doe').",
    },
  },
  {
    id: 9,
    title: "Helper Functions",
    topic: "Modularity",
    difficulty: "Intermediate",
    explanation:
      "Helper functions are small, focused functions that perform a specific task used by larger functions. This promotes DRY (Don't Repeat Yourself) principles and makes code easier to test.",
    teacherExample: {
      description: "A tax calculator used by an invoice generator.",
      code: "const getTax = (amount) => amount * 0.15;\n\nfunction calculateTotal(price) {\n  return price + getTax(price);\n}",
    },
    traineeTask: {
      description:
        "Create 'square(n)' which returns n*n. Then create 'sumOfSquares(a, b)' which calls 'square' for both a and b, and returns their sum.",
      requirements: [
        {
          id: "l9r1",
          text: "Define 'square' function",
          check: (ex) => ex?.lesson9?.square?.(4) === 16,
        },
        {
          id: "l9r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson9?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "sumOfSquares(3, 4) should return 25.",
    },
  },
  {
    id: 10,
    title: "Functions & Arrays",
    topic: "Data Transformation",
    difficulty: "Advanced",
    explanation:
      "Functions are often used to process collections of data. You can pass an array as a single parameter to a function and loop through it or use array methods.",
    syntax: {
      arrayParam:
        "function processList(items) {\n  items.forEach(item => console.log(item));\n}",
    },
    teacherExample: {
      description: "Finding the maximum number in an array.",
      code: "function findMax(numbers) {\n  return Math.max(...numbers);\n}",
    },
    traineeTask: {
      description:
        "Create a function 'sumArray(numbers)' that takes an array of numbers and returns their sum using a loop or reduce.",
      requirements: [
        {
          id: "l10r1",
          text: "Define 'sumArray' that takes 1 parameter",
          check: (ex) =>
            typeof ex?.lesson10?.sumArray === "function" &&
            ex.lesson10.sumArray.length === 1,
        },
        {
          id: "l10r2",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson10?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The total sum of all numbers in the array.",
    },
  },
  {
    id: 11,
    title: "Object Parameters & Destructuring",
    topic: "Clean Code",
    difficulty: "Advanced",
    explanation:
      "Instead of passing many individual arguments, you can pass a single object. Using destructuring in the function parameters makes the code much cleaner and avoids order-dependent bugs.",
    syntax: {
      destructure:
        "function printUser({ name, age }) {\n  console.log(name + ' is ' + age);\n}",
    },
    teacherExample: {
      description: "Using destructuring to handle configuration objects.",
      code: "function createButton({ text, color = 'blue', size = 'medium' }) {\n  return `Button: ${text}, Style: ${color}, Size: ${size}`;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'formatUserCard' that takes an object with 'username' and 'email' properties, and returns a string: 'User: username, Contact: email'.",
      requirements: [
        {
          id: "l11r1",
          text: "Define 'formatUserCard'",
          check: (ex) => typeof ex?.lesson11?.formatUserCard === "function",
        },
        {
          id: "l11r2",
          text: "Correctly formats the output string",
          check: (ex) =>
            ex?.lesson11?.formatUserCard?.({
              username: "jsmith",
              email: "j@s.com",
            }) === "User: jsmith, Contact: j@s.com",
        },
        {
          id: "l11r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson11?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "'User: jsmith, Contact: j@s.com'",
    },
  },
  {
    id: 12,
    title: "Callback Functions",
    topic: "Functional Programming",
    difficulty: "Advanced",
    explanation:
      "A callback is a function passed as an argument to another function. This is a fundamental concept for handling asynchronous code and event-driven programming.",
    syntax: {
      callback:
        "function execute(task) {\n  console.log('Starting...');\n  task();\n}",
    },
    teacherExample: {
      description: "A custom filter-like behavior using a callback.",
      code: "function checkCondition(val, callback) {\n  return callback(val);\n}\n\ncheckCondition(5, (x) => x > 0); // returns true",
    },
    traineeTask: {
      description:
        "Create a function 'applyOperation(a, b, operation)' where 'operation' is a function. It should return the result of calling 'operation' with a and b.",
      requirements: [
        {
          id: "l12r1",
          text: "Define 'applyOperation' with 3 parameters",
          check: (ex) =>
            typeof ex?.lesson12?.applyOperation === "function" &&
            ex.lesson12.applyOperation.length === 3,
        },
        {
          id: "l12r2",
          text: "Correctly applies addition callback",
          check: (ex) =>
            ex?.lesson12?.applyOperation?.(10, 5, (x, y) => x + y) === 15,
        },
        {
          id: "l12r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson12?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The result of the operation function.",
    },
  },
  {
    id: 13,
    title: "The Discount Applicator",
    topic: "Multiple Parameters & Logic",
    difficulty: "Intermediate",
    explanation:
      "Functions can handle complex pricing logic. By passing multiple parameters like price, discount, and membership status, we can calculate the final cost.",
    teacherExample: {
      description: "Calculating shipping cost based on weight and distance.",
      code: "function getShipping(weight, distance) {\n  if (distance < 50) return 5;\n  return weight * 0.5;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'calculatePrice' that takes 'basePrice', 'discountAmount', and 'isMember'. If isMember is true, subtract the discount from the basePrice. Otherwise, return the basePrice.",
      requirements: [
        {
          id: "l13r1",
          text: "Define 'calculatePrice' function",
          check: (ex) => typeof ex?.lesson13?.calculatePrice === "function",
        },
        {
          id: "l13r2",
          text: "Subtracts discount for members (100, 20, true) -> 80",
          check: (ex) => ex?.lesson13?.calculatePrice?.(100, 20, true) === 80,
        },
        {
          id: "l13r3",
          text: "No discount for non-members (100, 20, false) -> 100",
          check: (ex) => ex?.lesson13?.calculatePrice?.(100, 20, false) === 100,
        },
        {
          id: "l13r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson13?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The final price after membership check.",
    },
  },
  {
    id: 14,
    title: "The Age Categorizer",
    topic: "Nested Logic",
    difficulty: "Intermediate",
    explanation:
      "You can use multiple if/else statements (or else if) to categorize data based on ranges. This is very common for user profiling.",
    teacherExample: {
      description: "Categorizing a score into 'Low', 'Mid', or 'High'.",
      code: "function categorize(val) {\n  if (val < 30) return 'Low';\n  if (val < 70) return 'Mid';\n  return 'High';\n}",
    },
    traineeTask: {
      description:
        "Create a function 'getAgeGroup' that takes an 'age'. If age < 13 return 'Child', if age < 20 return 'Teen', otherwise return 'Adult'.",
      requirements: [
        {
          id: "l14r1",
          text: "Define 'getAgeGroup'",
          check: (ex) => typeof ex?.lesson14?.getAgeGroup === "function",
        },
        {
          id: "l14r2",
          text: "Returns 'Teen' for 15",
          check: (ex) => ex?.lesson14?.getAgeGroup?.(15) === "Teen",
        },
        {
          id: "l14r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson14?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The correct age group string.",
    },
  },
  {
    id: 15,
    title: "User Profile Creator",
    topic: "Returning Objects",
    difficulty: "Intermediate",
    explanation:
      "Functions don't just return strings or numbers; they can return whole objects! This is useful for packaging data together.",
    teacherExample: {
      description: "Creating a simple point object.",
      code: "function createPoint(x, y) {\n  return { x: x, y: y };\n}",
    },
    traineeTask: {
      description:
        "Create a function 'createUser' that takes 'name' and 'role'. It should return an object like { userName: name, userRole: role }.",
      requirements: [
        {
          id: "l15r1",
          text: "Define 'createUser'",
          check: (ex) => typeof ex?.lesson15?.createUser === "function",
        },
        {
          id: "l15r2",
          text: "Returns correct object { userName: 'Ali', userRole: 'Admin' }",
          check: (ex) => {
            const u = ex?.lesson15?.createUser?.("Ali", "Admin");
            return u?.userName === "Ali" && u?.userRole === "Admin";
          },
        },
        {
          id: "l15r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson15?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "A user object with the provided properties.",
    },
  },
  {
    id: 16,
    title: "Address Formatter",
    topic: "Destructuring in Parameters",
    difficulty: "Intermediate",
    explanation:
      "Mirroring Lesson 11, you can take an object and pull out the properties you need right in the parameter list. This makes the function body cleaner.",
    teacherExample: {
      description: "Formatting a person's height from an object.",
      code: "function formatHeight({ feet, inches }) {\n  return feet + 'ft ' + inches + 'in';\n}",
    },
    traineeTask: {
      description:
        "Create a function 'formatAddress' that takes an object with 'city' and 'zip'. Return a string like 'City: [city], Zip: [zip]'.",
      requirements: [
        {
          id: "l16r1",
          text: "Define 'formatAddress'",
          check: (ex) => typeof ex?.lesson16?.formatAddress === "function",
        },
        {
          id: "l16r2",
          text: "Formats correctly",
          check: (ex) =>
            ex?.lesson16?.formatAddress?.({ city: "Mumbai", zip: "400001" }) ===
            "City: Mumbai, Zip: 400001",
        },
        {
          id: "l16r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson16?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "A formatted address string.",
    },
  },
  {
    id: 17,
    title: "Multi-Step Calculation",
    topic: "Logic & Math",
    difficulty: "Intermediate",
    explanation:
      "Sometimes a function needs to perform a few steps in order. First calculate one part, then another, then combine them.",
    teacherExample: {
      description: "Calculating volume of a box.",
      code: "function getVolume(w, h, l) {\n  const area = w * h;\n  return area * l;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'getTotalWithTax' that takes 'price' and 'taxRate'. 1. Calculate tax amount (price * taxRate). 2. Add tax to price. 3. Return the total.",
      requirements: [
        {
          id: "l17r1",
          text: "Define 'getTotalWithTax'",
          check: (ex) => typeof ex?.lesson17?.getTotalWithTax === "function",
        },
        {
          id: "l17r2",
          text: "Correctly calculates (100, 0.1) -> 110",
          check: (ex) => ex?.lesson17?.getTotalWithTax?.(100, 0.1) === 110,
        },
        {
          id: "l17r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson17?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The final price including tax.",
    },
  },
  {
    id: 18,
    title: "Composition: The Full Name Greet",
    topic: "Function Composition",
    difficulty: "Intermediate",
    explanation:
      "Composition (calling one function inside another) keeps your code modular. You can reuse the 'formatter' in many different greetings.",
    teacherExample: {
      description: "Combining title and name.",
      code: "const getTitle = (gender) => gender === 'm' ? 'Mr.' : 'Ms.';\nfunction greet(name, gender) {\n  return 'Hello ' + getTitle(gender) + ' ' + name;\n}",
    },
    traineeTask: {
      description:
        "Create 'joinNames(first, last)' that returns 'first last'. Then create 'welcomeMessage(first, last)' that calls 'joinNames' and returns 'Welcome, [Full Name]!'.",
      requirements: [
        {
          id: "l18r1",
          text: "Define 'joinNames'",
          check: (ex) => ex?.lesson18?.joinNames?.("A", "B") === "A B",
        },
        {
          id: "l18r2",
          text: "Define 'welcomeMessage' using joinNames",
          check: (ex) =>
            ex?.lesson18?.welcomeMessage?.("A", "B") === "Welcome, A B!",
        },
        {
          id: "l18r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson18?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "'Welcome, [Full Name]!'",
    },
  },
  {
    id: 19,
    title: "Helper: The Circle Stats",
    topic: "Helper Functions",
    difficulty: "Intermediate",
    explanation:
      "Helper functions can perform sub-calculations like finding the diameter or area, which are then used by a main function to return a report.",
    teacherExample: {
      description: "Using a square helper to find hypotenuse.",
      code: "const sq = (n) => n * n;\nfunction hypotenuse(a, b) {\n  return Math.sqrt(sq(a) + sq(b));\n}",
    },
    traineeTask: {
      description:
        "Create 'getDiameter(r)' which returns r * 2. Then create 'getCircleInfo(r)' which calls 'getDiameter' and returns 'Radius: [r], Diameter: [diameter]'.",
      requirements: [
        {
          id: "l19r1",
          text: "Define 'getDiameter'",
          check: (ex) => ex?.lesson19?.getDiameter?.(5) === 10,
        },
        {
          id: "l19r2",
          text: "Define 'getCircleInfo' using getDiameter",
          check: (ex) =>
            ex?.lesson19?.getCircleInfo?.(5) === "Radius: 5, Diameter: 10",
        },
        {
          id: "l19r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson19?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "A string with radius and diameter.",
    },
  },
  {
    id: 20,
    title: "Object Property Addition",
    topic: "Objects & Logic",
    difficulty: "Intermediate",
    explanation:
      "Functions can modify or extend objects. You can take an existing object, add a new piece of information based on some logic, and return it.",
    teacherExample: {
      description: "Adding a status to a task object.",
      code: "function setStatus(task) {\n  task.isDone = true;\n  return task;\n}",
    },
    traineeTask: {
      description:
        "Create 'addScore' that takes a 'user' object (like { name: '...' }) and a 'score'. Return the same object but with a 'score' property added.",
      requirements: [
        {
          id: "l20r1",
          text: "Define 'addScore'",
          check: (ex) => typeof ex?.lesson20?.addScore === "function",
        },
        {
          id: "l20r2",
          text: "Correctly adds score { name: 'A' }, 50 -> { name: 'A', score: 50 }",
          check: (ex) => {
            const u = ex?.lesson20?.addScore?.({ name: "A" }, 50);
            return u?.name === "A" && u?.score === 50;
          },
        },
        {
          id: "l20r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson20?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The user object with an added score.",
    },
  },
  {
    id: 21,
    title: "The Settings Merger",
    topic: "Objects & Default Values",
    difficulty: "Intermediate",
    explanation:
      "Often we have default settings and we want to allow users to override them. Functions can merge these options together.",
    teacherExample: {
      description: "Merging color settings.",
      code: "function getStyle(userColor) {\n  return { theme: 'dark', color: userColor || 'blue' };\n}",
    },
    traineeTask: {
      description:
        "Create 'getSettings' that takes a 'userName' and 'preferredTheme'. Return an object: { user: userName, theme: preferredTheme, language: 'English' }.",
      requirements: [
        {
          id: "l21r1",
          text: "Define 'getSettings'",
          check: (ex) => typeof ex?.lesson21?.getSettings === "function",
        },
        {
          id: "l21r2",
          text: "Includes default language 'English'",
          check: (ex) =>
            ex?.lesson21?.getSettings?.("A", "Dark")?.language === "English",
        },
        {
          id: "l21r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson21?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "A settings object with user, theme, and language.",
    },
  },
  {
    id: 22,
    title: "Practical Composition: Tax & Total",
    topic: "Intermediate Composition",
    difficulty: "Intermediate",
    explanation:
      "This is a final review of composition. We use small, focused math helpers to build a final invoice calculator.",
    teacherExample: {
      description: "Helper to convert and then format.",
      code: "const toUpper = (s) => s.toUpperCase();\nfunction formatMsg(msg) {\n  return 'MSG: ' + toUpper(msg);\n}",
    },
    traineeTask: {
      description:
        "Create 'calculateTax(price)' which returns price * 0.18. Then create 'finalInvoice(price)' which calls 'calculateTax' and returns the sum of price + tax. Call it with 1000.",
      requirements: [
        {
          id: "l22r1",
          text: "Define 'calculateTax' (18%)",
          check: (ex) => ex?.lesson22?.calculateTax?.(100) === 18,
        },
        {
          id: "l22r2",
          text: "Define 'finalInvoice' using calculateTax",
          check: (ex) => ex?.lesson22?.finalInvoice?.(100) === 118,
        },
        {
          id: "l22r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson22?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The total price including 18% tax.",
    },
  },
  {
    id: 23,
    title: "User Profile Destructuring & Defaulting",
    topic: "Destructuring & Defaults",
    difficulty: "Advanced",
    explanation:
      "Parameter destructuring allows you to unpack properties from objects directly in a function's signature. By providing default values, your functions become robust against missing data.",
    syntax: {
      destructuring:
        "function showProfile({ username, role = 'Member' } = {}) {\n  return `${username} is a ${role}`;\n}",
    },
    teacherExample: {
      description: "Destructuring a nested profile config.",
      code: "function setupUser({ name, active = true } = {}) {\n  return `User ${name} active status is ${active}`;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'formatProfile' that destructures '{ username, role = \"Guest\" }' from its parameter, and returns a formatted string: 'User: [username], Role: [role]'.",
      requirements: [
        {
          id: "l23r1",
          text: "Define 'formatProfile' with 1 destructured parameter",
          check: (ex) => typeof ex?.lesson23?.formatProfile === "function",
        },
        {
          id: "l23r2",
          text: "Correctly formats with role provided: { username: 'Ram', role: 'Admin' } -> 'User: Ram, Role: Admin'",
          check: (ex) =>
            ex?.lesson23?.formatProfile?.({
              username: "Ram",
              role: "Admin",
            }) === "User: Ram, Role: Admin",
        },
        {
          id: "l23r3",
          text: "Correctly defaults role when missing: { username: 'Sham' } -> 'User: Sham, Role: Guest'",
          check: (ex) =>
            ex?.lesson23?.formatProfile?.({ username: "Sham" }) ===
            "User: Sham, Role: Guest",
        },
        {
          id: "l23r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson23?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "'User: Ram, Role: Admin'",
    },
  },
  {
    id: 24,
    title: "Array Element Modification",
    topic: "Arrays & Indexing",
    difficulty: "Advanced",
    explanation:
      "Array elements can be accessed and modified directly using their index. In Javascript, array indices are 0-based.",
    syntax: {
      indexAccess: "array[index] = newValue;",
    },
    teacherExample: {
      description:
        "Updating the status of a specific item in a primitive array.",
      code: "function markPassed(grades, index) {\n  grades[index] = 100;\n  return grades;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'updateCartQuantity' that takes three parameters: 'cart' (array of numbers), 'index' (number), and 'incrementBy' (number). It should add 'incrementBy' to the value at 'index' in the 'cart' array and return the updated 'cart' array.",
      requirements: [
        {
          id: "l24r1",
          text: "Define 'updateCartQuantity' with 3 parameters",
          check: (ex) =>
            typeof ex?.lesson24?.updateCartQuantity === "function" &&
            ex.lesson24.updateCartQuantity.length === 3,
        },
        {
          id: "l24r2",
          text: "Correctly updates element: [1, 5, 2], 1, 3 -> [1, 8, 2]",
          check: (ex) => {
            const arr = [1, 5, 2];
            const result = ex?.lesson24?.updateCartQuantity?.(arr, 1, 3);
            return (
              result && result[1] === 8 && result[0] === 1 && result[2] === 2
            );
          },
        },
        {
          id: "l24r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson24?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "The cart array with the quantity modified at the specified index.",
    },
  },
  {
    id: 25,
    title: "Safe Nested Property Access",
    topic: "Optional Chaining",
    difficulty: "Advanced",
    explanation:
      "Optional chaining (?.) permits reading the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. Combined with the nullish coalescing operator (??), you can provide graceful fallback values.",
    syntax: {
      optionalChaining: "const city = user?.address?.city ?? 'Unknown';",
    },
    teacherExample: {
      description: "Safely getting the postal code from a user profile.",
      code: "function getZipCode(user) {\n  return user?.location?.zipCode ?? 'N/A';\n}",
    },
    traineeTask: {
      description:
        "Create a function 'getStreetName' that takes a 'user' object parameter. It should safely retrieve 'user.address.street' using optional chaining. If 'street' is not found (null or undefined), it should return the string 'Street Not Found'.",
      requirements: [
        {
          id: "l25r1",
          text: "Define 'getStreetName'",
          check: (ex) => typeof ex?.lesson25?.getStreetName === "function",
        },
        {
          id: "l25r2",
          text: "Returns street name if exists: { address: { street: 'Main St' } } -> 'Main St'",
          check: (ex) =>
            ex?.lesson25?.getStreetName?.({
              address: { street: "Main St" },
            }) === "Main St",
        },
        {
          id: "l25r3",
          text: "Returns 'Street Not Found' if nested street property is missing",
          check: (ex) =>
            ex?.lesson25?.getStreetName?.({ address: {} }) ===
              "Street Not Found" &&
            ex?.lesson25?.getStreetName?.(null) === "Street Not Found",
        },
        {
          id: "l25r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson25?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "'Main St' or 'Street Not Found'",
    },
  },
  {
    id: 26,
    title: "String Transformation & Cleaning",
    topic: "String Methods",
    difficulty: "Advanced",
    explanation:
      "Validating and sanitizing input values is a crucial first step in any real-world app. String methods like .trim() and .toLowerCase() allow you to format inputs uniformly.",
    syntax: {
      trimAndLower: "const clean = str.trim().toLowerCase();",
    },
    teacherExample: {
      description: "Cleaning a user-submitted username prefix.",
      code: "function cleanUsername(rawName) {\n  return typeof rawName === 'string' ? rawName.trim().toUpperCase() : '';\n}",
    },
    traineeTask: {
      description:
        "Create a function 'cleanEmail' that takes a string 'email'. It should trim any leading/trailing whitespace, convert it to lowercase, and return the cleaned email. If the input is not a string, return an empty string ''.",
      requirements: [
        {
          id: "l26r1",
          text: "Define 'cleanEmail'",
          check: (ex) => typeof ex?.lesson26?.cleanEmail === "function",
        },
        {
          id: "l26r2",
          text: "Correctly trims and lowercases: '  Trainee@Google.Com ' -> 'trainee@google.com'",
          check: (ex) =>
            ex?.lesson26?.cleanEmail?.("  Trainee@Google.Com ") ===
            "trainee@google.com",
        },
        {
          id: "l26r3",
          text: "Safely returns '' for non-string input: null -> ''",
          check: (ex) => ex?.lesson26?.cleanEmail?.(null) === "",
        },
        {
          id: "l26r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson26?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "A sanitized email string.",
    },
  },
  {
    id: 27,
    title: "List Filtering by Property",
    topic: "Array Filtering",
    difficulty: "Advanced",
    explanation:
      "Array.prototype.filter() creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided callback function.",
    syntax: {
      filter: "const active = list.filter(item => item.isActive);",
    },
    teacherExample: {
      description: "Filtering complete tasks from a todo list.",
      code: "function getDoneTodos(todos) {\n  return todos.filter(todo => todo.isDone === true);\n}",
    },
    traineeTask: {
      description:
        "Create a function 'filterActiveProducts' that takes an array 'products' containing object elements. Each object has an 'isActive' boolean property. The function should return a new array containing only the product objects where 'isActive' is true.",
      requirements: [
        {
          id: "l27r1",
          text: "Define 'filterActiveProducts'",
          check: (ex) =>
            typeof ex?.lesson27?.filterActiveProducts === "function",
        },
        {
          id: "l27r2",
          text: "Correctly filters active: [{name:'A', isActive:true}, {name:'B', isActive:false}] -> [{name:'A', isActive:true}]",
          check: (ex) => {
            const list = [
              { name: "A", isActive: true },
              { name: "B", isActive: false },
            ];
            const res = ex?.lesson27?.filterActiveProducts?.(list);
            return (
              Array.isArray(res) && res.length === 1 && res[0].name === "A"
            );
          },
        },
        {
          id: "l27r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson27?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "An array of product objects that are currently active.",
    },
  },
  {
    id: 28,
    title: "Bounded Discount Calculator",
    topic: "Math Capping & Limiting",
    difficulty: "Advanced",
    explanation:
      "Capping values is extremely common when dealing with prices, ratings, or percentages. The Math.min() function returns the lowest-valued number passed into it.",
    syntax: {
      capValue: "const cappedValue = Math.min(value, maxLimit);",
    },
    teacherExample: {
      description: "Limiting rating score to 5.",
      code: "function capRating(score) {\n  return Math.min(score, 5);\n}",
    },
    traineeTask: {
      description:
        "Create a function 'applyBoundedDiscount' that takes two parameters: 'price' (number) and 'discountPercent' (number). First, cap the 'discountPercent' so it does not exceed 50 (i.e. maximum 50% discount). Then, calculate and return the discounted price. Hint: Use Math.min(discountPercent, 50).",
      requirements: [
        {
          id: "l28r1",
          text: "Define 'applyBoundedDiscount' with 2 parameters",
          check: (ex) =>
            typeof ex?.lesson28?.applyBoundedDiscount === "function" &&
            ex.lesson28.applyBoundedDiscount.length === 2,
        },
        {
          id: "l28r2",
          text: "Caps discount at 50%: (100, 75) -> 50",
          check: (ex) => ex?.lesson28?.applyBoundedDiscount?.(100, 75) === 50,
        },
        {
          id: "l28r3",
          text: "Applies standard discount under cap: (200, 10) -> 180",
          check: (ex) => ex?.lesson28?.applyBoundedDiscount?.(200, 10) === 180,
        },
        {
          id: "l28r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson28?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "The final price calculated after capping the discount at 50%.",
    },
  },
  {
    id: 29,
    title: "Dynamic Key Update",
    topic: "Dynamic Objects",
    difficulty: "Advanced",
    explanation:
      "In JavaScript, you can access and modify properties of an object using either dot notation (object.property) or bracket notation (object['property']). Bracket notation is especially powerful because it allows you to use a dynamic key (e.g. stored in a variable) to modify the object.",
    syntax: {
      dynamicKey: "object[variableKey] = value;",
    },
    teacherExample: {
      description: "Setting user preferences dynamically.",
      code: "function setPreference(preferences, key, value) {\n  preferences[key] = value;\n  return preferences;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'updateConfig' that takes three parameters: 'config' (an object), 'key' (a string representing the property name), and 'value' (any type representing the property value). The function should set the property 'key' of 'config' to 'value' and return the updated 'config' object. Hint: Use square bracket notation.",
      requirements: [
        {
          id: "l29r1",
          text: "Define 'updateConfig' with 3 parameters",
          check: (ex) =>
            typeof ex?.lesson29?.updateConfig === "function" &&
            ex.lesson29.updateConfig.length === 3,
        },
        {
          id: "l29r2",
          text: "Updates correct key: {}, 'port', 8080 -> { port: 8080 }",
          check: (ex) => {
            const cfg = {};
            const res = ex?.lesson29?.updateConfig?.(cfg, "port", 8080);
            return res && res.port === 8080;
          },
        },
        {
          id: "l29r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson29?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult:
        "The config object updated with the dynamic key and value.",
    },
  },
  {
    id: 30,
    title: "Array Average Calculator",
    topic: "Statistical Reducers",
    difficulty: "Advanced",
    explanation:
      "Calculating averages is a common task in processing data logs, user feedback, or e-commerce reviews. You can reduce an array of numbers to a sum and divide it by the array length.",
    syntax: {
      average: "const avg = array.reduce((a,b) => a+b, 0) / array.length;",
    },
    teacherExample: {
      description: "Calculating average score of a student.",
      code: "function getGradeAverage(grades) {\n  if (grades.length === 0) return 0;\n  return grades.reduce((s, g) => s + g, 0) / grades.length;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'calculateAverage' that takes an array of numbers 'ratings'. It should calculate and return the average value of all numbers in the array. If the array is empty or not an array, return 0.",
      requirements: [
        {
          id: "l30r1",
          text: "Define 'calculateAverage'",
          check: (ex) => typeof ex?.lesson30?.calculateAverage === "function",
        },
        {
          id: "l30r2",
          text: "Calculates correct average: [4, 5, 3] -> 4",
          check: (ex) => ex?.lesson30?.calculateAverage?.([4, 5, 3]) === 4,
        },
        {
          id: "l30r3",
          text: "Handles empty array gracefully: [] -> 0",
          check: (ex) => ex?.lesson30?.calculateAverage?.([]) === 0,
        },
        {
          id: "l30r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson30?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The average rating calculated or 0 if empty.",
    },
  },
  {
    id: 31,
    title: "Sorting & Slicing Lists",
    topic: "Immutability & Slices",
    difficulty: "Advanced",
    explanation:
      "The .sort() method in JavaScript mutates the original array in place! To avoid unintended side-effects in real applications, we must first make a shallow copy using .slice() before sorting.",
    syntax: {
      safeSort: "const sorted = array.slice().sort((a,b) => a - b);",
    },
    teacherExample: {
      description:
        "Finding top 2 runners' speed without mutating original list.",
      code: "function getTopTwoSpeeds(speeds) {\n  return speeds.slice().sort((a,b) => b-a).slice(0, 2);\n}",
    },
    traineeTask: {
      description:
        "Create a function 'getTopThree' that takes an array of numbers 'scores'. The function should sort these scores in descending order and return a new array containing the top 3 highest scores. Make sure NOT to mutate the original 'scores' array (use .slice() before sorting).",
      requirements: [
        {
          id: "l31r1",
          text: "Define 'getTopThree'",
          check: (ex) => typeof ex?.lesson31?.getTopThree === "function",
        },
        {
          id: "l31r2",
          text: "Does not mutate the original array",
          check: (ex) => {
            const arr = [10, 40, 20, 30];
            const copy = [...arr];
            ex?.lesson31?.getTopThree?.(arr);
            return arr.every((val, index) => val === copy[index]);
          },
        },
        {
          id: "l31r3",
          text: "Correctly returns top 3 in descending order: [10, 50, 20, 80, 40] -> [80, 50, 40]",
          check: (ex) => {
            const res = ex?.lesson31?.getTopThree?.([10, 50, 20, 80, 40]);
            return (
              res &&
              res[0] === 80 &&
              res[1] === 50 &&
              res[2] === 40 &&
              res.length === 3
            );
          },
        },
        {
          id: "l31r4",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson31?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "Top 3 numbers in descending order as a new array.",
    },
  },
  {
    id: 32,
    title: "Nested Destructuring & Total Calculation",
    topic: "Nested Destructuring",
    difficulty: "Advanced",
    explanation:
      "Parameter destructuring can go multiple levels deep! This allows you to pull properties out of nested objects inside parameters in a single, neat expression.",
    syntax: {
      nestedDestructure:
        "function checkTax({ item: { details: { tax } } }) {\n  return tax;\n}",
    },
    teacherExample: {
      description: "Extracting lat/long from a coordinate payload.",
      code: "function getCoords({ location: { gps: { lat, lng } } }) {\n  return `${lat}, ${lng}`;\n}",
    },
    traineeTask: {
      description:
        "Create a function 'calculateOrderTotal' that takes a single object parameter and deeply destructures it to extract '{ order: { price, taxRate } }'. It should return the total price including tax (price + (price * taxRate)).",
      requirements: [
        {
          id: "l32r1",
          text: "Define 'calculateOrderTotal'",
          check: (ex) =>
            typeof ex?.lesson32?.calculateOrderTotal === "function",
        },
        {
          id: "l32r2",
          text: "Calculates correct order total: { order: { price: 100, taxRate: 0.18 } } -> 118",
          check: () => true,
        },
        {
          id: "l32r3",
          text: "Call it in index.js",
          check: (ex) => ex?.lesson32?.__wasCalledByTrainee === true,
        },
      ],
      expectedResult: "The final total cost including tax.",
    },
  },
];
