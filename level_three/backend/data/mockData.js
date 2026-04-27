// Level three mock data generators (advanced response-shape progression)

const names = [
  'John Doe',
  'Jane Smith',
  'Bob Johnson',
  'Alice Williams',
  'Charlie Brown',
  'Diana Prince',
  'Ethan Hunt',
  'Fiona Green',
  'George Lucas',
  'Hannah Montana',
];

const emails = [
  'john@example.com',
  'jane@example.com',
  'bob@example.com',
  'alice@example.com',
  'charlie@example.com',
  'diana@example.com',
  'ethan@example.com',
  'fiona@example.com',
  'george@example.com',
  'hannah@example.com',
];

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
];

const countries = [
  'USA',
  'Canada',
  'UK',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'Brazil',
  'India',
  'China',
];

const themes = [
  'Midnight',
  'Aurora',
  'Studio',
  'Minimal',
  'Glass',
  'Neon',
];

const statuses = ['Planned', 'In Progress', 'At Risk', 'Complete'];
const priorities = ['Low', 'Medium', 'High', 'Critical'];
const channels = ['email', 'push', 'sms', 'in-app'];

function rotateValues(values, startIndex, count) {
  return Array.from({ length: count }, (_, index) => values[(startIndex + index) % values.length]);
}

function generateProfileInsights() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    profile: {
      title: ['Lead Analyst', 'Platform Engineer', 'Product Specialist'][index % 3],
      bio: `Profile summary for ${name}`,
      location: {
        city: cities[index],
        country: countries[index % countries.length],
      },
      preferences: {
        theme: themes[index % themes.length],
        language: ['English', 'French', 'Spanish'][index % 3],
        notifications: {
          email: true,
          sms: index % 2 === 0,
          push: true,
        },
      },
      metrics: {
        logins: 14 + index * 3,
        sessions: 28 + index * 2,
        projectsCompleted: 4 + index,
      },
    },
    devices: [
      {
        type: 'Laptop',
        os: ['macOS', 'Windows', 'Linux'][index % 3],
        lastSeen: `2026-04-${String(10 + index).padStart(2, '0')}`,
      },
      {
        type: 'Mobile',
        os: ['iOS', 'Android'][index % 2],
        lastSeen: `2026-04-${String(20 + index).padStart(2, '0')}`,
      },
    ],
    badges: rotateValues(['Early Adopter', 'Mentor', 'Reviewer', 'Contributor'], index, 3),
    activity: [
      {
        date: `2026-04-${String(1 + index).padStart(2, '0')}`,
        action: 'Logged in',
        meta: {
          source: ['web', 'mobile', 'tablet'][index % 3],
          durationMinutes: 12 + index,
        },
      },
      {
        date: `2026-04-${String(8 + index).padStart(2, '0')}`,
        action: 'Updated profile',
        meta: {
          changedFields: ['theme', 'language'],
          completion: 80 + index,
        },
      },
    ],
  }));
}

function generateCampaignInsights() {
  return names.map((name, index) => ({
    id: index + 1,
    owner: name,
    email: emails[index],
    campaign: {
      name: `Campaign ${String.fromCharCode(65 + (index % 5))}`,
      budget: 50000 + index * 7500,
      audience: {
        region: cities[index],
        ageBands: ['18-24', '25-34', '35-44'].slice(0, 2 + (index % 2)),
      },
      channels: channels.map((channel, channelIndex) => ({
        channel,
        spend: 1500 + channelIndex * 500 + index * 120,
        status: statuses[(index + channelIndex) % statuses.length],
      })),
      stages: [
        {
          name: 'Discovery',
          tasks: [
            { label: 'Research', owner: 'Strategy', done: true },
            { label: 'Brief', owner: 'Marketing', done: index % 2 === 0 },
          ],
        },
        {
          name: 'Launch',
          tasks: [
            { label: 'Creative', owner: 'Design', done: index % 3 === 0 },
            { label: 'Distribution', owner: 'Ops', done: false },
          ],
        },
      ],
      performance: {
        reach: 1200 + index * 180,
        conversionRate: (2.8 + index * 0.25).toFixed(2),
        engagement: (68 + index).toFixed(0),
      },
    },
  }));
}

