const Thought = require('../models/Thought');
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
    createThought : async(req, res) => {
        try {
            let newThought = await Thought.create(req.body);
            res.json(newThought);
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
    createReaction: async (req, res) => {

    },
    deleteReaction: async(req, res) => {

    }
    }