// Level three task definitions (advanced response-shape progression)

export const tasks = [
  {
    id: 1,
    title: 'Task 1: Profile Composer - Deep Object Sections',
    endpoint: '/api/insights/profile',
    apiFunction: 'getProfileInsights',
    difficulty: 'Advanced',
    description:
      'Render a detailed profile object that combines preferences, metrics, devices, badges, and recent activity.',
    objective:
      'Break one advanced object into readable UI sections without losing any of the nested detail.',
    dataStructure: {
      type: 'Array of objects with nested profile, devices, badges, and activity arrays',
      example: {
        id: 1,
        profile: {
          title: 'Lead Analyst',
          location: { city: 'New York', country: 'USA' },
          preferences: { theme: 'Midnight', notifications: { email: true } },
          metrics: { logins: 14, sessions: 28, projectsCompleted: 4 },
        },
        devices: [{ type: 'Laptop', os: 'macOS' }],
      },
    },
    requirements: [
      'Group the UI into profile, devices, badges, and activity sections',
      'Display nested preferences and metrics clearly',
      'Use chips for badges and boolean values',
      'Show the latest activity with a small timeline or list',
      'Keep the card readable even when there are multiple nested arrays',
    ],
    muiComponents: [
      'Card',
      'CardContent',
      'Grid',
      'Stack',
      'Chip',
      'Divider',
      'List',
      'Typography',
    ],
    hints: [
      'Use reusable section headers so the card does not feel crowded',
      'Optional chaining is useful for nested access paths',
      'Activity rows can be rendered with a compact list layout',
    ],
    expectedResult:
      'A polished profile dashboard card with several structured sub-sections',
  },
  {
    id: 2,
    title: 'Task 2: Campaign Planner - Multi-Stage Nested Arrays',
    endpoint: '/api/insights/campaigns',
    apiFunction: 'getCampaignInsights',
    difficulty: 'Advanced',
    description:
      'Handle a campaign object that contains channels, stages, tasks, and performance metrics.',
    objective:
      'Practice rendering multiple nested arrays while keeping status and budget information easy to scan.',
    dataStructure: {
      type: 'Array of campaign objects with channels[], stages[].tasks[], and performance{}',
      example: {
        campaign: {
          name: 'Campaign A',
          budget: 50000,
          channels: [{ channel: 'email', spend: 1500, status: 'Planned' }],
          stages: [{ name: 'Discovery', tasks: [{ label: 'Research', done: true }] }],
          performance: { reach: 1200, conversionRate: '2.80' },
        },
      },
    },
    requirements: [
      'Render campaign name, budget, and performance summary at the top',
      'Map channels into compact cards or chips',
      'Render each stage with its nested tasks',
      'Show task completion state visually',
      'Highlight the overall campaign status in a strong visual treatment',
    ],
    muiComponents: [
      'Card',
      'CardContent',
      'Accordion',
      'Chip',
      'LinearProgress',
      'Stack',
      'Typography',
    ],
    hints: [
      'Use one map for channels, another for stages, and another for tasks',
      'Completion states are a good fit for chips or progress bars',
      'Keep budget and performance summary pinned at the top of each card',
    ],
    expectedResult:
      'Expandable campaign cards with stage-level and task-level detail',
  },
  {
    id: 3,
    title: 'Task 3: Warehouse Operations - Zone and Bin Hierarchy',
    endpoint: '/api/insights/warehouse',
    apiFunction: 'getWarehouseInsights',
    difficulty: 'Advanced',
    description:
      'Work with warehouse objects that contain regions, zones, bins, summary metrics, and alerts.',
    objective:
      'Render a business-style hierarchy where capacity and utilization are easy to compare.',
    dataStructure: {
      type: 'Array of warehouse objects with summary{}, zones[].bins[], and alerts[]',
      example: {
        warehouse: {
          code: 'WH-1',
          summary: { capacity: 1000, utilization: 48, openOrders: 11 },
          zones: [{ name: 'Inbound', bins: [{ sku: 'SKU-10', quantity: 16 }] }],
        },
      },
    },
    requirements: [
      'Display warehouse code, location, and summary metrics',
      'Render each zone separately and list the bins inside it',
      'Use a progress indicator or meter for utilization',
      'Surface alerts as a visible warning area',
      'Make low-stock bins stand out visually',
    ],
    muiComponents: [
      'Card',
      'CardContent',
      'LinearProgress',
      'Alert',
      'List',
      'Chip',
      'Divider',
    ],
    hints: [
      'A summary banner helps the user scan warehouse health quickly',
      'Low stock is a perfect candidate for conditional styling',
      'Avoid flattening the full hierarchy into a single long list',
    ],
    expectedResult:
      'A warehouse operations view with sections for summary, zones, bins, and alerts',
  },
  {
    id: 4,
    title: 'Task 4: Knowledge Base - Article Sections and References',
    endpoint: '/api/insights/knowledge',
    apiFunction: 'getKnowledgeInsights',
    difficulty: 'Advanced',
    description:
      'Display a document-like response that combines article sections, paragraphs, callouts, references, and assets.',
    objective:
      'Practice rendering content-centric objects that feel more like a knowledge article than a standard card.',
    dataStructure: {
      type: 'Array of objects with knowledgeBase.article.sections[], references[], and assets{}',
      example: {
        knowledgeBase: {
          article: {
            id: 'ART-1',
            title: 'Working with response shape 1',
            sections: [{ heading: 'What changed', paragraphs: ['This section explains the response shape.'] }],
            references: [{ title: 'Design notes', url: 'https://example.com/design-notes' }],
          },
        },
      },
    },
    requirements: [
      'Render the article title and summary like a document header',
      'Map each section into a reusable content block',
      'Show callouts or notes as chips or alerts',
      'Present references and assets in a compact secondary area',
      'Keep the layout editorial rather than dashboard-like',
    ],
    muiComponents: [
      'Card',
      'CardContent',
      'Paper',
      'Alert',
      'Chip',
      'List',
      'Typography',
    ],
    hints: [
      'Think of this UI as a reading layout, not just a data dump',
      'References can be displayed as a list of links or metadata rows',
      'Subsections help make a long response easier to scan',
    ],
    expectedResult:
      'A knowledge-base style reader with strong section hierarchy',
  },
  {
    id: 5,
    title: 'Task 5: Risk Register - Scorecards and Action Plans',
    endpoint: '/api/insights/risk',
    apiFunction: 'getRiskInsights',
    difficulty: 'Expert',
    description:
      'Build a risk view with scorecards, mitigation details, and action plan checkpoints.',
    objective:
      'Combine nested objects and arrays while giving the user a fast way to understand risk levels.',
    dataStructure: {
      type: 'Array of objects with riskRegister.scorecard{}, risks[], and actionPlan{}',
      example: {
        riskRegister: {
          scorecard: { likelihood: 'High', impact: 'Critical', exposure: 32 },
          risks: [{ name: 'Integration drift', severity: 'At Risk', mitigations: ['Add validation'] }],
          actionPlan: { nextReview: '2026-05-01', checkpoints: [{ label: 'Schema review' }] },
        },
      },
    },
    requirements: [
      'Summarize risk scorecard values at the top of the card',
      'Render each risk with evidence and mitigation bullets',
      'Show the action plan checkpoints in a clean list',
      'Use severity-based color cues',
      'Keep the UI compact enough for side-by-side comparison',
    ],
    muiComponents: [
      'Card',
      'CardContent',
      'Grid',
      'Chip',
      'Alert',
      'List',
      'Divider',
    ],
    hints: [
      'Severity chips make the risk state easy to scan',
      'Separate evidence from mitigation so the user sees both sides',
      'Scorecards are easier to read when they are grouped into a summary row',
    ],
    expectedResult:
      'A risk dashboard card with scorecard, risks, and action plan sections',
  },
  {
    id: 6,
    title: 'Task 6: Text Response - Plain String Payload',
    endpoint: '/api/payloads/message',
    apiFunction: 'getMessagePayload',
    difficulty: 'Intermediate',
    description:
      'The API returns a plain string instead of an object or array. Your UI must handle and present it gracefully.',
    objective:
      'Practice rendering top-level primitive responses without assuming the payload is always an object.',
    dataStructure: {
      type: 'Top-level string',
      example: 'Level 3 text response: practice rendering a plain string from an API.',
    },
    requirements: [
      'Fetch the string response and display it in a message panel',
      'Use clear typography and a status-style wrapper',
      'Avoid destructuring like the response is an object',
      'Add fallback UI if the string is empty',
    ],
    muiComponents: ['Alert', 'Card', 'CardContent', 'Typography', 'Stack'],
    hints: [
      'Axios will place the string in response.data',
      'This is a good place for a message banner or quote-style card',
      'Remember that not every API returns a list of items',
    ],
    expectedResult:
      'A prominent text banner that displays the returned message',
  },
  {
    id: 7,
    title: 'Task 7: Count Response - Numeric KPI Card',
    endpoint: '/api/payloads/count',
    apiFunction: 'getCountPayload',
    difficulty: 'Intermediate',
    description:
      'The endpoint returns a number. Build a KPI card that treats the value as a metric, not a record.',
    objective:
      'Show that APIs can return a single scalar value and that scalar values still deserve a polished UI.',
    dataStructure: {
      type: 'Top-level number',
      example: 128,
    },
    requirements: [
      'Display the number as a KPI or metric',
      'Format or accent the number so it stands out',
      'Add supporting copy that explains what the count means',
      'Handle unexpected non-number values with a safe fallback',
    ],
    muiComponents: ['Card', 'CardContent', 'Typography', 'Chip', 'Stack'],
    hints: [
      'Use large typography for the number itself',
      'You can pair the number with a small chip or subtitle',
      'This task is about scalar handling, not iteration',
    ],
    expectedResult:
      'A metric card that makes the numeric payload feel intentional',
  },
  {
    id: 8,
    title: 'Task 8: Flag Response - Boolean State Indicator',
    endpoint: '/api/payloads/flag',
    apiFunction: 'getFlagPayload',
    difficulty: 'Intermediate',
    description:
      'The API returns a boolean. Render it as an active/inactive state instead of just printing true or false.',
    objective:
      'Practice translating boolean data into a human-friendly status UI.',
    dataStructure: {
      type: 'Top-level boolean',
      example: true,
    },
    requirements: [
      'Display the boolean as an enabled/disabled style indicator',
      'Use a clear label so the meaning is obvious',
      'Differentiate true and false visually',
      'Provide a fallback if the payload is not actually boolean',
    ],
    muiComponents: ['Alert', 'Chip', 'Card', 'CardContent', 'Typography'],
    hints: [
      'Boolean UI works best when text and color work together',
      'A chip or alert can communicate state faster than raw text',
      'This is a useful pattern for feature flags and toggles',
    ],
    expectedResult:
      'A status panel that clearly shows the boolean response state',
  },
  {
    id: 9,
    title: 'Task 9: Empty Response - Null Handling and Fallback UI',
    endpoint: '/api/payloads/empty',
    apiFunction: 'getEmptyPayload',
    difficulty: 'Intermediate-Advanced',
    description:
      'The endpoint intentionally returns null so you can practice empty-state handling and graceful fallbacks.',
    objective:
      'Teach defensive rendering when the payload is empty, missing, or intentionally null.',
    dataStructure: {
      type: 'Top-level null payload',
      example: null,
    },
    requirements: [
      'Detect the null response and show an empty state',
      'Explain that the API returned no content instead of crashing',
      'Use helper text or an alert to guide the user',
      'Keep the layout structured even when there is no data',
    ],
    muiComponents: ['Alert', 'Card', 'CardContent', 'Typography', 'Box'],
    hints: [
      'Null is a valid value and should be handled explicitly',
      'This is a great place for a friendly empty-state message',
      'Do not try to map or destructure a null payload',
    ],
    expectedResult:
      'A polished empty state that makes the null payload feel intentional',
  },
  {
    id: 10,
    title: 'Task 10: Matrix Response - Table-Ready Array of Arrays',
    endpoint: '/api/payloads/matrix',
    apiFunction: 'getMatrixPayload',
    difficulty: 'Expert',
    description:
      'The final response is a matrix-style array of arrays. Build a table or grid that treats rows and headers correctly.',
    objective:
      'Handle a response shape that is neither a normal object nor a list of objects.',
    dataStructure: {
      type: 'Top-level array of arrays',
      example: [
        ['stage', 'owner', 'status', 'priority'],
        ['discovery', 'Strategy', 'done', 'Medium'],
        ['build', 'Frontend', 'in-progress', 'High'],
      ],
    },
    requirements: [
      'Detect the first row as the header row',
      'Render the remaining rows in a table or grid',
      'Style status and priority values clearly',
      'Handle variable row lengths safely',
      'Make the matrix easy to scan like a spreadsheet',
    ],
    muiComponents: [
      'Table',
      'TableHead',
      'TableBody',
      'TableRow',
      'TableCell',
      'Paper',
      'Chip',
    ],
    hints: [
      'This response is closer to CSV data than typical JSON objects',
      'Separate headers from data rows before rendering',
      'Consider using a helper function to format matrix rows',
    ],
    expectedResult:
      'A clean table view built from a raw matrix response',
  },
];
