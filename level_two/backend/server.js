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
      org: 'http://localhost:3000/api/users/org',
      projects: 'http://localhost:3000/api/users/projects',
      contacts: 'http://localhost:3000/api/users/contacts',
      schedule: 'http://localhost:3000/api/users/schedule',
      assets: 'http://localhost:3000/api/users/assets',
      reviews: 'http://localhost:3000/api/users/reviews',
      clients: 'http://localhost:3000/api/users/clients',
      finance: 'http://localhost:3000/api/users/finance',
      operations: 'http://localhost:3000/api/users/operations',
      strategy: 'http://localhost:3000/api/users/strategy'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

