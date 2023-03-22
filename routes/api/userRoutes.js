const router = require('express').Router();

//import the functions to handle the routes' functions from the userController

// /api/users
router.route('/').get()
// /api/users/:userId
router.route('/:userId')
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
