const express = require('express');
const router = express.Router();
const {
  generateSimpleUsers,
  generateBasicUsers,
  generateMediumUsers,
  generateHobbiesUsers,
  generateSkillsUsers,
  generateCompanyUsers,
  generateEducationUsers,
  generateFullUsers,
  generateAdvancedUsers,
  generateComplexUsers
} = require('../data/mockData');

/**
 * @swagger
 * /api/users/simple:
 *   get:
 *     summary: Get simple users with flat object structure
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of simple user objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   profile:
 *                     type: string
 *                   avatar:
 *                     type: string
 *             example:
 *               - id: 1
 *                 name: "John Doe"
 *                 email: "john@example.com"
 *                 profile: "Profile of John Doe"
 *                 avatar: "https://i.pravatar.cc/150?img=1"
 */
router.get('/users/simple', (req, res) => {
  res.json(generateSimpleUsers());
});

/**
 * @swagger
 * /api/users/basic:
 *   get:
 *     summary: Get users with single level of nesting
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with nested address and contact objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   address:
 *                     type: object
 *                     properties:
 *                       street:
 *                         type: string
 *                       city:
 *                         type: string
 *                       country:
 *                         type: string
 *                   contact:
 *                     type: object
 *                     properties:
 *                       phone:
 *                         type: string
 *                       email:
 *                         type: string
 */
router.get('/users/basic', (req, res) => {
  res.json(generateBasicUsers());
});

/**
 * @swagger
 * /api/users/medium:
 *   get:
 *     summary: Get users with multiple nested objects
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with address, contact, and profile nested objects
 */
router.get('/users/medium', (req, res) => {
  res.json(generateMediumUsers());
});

/**
 * @swagger
 * /api/users/hobbies:
 *   get:
 *     summary: Get users with nested arrays (hobbies)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with hobbies array
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   hobbies:
 *                     type: array
 *                     items:
 *                       type: string
 */
router.get('/users/hobbies', (req, res) => {
  res.json(generateHobbiesUsers());
});

/**
 * @swagger
 * /api/users/skills:
 *   get:
 *     summary: Get users with nested arrays of objects (skills)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with skills array containing objects
 */
router.get('/users/skills', (req, res) => {
  res.json(generateSkillsUsers());
});

/**
 * @swagger
 * /api/users/company:
 *   get:
 *     summary: Get users with deep nesting level 1 (company with nested address)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with company object containing nested address
 */
router.get('/users/company', (req, res) => {
  res.json(generateCompanyUsers());
});

/**
 * @swagger
 * /api/users/education:
 *   get:
 *     summary: Get users with deep nesting level 2 (education array with nested details)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with education array containing objects with nested details
 */
router.get('/users/education', (req, res) => {
  res.json(generateEducationUsers());
});

/**
 * @swagger
 * /api/users/full:
 *   get:
 *     summary: Get users with complex mixed structure
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with multiple nested objects and arrays
 */
router.get('/users/full', (req, res) => {
  res.json(generateFullUsers());
});

/**
 * @swagger
 * /api/users/advanced:
 *   get:
 *     summary: Get users with very deep nesting
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with workHistory containing deeply nested company and projects
 */
router.get('/users/advanced', (req, res) => {
  res.json(generateAdvancedUsers());
});

/**
 * @swagger
 * /api/users/complex:
 *   get:
 *     summary: Get users with maximum complexity and deepest nesting
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users with maximum nesting levels including profile, address, contact, social, workHistory, education, hobbies, and skills
 */
router.get('/users/complex', (req, res) => {
  res.json(generateComplexUsers());
});

module.exports = router;

