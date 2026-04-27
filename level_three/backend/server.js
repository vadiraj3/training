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
      profile: 'http://localhost:3000/api/insights/profile',
      campaigns: 'http://localhost:3000/api/insights/campaigns',
      warehouse: 'http://localhost:3000/api/insights/warehouse',
      knowledge: 'http://localhost:3000/api/insights/knowledge',
      risk: 'http://localhost:3000/api/insights/risk',
      message: 'http://localhost:3000/api/payloads/message',
      count: 'http://localhost:3000/api/payloads/count',
      flag: 'http://localhost:3000/api/payloads/flag',
      empty: 'http://localhost:3000/api/payloads/empty',
      matrix: 'http://localhost:3000/api/payloads/matrix'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

