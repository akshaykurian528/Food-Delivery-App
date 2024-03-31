const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const pricingRoutes = require('./routes/pricing');

const app = express();

app.use(bodyParser.json());

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Food Delivery API',
            version: '1.0.0',
            description: 'API documentation for the Food Delivery app',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/pricing', pricingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery API');
});


app.get('/', (req, res) => {
    res.redirect('/api-docs'); // Redirect to Swagger documentation
});
