const mongoose = require('mongoose');

const leaderboardSchema = mongoose.Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true },
    level: { type: Number, required: true }
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);