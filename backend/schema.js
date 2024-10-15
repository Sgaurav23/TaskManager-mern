
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    expression: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    queryType: {
        type: String,
        enum: ['text', 'voice'],
        default: 'text'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const History = mongoose.model('History', historySchema);
module.exports = History;