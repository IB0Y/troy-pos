const express = require('express');
require('dotenv').config();
// Modules
const connectDB = require('../database');
const errorHandler = require('../middleware/error');
// routes
const auth = require('../route/auth');
const products = require('../route/products');
const sales = require('../route/sales');

// Initialization
const app = express();
const base_uri = '/api/v1'

// Database
connectDB();
// Middlewares
app.use(express.json());

// =>Routes
app.use(`${base_uri}/auth`, auth);
app.use(`${base_uri}/products`, products);
app.use(`${base_uri}/sales`, sales);

app.use(errorHandler);

// server

const server = app.listen(process.env.PORT, () => console.log(`App running on port: ${process.env.PORT}`));
