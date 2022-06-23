const express = require('express');

// Initialize App 
const app = express();

// Route
app.get('/', (request, response) => {
    response.send("Hello World!");
});


module.exports = app; 