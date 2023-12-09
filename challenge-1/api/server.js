const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// imports
const streamRouter = require("../routers/stream.router.js");

// server
const server = express();

// middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// routes
server.use("/api/stream", streamRouter);

server.get("/", (req, res) => {
  res.send("<h2>Hello!</h2>");
});

module.exports = server;
