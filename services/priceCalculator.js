// services/priceCalculator.js
class PriceCalculator {
    static calculatePrice(basePrice, perKmPrice, baseDistance, totalDistance) {
        let totalPrice = basePrice;
        if (totalDistance > baseDistance) {
            const extraDistance = totalDistance - baseDistance;
            totalPrice += extraDistance * perKmPrice;
        }

        return Math.round(totalPrice * 100); // Convert price to cents
    }
}

module.exports = PriceCalculator;
