const {User} = require('../models/User');
const {ObjectId} = require('mongoose').Types;

module.exports = {
   getUsers : async (req, res) => {
    try {
        let userData = await User.find();
        return res.json(userData);
    }catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
    },
    createUser : async(req, res) => {
        try {
            let newUser = await User.create(req.body);
            res.json(newUser);
        } catch(err){
            res.status(500).json(err);
        }
    },
    getSingleUser : async (req, res) => {
        try{
        let userData = await User.findOne({_id: req.params.userId});
        if(!userData){
            return res.status(404).json({message: 'No user found with that ID'});
        } else {
            return res.json(userData);
        }
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    updateUser : async (req, res) => {

    },
    removeUser : async (req, res) => {

    },
    addFriend : async (req, res) => {

    },
    removeFriend : async (req, res) => {

    }

}