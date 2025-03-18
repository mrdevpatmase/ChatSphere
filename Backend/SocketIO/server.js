import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express(); // Imported from index.js because we're using socket.io

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

// realtime message
const users = {};

export const getReciverSocketId = (recieverId) => {
  return users[recieverId];
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  const userId = socket.handshake.query.userId;

  if (userId) {
    users[userId] = socket.id;
    console.log(users);
  }

  // to broadcast message to all users
  io.emit("getOnlineUsers", Object.keys(users));

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

export { app, io, server };
