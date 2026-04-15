const express = require('express');
const router = express.Router();
const {
  generateOrgUsers,
  generateProjectsUsers,
  generateContactsUsers,
  generateScheduleUsers,
  generateAssetsUsers,
  generateReviewsUsers,
  generateClientsUsers,
  generateFinanceUsers,
  generateOperationsUsers,
  generateStrategyUsers
} = require('../data/mockData');

/**
 * @swagger
 * /api/users/org:
 *   get:
 *     summary: Intermediate users with organization structure
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Organization object with manager and departments
 */
router.get('/users/org', (req, res) => {
  res.json(generateOrgUsers());
});

/**
 * @swagger
 * /api/users/projects:
 *   get:
 *     summary: Users with projects and milestone arrays
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Project objects including milestone arrays
 */
router.get('/users/projects', (req, res) => {
  res.json(generateProjectsUsers());
});

/**
 * @swagger
 * /api/users/contacts:
 *   get:
 *     summary: Users with nested communication channels and emergency contacts
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Deep communication object with mixed nested arrays
 */
router.get('/users/contacts', (req, res) => {
  res.json(generateContactsUsers());
});

/**
 * @swagger
 * /api/users/schedule:
 *   get:
 *     summary: Users with weekly schedule object and task arrays
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Nested day-based schedule data
 */
router.get('/users/schedule', (req, res) => {
  res.json(generateScheduleUsers());
});

/**
 * @swagger
 * /api/users/assets:
 *   get:
 *     summary: Users with assets, warranty, and maintenance history
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of assets with nested maintenance history arrays
 */
router.get('/users/assets', (req, res) => {
  res.json(generateAssetsUsers());
});

/**
 * @swagger
 * /api/users/reviews:
 *   get:
 *     summary: Users with quarterly performance reviews and goals
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Performance object with metrics and nested goal arrays
 */
router.get('/users/reviews', (req, res) => {
  res.json(generateReviewsUsers());
});

/**
 * @swagger
 * /api/users/clients:
 *   get:
 *     summary: Users with client portfolios and contract renewals
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Client portfolio with contract and stakeholder nesting
 */
router.get('/users/clients', (req, res) => {
  res.json(generateClientsUsers());
});

/**
 * @swagger
 * /api/users/finance:
 *   get:
 *     summary: Users with compensation, deductions, and reimbursements
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Financial object with mixed arrays and nested tax objects
 */
router.get('/users/finance', (req, res) => {
  res.json(generateFinanceUsers());
});

/**
 * @swagger
 * /api/users/operations:
 *   get:
 *     summary: Users with regional operations and warehouse sections
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Operations data with region to section hierarchy
 */
router.get('/users/operations', (req, res) => {
  res.json(generateOperationsUsers());
});

/**
 * @swagger
 * /api/users/strategy:
 *   get:
 *     summary: Users with strategic initiatives and phased deliverables
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Strategy profile combining deep arrays and nested objects
 */
router.get('/users/strategy', (req, res) => {
  res.json(generateStrategyUsers());
});

module.exports = router;

