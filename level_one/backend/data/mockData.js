// Mock data generators for progressive complexity training

const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown', 'Diana Prince', 'Ethan Hunt', 'Fiona Green', 'George Lucas', 'Hannah Montana'];
const emails = ['john@example.com', 'jane@example.com', 'bob@example.com', 'alice@example.com', 'charlie@example.com', 'diana@example.com', 'ethan@example.com', 'fiona@example.com', 'george@example.com', 'hannah@example.com'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'Brazil', 'India', 'China'];
const hobbies = ['Reading', 'Swimming', 'Cooking', 'Gaming', 'Photography', 'Traveling', 'Music', 'Dancing', 'Hiking', 'Cycling', 'Painting', 'Yoga'];
const skills = ['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'];
const companies = ['Tech Corp', 'Innovate Inc', 'Digital Solutions', 'Cloud Systems', 'Data Analytics', 'Web Services', 'Software Labs', 'Tech Innovations'];
const schools = ['Harvard University', 'MIT', 'Stanford University', 'UC Berkeley', 'Yale University', 'Princeton University', 'Columbia University', 'Cornell University'];

// 1. Simple Objects - Flat structure
function generateSimpleUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    profile: `Profile of ${name}`,
    avatar: `https://i.pravatar.cc/150?img=${index + 1}`
  }));
}

// 2. Single Level Nesting - One nested object
function generateBasicUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    address: {
      street: `${index + 100} Main Street`,
      city: cities[index],
      country: countries[index % countries.length]
    },
    contact: {
      phone: `+1-555-${String(index + 1000).padStart(4, '0')}`,
      email: emails[index]
    }
  }));
}

// 3. Multiple Nested Objects
function generateMediumUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    address: {
      street: `${index + 100} Main Street`,
      city: cities[index],
      country: countries[index % countries.length]
    },
    contact: {
      phone: `+1-555-${String(index + 1000).padStart(4, '0')}`,
      email: emails[index]
    },
    profile: {
      bio: `Bio of ${name}`,
      age: 25 + index,
      joinDate: `202${index % 4}-0${(index % 9) + 1}-${String((index % 28) + 1).padStart(2, '0')}`
    }
  }));
}

// 4. Nested Arrays - Simple string arrays
function generateHobbiesUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    profile: `Profile of ${name}`,
    hobbies: hobbies.slice(index, index + 3).concat(hobbies.slice(0, Math.max(0, 3 - (hobbies.length - index))))
  }));
}

// 5. Nested Objects with Arrays - Array of objects
function generateSkillsUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    profile: `Profile of ${name}`,
    skills: skills.slice(index % 5, (index % 5) + 3).map((skill, skillIndex) => ({
      name: skill,
      level: ['Beginner', 'Intermediate', 'Advanced'][skillIndex % 3],
      years: skillIndex + 1
    }))
  }));
}

// 6. Deep Nesting Level 1 - Nested object within nested object
function generateCompanyUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    company: {
      name: companies[index % companies.length],
      address: {
        street: `${index + 500} Business Ave`,
        city: cities[index],
        zipCode: `${10000 + index}`
      },
      employees: (index + 1) * 50,
      founded: 2000 + (index % 20)
    }
  }));
}

// 7. Deep Nesting Level 2 - Array with nested objects containing nested objects
function generateEducationUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    education: [
      {
        school: schools[index % schools.length],
        degree: 'Bachelor of Science',
        year: 2015 + (index % 5),
        details: {
          gpa: (3.5 + (index % 5) * 0.1).toFixed(2),
          honors: index % 3 === 0 ? 'Summa Cum Laude' : index % 3 === 1 ? 'Magna Cum Laude' : null,
          major: 'Computer Science'
        }
      },
      {
        school: schools[(index + 1) % schools.length],
        degree: 'Master of Science',
        year: 2019 + (index % 3),
        details: {
          gpa: (3.7 + (index % 3) * 0.1).toFixed(2),
          honors: index % 2 === 0 ? 'With Distinction' : null,
          major: 'Software Engineering'
        }
      }
    ]
  }));
}

// 8. Complex Mixed - Multiple nested objects and arrays
function generateFullUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    address: {
      street: `${index + 100} Main Street`,
      city: cities[index],
      country: countries[index % countries.length],
      zipCode: `${10000 + index}`
    },
    hobbies: hobbies.slice(index % 8, (index % 8) + 2),
    skills: skills.slice(index % 5, (index % 5) + 3).map((skill, skillIndex) => ({
      name: skill,
      level: ['Beginner', 'Intermediate', 'Advanced'][skillIndex % 3]
    })),
    education: [
      {
        school: schools[index % schools.length],
        degree: 'Bachelor',
        year: 2015 + (index % 5)
      }
    ]
  }));
}

