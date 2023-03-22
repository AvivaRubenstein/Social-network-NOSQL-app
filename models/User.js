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
    validate: {
      validator: function(v) {
        return /.+\@.+\..+/.test(v);
      },
      message: props => `${props.value} is not a valid Email address!`
    },
    

  },
  //Array of _id values referencing the Thought model
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  //Array of _id values referencing the User model (self-reference)
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//TODO: create friendCount virutal that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
})
//TODO: email matching
//TODO: thoughts referencing
//TODO: friends referencing Users

const User = model('user', userSchema);

module.exports = User;