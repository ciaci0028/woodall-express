/*
    This code is running on data warehouse computer
*/

const express = require('express');
const bodyParser = require('body-parser');

// express is a function
// that returns an 'app' object
const app = express();

// A shortcut to setup endpoints for
// any file in that folder
app.use(express.static('server/public'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle requests for GET /space-jams
// Setup a GET /space-james endpoint
// Endpoint === method + url
// http://localhost:5000/space-jams
// Two arguments, request and response
// How we share files
app.get('/space-jams', (req, res) => {
    console.log('\'bout to get some space jams');

    // Send back a response
    // Manually send back some HTML
    res.send(`
    <h1> Ready to space jam? </h1>
    <button>Jame Time</button>
    `);

});

let comments = [
    {
        author: 'Edan',
        message: '1996 space Jams ftw',
    },
    {
        author: 'Sabrina',
        message: 'Wahoo!',
    },
];

// Create a get comments end point
// See this at the path
app.get('/comments', (req, res) => {
    console.log('in get comments');

    res.send(comments);
});

// POST /comments endpoint
app.post('/comments', (req, res) => {
    console.log('in post comments', req.body);
    
    //TO DO: save comment to the server
    comments.push(req.body);

    //Send back a thumbs up
    res.sendStatus(201);
});

// listen on port 5000
const port = 5000;
app.listen(port, () => {
    // This function is called when the server is up 
    // and running, usually only a console.log
    console.log(`I'm listening`);
});

