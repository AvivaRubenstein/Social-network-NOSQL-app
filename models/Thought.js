const { Schema, model, Types } = require('mongoose');


//reaction will be a subdocument of the Thought model
const reactionSchema = new Schema (
  {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
          type: String,
          required: true,
          maxLength: 280,
      },
      username: {
          type: String,
          required: true,
      },
      createdAt: {
          type: Date,
          default: Date.now,
      },
   }
   );
   
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
            minLlength: 1
        },
        
          //Date
//Set default value to the current timestamp
//Use a getter method to format the timestamp on query  
createdAt: {
    type: Date,
    default: Date.now,
  },
        //username of user who created this thought
        username: {
            type: String,
            required: true,
        },
    
        //an array of nested documents created with the reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);


//createdAt format : 2023-03-24T15:56:42.020Z will become something like "Fri Mar 24 2023 11:55:46 GMT-0400 (Eastern Daylight Time)"
//set up getter method to format timestamp on query
thoughtSchema
  .virtual('dateCreated')
  // Getter
  .get(function () {
    let dateString = this.createdAt.toString();
    return `${dateString}`;
  });

  reactionSchema.virtual('dateCreated')
  // Getter
  .get(function () {
    let dateString = this.createdAt.toString();
    return `${dateString}`;
  });


//TODO: set up a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;