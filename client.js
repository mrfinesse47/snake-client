// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("successful connection to server!");
    conn.write("Name: YXT");
    //"Move: up"

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    return conn;
  });

  conn.on("data", (data) => {
    console.log(data);
    // code that does something when the connection is first established
  });

  return conn;
};

module.exports = { connect };
