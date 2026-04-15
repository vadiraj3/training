const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { swaggerSpec, swaggerUi } = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'API Training Server is running!',
    endpoints: {
      swagger: 'http://localhost:3000/api-docs',
      simple: 'http://localhost:3000/api/users/simple',
      basic: 'http://localhost:3000/api/users/basic',
      medium: 'http://localhost:3000/api/users/medium',
      hobbies: 'http://localhost:3000/api/users/hobbies',
      skills: 'http://localhost:3000/api/users/skills',
      company: 'http://localhost:3000/api/users/company',
      education: 'http://localhost:3000/api/users/education',
      full: 'http://localhost:3000/api/users/full',
      advanced: 'http://localhost:3000/api/users/advanced',
      complex: 'http://localhost:3000/api/users/complex'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

