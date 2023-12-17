const http = require('http');
const port = 12059;

// Create a new server object
const server = http.createServer(function (req, res) {

    // Write a responce to the client
    res.write('Hello World');

    // End the responce 
    res.end();
});

// Set up our server so it will listen on the port 
server.listen(port, function(error) {

    // Checking any error occur while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening 
    else {
        console.log(('Server is listening on port + port'));
    }
})