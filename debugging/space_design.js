// Space Design

// We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

  // Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team[ceo] = 'Kim';
team[scrumMaster] = 'Alice';
team[developer] = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team[ceo]}`);
console.log(`Scrum master: ${company.team[scrumMaster]}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000  }`)

// When the scrumMaster, developer and ceo objects are used as keys in the team object, they are coerced to strings of the form '[object Object]'. Since each key is coerced to the same string, all 3 property assignments are actually assigning/reassigning the same property. So first team['[object Object]'] is set to 'Kim', then it's set to 'Alice' and finally it is set to undefined.

// Later when we go to interpolate values into our template literals, we are again referencing the same ['object Object'] key in the team object which is still set to undefined.
