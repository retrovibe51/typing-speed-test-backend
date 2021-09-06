const Leaderboard = require('../models/leaderboard.model');
const mongoose = require("mongoose");

exports.submitScore = (req, res, next) => {
    const newScore = new Leaderboard({
        name: req.body.name,
        score: req.body.score,
        level: req.body.level
    });

    newScore.save().then(() => {
        res.status(201).json({
            message: 'Score added successfully'
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: "Failed to store score!"
        })
    });
}

exports.getScores = (req,res,next) => {
    
    let numberOfGames = [], averageScore = [], maxLevel = [];
    let counter = 0;
    var db = mongoose.connection;

    // Leaderboard.find().sort({"score": -1}).limit(10)
    //     .then((fetchedScores) => { 

    Leaderboard.aggregate([
        {
            "$group": {
                _id: {
                    name: "$name"
                },
                score: { $max: "$score" },
                averageScore: { $avg: "$score" },
                numberOfGames: { $sum: 1 },
                maxLevel: { $max: "$level" }

            }
        },
        { "$sort": { "score": -1 } },
        { "$limit" : 10 }
    ]).then((leaderboard) => {
        // console.log(leaderboard);
        
        res.status(200).json({
            message: 'Scores fetched successfully!',                
            scores: leaderboard
        });
    })
    .catch((error) => {
        // console.log(error);
        res.status(500).json({
            message: "Failed to fetch scores!"
        });
    });
}