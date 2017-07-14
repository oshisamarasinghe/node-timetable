
var socket = io();

socket.on('connect', function () {
    console.log(' lecturer:connect to server');
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

$('#lec-timetable').on('submit',(e)=>{
    e.preventDefault();
    var lecId=$('#lecID').val();
    socket.emit('viewUserTimeTable',{
        timeTableType:"lec",
        timeTableId:lecId

    },function(err,res){
        if(err){
            console.log(err);
        }else{
            if(res!=null){
                $('#c012').html(res.row1[0]);$('#c013').html(res.row1[1]);$('#c014').html(res.row1[2]);$('#c015').html(res.row1[3]);$('#c016').html(res.row1[4]);$('#c017').html(res.row1[5]);
                $('#c022').html(res.row2[0]);$('#c023').html(res.row2[1]);$('#c024').html(res.row2[2]);$('#c025').html(res.row2[3]);$('#c026').html(res.row2[4]);$('#c027').html(res.row2[5]);
                $('#c032').html(res.row3[0]);$('#c033').html(res.row3[1]);$('#c034').html(res.row3[2]);$('#c035').html(res.row3[3]);$('#c036').html(res.row3[4]);$('#c037').html(res.row3[5]);
                $('#c042').html(res.row4[0]);$('#c043').html(res.row4[1]);$('#c044').html(res.row4[2]);$('#c045').html(res.row4[3]);$('#c046').html(res.row4[4]);$('#c047').html(res.row4[5]);
                $('#c062').html(res.row6[0]);$('#c063').html(res.row6[1]);$('#c064').html(res.row6[2]);$('#c065').html(res.row6[3]);$('#c066').html(res.row6[4]);$('#c067').html(res.row6[5]);
                $('#c072').html(res.row7[0]);$('#c073').html(res.row7[1]);$('#c074').html(res.row7[2]);$('#c075').html(res.row7[3]);$('#c076').html(res.row7[4]);$('#c077').html(res.row7[5]);
                $('#c082').html(res.row8[0]);$('#c083').html(res.row8[1]);$('#c084').html(res.row8[2]);$('#c085').html(res.row8[3]);$('#c086').html(res.row8[4]);$('#c087').html(res.row8[5]);
                $('#c092').html(res.row9[0]);$('#c093').html(res.row9[1]);$('#c094').html(res.row9[2]);$('#c095').html(res.row9[3]);$('#c096').html(res.row9[4]);$('#c097').html(res.row9[5]);
                $('#c102').html(res.row10[0]);$('#c103').html(res.row10[1]);$('#c104').html(res.row10[2]);$('#c105').html(res.row10[3]);$('#c106').html(res.row10[4]);$('#c107').html(res.row10[5]);
                $('#c112').html(res.row11[0]);$('#c0113').html(res.row11[1]);$('#c114').html(res.row11[2]);$('#c115').html(res.row11[3]);$('#c116').html(res.row11[4]);$('#c117').html(res.row11[5]);

            }

        }

    });

});

$('#lec-labtimetable').on('submit',(e)=>{
    e.preventDefault();
    var labId=$('#labCode').val();

    socket.emit('viewLabTimeTable',{
        timeTableType:"lab",
        timeTableId:labId,

    },function(err,res){
        if(err){
            console.log(err);
        }else{
            if(res!=null){
                $('#c012').html(res.row1[0]);$('#c013').html(res.row1[1]);$('#c014').html(res.row1[2]);$('#c015').html(res.row1[3]);$('#c016').html(res.row1[4]);$('#c017').html(res.row1[5]);
                $('#c022').html(res.row2[0]);$('#c023').html(res.row2[1]);$('#c024').html(res.row2[2]);$('#c025').html(res.row2[3]);$('#c026').html(res.row2[4]);$('#c027').html(res.row2[5]);
                $('#c032').html(res.row3[0]);$('#c033').html(res.row3[1]);$('#c034').html(res.row3[2]);$('#c035').html(res.row3[3]);$('#c036').html(res.row3[4]);$('#c037').html(res.row3[5]);
                $('#c042').html(res.row4[0]);$('#c043').html(res.row4[1]);$('#c044').html(res.row4[2]);$('#c045').html(res.row4[3]);$('#c046').html(res.row4[4]);$('#c047').html(res.row4[5]);
                $('#c062').html(res.row6[0]);$('#c063').html(res.row6[1]);$('#c064').html(res.row6[2]);$('#c065').html(res.row6[3]);$('#c066').html(res.row6[4]);$('#c067').html(res.row6[5]);
                $('#c072').html(res.row7[0]);$('#c073').html(res.row7[1]);$('#c074').html(res.row7[2]);$('#c075').html(res.row7[3]);$('#c076').html(res.row7[4]);$('#c077').html(res.row7[5]);
                $('#c082').html(res.row8[0]);$('#c083').html(res.row8[1]);$('#c084').html(res.row8[2]);$('#c085').html(res.row8[3]);$('#c086').html(res.row8[4]);$('#c087').html(res.row8[5]);
                $('#c092').html(res.row9[0]);$('#c093').html(res.row9[1]);$('#c094').html(res.row9[2]);$('#c095').html(res.row9[3]);$('#c096').html(res.row9[4]);$('#c097').html(res.row9[5]);
                $('#c102').html(res.row10[0]);$('#c103').html(res.row10[1]);$('#c104').html(res.row10[2]);$('#c105').html(res.row10[3]);$('#c106').html(res.row10[4]);$('#c107').html(res.row10[5]);
                $('#c112').html(res.row11[0]);$('#c0113').html(res.row11[1]);$('#c114').html(res.row11[2]);$('#c115').html(res.row11[3]);$('#c116').html(res.row11[4]);$('#c117').html(res.row11[5]);

            }

        }

    });

});

$('#lec-semtimetable').on('submit',(e)=>{
    e.preventDefault();
    var semNo=$('#SemNo').val();
    socket.emit('viewSemTimeTable',{
        timeTableType:"sem",
        timeTableId:semNo,


    },function(err,res){
        if(err){
            console.log(err);
        }else{
            if(res!=null){
                $('#c012').html(res.row1[0]);$('#c013').html(res.row1[1]);$('#c014').html(res.row1[2]);$('#c015').html(res.row1[3]);$('#c016').html(res.row1[4]);$('#c017').html(res.row1[5]);
                $('#c022').html(res.row2[0]);$('#c023').html(res.row2[1]);$('#c024').html(res.row2[2]);$('#c025').html(res.row2[3]);$('#c026').html(res.row2[4]);$('#c027').html(res.row2[5]);
                $('#c032').html(res.row3[0]);$('#c033').html(res.row3[1]);$('#c034').html(res.row3[2]);$('#c035').html(res.row3[3]);$('#c036').html(res.row3[4]);$('#c037').html(res.row3[5]);
                $('#c042').html(res.row4[0]);$('#c043').html(res.row4[1]);$('#c044').html(res.row4[2]);$('#c045').html(res.row4[3]);$('#c046').html(res.row4[4]);$('#c047').html(res.row4[5]);
                $('#c062').html(res.row6[0]);$('#c063').html(res.row6[1]);$('#c064').html(res.row6[2]);$('#c065').html(res.row6[3]);$('#c066').html(res.row6[4]);$('#c067').html(res.row6[5]);
                $('#c072').html(res.row7[0]);$('#c073').html(res.row7[1]);$('#c074').html(res.row7[2]);$('#c075').html(res.row7[3]);$('#c076').html(res.row7[4]);$('#c077').html(res.row7[5]);
                $('#c082').html(res.row8[0]);$('#c083').html(res.row8[1]);$('#c084').html(res.row8[2]);$('#c085').html(res.row8[3]);$('#c086').html(res.row8[4]);$('#c087').html(res.row8[5]);
                $('#c092').html(res.row9[0]);$('#c093').html(res.row9[1]);$('#c094').html(res.row9[2]);$('#c095').html(res.row9[3]);$('#c096').html(res.row9[4]);$('#c097').html(res.row9[5]);
                $('#c102').html(res.row10[0]);$('#c103').html(res.row10[1]);$('#c104').html(res.row10[2]);$('#c105').html(res.row10[3]);$('#c106').html(res.row10[4]);$('#c107').html(res.row10[5]);
                $('#c112').html(res.row11[0]);$('#c0113').html(res.row11[1]);$('#c114').html(res.row11[2]);$('#c115').html(res.row11[3]);$('#c116').html(res.row11[4]);$('#c117').html(res.row11[5]);

            }

        }

    });

});
function loadAllSemesters() {

    socket.emit('loadAllSemOptions',{
        timeTableType:"sem"
    },function(err,res){
        if(err){
            console.log(err);
        }else{

            for(var index=0;index<res.length;index++){

                $('#SemNo').append($('<option>',{
                    value:res[index].timeTableId,
                    text:res[index].timeTableName
                }));
            }
        }
    });
};

function loadAllLabCodes() {

    socket.emit('loadAllLabOptions',{
        timeTableType:"lab"
    },function(err,res){
        if(err){
            console.log(err);
        }else{

            for(var index=0;index<res.length;index++){

                $('#labCode').append($('<option>',{
                    value:res[index].timeTableId,
                    text:res[index].timeTableName
                }));
            }
        }
    });
};



loadAllLabCodes();

loadAllSemesters();