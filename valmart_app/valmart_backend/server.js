const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PYTHON_API_URL = 'http://localhost:8000'; // Your Python API endpoint

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get(`${PYTHON_API_URL}/products`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add new product
app.post('/api/products', async (req, res) => {
    try {
        const response = await axios.post(`${PYTHON_API_URL}/products`, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update product
app.put('/api/products/:id', async (req, res) => {
    try {
        const response = await axios.put(`${PYTHON_API_URL}/products/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
    try {
        await axios.delete(`${PYTHON_API_URL}/products/${req.params.id}`);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});