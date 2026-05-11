const express = require('express');
const router = express.Router();
const {
  generateProfileInsights,
  generateCampaignInsights,
  generateWarehouseInsights,
  generateKnowledgeInsights,
  generateRiskInsights,
  generateMessagePayload,
  generateCountPayload,
  generateFlagPayload,
  generateNullPayload,
  generateMatrixPayload,
} = require('../data/mockData');

/**
 * @swagger
 * /api/insights/profile:
 *   get:
 *     summary: Get advanced profile insight objects
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: Array of complex profile insight objects
 */
router.get('/insights/profile', (req, res) => {
  res.json(generateProfileInsights());
});

/**
 * @swagger
 * /api/insights/campaigns:
 *   get:
 *     summary: Get campaign planning objects with nested stages
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: Array of campaign objects with budgets, channels, and nested tasks
 */
router.get('/insights/campaigns', (req, res) => {
  res.json(generateCampaignInsights());
});

/**
 * @swagger
 * /api/insights/warehouse:
 *   get:
 *     summary: Get warehouse operations objects
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: Array of warehouse objects with zones, bins, and alerts
 */
router.get('/insights/warehouse', (req, res) => {
  res.json(generateWarehouseInsights());
});

/**
 * @swagger
 * /api/insights/knowledge:
 *   get:
 *     summary: Get knowledge base article objects
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: Array of knowledge base article objects with sections and references
 */
router.get('/insights/knowledge', (req, res) => {
  res.json(generateKnowledgeInsights());
});

/**
 * @swagger
 * /api/insights/risk:
 *   get:
 *     summary: Get risk register objects
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: Array of risk register objects with scorecards and action plans
 */
router.get('/insights/risk', (req, res) => {
  res.json(generateRiskInsights());
});

/**
 * @swagger
 * /api/payloads/message:
 *   get:
 *     summary: Get a plain string response
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: A top-level string payload
 */
router.get('/payloads/message', (req, res) => {
  res.json(generateMessagePayload());
});

/**
 * @swagger
 * /api/payloads/count:
 *   get:
 *     summary: Get a numeric response
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: A top-level number payload
 */
router.get('/payloads/count', (req, res) => {
  res.json(generateCountPayload());
});

/**
 * @swagger
 * /api/payloads/flag:
 *   get:
 *     summary: Get a boolean response
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: A top-level boolean payload
 */
router.get('/payloads/flag', (req, res) => {
  res.json(generateFlagPayload());
});

/**
 * @swagger
 * /api/payloads/empty:
 *   get:
 *     summary: Get a null response
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: A top-level null payload for empty-state handling
 */
router.get('/payloads/empty', (req, res) => {
  res.json(generateNullPayload());
});

/**
 * @swagger
 * /api/payloads/matrix:
 *   get:
 *     summary: Get a matrix-style array response
 *     tags: [Level3]
 *     responses:
 *       200:
 *         description: A top-level array of arrays for table-style rendering
 */
router.get('/payloads/matrix', (req, res) => {
  res.json(generateMatrixPayload());
});

module.exports = router;
