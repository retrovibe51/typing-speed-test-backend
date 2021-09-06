const express = require("express");
const router = express.Router();

const WordController = require("../controllers/word.controller");

// HTTP GET - to fetch first 10 words
router.get("", WordController.getWords);

// HTTP POST - to create a new word
router.post("", WordController.createWord);


module.exports = router;