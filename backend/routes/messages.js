
const express = require('express');
const router = express.Router();
const History = require('../schema.js');

// Get all messages
router.get('/', async (req, res) => {
    try {
        const history = await History.find();
        res.json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new message
router.post('/', async (req, res) => {
    const history = new History(req.body);

    try {
        const newHistory = await history.save();
        res.status(201).json(newHistory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete all messages
router.delete('/', async (req, res) => {
    try {
        await History.deleteMany({});
        res.status(200).json({ message: 'All history deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
