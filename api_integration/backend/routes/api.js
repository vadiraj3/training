const express = require('express');
const {
  readStore,
  getCollection,
  createRecord,
  updateRecord,
  deleteRecord,
} = require('../data/store');

const router = express.Router();

const collectionLabels = {
  contacts: 'Contact',
  tasks: 'Task',
  products: 'Product',
  feedback: 'Feedback',
  events: 'Event',
  orders: 'Order',
  projects: 'Project',
  jobApplications: 'Job application',
  supportTickets: 'Support ticket',
  courseEnrollments: 'Course enrollment',
};

const postExercises = [
  {
    method: 'POST',
    endpoint: '/api/contacts',
    difficulty: 'easy',
    collection: 'contacts',
    requiredFields: ['name', 'email'],
  },
  {
    method: 'POST',
    endpoint: '/api/tasks',
    difficulty: 'easy',
    collection: 'tasks',
    requiredFields: ['title', 'dueDate'],
  },
  {
    method: 'POST',
    endpoint: '/api/products',
    difficulty: 'easy-medium',
    collection: 'products',
    requiredFields: ['name', 'price', 'inStock'],
  },
  {
    method: 'POST',
    endpoint: '/api/feedback',
    difficulty: 'easy-medium',
    collection: 'feedback',
    requiredFields: ['rating', 'comment'],
  },
  {
    method: 'POST',
    endpoint: '/api/events',
    difficulty: 'medium',
    collection: 'events',
    requiredFields: ['title', 'date', 'attendees'],
  },
  {
    method: 'POST',
    endpoint: '/api/orders',
    difficulty: 'medium',
    collection: 'orders',
    requiredFields: ['customer', 'items', 'shippingAddress'],
  },
  {
    method: 'POST',
    endpoint: '/api/projects',
    difficulty: 'medium',
    collection: 'projects',
    requiredFields: ['name', 'owner', 'milestones'],
  },
  {
    method: 'POST',
    endpoint: '/api/job-applications',
    difficulty: 'medium-hard',
    collection: 'jobApplications',
    requiredFields: ['candidate', 'role', 'skills'],
  },
  {
    method: 'POST',
    endpoint: '/api/support-tickets',
    difficulty: 'harder',
    collection: 'supportTickets',
    requiredFields: ['subject', 'priority', 'requester', 'messages'],
  },
  {
    method: 'POST',
    endpoint: '/api/course-enrollments',
    difficulty: 'harder',
    collection: 'courseEnrollments',
    requiredFields: ['student', 'course', 'modules'],
  },
];

const patchExercises = [
  { method: 'PATCH', endpoint: '/api/tasks/:id', collection: 'tasks' },
  { method: 'PATCH', endpoint: '/api/products/:id', collection: 'products' },
  { method: 'PATCH', endpoint: '/api/events/:id', collection: 'events' },
  { method: 'PATCH', endpoint: '/api/orders/:id', collection: 'orders' },
  { method: 'PATCH', endpoint: '/api/support-tickets/:id', collection: 'supportTickets' },
];

const deleteExercises = [
  { method: 'DELETE', endpoint: '/api/contacts/:id', collection: 'contacts' },
  { method: 'DELETE', endpoint: '/api/tasks/:id', collection: 'tasks' },
  { method: 'DELETE', endpoint: '/api/products/:id', collection: 'products' },
  { method: 'DELETE', endpoint: '/api/events/:id', collection: 'events' },
  { method: 'DELETE', endpoint: '/api/support-tickets/:id', collection: 'supportTickets' },
];

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isBlank(value) {
  return value === undefined || value === null || value === '';
}

function validatePayload(payload, requiredFields) {
  if (!isPlainObject(payload)) {
    return ['Request body must be a JSON object.'];
  }

  return requiredFields.filter((field) => isBlank(payload[field]));
}

function validateArrayField(payload, fieldName) {
  if (!Array.isArray(payload[fieldName]) || payload[fieldName].length === 0) {
    return `${fieldName} must be a non-empty array.`;
  }

  return null;
}

function sendCreatedResponse(res, label, record) {
  res.status(201).json({
    message: `${label} created successfully.`,
    data: record,
  });
}

function sendUpdatedResponse(res, label, record) {
  res.json({
    message: `${label} updated successfully.`,
    data: record,
  });
}

