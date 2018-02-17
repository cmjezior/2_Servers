// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500

// Create a generic function to handle requests and responses
// Send the below string to the client when the user visits the PORT URL
function handleRequestOne(request, response) {
  response.end("You DON'T have bad breathe in the morning." + request.url);
}

function handleRequestTwo(request, response) {
  response.end("Your pores are huge and your nail beds suck." + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
server.listen(PORTONE, function() {

  console.log("Server listening on: http://localhost:" + PORTONE);
});

server.listen(PORTWO, function() {

  console.log("Server listening on: http://localhost:" + PORTTWO);
});
