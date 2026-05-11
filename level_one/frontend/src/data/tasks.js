// Task definitions for API integration training

export const tasks = [
  {
    id: 1,
    title: "Task 1: Simple Users - Flat Objects",
    endpoint: "/api/users/simple",
    apiFunction: "getSimpleUsers",
    difficulty: "Beginner",
    description: "Your first API integration task! Fetch and display simple user data with flat object structure.",
    objective: "Learn how to make GET requests using Axios and display data in MUI Cards.",
    dataStructure: {
      type: "Array of flat objects",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profile: "Profile of John Doe",
        avatar: "https://i.pravatar.cc/150?img=1"
      }
    },
    requirements: [
      "Use Axios to fetch data from the endpoint",
      "Display users in a grid layout using MUI Grid component",
      "Create a UserCard component using MUI Card component",
      "Display: name, email, profile text, and avatar image",
      "Use MUI Card, CardContent, CardMedia, Typography components",
      "Handle loading and error states"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "CardMedia",
      "Typography",
      "Grid",
      "CircularProgress (for loading)",
      "Alert (for errors)"
    ],
    hints: [
      "Access data directly: user.name, user.email, user.profile",
      "Use useEffect hook to fetch data on component mount",
      "Use useState to manage data, loading, and error states",
      "Map through the array to render multiple cards"
    ],
    expectedResult: "A grid of user cards showing name, email, profile, and avatar image"
  },
  {
    id: 2,
    title: "Task 2: Basic Users - Single Level Nesting",
    endpoint: "/api/users/basic",
    apiFunction: "getBasicUsers",
    difficulty: "Beginner",
    description: "Now you'll work with nested objects! Learn how to access properties inside nested objects.",
    objective: "Understand how to access nested object properties using dot notation.",
    dataStructure: {
      type: "Array of objects with nested objects",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: {
          street: "100 Main Street",
          city: "New York",
          country: "USA"
        },
        contact: {
          phone: "+1-555-1000",
          email: "john@example.com"
        }
      }
    },
    requirements: [
      "Fetch data from the endpoint",
      "Display user information including nested address and contact details",
      "Use MUI Card with sections for different data groups",
      "Display: name, email, full address (street, city, country), phone number",
      "Use MUI Divider to separate sections in the card",
      "Show how to access nested properties: user.address.city"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Typography",
      "Divider",
      "Grid"
    ],
    hints: [
      "Access nested properties: user.address.street, user.contact.phone",
      "You can chain dot notation: user.address.city",
      "Consider using optional chaining (?.) to prevent errors: user.address?.city",
      "Group related information visually in the card"
    ],
    expectedResult: "User cards displaying name, email, and nested address/contact information"
  },
  {
    id: 3,
    title: "Task 3: Medium Users - Multiple Nested Objects",
    endpoint: "/api/users/medium",
    apiFunction: "getMediumUsers",
    difficulty: "Beginner-Intermediate",
    description: "Work with multiple nested objects in a single user object. Organize the display of complex data.",
    objective: "Practice accessing multiple nested objects and organizing complex data display.",
    dataStructure: {
      type: "Array of objects with multiple nested objects",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: { street: "...", city: "...", country: "..." },
        contact: { phone: "...", email: "..." },
        profile: { bio: "...", age: 25, joinDate: "2020-01-01" }
      }
    },
    requirements: [
      "Fetch and display users with address, contact, and profile information",
      "Create a well-organized card layout",
      "Display all nested information clearly",
      "Use MUI CardActions or sections to organize different data groups",
      "Format dates if needed (joinDate)",
      "Show age and bio from profile object"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "CardActions (optional)",
      "Typography",
      "Divider",
      "Chip (for tags/badges)"
    ],
    hints: [
      "Access: user.profile.bio, user.profile.age, user.profile.joinDate",
      "You're accessing multiple nested objects: address, contact, profile",
      "Consider using MUI List or Stack for better organization",
      "Format the joinDate for better readability"
    ],
    expectedResult: "Comprehensive user cards showing all nested information from address, contact, and profile"
  },
  {
    id: 4,
    title: "Task 4: Users with Hobbies - Nested Arrays",
    endpoint: "/api/users/hobbies",
    apiFunction: "getHobbiesUsers",
    difficulty: "Intermediate",
    description: "Now you'll work with arrays! Learn how to display array data, especially arrays of strings.",
    objective: "Understand how to map through arrays and display list items.",
    dataStructure: {
      type: "Array of objects with nested arrays (strings)",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profile: "Profile of John Doe",
        hobbies: ["Reading", "Swimming", "Cooking"]
      }
    },
    requirements: [
      "Fetch users with hobbies array",
      "Display hobbies as a list or chips",
      "Use MUI Chip component to display each hobby",
      "Map through the hobbies array: user.hobbies.map()",
      "Display: name, email, profile, and all hobbies",
      "Handle cases where hobbies array might be empty"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Typography",
      "Chip",
      "Stack or Box (for hobby chips)"
    ],
    hints: [
      "Use .map() to iterate through hobbies: user.hobbies.map((hobby, index) => ...)",
      "Each hobby is a string, so display it directly",
      "Use MUI Chip component for a nice visual representation",
      "Use Stack component to arrange chips horizontally or vertically",
      "Check if hobbies array exists and has items before mapping"
    ],
    expectedResult: "User cards with hobbies displayed as chips or list items"
  },
  {
    id: 5,
    title: "Task 5: Users with Skills - Arrays of Objects",
    endpoint: "/api/users/skills",
    apiFunction: "getSkillsUsers",
    difficulty: "Intermediate",
    description: "Level up! Now you'll work with arrays that contain objects. This is a common pattern in APIs.",
    objective: "Learn to map through arrays of objects and access nested properties within array items.",
    dataStructure: {
      type: "Array of objects with nested arrays of objects",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profile: "Profile of John Doe",
        skills: [
          { name: "JavaScript", level: "Beginner", years: 1 },
          { name: "Python", level: "Intermediate", years: 2 }
        ]
      }
    },
    requirements: [
      "Fetch users with skills array (each skill is an object)",
      "Display each skill with its name, level, and years of experience",
      "Create a skills section in the card",
      "Use MUI List or Table to display skills",
      "Access nested properties: skill.name, skill.level, skill.years",
      "Map through skills array: user.skills.map((skill) => ...)"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Typography",
      "List",
      "ListItem",
      "ListItemText",
      "Chip or Badge (for skill level)"
    ],
    hints: [
      "Double mapping: first map users, then map skills within each user",
      "Access skill properties: skill.name, skill.level, skill.years",
      "Use MUI List component for a clean skills display",
      "Consider using different colors for different skill levels",
      "You can use MUI Chip with color prop based on level"
    ],
    expectedResult: "User cards with skills displayed, showing name, level, and years for each skill"
  },
  {
    id: 6,
    title: "Task 6: Users with Company - Deep Nesting Level 1",
    endpoint: "/api/users/company",
    apiFunction: "getCompanyUsers",
    difficulty: "Intermediate",
    description: "Dive deeper into nesting! Access properties that are nested two levels deep.",
    objective: "Practice accessing deeply nested object properties (object within object within object).",
    dataStructure: {
      type: "Array of objects with deeply nested objects",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        company: {
          name: "Tech Corp",
          address: {
            street: "500 Business Ave",
            city: "New York",
            zipCode: "10001"
          },
          employees: 500,
          founded: 2010
        }
      }
    },
    requirements: [
      "Fetch users with company information",
      "Display company details including nested address",
      "Access deeply nested properties: user.company.address.city",
      "Show: user name, company name, company address (street, city, zip), employees count, founded year",
      "Organize company information in a dedicated section",
      "Use proper formatting for numbers (employees, year)"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Typography",
      "Divider",
      "Box or Paper (for company section)"
    ],
    hints: [
      "Chain dot notation: user.company.name, user.company.address.street",
      "Go deeper: user.company.address.city (3 levels deep!)",
      "Use optional chaining for safety: user.company?.address?.city",
      "Consider creating a separate component for company information",
      "Format large numbers (employees) with commas if needed"
    ],
    expectedResult: "User cards showing company information with deeply nested address details"
  },
  {
    id: 7,
    title: "Task 7: Users with Education - Deep Nesting Level 2",
    endpoint: "/api/users/education",
    apiFunction: "getEducationUsers",
    difficulty: "Intermediate-Advanced",
    description: "Combine arrays and deep nesting! Work with arrays that contain objects with nested objects.",
    objective: "Master mapping through arrays while accessing deeply nested properties.",
    dataStructure: {
      type: "Array of objects with arrays containing deeply nested objects",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        education: [
          {
            school: "Harvard University",
            degree: "Bachelor of Science",
            year: 2015,
            details: {
              gpa: "3.50",
              honors: "Summa Cum Laude",
              major: "Computer Science"
            }
          }
        ]
      }
    },
    requirements: [
      "Fetch users with education array",
      "Each education item has nested details object",
      "Display: school name, degree, year, GPA, honors, major",
      "Map through education array and access nested details",
      "Use MUI Accordion or ExpansionPanel to show/hide education details",
      "Access: education.details.gpa, education.details.honors"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Accordion",
      "AccordionSummary",
      "AccordionDetails",
      "Typography",
      "List"
    ],
    hints: [
      "Map education: user.education.map((edu) => ...)",
      "Access nested: edu.details.gpa, edu.details.major",
      "Use Accordion to show multiple education entries expandable",
      "Each education entry can be an accordion item",
      "Display honors only if it exists (conditional rendering)"
    ],
    expectedResult: "User cards with expandable education sections showing all nested details"
  },
  {
    id: 8,
    title: "Task 8: Full Users - Complex Mixed Structure",
    endpoint: "/api/users/full",
    apiFunction: "getFullUsers",
    difficulty: "Advanced",
    description: "Put it all together! Handle multiple nested objects AND arrays in the same data structure.",
    objective: "Combine all previous concepts: nested objects, arrays, and arrays of objects.",
    dataStructure: {
      type: "Complex structure with multiple nested objects and arrays",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: { street: "...", city: "...", country: "...", zipCode: "..." },
        hobbies: ["Reading", "Swimming"],
        skills: [{ name: "JavaScript", level: "Beginner" }],
        education: [{ school: "...", degree: "...", year: 2015 }]
      }
    },
    requirements: [
      "Fetch and display all user information",
      "Handle address (nested object), hobbies (array of strings), skills (array of objects), education (array of objects)",
      "Create a comprehensive, well-organized card layout",
      "Use tabs or sections to organize different data types",
      "Display all information clearly without overwhelming the UI",
      "Practice accessing: user.address.city, user.hobbies[0], user.skills[0].name"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Tabs",
      "Tab",
      "TabPanel",
      "Typography",
      "Chip",
      "List",
      "Divider"
    ],
    hints: [
      "Use MUI Tabs to organize: Personal Info, Skills, Education, Hobbies",
      "Each tab can show different sections of data",
      "Combine all previous techniques: dot notation, array mapping",
      "Consider creating separate components for each section",
      "Make the card scrollable if content is too long"
    ],
    expectedResult: "Comprehensive user cards with tabs/sections organizing all nested data types"
  },
  {
    id: 9,
    title: "Task 9: Advanced Users - Very Deep Nesting",
    endpoint: "/api/users/advanced",
    apiFunction: "getAdvancedUsers",
    difficulty: "Advanced",
    description: "Challenge yourself with very deep nesting! Access properties nested 4+ levels deep.",
    objective: "Master accessing deeply nested properties in complex data structures.",
    dataStructure: {
      type: "Array with very deep nesting (4+ levels)",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        workHistory: [
          {
            company: {
              name: "Tech Corp",
              location: {
                city: "New York",
                country: "USA"
              }
            },
            position: "Software Engineer",
            duration: "2018 - 2020",
            projects: [
              {
                name: "Project Alpha",
                tech: ["React", "Node.js", "MongoDB"],
                description: "Main project description"
              }
            ]
          }
        ]
      }
    },
    requirements: [
      "Fetch users with workHistory array",
      "Each workHistory has company (with nested location), position, duration, and projects array",
      "Each project has tech array",
      "Display: company name, location (city, country), position, duration, all projects with their tech stacks",
      "Access: workHistory[0].company.location.city, workHistory[0].projects[0].tech[0]",
      "Create a timeline or list view for work history"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Timeline (if available) or List",
      "ListItem",
      "Chip",
      "Typography",
      "Divider"
    ],
    hints: [
      "Very deep access: user.workHistory[0].company.location.city",
      "Multiple arrays: workHistory array → projects array → tech array",
      "Use nested maps: workHistory.map() → projects.map() → tech.map()",
      "Consider using MUI Timeline component for work history",
      "Display tech stack as chips for each project"
    ],
    expectedResult: "User cards with work history timeline showing company, location, projects, and tech stacks"
  },
  {
    id: 10,
    title: "Task 10: Complex Users - Maximum Complexity",
    endpoint: "/api/users/complex",
    apiFunction: "getComplexUsers",
    difficulty: "Expert",
    description: "The ultimate challenge! Handle the most complex nested structure with everything combined.",
    objective: "Demonstrate mastery of all concepts: deep nesting, multiple arrays, arrays of objects, and complex data access.",
    dataStructure: {
      type: "Maximum complexity with deepest nesting",
      example: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profile: { bio: "...", age: 25, joinDate: "...", avatar: "..." },
        address: { street: "...", city: "...", coordinates: { lat: 40.7128, lng: -74.0060 } },
        contact: { phone: { mobile: "...", work: "..." }, email: { personal: "...", work: "..." } },
        social: { linkedin: "...", github: "...", twitter: "..." },
        workHistory: [{ company: { name: "...", location: { city: "...", address: { street: "..." } } }, projects: [{ name: "...", tech: ["React", "Node.js"], team: { size: 5, roles: ["Developer", "Designer"] } }] }],
        education: [{ school: { name: "...", location: { city: "..." } }, details: { gpa: "...", courses: ["Data Structures", "Algorithms"] } }],
        hobbies: ["Reading", "Swimming"],
        skills: [{ name: "JavaScript", level: "Advanced", certifications: ["Certified"] }]
      }
    },
    requirements: [
      "Fetch and display ALL user information from the most complex endpoint",
      "Handle: profile, address (with coordinates), contact (nested phone/email objects), social, workHistory, education, hobbies, skills",
      "Create a professional, well-organized UI",
      "Use advanced MUI components: Drawer, Dialog, or complex Card layouts",
      "Access deepest properties: user.contact.phone.mobile, user.workHistory[0].company.location.address.street",
      "Handle arrays within arrays: user.workHistory[0].projects[0].tech",
      "Create reusable components for different sections"
    ],
    muiComponents: [
      "Card",
      "CardContent",
      "Tabs",
      "Drawer or Dialog (for detailed view)",
      "Grid",
      "Typography",
      "Chip",
      "List",
      "Divider",
      "Button",
      "IconButton"
    ],
    hints: [
      "Break this into smaller components: ProfileSection, AddressSection, WorkHistorySection, etc.",
      "Use optional chaining extensively: user.contact?.phone?.mobile",
      "Deep access: user.workHistory[0]?.company?.location?.address?.street",
      "Consider a master-detail view: list on left, details on right",
      "Use MUI Drawer or Dialog for detailed user view",
      "Create helper functions to safely access nested properties",
      "This is your chance to show everything you've learned!"
    ],
    expectedResult: "A professional, comprehensive user profile page displaying all nested information with excellent UX"
  }
];