function sendDeletedResponse(res, label, record) {
  res.json({
    message: `${label} deleted successfully.`,
    data: record,
  });
}

function createPostHandler(collectionName, requiredFields, extraValidation = () => null) {
  return (req, res) => {
    const missingFields = validatePayload(req.body, requiredFields);
    const extraError = extraValidation(req.body);

    if (missingFields.length > 0 || extraError) {
      return res.status(400).json({
        message: 'Please fix the request payload.',
        missingFields,
        error: extraError,
      });
    }

    const record = createRecord(collectionName, req.body);
    return sendCreatedResponse(res, collectionLabels[collectionName], record);
  };
}

function createPatchHandler(collectionName) {
  return (req, res) => {
    if (!isPlainObject(req.body) || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: 'PATCH request body must include at least one field to update.',
      });
    }

    const record = updateRecord(collectionName, req.params.id, req.body);

    if (!record) {
      return res.status(404).json({
        message: `${collectionLabels[collectionName]} was not found.`,
      });
    }

    return sendUpdatedResponse(res, collectionLabels[collectionName], record);
  };
}

function createDeleteHandler(collectionName) {
  return (req, res) => {
    const record = deleteRecord(collectionName, req.params.id);

    if (!record) {
      return res.status(404).json({
        message: `${collectionLabels[collectionName]} was not found.`,
      });
    }

    return sendDeletedResponse(res, collectionLabels[collectionName], record);
  };
}

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Get all write-method practice endpoints
 *     tags: [Overview]
 *     responses:
 *       200:
 *         description: Endpoint list grouped by method
 */
router.get('/', (req, res) => {
  res.json({
    message: 'Use these endpoints to practice POST, PATCH, and DELETE API integration.',
    postExercises,
    patchExercises,
    deleteExercises,
  });
});

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get every stored training record
 *     tags: [Records]
 *     responses:
 *       200:
 *         description: Complete JSON-file backed data store
 */
router.get('/records', (req, res) => {
  res.json(readStore());
});

/**
 * @swagger
 * /api/records/{collection}:
 *   get:
 *     summary: Get records from one collection
 *     tags: [Records]
 *     parameters:
 *       - in: path
 *         name: collection
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Records from the requested collection
 *       404:
 *         description: Collection was not found
 */
router.get('/records/:collection', (req, res) => {
  const records = getCollection(req.params.collection);

  if (!records) {
    return res.status(404).json({
      message: 'Collection was not found.',
      validCollections: Object.keys(collectionLabels),
    });
  }

  return res.json(records);
});

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a contact
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Aarav Sharma
 *             email: aarav@example.com
 *             phone: '9876543210'
 *     responses:
 *       201:
 *         description: Contact created
 */
router.post('/contacts', createPostHandler('contacts', ['name', 'email']));

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a task
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: Connect login form to API
 *             dueDate: '2026-09-05'
 *             priority: medium
 *     responses:
 *       201:
 *         description: Task created
 */
router.post('/tasks', createPostHandler('tasks', ['title', 'dueDate']));

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a product
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Wireless Keyboard
 *             price: 2499
 *             inStock: true
 *             tags:
 *               - electronics
 *               - office
 *     responses:
 *       201:
 *         description: Product created
 */
router.post('/products', createPostHandler('products', ['name', 'price', 'inStock']));

/**
 * @swagger
 * /api/feedback:
 *   post:
 *     summary: Create feedback
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             rating: 4
 *             comment: Checkout was fast, but the address form needs clearer labels.
 *             source: web
 *     responses:
 *       201:
 *         description: Feedback created
 */
router.post('/feedback', createPostHandler('feedback', ['rating', 'comment']));

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create an event
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: Frontend API Workshop
 *             date: '2026-09-12'
 *             location: Training Room 2
 *             attendees:
 *               - Neha
 *               - Kabir
 *               - Isha
 *     responses:
 *       201:
 *         description: Event created
 */
router.post(
  '/events',
  createPostHandler('events', ['title', 'date', 'attendees'], (payload) =>
    validateArrayField(payload, 'attendees')
  )
);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create an order
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             customer:
 *               name: Meera Iyer
 *               email: meera@example.com
 *             items:
 *               - sku: KEY-101
 *                 name: Wireless Keyboard
 *                 quantity: 1
 *                 price: 2499
 *             shippingAddress:
 *               line1: 21 MG Road
 *               city: Bengaluru
 *               postalCode: '560001'
 *     responses:
 *       201:
 *         description: Order created
 */
