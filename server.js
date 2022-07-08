// Bring in app
const app = require("./app");

require("dotenv").config()
const PORT = process.env.PORT || 4000;

// Start our server
// This function 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });