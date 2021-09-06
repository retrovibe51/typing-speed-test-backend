const express = require("express");
const router = express.Router();

const LeaderboardController = require("../controllers/leaderboard.controller");

// HTTP GET - to fetch first 10 words
router.get("", LeaderboardController.getScores);

// HTTP POST - to create a new word
router.post("", LeaderboardController.submitScore);


module.exports = router;