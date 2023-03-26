const Thought = require('../models/Thought');
const User = require('../models/User');
const {ObjectId} = require('mongoose').Types;

module.exports = {
    getThoughts : async (req, res) => {
        try {
            let thoughtData = await Thought.find({});
            return res.json(thoughtData);
        }catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        },
        //we need to create a new Thought, and also push that new Thought's id to the associated User's thoughts array
    createThought : async(req, res) => {
        try {
            let newThought = await Thought.create(req.body);
            if(newThought) {
            res.json(newThought);
 //push new Thought into User's thoughts array
            let addToUser = await User.findOneAndUpdate(
            //find the User to update by the username field in the new Thought's request body
            {username: req.body.username},
            {$addToSet: {thoughts: newThought._id}},
            {new: true}
            );
            console.log("New thought successfully added, and updated to user's profile")
            } 
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    getSingleThought : async (req,res) => {
        try{
            let thoughtData = await Thought.findOne({_id: req.params.userId});
            if(!thoughtData){
                return res.status(404).json({message: 'No thought found with that ID'});
            } else {
                return res.json(thoughtData);
            }
            }catch(err){
                console.log(err);
                return res.status(500).json(err);
            }
    },
    updateThought: async (req, res) => {
    try{
        let update = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {thoughtText: req.body.thoughtText},
            {runValidators: true, new : true}
        );
        if(!update){
            res.status(404).json({message: "no thought found with this id"})
        } else {
            res.status(200).json(update);
        }
    }catch(err){
        res.status(500).json(err);
    }
    },
    deleteThought: async (req, res) => {
    try {let del = await Thought.findOneAndDelete({_id: req.params.thoughtId});
    if(del){
        res.status(200).json({message: "this thought has been deleted"});
    } else {
        res.status(404).json({message: "there was no thought associated with this id"});
    }
    } catch(err){
        res.status(500).json(err);
    }
},
    //create a reaction to be stored in a Thoughts reaction array
    createReaction: async (req, res) => {

    },
    //remove/pull a reaction from the Thought's reaction array by the reactionId value
    deleteReaction: async(req, res) => {

    }
    }