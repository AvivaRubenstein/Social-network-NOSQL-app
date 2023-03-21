const {Schema, model} = require('mongoose');
const thoughtSchema = require('./Thought');
const userSchema = new Schema (
{
  username: {
    type: String,
    unique: true,
    required: true,
    //gets rid of whitespace
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //mongoose matching validation:
    //match: /.+\@.+\..+/

  },
  //Array of _id values referencing the Thought model
  thoughts: [thoughtSchema],
  //Array of _id values referencing the User model (self-reference)
  friends: [userSchema]
},
{
    toJSON: {
        getters: true,
      }, 
}
);

//TODO: create friendCount virutal that retrieves the length of the user's friends array field on query.
//TODO: email matching
//TODO: thoughts referencing
//TODO: friends referencing Users
