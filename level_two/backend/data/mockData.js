// Level two mock data generators (intermediate progression)

const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown', 'Diana Prince', 'Ethan Hunt', 'Fiona Green', 'George Lucas', 'Hannah Montana'];
const emails = ['john@example.com', 'jane@example.com', 'bob@example.com', 'alice@example.com', 'charlie@example.com', 'diana@example.com', 'ethan@example.com', 'fiona@example.com', 'george@example.com', 'hannah@example.com'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'Brazil', 'India', 'China'];
const companies = ['Tech Corp', 'Innovate Inc', 'Digital Solutions', 'Cloud Systems', 'Data Analytics', 'Web Services', 'Software Labs', 'Tech Innovations'];
const departments = ['Engineering', 'Product', 'Design', 'Operations', 'QA', 'DevOps'];
const priorities = ['Low', 'Medium', 'High', 'Critical'];
const techStacks = ['React', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'TypeScript'];

function generateOrgUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    organization: {
      company: companies[index % companies.length],
      headquarters: {
        city: cities[index % cities.length],
        country: countries[index % countries.length]
      },
      manager: {
        name: `${name.split(' ')[0]} Manager`,
        contact: {
          email: `manager.${index + 1}@company.com`,
          phone: `+1-555-${String(index + 3000).padStart(4, '0')}`
        }
      },
      departments: departments.slice(0, 3).map((dept, deptIndex) => ({
        name: dept,
        budget: 100000 + (index * 15000) + (deptIndex * 10000),
        isHiring: (index + deptIndex) % 2 === 0
      }))
    }
  }));
}

function generateProjectsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    projects: [0, 1].map((projectOffset) => ({
      projectId: `PRJ-${index + 1}-${projectOffset + 1}`,
      name: `Project ${String.fromCharCode(65 + projectOffset)} ${index + 1}`,
      status: ['Planning', 'In Progress', 'Review', 'Completed'][(index + projectOffset) % 4],
      milestones: [0, 1, 2].map((mileOffset) => ({
        title: `Milestone ${mileOffset + 1}`,
        dueDate: `2026-${String((mileOffset + 4) % 12 + 1).padStart(2, '0')}-15`,
        completion: 20 + (mileOffset * 30),
        blockers: mileOffset % 2 === 0 ? ['Dependency delay'] : []
      }))
    }))
  }));
}

function generateContactsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    communication: {
      preferredChannel: ['email', 'slack', 'phone'][index % 3],
      channels: {
        email: {
          work: `work.${emails[index]}`,
          personal: emails[index]
        },
        phone: {
          mobile: `+1-555-${String(index + 1100).padStart(4, '0')}`,
          office: `+1-555-${String(index + 2100).padStart(4, '0')}`
        },
        slack: {
          username: `${name.toLowerCase().replace(' ', '.')}.${index + 1}`,
          workspace: 'training-team'
        }
      },
      emergencyContacts: [0, 1].map((contactOffset) => ({
        relation: ['Parent', 'Sibling', 'Spouse', 'Friend'][(index + contactOffset) % 4],
        name: `${name.split(' ')[0]} Contact ${contactOffset + 1}`,
        methods: [
          { type: 'phone', value: `+1-555-${String(index + 4000 + contactOffset).padStart(4, '0')}` },
          { type: 'email', value: `emergency${contactOffset + 1}.${emails[index]}` }
        ]
      }))
    }
  }));
}

function generateScheduleUsers() {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    weeklySchedule: days.reduce((acc, day, dayIndex) => {
      acc[day] = [0, 1].map((shiftOffset) => ({
        slot: shiftOffset === 0 ? 'morning' : 'afternoon',
        start: shiftOffset === 0 ? '09:00' : '13:00',
        end: shiftOffset === 0 ? '12:00' : '17:00',
        tasks: [0, 1].map((taskOffset) => ({
          title: `${day} task ${taskOffset + 1}`,
          priority: priorities[(index + dayIndex + taskOffset) % priorities.length],
          tags: ['api', 'ui', 'qa', 'docs'].slice(taskOffset, taskOffset + 2)
        }))
      }));
      return acc;
    }, {})
  }));
}

function generateAssetsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    assets: [0, 1, 2].map((assetOffset) => ({
      assetId: `AST-${index + 1}-${assetOffset + 10}`,
      type: ['Laptop', 'Monitor', 'Phone'][assetOffset % 3],
      serialNumber: `SN-${index + 100}-${assetOffset + 1}`,
      warranty: {
        provider: 'Warranty Corp',
        expiresOn: `202${(index + assetOffset) % 4 + 6}-06-30`
      },
      maintenance: {
        lastService: `2026-${String(assetOffset + 1).padStart(2, '0')}-10`,
        history: [0, 1].map((serviceOffset) => ({
          date: `2025-${String(serviceOffset + assetOffset + 1).padStart(2, '0')}-05`,
          notes: `Maintenance note ${serviceOffset + 1}`,
          cost: 50 + (serviceOffset * 30)
        }))
      }
    }))
  }));
}

function generateReviewsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    performance: {
      role: ['Engineer', 'Senior Engineer', 'Lead Engineer'][index % 3],
      quarterlyReviews: ['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, quarterIndex) => ({
        quarter,
        metrics: {
          quality: 70 + ((index + quarterIndex) % 20),
          delivery: 68 + ((index + quarterIndex * 2) % 25),
          collaboration: 75 + ((index + quarterIndex) % 15)
        },
        goals: [0, 1].map((goalOffset) => ({
          title: `Goal ${goalOffset + 1} - ${quarter}`,
          progress: 40 + (goalOffset * 25) + (quarterIndex * 5),
          risks: goalOffset % 2 === 0 ? ['Timeline risk'] : []
        }))
      }))
    }
  }));
}

function generateClientsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    clientPortfolio: [0, 1].map((clientOffset) => ({
      clientId: `CL-${index + 1}-${clientOffset + 1}`,
      name: `Client ${String.fromCharCode(65 + clientOffset)} ${index + 1}`,
      industry: ['FinTech', 'HealthTech', 'Retail', 'Logistics'][(index + clientOffset) % 4],
      stakeholders: [
        {
          role: 'Primary',
          contact: {
            name: `Stakeholder ${index + 1}${clientOffset}`,
            email: `stakeholder.${index + 1}${clientOffset}@client.com`
          }
        }
      ],
      contracts: [0, 1].map((contractOffset) => ({
        code: `CNT-${index + 1}-${clientOffset + 1}-${contractOffset + 1}`,
        value: 50000 + (contractOffset * 20000) + (index * 5000),
        renewals: [
          { year: 2025, status: contractOffset % 2 === 0 ? 'renewed' : 'pending' },
          { year: 2026, status: contractOffset % 2 === 0 ? 'pending' : 'planned' }
        ]
      }))
    }))
  }));
}

function generateFinanceUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    compensation: {
      base: 60000 + (index * 4500),
      currency: 'USD',
      bonuses: [
        { type: 'Performance', amount: 3000 + (index * 200), paidOn: '2026-03-31' },
        { type: 'Retention', amount: 1500 + (index * 100), paidOn: '2026-09-30' }
      ],
      deductions: {
        tax: { federal: 15 + (index % 5), state: 5 + (index % 3) },
        benefits: [
          { name: 'Health Insurance', monthly: 180 + (index % 4) * 15 },
          { name: 'Retirement', monthly: 220 + (index % 3) * 20 }
        ]
      },
      reimbursements: [
        { category: 'Travel', entries: [{ month: 'Jan', amount: 120 }, { month: 'Feb', amount: 95 }] },
        { category: 'Learning', entries: [{ month: 'Mar', amount: 300 }] }
      ]
    }
  }));
}

function generateOperationsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    regionalOperations: [0, 1].map((regionOffset) => ({
      region: ['North', 'South', 'East', 'West'][(index + regionOffset) % 4],
      manager: {
        id: `MGR-${index + regionOffset + 1}`,
        name: `Ops Manager ${index + regionOffset + 1}`
      },
      warehouses: [0, 1].map((warehouseOffset) => ({
        warehouseId: `WH-${index + 1}-${regionOffset + 1}-${warehouseOffset + 1}`,
        address: {
          city: cities[(index + warehouseOffset) % cities.length],
          country: countries[(index + regionOffset) % countries.length]
        },
        sections: [0, 1, 2].map((sectionOffset) => ({
          code: `S-${sectionOffset + 1}`,
          capacity: 100 + (sectionOffset * 50),
          utilization: 45 + ((index + sectionOffset + warehouseOffset) % 50),
          inventory: [
            { sku: `SKU-${index + sectionOffset + 10}`, quantity: 20 + (sectionOffset * 5) },
            { sku: `SKU-${index + sectionOffset + 20}`, quantity: 15 + (warehouseOffset * 3) }
          ]
        }))
      }))
    }))
  }));
}

function generateStrategyUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    email: emails[index],
    strategyProfile: {
      yearlyObjectives: [0, 1].map((objectiveOffset) => ({
        objective: `Objective ${objectiveOffset + 1}`,
        owner: {
          id: `OWN-${index + objectiveOffset + 1}`,
          name: `${name.split(' ')[0]} Lead ${objectiveOffset + 1}`
        },
        initiatives: [0, 1].map((initiativeOffset) => ({
          code: `INI-${index + 1}-${initiativeOffset + 1}`,
          theme: ['Scalability', 'Reliability', 'Automation'][initiativeOffset % 3],
          phases: [0, 1, 2].map((phaseOffset) => ({
            phase: ['Discovery', 'Implementation', 'Validation'][phaseOffset],
            progress: 25 + (phaseOffset * 25),
            deliverables: [0, 1].map((deliverableOffset) => ({
              title: `Deliverable ${deliverableOffset + 1}`,
              dependencies: [
                { team: 'Platform', readiness: ['blocked', 'ready', 'in-progress'][(phaseOffset + deliverableOffset) % 3] },
                { team: 'QA', readiness: ['ready', 'in-progress', 'blocked'][(phaseOffset + 1) % 3] }
              ],
              techStack: techStacks.slice(phaseOffset, phaseOffset + 3)
            }))
          }))
        }))
      })),
      riskRegister: [
        { risk: 'Timeline slippage', severity: priorities[(index + 1) % priorities.length], mitigation: 'Phase gates and checkpoints' },
        { risk: 'Integration issues', severity: priorities[(index + 2) % priorities.length], mitigation: 'Contract tests' }
      ]
    }
  }));
}

module.exports = {
  generateOrgUsers,
  generateProjectsUsers,
  generateContactsUsers,
  generateScheduleUsers,
  generateAssetsUsers,
  generateReviewsUsers,
  generateClientsUsers,
  generateFinanceUsers,
  generateOperationsUsers,
  generateStrategyUsers
};

