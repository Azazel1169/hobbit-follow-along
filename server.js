const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello from Express");
});

server.listen(9000, () => {
  console.log("Server listening on port 9000");
});
