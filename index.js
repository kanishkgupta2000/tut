var express=require("express"); 
var socket=require('socket.io');
var app=express();
var server= app.listen(4000,()=>{
    console.log("listen to port 4000");
})

app.use(express.static('public'));

//socket setup

var io=socket(server);

io.on('connection',(socket)=>{
    console.log('made socket connection',socket.id)

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })
})