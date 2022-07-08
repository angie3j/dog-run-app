const express = require('express');
const cors = require('cors');

// Initialize App 
const app = express();

const dogsController = require('./controllers/dogsController');

app.use(cors());
app.use(express.json())
app.use('/dogs', dogsController);


// Route
app.get('/', (request, response) => {
    response.send("Hello World!");
});


// export app file
module.exports = app; 