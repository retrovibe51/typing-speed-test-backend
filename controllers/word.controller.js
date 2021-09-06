const Word = require('../models/word.model');

exports.createWord = (req, res, next) => {
    const newWord = new Word({
        title: req.body.title
    });

    newWord.save().then(() => {
        res.status(201).json({
            message: 'Word added successfully'
        });
    })
    .catch((error) => {
        res.status(500).json({
            message: "Failed to create word!"
        })
    });
}

exports.getWords = (req,res,next) => {
    const nCount = +req.query.nCount;
    Word.find().skip((nCount - 1) * 10).limit(nCount * 10)
        .then((fetchedWords) => {
            res.status(200).json({
                message: 'Words fetched successfully!',
                words: fetchedWords
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to fetch words!"
            });
    });
}