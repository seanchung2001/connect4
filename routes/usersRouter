const express = require('express');
const router = express.Router();
const User = require("../models/User")

router.get('/', (req, res) => {
    User.find({public: true}).select("-password").exec((err, docs) => {

        if(req.query.name){
            res.json(docs.filter((value) => 
                value.username.toLowerCase().indexOf(req.query.name.toLowerCase()) != -1
            ));
        }
        else{
            res.json(docs);
        }
    })
});

router.get('/:user', (req, res) =>{
    User.findOne({public: true, username: req.params.user}).select("-password").populate("currentGames").exec((err, doc)=>{
        if(!doc){
            res.status(404).send("This user does not exist.")
        }
        else{
            res.json(doc);
        }
    })
})

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        friends: [],
        friendRequests: [],
        public: true
    });
    // if(!User.findOne({ username: req.body.username})) {
        user.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
    // } else{
    //     res.status(409);
    //     res.json({ message: "Username already exists"})
    // }
})

module.exports = router;
