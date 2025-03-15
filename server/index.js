const express = require("express");
const app = express();
const { Server } = require("socket.io");

const server = app.listen(3000, () => {
  console.log("Server is running!");
});

// Initialize a new instance of Socket.IO by passing the HTTP server
const io = new Server(server, {
  cors: "*",
});

// Listen for incoming Socket.IO connections
io.on("connection", (socket) => {
  console.log("User connected ", socket.id);
  // Listen for "send_message" events from the connected client
  socket.on("client-sms", (data) => {
    console.log("Message Received ", data); // Log the received message data
    // Emit the received message data to all connected clients
    io.emit("server-Message", {
      message: "Hello Clients!",
    });
  });
});
