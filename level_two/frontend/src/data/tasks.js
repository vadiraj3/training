// Level two task definitions (intermediate progression)

export const tasks = [
  {
    id: 1,
    title: "Task 1: Organization Overview - Nested Object + Array",
    endpoint: "/api/users/org",
    apiFunction: "getOrgUsers",
    difficulty: "Intermediate",
    description: "Start level two at the old Task 6 complexity range: nested organization data with manager and departments.",
    objective: "Practice rendering one deep object plus an array of department objects in one card.",
    dataStructure: {
      type: "Array of objects with nested organization object and departments array",
      example: {
        id: 1,
        name: "John Doe",
        organization: {
          company: "Tech Corp",
          manager: { name: "John Manager", contact: { email: "manager@company.com" } },
          departments: [{ name: "Engineering", budget: 120000, isHiring: true }]
        }
      }
    },
    requirements: [
      "Fetch organization users and render cards",
      "Display company, HQ city/country, manager name/email/phone",
      "Map departments and show budget + hiring status",
      "Format budget values with locale formatting",
      "Handle loading, error, and empty departments"
    ],
    muiComponents: ["Card", "CardContent", "Typography", "Chip", "Divider", "Stack"],
    hints: [
      "Access nested paths safely with optional chaining",
      "Department list is user.organization.departments",
      "Use chips for boolean fields like isHiring"
    ],
    expectedResult: "Cards with clean organization sections and department chips/details"
  },
  {
    id: 2,
    title: "Task 2: Project Tracker - Array in Array",
    endpoint: "/api/users/projects",
    apiFunction: "getProjectsUsers",
    difficulty: "Intermediate",
    description: "Each user contains project objects, and each project has milestones.",
    objective: "Build nested list rendering with progress-friendly UI.",
    dataStructure: {
      type: "Array of users -> projects[] -> milestones[]",
      example: {
        id: 1,
        projects: [{ name: "Project A", milestones: [{ title: "Milestone 1", completion: 50 }] }]
      }
    },
    requirements: [
      "Render each project under the user card",
      "For each milestone, show due date, completion, and blockers",
      "Use progress visuals for completion",
      "Show status badge for each project"
    ],
    muiComponents: ["Card", "Accordion", "LinearProgress", "List", "Chip", "Typography"],
    hints: [
      "First map users, then projects, then milestones",
      "Completion can drive a progress bar value",
      "Blockers may be an empty array"
    ],
    expectedResult: "Expandable project cards with milestone-level progress"
  },
  {
    id: 3,
    title: "Task 3: Communication Hub - Complex Nested Contacts",
    endpoint: "/api/users/contacts",
    apiFunction: "getContactsUsers",
    difficulty: "Intermediate",
    description: "Work with multiple nested contact channels and emergency contacts with method arrays.",
    objective: "Handle deep object traversal plus nested arrays of contact methods.",
    dataStructure: {
      type: "Array of users with communication object and emergencyContacts[]",
      example: {
        communication: {
          channels: { phone: { mobile: "+1..." }, slack: { username: "john.doe" } },
          emergencyContacts: [{ methods: [{ type: "phone", value: "+1..." }] }]
        }
      }
    },
    requirements: [
      "Display preferred channel prominently",
      "Render all channel values in a grouped section",
      "Map emergency contacts and each contact's methods",
      "Show method type as label and value as content"
    ],
    muiComponents: ["Card", "Grid", "Paper", "Typography", "List", "Divider"],
    hints: [
      "methods is nested inside each emergency contact",
      "Use sections: Channels and Emergency Contacts",
      "Optional chaining avoids runtime crashes"
    ],
    expectedResult: "Well-grouped contact cards with multi-level emergency data"
  },
  {
    id: 4,
    title: "Task 4: Weekly Planner - Dynamic Object Keys",
    endpoint: "/api/users/schedule",
    apiFunction: "getScheduleUsers",
    difficulty: "Intermediate",
    description: "The schedule uses day names as object keys, each containing shift arrays with task arrays.",
    objective: "Practice iterating object entries and nested maps together.",
    dataStructure: {
      type: "weeklySchedule object -> day[] -> shift.tasks[]",
      example: {
        weeklySchedule: {
          monday: [{ slot: "morning", tasks: [{ title: "task 1", priority: "High" }] }]
        }
      }
    },
    requirements: [
      "Iterate through days dynamically using Object.entries",
      "Display shifts per day and tasks inside shifts",
      "Highlight priority with color-coded chips",
      "Show tags for each task"
    ],
    muiComponents: ["Card", "Tabs", "Tab", "Chip", "List", "Stack"],
    hints: [
      "Day keys are not a flat array, use object iteration",
      "Priority and tags are great candidates for chips",
      "Map depth is user -> day -> shift -> task"
    ],
    expectedResult: "Day-wise schedule UI with clear nested task rendering"
  },
  {
    id: 5,
    title: "Task 5: Asset Registry - Nested History Objects",
    endpoint: "/api/users/assets",
    apiFunction: "getAssetsUsers",
    difficulty: "Intermediate",
    description: "Asset data includes warranty info and maintenance history entries.",
    objective: "Render object + list + sub-list cleanly while keeping cards readable.",
    dataStructure: {
      type: "assets[] with warranty object and maintenance.history[]",
      example: {
        assets: [{ type: "Laptop", warranty: { expiresOn: "2028-06-30" }, maintenance: { history: [{ cost: 80 }] } }]
      }
    },
    requirements: [
      "Display asset metadata (type, serial, warranty)",
      "Render maintenance history as a compact list/table",
      "Show total maintenance cost per asset",
      "Handle users with multiple assets elegantly"
    ],
    muiComponents: ["Card", "Table", "TableRow", "TableCell", "Typography", "Divider"],
    hints: [
      "Use reduce on maintenance.history to calculate totals",
      "Split each asset into its own sub-card or paper",
      "Format dates consistently"
    ],
    expectedResult: "Asset cards with warranty details and summarized maintenance history"
  },
  {
    id: 6,
    title: "Task 6: Performance Dashboard - Metrics + Goals",
    endpoint: "/api/users/reviews",
    apiFunction: "getReviewsUsers",
    difficulty: "Intermediate-Advanced",
    description: "Quarterly review entries combine metrics objects and goals arrays.",
    objective: "Render dashboard-like sections with calculated values.",
    dataStructure: {
      type: "performance.quarterlyReviews[] with metrics{} and goals[]",
      example: {
        performance: {
          quarterlyReviews: [{ quarter: "Q1", metrics: { quality: 85 }, goals: [{ progress: 70 }] }]
        }
      }
    },
    requirements: [
      "Display quarterly metrics in an easy comparison layout",
      "Compute and show average metric score per quarter",
      "Render goals with progress indicators and risks",
      "Add conditional styling for low/high scores"
    ],
    muiComponents: ["Card", "Grid", "LinearProgress", "Chip", "Typography", "Alert"],
    hints: [
      "Average = (quality + delivery + collaboration) / 3",
      "Goal risks may be empty",
      "Color scores using threshold conditions"
    ],
    expectedResult: "A compact review dashboard card for each user"
  },
  {
    id: 7,
    title: "Task 7: Client Portfolio - Deep Contract Nesting",
    endpoint: "/api/users/clients",
    apiFunction: "getClientsUsers",
    difficulty: "Intermediate-Advanced",
    description: "Each portfolio has clients, each client has stakeholders and contracts, and each contract has renewals.",
    objective: "Master multi-level rendering with business-style formatting.",
    dataStructure: {
      type: "clientPortfolio[] -> contracts[] -> renewals[]",
      example: {
        clientPortfolio: [{ name: "Client A", contracts: [{ value: 65000, renewals: [{ year: 2026, status: "pending" }] }] }]
      }
    },
    requirements: [
      "Show client summary (name, industry, stakeholder)",
      "Render contract value and renewal timeline",
      "Compute portfolio total contract value per user",
      "Use status chips for renewal states"
    ],
    muiComponents: ["Card", "Accordion", "List", "Chip", "Typography", "Divider"],
    hints: [
      "Portfolio total uses nested reduce",
      "Renewal state is perfect for color mapping",
      "Keep UI grouped per client"
    ],
    expectedResult: "Portfolio cards with client-level and contract-level drilldowns"
  },
  {
    id: 8,
    title: "Task 8: Compensation Explorer - Mixed Financial Data",
    endpoint: "/api/users/finance",
    apiFunction: "getFinanceUsers",
    difficulty: "Advanced-Intermediate",
    description: "Financial data mixes base salary, bonuses, deductions, and reimbursement entries.",
    objective: "Normalize and present complex numeric structures with summaries.",
    dataStructure: {
      type: "compensation object with arrays and nested objects",
      example: {
        compensation: {
          base: 65000,
          bonuses: [{ type: "Performance", amount: 3200 }],
          deductions: { tax: { federal: 18 }, benefits: [{ monthly: 220 }] }
        }
      }
    },
    requirements: [
      "Display all compensation sections in clear cards/tables",
      "Calculate annualized benefits and total bonuses",
      "Summarize reimbursement totals by category",
      "Format currency values consistently"
    ],
    muiComponents: ["Card", "Grid", "Table", "Typography", "Divider", "Paper"],
    hints: [
      "Use helper functions for currency formatting",
      "Monthly values may need x12 for annual view",
      "Use small utility functions to reduce JSX noise"
    ],
    expectedResult: "Financial dashboard-style cards with accurate totals"
  },
  {
    id: 9,
    title: "Task 9: Operations Map - Region to Inventory Hierarchy",
    endpoint: "/api/users/operations",
    apiFunction: "getOperationsUsers",
    difficulty: "Advanced-Intermediate",
    description: "Operations include regions, warehouses, sections, and inventory arrays.",
    objective: "Render a four-level hierarchy while preserving readability.",
    dataStructure: {
      type: "regionalOperations[] -> warehouses[] -> sections[] -> inventory[]",
      example: {
        regionalOperations: [{ region: "North", warehouses: [{ sections: [{ inventory: [{ sku: "SKU-10", quantity: 25 }] }] }] }]
      }
    },
    requirements: [
      "Render hierarchy with collapsible UI",
      "Show section utilization and capacity",
      "Compute total inventory quantity per warehouse",
      "Highlight low/high utilization sections"
    ],
    muiComponents: ["Card", "Accordion", "Chip", "List", "Typography", "LinearProgress"],
    hints: [
      "Nested reduce helps compute warehouse totals",
      "Use accordions per region and warehouse",
      "Show utilization visually for quick scanning"
    ],
    expectedResult: "Hierarchical operations view with derived inventory totals"
  },
  {
    id: 10,
    title: "Task 10: Strategy Workspace - Phased Deliverables",
    endpoint: "/api/users/strategy",
    apiFunction: "getStrategyUsers",
    difficulty: "Advanced",
    description: "Final intermediate challenge: yearly objectives with initiatives, phases, deliverables, dependencies, and risk register.",
    objective: "Combine deep traversal, reusable components, and computed insights.",
    dataStructure: {
      type: "strategyProfile with yearlyObjectives[] and riskRegister[]",
      example: {
        strategyProfile: {
          yearlyObjectives: [{ initiatives: [{ phases: [{ deliverables: [{ dependencies: [{ team: "QA" }] }] }] }] }],
          riskRegister: [{ risk: "Timeline slippage", severity: "High" }]
        }
      }
    },
    requirements: [
      "Split UI into reusable sections (Objective, Initiative, Phase, Deliverable)",
      "Render dependencies and tech stack for each deliverable",
      "Display risk register with severity styling",
      "Compute progress summary across phases per objective"
    ],
    muiComponents: ["Card", "Tabs", "Accordion", "Chip", "Typography", "Alert", "Grid"],
    hints: [
      "Break down rendering into child components early",
      "Phase progress can be averaged per objective",
      "Risk register is a separate section, not nested in initiatives"
    ],
    expectedResult: "A polished strategy dashboard demonstrating strong intermediate API integration skills"
  }
];

