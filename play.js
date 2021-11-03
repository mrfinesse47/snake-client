// IP: 165.227.47.243
// PORT: 5054

// setup interface to handle user input from stdin

const { setupInput } = require("./input");

const { connect } = require("./client");

// establishes a connection with the game server

console.log("Connecting ...");

setupInput(connect());