router.post(
  '/orders',
  createPostHandler('orders', ['customer', 'items', 'shippingAddress'], (payload) =>
    validateArrayField(payload, 'items')
  )
);

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a project
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Customer Portal Refresh
 *             owner: Ananya
 *             budget: 150000
 *             milestones:
 *               - title: API contract review
 *                 status: done
 *     responses:
 *       201:
 *         description: Project created
 */
router.post(
  '/projects',
  createPostHandler('projects', ['name', 'owner', 'milestones'], (payload) =>
    validateArrayField(payload, 'milestones')
  )
);

/**
 * @swagger
 * /api/job-applications:
 *   post:
 *     summary: Create a job application
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             candidate:
 *               name: Rohan Patel
 *               email: rohan@example.com
 *               experienceYears: 2
 *             role: Junior JavaScript Developer
 *             skills:
 *               - JavaScript
 *               - React
 *               - Axios
 *     responses:
 *       201:
 *         description: Job application created
 */
router.post(
  '/job-applications',
  createPostHandler('jobApplications', ['candidate', 'role', 'skills'], (payload) =>
    validateArrayField(payload, 'skills')
  )
);

/**
 * @swagger
 * /api/support-tickets:
 *   post:
 *     summary: Create a support ticket
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             subject: Payment failed but amount was deducted
 *             priority: high
 *             requester:
 *               name: Sara Khan
 *               email: sara@example.com
 *             messages:
 *               - from: customer
 *                 body: The app showed an error after payment.
 *                 createdAt: '2026-08-20T10:30:00.000Z'
 *     responses:
 *       201:
 *         description: Support ticket created
 */
router.post(
  '/support-tickets',
  createPostHandler('supportTickets', ['subject', 'priority', 'requester', 'messages'], (payload) =>
    validateArrayField(payload, 'messages')
  )
);

/**
 * @swagger
 * /api/course-enrollments:
 *   post:
 *     summary: Create a course enrollment
 *     tags: [POST Practice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             student:
 *               name: Dev Malhotra
 *               email: dev@example.com
 *             course:
 *               title: API Integration Basics
 *               level: beginner
 *             modules:
 *               - name: GET requests
 *                 completed: true
 *                 score: 86
 *     responses:
 *       201:
 *         description: Course enrollment created
 */
router.post(
  '/course-enrollments',
  createPostHandler('courseEnrollments', ['student', 'course', 'modules'], (payload) =>
    validateArrayField(payload, 'modules')
  )
);

/**
 * @swagger
 * /api/tasks/{id}:
 *   patch:
 *     summary: Update a task
 *     tags: [PATCH Practice]
 *   delete:
 *     summary: Delete a task
 *     tags: [DELETE Practice]
 */
router.patch('/tasks/:id', createPatchHandler('tasks'));
router.delete('/tasks/:id', createDeleteHandler('tasks'));

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Update a product
 *     tags: [PATCH Practice]
 *   delete:
 *     summary: Delete a product
 *     tags: [DELETE Practice]
 */
router.patch('/products/:id', createPatchHandler('products'));
router.delete('/products/:id', createDeleteHandler('products'));

/**
 * @swagger
 * /api/events/{id}:
 *   patch:
 *     summary: Update an event
 *     tags: [PATCH Practice]
 *   delete:
 *     summary: Delete an event
 *     tags: [DELETE Practice]
 */
router.patch('/events/:id', createPatchHandler('events'));
router.delete('/events/:id', createDeleteHandler('events'));

/**
 * @swagger
 * /api/orders/{id}:
 *   patch:
 *     summary: Update an order
 *     tags: [PATCH Practice]
 */
router.patch('/orders/:id', createPatchHandler('orders'));

/**
 * @swagger
 * /api/support-tickets/{id}:
 *   patch:
 *     summary: Update a support ticket
 *     tags: [PATCH Practice]
 *   delete:
 *     summary: Delete a support ticket
 *     tags: [DELETE Practice]
 */
router.patch('/support-tickets/:id', createPatchHandler('supportTickets'));
router.delete('/support-tickets/:id', createDeleteHandler('supportTickets'));

/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     tags: [DELETE Practice]
 */
router.delete('/contacts/:id', createDeleteHandler('contacts'));

module.exports = router;
