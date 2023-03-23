const router = require('express').Router();

//TODO: import the route functions from thoughtController
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction

} = require()
// /api/thoughts
// GET all thoughts
// POST to create a new thought (and push the created thought's _id to the user's thoughts array)
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:thoughtId
// GET a single thought by its _id
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)


// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').post(createReaction)


// /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)



module.exports = router;