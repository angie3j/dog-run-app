const express = require('express');
const controller = express.Router();

const dogData = require('../dogData.json');

controller.get('/', (request, response) => {
    // response.send('Hello from the dogs controller')
    response.json(dogData);
})

// Route that accepts a dog id as part of the path

controller.get('/:id', (request, response) => {
    try {
    const dogId = request.params.id;

    if(!/[0-9]/.test(dogId)) {
        response.send('Dog id must be a number')
        return; 
    }
    const singleDog = dogData.dogs.find(dog => {
        return dog.id === dogId;
    });

    console.log(singleDog);
    if(singleDog){
        response.json(singleDog);
    } else {
        response.send('Dog not found');
    }
    } catch (err){
        response.status(500).send('An error occurred');
    }

})

module.exports = controller;