const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    title: { type: String, required: true },    
});

module.exports = mongoose.model('Word', wordSchema);