// 9. Very Deep Nesting - Multiple levels deep
function generateAdvancedUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    workHistory: [
      {
        company: {
          name: companies[index % companies.length],
          location: {
            city: cities[index],
            country: countries[index % countries.length]
          }
        },
        position: 'Software Engineer',
        duration: `${2018 + (index % 3)} - ${2020 + (index % 3)}`,
        projects: [
          {
            name: `Project Alpha ${index + 1}`,
            tech: ['React', 'Node.js', 'MongoDB'],
            description: 'Main project description'
          },
          {
            name: `Project Beta ${index + 1}`,
            tech: ['Vue.js', 'Python', 'PostgreSQL'],
            description: 'Secondary project description'
          }
        ]
      },
      {
        company: {
          name: companies[(index + 1) % companies.length],
          location: {
            city: cities[(index + 1) % cities.length],
            country: countries[(index + 1) % countries.length]
          }
        },
        position: 'Senior Developer',
        duration: `${2020 + (index % 3)} - Present`,
        projects: [
          {
            name: `Project Gamma ${index + 1}`,
            tech: ['TypeScript', 'Express', 'MySQL'],
            description: 'Current project description'
          }
        ]
      }
    ]
  }));
}

// 10. Maximum Complexity - Deepest nesting with multiple levels
function generateComplexUsers() {
  return names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: emails[index],
    profile: {
      bio: `Detailed bio of ${name}`,
      age: 25 + index,
      joinDate: `202${index % 4}-0${(index % 9) + 1}-${String((index % 28) + 1).padStart(2, '0')}`,
      avatar: `https://i.pravatar.cc/150?img=${index + 1}`
    },
    address: {
      street: `${index + 100} Main Street`,
      city: cities[index],
      state: 'State',
      country: countries[index % countries.length],
      zipCode: `${10000 + index}`,
      coordinates: {
        lat: 40.7128 + (index * 0.1),
        lng: -74.0060 + (index * 0.1)
      }
    },
    contact: {
      phone: {
        mobile: `+1-555-${String(index + 1000).padStart(4, '0')}`,
        work: `+1-555-${String(index + 2000).padStart(4, '0')}`
      },
      email: {
        personal: emails[index],
        work: `work.${emails[index]}`
      }
    },
    social: {
      linkedin: `linkedin.com/in/${name.toLowerCase().replace(' ', '-')}`,
      github: `github.com/${name.toLowerCase().replace(' ', '-')}`,
      twitter: `@${name.toLowerCase().replace(' ', '')}`
    },
    workHistory: [
      {
        company: {
          name: companies[index % companies.length],
          location: {
            city: cities[index],
            country: countries[index % countries.length],
            address: {
              street: `${index + 500} Business Ave`,
              zipCode: `${20000 + index}`
            }
          }
        },
        position: 'Software Engineer',
        duration: {
          start: `2018-0${(index % 9) + 1}`,
          end: `2020-0${(index % 9) + 1}`,
          months: 24
        },
        projects: [
          {
            name: `Project Alpha ${index + 1}`,
            tech: ['React', 'Node.js', 'MongoDB'],
            team: {
              size: 5 + index,
              roles: ['Developer', 'Designer', 'PM']
            },
            achievements: ['Launched successfully', '1000+ users']
          }
        ]
      }
    ],
    education: [
      {
        school: {
          name: schools[index % schools.length],
          location: {
            city: cities[index],
            country: countries[index % countries.length]
          }
        },
        degree: 'Bachelor of Science',
        year: 2015 + (index % 5),
        details: {
          gpa: (3.5 + (index % 5) * 0.1).toFixed(2),
          honors: index % 3 === 0 ? 'Summa Cum Laude' : null,
          major: 'Computer Science',
          courses: ['Data Structures', 'Algorithms', 'Database Systems']
        }
      }
    ],
    hobbies: hobbies.slice(index % 8, (index % 8) + 3),
    skills: skills.slice(index % 5, (index % 5) + 4).map((skill, skillIndex) => ({
      name: skill,
      level: ['Beginner', 'Intermediate', 'Advanced', 'Expert'][skillIndex % 4],
      years: skillIndex + 1,
      certifications: skillIndex % 2 === 0 ? [`${skill} Certified`] : []
    }))
  }));
}

module.exports = {
  generateSimpleUsers,
  generateBasicUsers,
  generateMediumUsers,
  generateHobbiesUsers,
  generateSkillsUsers,
  generateCompanyUsers,
  generateEducationUsers,
  generateFullUsers,
  generateAdvancedUsers,
  generateComplexUsers
};

