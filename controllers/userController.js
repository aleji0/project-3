const {Users} = require('../models');

const userController = {
    Users.create({body}, res) {
        .then(dbUsersData => res.json(dbUsersData))
    }


}