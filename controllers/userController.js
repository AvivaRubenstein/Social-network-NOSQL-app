const User = require('../models/User');
const Thought = require('../models/Thought')
const {ObjectId} = require('mongoose').Types;

module.exports = {
   getUsers : async (req, res) => {
    try {
        let userData = await User.find({});
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
            console.log(err);
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
        try{ 
            let updatedUser = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true } //new: true returns the updated version of the user
        ); 
        if(updatedUser){
            return res.json(updatedUser);
        }
    } catch(err) {
        return res.status(500).json(err);
    }
       },
       //when we remove a User, we must also remove the Thoughts which were associated with that User
    removeUser : async (req, res) => {
         try{
            let delUser = await User.findOneAndRemove({ _id: req.params.userId });
            if(!delUser){
                return res.status(404).json({message: "That user does not exist."});
            } else{
                //we are deleting any Thoughts whose ids were stored in the thoughts array of the user we are removing
            let delThought = await Thought.deleteMany({ _id: { $in: delUser.thoughts } });
            res.json({message: "User and their associated Thoughts have been removed"}); 
         }   
        }catch(err){
            res.status(500).json(err);
        }
               
          },
        //add a new friend to a user's friend list
    addFriend : async (req, res) => {

    },
    //remove a friend from a user's friend list
    removeFriend : async (req, res) => {

    }

}