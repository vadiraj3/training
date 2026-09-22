const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Integration Two - CRUD Training',
      version: '1.0.0',
      description:
        'Full CRUD practice APIs for products, todos, projects, orders, and support tickets. Each resource includes at least one nested array field.',
      contact: {
        name: 'Training API',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerSpec,
  swaggerUi,
};
