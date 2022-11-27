const {Users} = require('../models');

const userController = {
    
    createUser({body}, res) {
        Users.create(body)
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => res.status(400).json(err));
    },

    // get all users
    getUsers(req, res) {
        Users.find({})

    }
}