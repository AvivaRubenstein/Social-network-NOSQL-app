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
            //TODO: Ask why the Thought Model accepts a username but not a userId
            //Are we taking in a userId in the request body that IS NOT part to the schema to create a Thought???
            {_id: req.body.userId},
            {$addToSet: {thoughts: newThought._id}},
            {new: true}
            );
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

    },
    deleteThought: async (req, res) => {

    },
    //create a reaction to be stored in a Thoughts reaction array
    createReaction: async (req, res) => {

    },
    //remove/pull a reaction from the Thought's reaction array by the reactionId value
    deleteReaction: async(req, res) => {

    }
    }