// routes/pricing.js
const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');

/**
 * @swagger
 * /pricing:
 *   post:
 *     summary: Calculate delivery price
 *     description: Calculate the total price for the delivery of the specified food items in the given zone for the particular organization.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 description: The delivery zone.
 *               organization_id:
 *                 type: string
 *                 description: The ID of the organization.
 *               total_distance:
 *                 type: number
 *                 description: The total distance for the delivery.
 *               item_type:
 *                 type: string
 *                 enum: [perishable, non-perishable]
 *                 description: The type of food item.
 *     responses:
 *       '200':
 *         description: Total price calculation successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   description: The total price for the delivery.
 */

router.post('/', pricingController.calculatePrice);

module.exports = router;
