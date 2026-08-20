const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { swaggerSpec, swaggerUi } = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'POST, PATCH, and DELETE API Training Server is running!',
    docs: `http://localhost:${PORT}/api-docs`,
    endpoints: {
      overview: '/api',
      allRecords: '/api/records',
      collectionRecords: '/api/records/:collection',
      postPractice: [
        'POST /api/contacts',
        'POST /api/tasks',
        'POST /api/products',
        'POST /api/feedback',
        'POST /api/events',
        'POST /api/orders',
        'POST /api/projects',
        'POST /api/job-applications',
        'POST /api/support-tickets',
        'POST /api/course-enrollments',
      ],
      patchPractice: [
        'PATCH /api/tasks/:id',
        'PATCH /api/products/:id',
        'PATCH /api/events/:id',
        'PATCH /api/orders/:id',
        'PATCH /api/support-tickets/:id',
      ],
      deletePractice: [
        'DELETE /api/contacts/:id',
        'DELETE /api/tasks/:id',
        'DELETE /api/products/:id',
        'DELETE /api/events/:id',
        'DELETE /api/support-tickets/:id',
      ],
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
