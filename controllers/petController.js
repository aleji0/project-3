const {Pets, Users} = require('../models');

const petController = {

    //get all pets
    getPets(req, res) {
        Pets.find({})
            .then(petData => res.json(petData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);            
            });
    },
    //get pet by ID if that's even a thing we need to do... if not, it can be a template/placeholder
    getPetById({ params }, res) {
        Pets.findone({ _id: params.petId })
            .then(petData => res.json(petData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);            
            });
    }},
