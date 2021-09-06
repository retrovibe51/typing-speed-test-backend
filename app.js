const express = require("express");
const mongoose = require("mongoose");

const WordRoutes = require("./routes/word-routes");
const Leaderboard = require("./routes/leaderboard-routes");

const app = express();

app.use(express.json());

// MongoDB Atlas connection (MongoDB on cloud)
mongoose.connect("mongodb+srv://Chuck:" + process.env.MONGO_ATLAS_PWD + "@cluster0.tt5dt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ 
    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.log('Connecttion to MongoDB failed');
        console.log(err);
    });


// BOC - CORS MIDDLEWARE
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
})
// EOC - CORS MIDDLEWARE


app.use("/api/words", WordRoutes);
app.use("/api/leaderboard", Leaderboard);


module.exports = app;