function generateWarehouseInsights() {
  return names.map((name, index) => ({
    id: index + 1,
    owner: name,
    warehouse: {
      code: `WH-${index + 1}`,
      region: {
        city: cities[index],
        country: countries[index % countries.length],
      },
      summary: {
        capacity: 1000 + index * 120,
        utilization: 48 + index * 4,
        openOrders: 11 + index,
      },
      zones: [
        {
          name: 'Inbound',
          bins: [
            { sku: `SKU-${index + 10}`, quantity: 16 + index, lowStock: index % 3 === 0 },
            { sku: `SKU-${index + 20}`, quantity: 12 + index, lowStock: index % 4 === 0 },
          ],
        },
        {
          name: 'Outbound',
          bins: [
            { sku: `SKU-${index + 30}`, quantity: 24 + index, lowStock: false },
            { sku: `SKU-${index + 40}`, quantity: 8 + index, lowStock: index % 2 === 0 },
          ],
        },
      ],
      alerts: [
        {
          type: 'Temperature',
          severity: priorities[index % priorities.length],
          message: `Temperature variance detected for ${name}`,
        },
      ],
    },
  }));
}

function generateKnowledgeInsights() {
  return names.map((name, index) => ({
    id: index + 1,
    editor: name,
    knowledgeBase: {
      article: {
        id: `ART-${index + 1}`,
        title: `Working with response shape ${index + 1}`,
        summary: `A guide for rendering advanced API payloads for ${name}.`,
        sections: [
          {
            heading: 'What changed',
            paragraphs: [
              'This section explains the response shape.',
              'It combines text blocks, lists, and callouts.',
            ],
            callouts: [
              { label: 'Tip', value: 'Start with a defensive renderer.' },
            ],
          },
          {
            heading: 'How to render it',
            paragraphs: [
              'Split the layout into reusable UI sections.',
              'Use nested maps for any embedded arrays.',
            ],
            callouts: [
              { label: 'Reminder', value: 'Fallback UI matters for missing data.' },
            ],
          },
        ],
        references: [
          { title: 'Design notes', url: 'https://example.com/design-notes' },
          { title: 'API contract', url: 'https://example.com/api-contract' },
        ],
        assets: {
          images: [`image-${index + 1}.png`, `diagram-${index + 1}.png`],
          files: [`spec-${index + 1}.pdf`],
        },
      },
      tags: rotateValues(['docs', 'ux', 'api', 'training', 'patterns'], index, 4),
    },
  }));
}

function generateRiskInsights() {
  return names.map((name, index) => ({
    id: index + 1,
    owner: name,
    riskRegister: {
      scorecard: {
        likelihood: ['Low', 'Medium', 'High'][index % 3],
        impact: ['Moderate', 'Major', 'Critical'][index % 3],
        exposure: 25 + index * 7,
      },
      risks: [
        {
          name: 'Integration drift',
          severity: statuses[(index + 1) % statuses.length],
          evidence: ['Contract changed', 'Schema mismatch'],
          mitigations: ['Add validation', 'Re-run sample calls'],
        },
        {
          name: 'UI regressions',
          severity: statuses[(index + 2) % statuses.length],
          evidence: ['Dense layout', 'Missing empty state'],
          mitigations: ['Create reusable sections', 'Add loading states'],
        },
      ],
      actionPlan: {
        nextReview: `2026-05-${String(1 + index).padStart(2, '0')}`,
        checkpoints: [
          { label: 'Schema review', owner: 'Backend' },
          { label: 'Component review', owner: 'Frontend' },
          { label: 'QA sign-off', owner: 'Testing' },
        ],
      },
    },
  }));
}

function generateMessagePayload() {
  return 'Level 3 text response: practice rendering a plain string from an API.';
}

function generateCountPayload() {
  return 128;
}

function generateFlagPayload() {
  return true;
}

function generateNullPayload() {
  return null;
}

function generateMatrixPayload() {
  return [
    ['stage', 'owner', 'status', 'priority'],
    ['discovery', 'Strategy', 'done', 'Medium'],
    ['build', 'Frontend', 'in-progress', 'High'],
    ['qa', 'Testing', 'blocked', 'Critical'],
  ];
}

module.exports = {
  generateProfileInsights,
  generateCampaignInsights,
  generateWarehouseInsights,
  generateKnowledgeInsights,
  generateRiskInsights,
  generateMessagePayload,
  generateCountPayload,
  generateFlagPayload,
  generateNullPayload,
  generateMatrixPayload,
};
