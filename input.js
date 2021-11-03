let connection;
let isMessageMode = false;
let tmpMsg = "";

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  connection = conn;

  return stdin;
};

const handleUserInput = function (key) {
  //console.log(key);
  //Say: _____ sends message

  if (key === "\u0003") {
    process.exit();
  }

  if (!isMessageMode) {
    if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "\u000d") {
      isMessageMode = true;
      process.stdout.write("\nSend Message:");
    }
  } else {
    tmpMsg += key;
    process.stdout.write(key);
    if (key === "\u000d") {
      isMessageMode = false;
      connection.write("Say: " + tmpMsg);
      // console.log("returns");
      process.stdout.write("\nContinue Playing!");
      tmpMsg = "";
    }
  }
};

module.exports = { setupInput };
