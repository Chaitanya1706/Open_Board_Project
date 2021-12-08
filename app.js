const express = require('express');
const app = express();

app.use(express.static("public"));
const socket = require('socket.io');

let server = app.listen("3000",()=>{
    console.log("Listening at Port 3000!!");
})

let io = socket(server);

io.on("connection",(socket)=>{
    console.log("Made Socket Connection")

    // Recieved Data
    socket.on("beginPath",(data)=>{
        // Now transfer data to all connected computers
        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })
})

