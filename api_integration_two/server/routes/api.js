const express = require('express');
const {
  readStore,
  getCollection,
  getRecordById,
  createRecord,
  replaceRecord,
  deleteRecord,
} = require('../data/store');

const router = express.Router();

const resources = {
  products: {
    label: 'Product',
    requiredFields: ['name', 'price', 'tags'],
    arrayField: 'tags',
    example: {
      name: 'Wireless Keyboard',
      price: 2499,
      inStock: true,
      category: 'electronics',
      tags: ['office', 'wireless', 'accessory'],
    },
  },
  todos: {
    label: 'Todo',
    requiredFields: ['title', 'dueDate', 'subTasks'],
    arrayField: 'subTasks',
    example: {
      title: 'Prepare API integration demo',
      dueDate: '2026-09-30',
      priority: 'high',
      status: 'open',
      subTasks: [
        { title: 'Draft endpoints', done: true },
        { title: 'Build forms', done: false },
      ],
    },
  },
  projects: {
    label: 'Project',
    requiredFields: ['name', 'owner', 'milestones'],
    arrayField: 'milestones',
    example: {
      name: 'Customer Portal Refresh',
      owner: 'Ananya',
      budget: 150000,
      status: 'active',
      milestones: [
        { title: 'API contract review', status: 'done' },
        { title: 'Build dashboard screens', status: 'in-progress' },
      ],
    },
  },
  orders: {
    label: 'Order',
    requiredFields: ['customerName', 'status', 'items'],
    arrayField: 'items',
    example: {
      customerName: 'Meera Iyer',
      customerEmail: 'meera@example.com',
      status: 'pending',
      shippingCity: 'Bengaluru',
      items: [
        { sku: 'KEY-101', name: 'Wireless Keyboard', quantity: 1, price: 2499 },
        { sku: 'MOU-205', name: 'Bluetooth Mouse', quantity: 2, price: 899 },
      ],
    },
  },
  tickets: {
    label: 'Support ticket',
    requiredFields: ['subject', 'priority', 'messages'],
    arrayField: 'messages',
    example: {
      subject: 'Payment failed but amount was deducted',
      priority: 'high',
      status: 'open',
      requesterName: 'Sara Khan',
      requesterEmail: 'sara@example.com',
      messages: [
        {
          from: 'customer',
          body: 'The app showed an error after payment.',
          createdAt: '2026-08-20T10:30:00.000Z',
        },
      ],
    },
  },
};

function isMissing(value) {
  return value === undefined || value === null || value === '';
}

function validatePayload(resourceKey, payload, { requireAll = true } = {}) {
  const config = resources[resourceKey];
  const errors = [];

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return ['Request body must be a JSON object'];
  }

  if (requireAll) {
    config.requiredFields.forEach((field) => {
      if (isMissing(payload[field])) {
        errors.push(`${field} is required`);
      }
    });
  }

  const arrayField = config.arrayField;
  if (Object.prototype.hasOwnProperty.call(payload, arrayField)) {
    if (!Array.isArray(payload[arrayField])) {
      errors.push(`${arrayField} must be an array`);
    } else if (payload[arrayField].length === 0) {
      errors.push(`${arrayField} must include at least one item`);
    }
  } else if (requireAll) {
    errors.push(`${arrayField} is required and must be a non-empty array`);
  }

  return errors;
}

function sendValidationError(res, errors) {
  return res.status(400).json({
    message: 'Validation failed',
    errors,
  });
}

/**
 * @swagger
 * /api:
 *   get:
 *     summary: API overview and available CRUD resources
 *     tags: [Overview]
 *     responses:
 *       200:
 *         description: Resource map for learners
 */
router.get('/', (req, res) => {
  res.json({
    message: 'CRUD training APIs ready',
    resources: Object.keys(resources).map((key) => ({
      resource: key,
      basePath: `/api/${key}`,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      requiredArrayField: resources[key].arrayField,
      requiredFields: resources[key].requiredFields,
      example: resources[key].example,
    })),
  });
});

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Inspect all stored collections
 *     tags: [Overview]
 *     responses:
 *       200:
 *         description: Full JSON store snapshot
 */
router.get('/records', (req, res) => {
  res.json(readStore());
});

function registerCrudRoutes(resourceKey) {
  const config = resources[resourceKey];
  const basePath = `/${resourceKey}`;

  /**
   * Dynamic swagger blocks are documented via examples in README and /api overview.
   * Routes below implement full CRUD for each resource.
   */
  router.get(basePath, (req, res) => {
    res.json(getCollection(resourceKey));
  });

  router.get(`${basePath}/:id`, (req, res) => {
    const record = getRecordById(resourceKey, req.params.id);
    if (!record) {
      return res.status(404).json({ message: `${config.label} not found` });
    }
    return res.json(record);
  });

  router.post(basePath, (req, res) => {
    const errors = validatePayload(resourceKey, req.body, { requireAll: true });
    if (errors.length) {
      return sendValidationError(res, errors);
    }

    const created = createRecord(resourceKey, req.body);
    return res.status(201).json(created);
  });

  router.put(`${basePath}/:id`, (req, res) => {
    const existing = getRecordById(resourceKey, req.params.id);
    if (!existing) {
      return res.status(404).json({ message: `${config.label} not found` });
    }

    const errors = validatePayload(resourceKey, req.body, { requireAll: true });
    if (errors.length) {
      return sendValidationError(res, errors);
    }

    const updated = replaceRecord(resourceKey, req.params.id, req.body);
    return res.json(updated);
  });

  router.delete(`${basePath}/:id`, (req, res) => {
    const deleted = deleteRecord(resourceKey, req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: `${config.label} not found` });
    }
    return res.json({
      message: `${config.label} deleted`,
      deleted,
    });
  });
}

