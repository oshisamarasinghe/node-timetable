var socket=io();

function ViewTable(){

  var labcode=document.getElementById("inputlabCode").value;
  if(labcode==='LAB1'){
    
  }
}



socket.on('disconnect',function(){
  console.log('disconnected from server');
});
