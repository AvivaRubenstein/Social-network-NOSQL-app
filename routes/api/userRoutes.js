const router = require('express').Router();

//import the functions to handle the routes' functions from the userController
const{
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');
// /api/users
// GET all users
//POST a new user
router.route('/').get(getUsers).post(createUser)

// /api/users/:userId
// GET a single user by ID, populate thought and friend data
// PUT to update a user by _id
// DELETE to remove a user by _id
    //BONUS: remove the user's thoughts when user is deleted
router.route('/:userId').get(getSingleUser).put(updateUser).delete(removeUser)

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)


module.exports = router;