Object.keys(resources).forEach(registerCrudRoutes);

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product catalog with tags array
 *   - name: Todos
 *     description: Todo lists with subTasks array
 *   - name: Projects
 *     description: Projects with milestones array
 *   - name: Orders
 *     description: Orders with items array
 *   - name: Tickets
 *     description: Support tickets with messages array
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: List all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Array of products
 *   post:
 *     summary: Create a product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, price, tags]
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               inStock:
 *                 type: boolean
 *               category:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 minItems: 1
 *           example:
 *             name: Wireless Keyboard
 *             price: 2499
 *             inStock: true
 *             category: electronics
 *             tags: [office, wireless, accessory]
 *     responses:
 *       201:
 *         description: Product created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get one product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Not found
 *   put:
 *     summary: Replace a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, price, tags]
 *     responses:
 *       200:
 *         description: Product updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: List all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Array of todos
 *   post:
 *     summary: Create a todo (must include subTasks array)
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, dueDate, subTasks]
 *             properties:
 *               title:
 *                 type: string
 *               dueDate:
 *                 type: string
 *               priority:
 *                 type: string
 *               status:
 *                 type: string
 *               subTasks:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     done:
 *                       type: boolean
 *           example:
 *             title: Prepare API integration demo
 *             dueDate: 2026-09-30
 *             priority: high
 *             status: open
 *             subTasks:
 *               - title: Draft endpoints
 *                 done: true
 *               - title: Build forms
 *                 done: false
 *     responses:
 *       201:
 *         description: Todo created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Get one todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo found
 *       404:
 *         description: Not found
 *   put:
 *     summary: Replace a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, dueDate, subTasks]
 *     responses:
 *       200:
 *         description: Todo updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: List all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Array of projects
 *   post:
 *     summary: Create a project (must include milestones array)
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, owner, milestones]
 *             properties:
 *               name:
 *                 type: string
 *               owner:
 *                 type: string
 *               budget:
 *                 type: number
 *               status:
 *                 type: string
 *               milestones:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     status:
 *                       type: string
 *           example:
 *             name: Customer Portal Refresh
 *             owner: Ananya
 *             budget: 150000
 *             status: active
 *             milestones:
 *               - title: API contract review
 *                 status: done
 *               - title: Build dashboard screens
 *                 status: in-progress
 *     responses:
 *       201:
 *         description: Project created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get one project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project found
 *       404:
 *         description: Not found
 *   put:
 *     summary: Replace a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, owner, milestones]
 *     responses:
 *       200:
 *         description: Project updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: List all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Array of orders
 *   post:
 *     summary: Create an order (must include items array)
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [customerName, status, items]
 *             properties:
 *               customerName:
 *                 type: string
 *               customerEmail:
 *                 type: string
 *               status:
 *                 type: string
 *               shippingCity:
 *                 type: string
 *               items:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   properties:
 *                     sku:
 *                       type: string
 *                     name:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     price:
 *                       type: number
 *           example:
 *             customerName: Meera Iyer
 *             customerEmail: meera@example.com
 *             status: pending
 *             shippingCity: Bengaluru
 *             items:
 *               - sku: KEY-101
 *                 name: Wireless Keyboard
 *                 quantity: 1
 *                 price: 2499
 *               - sku: MOU-205
 *                 name: Bluetooth Mouse
 *                 quantity: 2
 *                 price: 899
 *     responses:
 *       201:
 *         description: Order created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get one order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Not found
 *   put:
 *     summary: Replace an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [customerName, status, items]
 *     responses:
 *       200:
 *         description: Order updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: List all support tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Array of tickets
 *   post:
 *     summary: Create a support ticket (must include messages array)
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [subject, priority, messages]
 *             properties:
 *               subject:
 *                 type: string
 *               priority:
 *                 type: string
 *               status:
 *                 type: string
 *               requesterName:
 *                 type: string
 *               requesterEmail:
 *                 type: string
 *               messages:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   properties:
 *                     from:
 *                       type: string
 *                     body:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *           example:
 *             subject: Payment failed but amount was deducted
 *             priority: high
 *             status: open
 *             requesterName: Sara Khan
 *             requesterEmail: sara@example.com
 *             messages:
 *               - from: customer
 *                 body: The app showed an error after payment.
 *                 createdAt: 2026-08-20T10:30:00.000Z
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Get one support ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket found
 *       404:
 *         description: Not found
 *   put:
 *     summary: Replace a support ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [subject, priority, messages]
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Not found
 *   delete:
 *     summary: Delete a support ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket deleted
 *       404:
 *         description: Not found
 */

module.exports = router;
