// Make connection

var socket= io.connect("http://localhost:4000")

//Query DOM
var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');

//emit EVENTS

btn.addEventListener('click',function(){
socket.emit('chat',{
    message:message.value,
    handle:handle.value
})
})
message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value)
})
//Listen for Events
socket.on('chat',function(data){
    output.innerHTML+='<p><strong>'+data.handle+'</strong>:'+data.message+'</p>';
    feedback.innerHTML=""
})

socket.on('typing',(data)=>{
    feedback.innerHTML='<p><em>'+data+'is typing the message...</em></p>';
})