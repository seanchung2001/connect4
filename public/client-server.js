const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Connect4"
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());


const signupRoute = require('../src/routes/signupRouter')
const loginRoute = require('../src/routes/loginRouter')
const usersRoute = require('../src/routes/usersRouter')
const addFriendRoute = require('../src/routes/addFriendRouter')
const gamesRoute = require('../src/routes/gamesRouter')
const leaderboardRoute = require('../src/routes/leaderboardRouter')

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);
app.use('/addFriend', addFriendRoute);
app.use('/game', gamesRoute);
app.use('/leaderboard',leaderboardRoute);




//Routes


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
}); 


//Connect to DB
mongoose.connect(url, { useNewUrlParser: true }, () => {
	console.log("Connected to DB...");
});

app.listen(port);
console.log(`server is listening at http://localhost:${port}`);
