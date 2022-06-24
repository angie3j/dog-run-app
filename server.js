// Bring in app
const app = require('./app');
require("dotenv").config()
const PORT = process.env.PORT;

// Start our server
// This function 
app.listen(3300, () => console.log(`Listening on ${PORT}`));