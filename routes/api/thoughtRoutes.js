const router = require('express').Router();

//TODO: import the route functions from thoughtController

// /api/thoughts
router.route('/')
// /api/thoughts/:thoughtId
router.route('/:thoughtId')
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')

