var socket=io();

socket.on('connect',function(){
  console.log('connect to server');

});

socket.on('disconnect',function(){
  console.log('disconnected from server');
});




/*function add_timetable(){
  var type=document.getElementById('ttype').value;
  var id=document.getElementById('inputID').value  ;

  var c11= document.getElementById("ac012").innerHTML;
  var c12= document.getElementById("ac013").innerHTML;
  var c13= document.getElementById("ac014").innerHTML;
  var c14= document.getElementById("ac015").innerHTML;
  var c15= document.getElementById("ac016").innerHTML;
  var c16= document.getElementById("ac017").innerHTML;


}*/


/* $('#add').on('onClick',function(e){
  e.preventDefault();
});

    /*var ntimetable = {
        timetableType:$('[id=ttype]').val(),
        timetableId:$('[id=inputID]').val(),
        r1c1:$('[id=ac011]').innerHTML,
        r2c2:$('[id=ac012]').innerHTML

    };

    socket.emit('createNewTimeTable', ntimetable, function (message) {
        alert(message);
    });*/
