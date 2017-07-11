/*
oshadhi-2017/07/10
**oshadhi-2017/07/11
*/

var socket=io();

socket.on('connect',function(){
  console.log(' reception:connect to server');



});

socket.on('disconnect',function(){
  console.log('disconnected from server');
});


//new timetable  add function
function addTable() {
  var id=$('#inputID').val() ;
  var type=$('#ttype').val();

if(id==='' || id.trim()===''){
    console.log('id not entered');
  }
 else{
    socket.emit('addNewTable',{
      tbltype: type,
      tblid : id,
      row1  :  [$('#ac012').text(),$('#ac013').text(),$('#ac014').text(),$('#ac015').text(),$('#ac016').text(),$('#ac017').text()] ,
      row2  :  [$('#ac022').text(),$('#ac023').text(),$('#ac024').text(),$('#ac025').text(),$('#ac026').text(),$('#ac027').text()],
      row3  :  [$('#ac032').text(),$('#ac033').text(),$('#ac034').text(),$('#ac035').text(),$('#ac036').text(),$('#ac037').text()],
      row4  :  [$('#ac042').text(),$('#ac043').text(),$('#ac044').text(),$('#ac045').text(),$('#ac046').text(),$('#ac047').text()],
      row6  :  [$('#ac062').text(),$('#ac063').text(),$('#ac064').text(),$('#ac065').text(),$('#ac066').text(),$('#ac067').text()],
      row7  :  [$('#ac072').text(),$('#ac073').text(),$('#ac074').text(),$('#ac075').text(),$('#ac076').text(),$('#ac077').text()],
      row8  :  [$('#ac082').text(),$('#ac083').text(),$('#ac084').text(),$('#ac085').text(),$('#ac086').text(),$('#ac087').text()],
      row9  :  [$('#ac092').text(),$('#ac093').text(),$('#ac094').text(),$('#ac095').text(),$('#ac096').text(),$('#ac097').text()],
      row10  :  [$('#ac102').text(),$('#ac103').text(),$('#ac104').text(),$('#ac105').text(),$('#ac106').text(),$('#ac107').text()],
      row11  :  [$('#ac112').text(),$('#ac113').text(),$('#ac114').text(),$('#ac115').text(),$('#ac116').text(),$('#ac117').text()]
    });


}
}
