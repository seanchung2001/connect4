const express = require('express');
const Game = require("../models/Game")
const router = express.Router();
const User = require("../models/User")

router.post('/', (req, res) => {
    console.log("Making a game", req.body)
    User.findOne({ username: req.body.username }, function(err, user) {
        if (err) throw err;

        if (user) {     //USER EXISTS
            User.findOne({username: req.body.opponent}, function(err, opponent){
                console.log("Finding opponent")
                if(opponent){
                    var board = []
                    for (var i = 0; i < 6; ++i) {
                        board.push([])
                        for (var j = 0; j < 7; ++j) {
                        board[i].push(0)  //0 represents "normal" colour and 1 represents first players move and 2 represents second players moves
                        }
                    }
                    board[1][1] = 2
                    const game = new Game({board: board, players: [user.id, opponent.id], active: true, turn: 1})
                    game.save(function(err){
                        console.log(err)
                        user.currentGames.push(game.id)
                        opponent.currentGames.push(game.id)
                        user.save(function(err,user){
                            res.json(game)
                        })
                        opponent.save()
                    })
                }
        
                else{
                    res.sendStatus(404)
                }
            })
        } else {
            res.sendStatus(404)
        }
    });
});
router.get('/:id', (req, res)=>{
    Game.findById(req.params.id, function(err, game){
        if(game){
            res.json(game)
        }
        else{
            res.sendStatus(404)
        }
    })
})

router.post('/:id', (req, res)=>{
    Game.findById(req.params.id, function(err, game){
        if(game){
            User.findOne({username: req.body.username}, function(err, user){
                if(user){
                    console.log(game.players[game.turn-1], user.id)
                    if(game.players[game.turn-1].toString() === user.id.toString()){
                        game.board[req.body.row][req.body.col] = game.turn
                        if(checkConnect4(game.board, game.turn)){
                            let opponentId
                            if(game.turn === 1){
                                opponentId = game.players[1]
                            }else{
                                opponentId = game.players[0]
                            }
                            User.findById(opponentId, function(err, opponent){
                                opponent.gamesPlayed++
                                opponent.winRate = opponent.wins / opponent.gamesPlayed
                                opponent.currentGames.splice(opponent.currentGames.indexOf(game.id),1)
                                opponent.previousGames.push(game.id)
                                opponent.save()
                            })
                            game.winner = user.id
                            user.currentGames.splice(user.currentGames.indexOf(game.id),1)
                            user.previousGames.push(game.id)
                            game.active = false
                            user.gamesPlayed++
                            user.wins++
                            user.winRate = user.wins / user.gamesPlayed
                        }
                        else{
                            if(game.turn === 1){
                                game.turn = 2
                            }else{
                                game.turn = 1
                            }
                        }
                        user.save()
                        game.save(function(err, game){
                            res.json(game)
                        })
                    }
                    else{
                        res.sendStatus(409)
                    }
                }
                else{
                    res.sendStatus(404)
                }
            })
        }
        else{
            res.sendStatus(404)
        }
    })
})

function checkConnect4(game, p){
    //Check rows
    for(let row = 0; row < 6; row++){
        for(let i = 0; i < 4; i++){
            if(p === game[row][i] && p === game[row][i+1] && p === game[row][i+2] && p === game[row][i+3]){
                console.log("You won!")
                return true;
            }
        }
    }
    //Check columns
    for(let col = 0; col <7; col++){
        for(let i = 3; i < 6; i++){
            if(p === game[i][col] && p === game[i-1][col] && p === game[i-2][col] && p === game[i-3][col]){
                console.log("You won!");
                return true;
            }
        }
    }
    //Check right diagonals
    for(let row = 0; row<3; row++){
        for(let col = 3; col<7; col++){
            if(p === game[row][col] && p == game[row+1][col-1] && p === game[row+2][col-2] && p === game[row+3][col-3]){
                console.log("You won!");
                return true;
            }
        }
    }
    //Check left diagonals
    for(let row = 5; row>2; row--){
        for(let col = 5; col>2;col--){
            if(p === game[row][col] && p == game[row-1][col-1] && p === game[row-2][col-2] && p === game[row-3][col-3]){
                console.log("You won!");
                return true;
            }
        }
    }
    return false;

}





module.exports = router;
