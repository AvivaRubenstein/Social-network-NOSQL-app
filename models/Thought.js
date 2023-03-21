const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1
        },
        createdAt: {
          //Date
//Set default value to the current timestamp
//Use a getter method to format the timestamp on query  
        },
        //username of user who created this thought
        username: {
            type: String,
            required: true,
        },
        //an array of nested documents created with the reactionSchema
        reactions: 
    }
);

//TODO: set up date to be current timestamp by default
//set up getter method to format timestamp on query

//TODO: set up reaction subdocument schema
//TODO: set up a virtual called reactionCount that retrieves the length of the thought's reactions array field on query