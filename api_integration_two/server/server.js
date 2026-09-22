const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { swaggerSpec, swaggerUi } = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API Integration Two CRUD Training Server is running!',
    docs: `http://localhost:${PORT}/api-docs`,
    resources: {
      products: '/api/products',
      todos: '/api/todos',
      projects: '/api/projects',
      orders: '/api/orders',
      tickets: '/api/tickets',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
