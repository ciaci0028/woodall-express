const express = require('express');

// express is a function
// that returns an 'app' object
const app = express();

// A shortcut to setup endpoints for
// any file in that folder
app.use(express.static('server/public'));

// Handle requests for GET /space-jams
// Setup a GET /space-james endpoint
// Endpoint === method + url
// http://localhost:5000/space-jams
// Two arguments, request and response
app.get('/space-jams', (req, res) => {
    console.log('\'bout to get some space jams');

    // Send back a response
    res.send(`
    <h1> Ready to space jam? </h1>
    <button>Jame Time</button>
    `);

});


// listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log(`I'm listening`);
});

