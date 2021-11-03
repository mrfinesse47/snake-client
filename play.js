// IP: 165.227.47.243
// PORT: 5054

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  console.log(key);
  if (key === "\u0003") {
    process.exit();
  }
};

const stdin = setupInput();

stdin.on("data", handleUserInput);

const { connect } = require("./client");

// establishes a connection with the game server

console.log("Connecting ...");
connect();
