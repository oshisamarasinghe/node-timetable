var socket=io();
socket.on('connect',()=>{
  console.log('connect to server');
});
socket.on('disconnect',()=>{
  console.log('disconnected from server');
});
