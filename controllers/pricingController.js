// controllers/pricingController.js
const Organization = require('../models/organization');
const Pricing = require('../models/pricing');
const PriceCalculator = require('../services/priceCalculator');

const calculatePrice = async (req, res) => {
    try {
        const { zone, organization_id, total_distance, item_type } = req.body;

        // Validate input payload
        if (!zone || !organization_id || !total_distance || !item_type) {
            return res.status(400).json({ error: 'Missing required fields in the request payload' });
        }

        // Fetch organization details
        const organization = await Organization.getById(organization_id);
        if (!organization) {
            return res.status(404).json({ error: 'Organization not found' });
        }

        // Fetch pricing data
        const pricing = await Pricing.getByOrganizationAndZone(organization_id, zone);
        if (!pricing) {
            return res.status(404).json({ error: 'Pricing information not found for the given organization and zone' });
        }

        // Determine base price and per km price based on item type
        const basePrice = pricing.fix_price;
        const perKmPrice = item_type === 'perishable' ? pricing.km_price : pricing.km_price;
        const baseDistance = pricing.base_distance_in_km;

        // Calculate total price
        const totalPriceCents = PriceCalculator.calculatePrice(basePrice, perKmPrice, baseDistance, total_distance);

        res.json({ total_price: totalPriceCents / 100 }); // Convert price back to euros
    } catch (error) {
        console.error('Error calculating price:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    calculatePrice,
};
