const express = require('express');

// Initialize App 
const app = express();

const dogsController = require('./controllers/dogsController');

app.use('/dogs', dogsController);

// Route
app.get('/', (request, response) => {
    response.send("Hello World!");
});


// export app file
module.exports = app; 