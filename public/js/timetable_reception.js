/*
 oshadhi-2017/07/10
 **oshadhi-2017/07/11
 */

var socket = io();

socket.on('connect', function () {
    console.log(' reception:connect to server');
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

$('#addt').on('submit', function (e) {
    e.preventDefault();
    var id = $('#inputID').val();
    var type = $('#ttype').val();

        socket.emit('addNewTable', {
            tbltype: type,
            tblid: id,
            row1: [$('#ac012').text(), $('#ac013').text(), $('#ac014').text(), $('#ac015').text(), $('#ac016').text(), $('#ac017').text()],
            row2: [$('#ac022').text(), $('#ac023').text(), $('#ac024').text(), $('#ac025').text(), $('#ac026').text(), $('#ac027').text()],
            row3: [$('#ac032').text(), $('#ac033').text(), $('#ac034').text(), $('#ac035').text(), $('#ac036').text(), $('#ac037').text()],
            row4: [$('#ac042').text(), $('#ac043').text(), $('#ac044').text(), $('#ac045').text(), $('#ac046').text(), $('#ac047').text()],
            row6: [$('#ac062').text(), $('#ac063').text(), $('#ac064').text(), $('#ac065').text(), $('#ac066').text(), $('#ac067').text()],
            row7: [$('#ac072').text(), $('#ac073').text(), $('#ac074').text(), $('#ac075').text(), $('#ac076').text(), $('#ac077').text()],
            row8: [$('#ac082').text(), $('#ac083').text(), $('#ac084').text(), $('#ac085').text(), $('#ac086').text(), $('#ac087').text()],
            row9: [$('#ac092').text(), $('#ac093').text(), $('#ac094').text(), $('#ac095').text(), $('#ac096').text(), $('#ac097').text()],
            row10: [$('#ac102').text(), $('#ac103').text(), $('#ac104').text(), $('#ac105').text(), $('#ac106').text(), $('#ac107').text()],
            row11: [$('#ac112').text(), $('#ac113').text(), $('#ac114').text(), $('#ac115').text(), $('#ac116').text(), $('#ac117').text()]
        }, function (err, res) {
            if(err){
                return console.log(err);
            }
            console.log(res);
        });
    /*}else if(type =='lec'){
        socket.emit('addLecNewTable', {
            tbltype: type,
            tblid: id,
            row1: [$('#ac012').text(), $('#ac013').text(), $('#ac014').text(), $('#ac015').text(), $('#ac016').text(), $('#ac017').text()],
            row2: [$('#ac022').text(), $('#ac023').text(), $('#ac024').text(), $('#ac025').text(), $('#ac026').text(), $('#ac027').text()],
            row3: [$('#ac032').text(), $('#ac033').text(), $('#ac034').text(), $('#ac035').text(), $('#ac036').text(), $('#ac037').text()],
            row4: [$('#ac042').text(), $('#ac043').text(), $('#ac044').text(), $('#ac045').text(), $('#ac046').text(), $('#ac047').text()],
            row6: [$('#ac062').text(), $('#ac063').text(), $('#ac064').text(), $('#ac065').text(), $('#ac066').text(), $('#ac067').text()],
            row7: [$('#ac072').text(), $('#ac073').text(), $('#ac074').text(), $('#ac075').text(), $('#ac076').text(), $('#ac077').text()],
            row8: [$('#ac082').text(), $('#ac083').text(), $('#ac084').text(), $('#ac085').text(), $('#ac086').text(), $('#ac087').text()],
            row9: [$('#ac092').text(), $('#ac093').text(), $('#ac094').text(), $('#ac095').text(), $('#ac096').text(), $('#ac097').text()],
            row10: [$('#ac102').text(), $('#ac103').text(), $('#ac104').text(), $('#ac105').text(), $('#ac106').text(), $('#ac107').text()],
            row11: [$('#ac112').text(), $('#ac113').text(), $('#ac114').text(), $('#ac115').text(), $('#ac116').text(), $('#ac117').text()]
        }, function (err, res) {
            if(err){
                return console.log(err);
            }
            console.log(res);
        });

    }else if(type =='lab'){
        socket.emit('addLabNewTable', {
            tbltype: type,
            tblid: id,
            row1: [$('#ac012').text(), $('#ac013').text(), $('#ac014').text(), $('#ac015').text(), $('#ac016').text(), $('#ac017').text()],
            row2: [$('#ac022').text(), $('#ac023').text(), $('#ac024').text(), $('#ac025').text(), $('#ac026').text(), $('#ac027').text()],
            row3: [$('#ac032').text(), $('#ac033').text(), $('#ac034').text(), $('#ac035').text(), $('#ac036').text(), $('#ac037').text()],
            row4: [$('#ac042').text(), $('#ac043').text(), $('#ac044').text(), $('#ac045').text(), $('#ac046').text(), $('#ac047').text()],
            row6: [$('#ac062').text(), $('#ac063').text(), $('#ac064').text(), $('#ac065').text(), $('#ac066').text(), $('#ac067').text()],
            row7: [$('#ac072').text(), $('#ac073').text(), $('#ac074').text(), $('#ac075').text(), $('#ac076').text(), $('#ac077').text()],
            row8: [$('#ac082').text(), $('#ac083').text(), $('#ac084').text(), $('#ac085').text(), $('#ac086').text(), $('#ac087').text()],
            row9: [$('#ac092').text(), $('#ac093').text(), $('#ac094').text(), $('#ac095').text(), $('#ac096').text(), $('#ac097').text()],
            row10: [$('#ac102').text(), $('#ac103').text(), $('#ac104').text(), $('#ac105').text(), $('#ac106').text(), $('#ac107').text()],
            row11: [$('#ac112').text(), $('#ac113').text(), $('#ac114').text(), $('#ac115').text(), $('#ac116').text(), $('#ac117').text()]
        }, function (err, res) {
            if(err){
                return console.log(err);
            }
            console.log(res);
        });

    }*/

});

$('#updt').on('submit',(e)=>{
    e.preventDefault();
    var id = $('#selectID').val();
    var type = $('#type').val();
    socket.emit('LoadTimetable',{
        tbltype: type,
        tblid: id 
    },function (err,res) {
        if(err){
            return console.log(err);
        }else{
            //console.log(res.row1[0]);
            if(res !=null){
                $('#pc012').html(res.row1[0]); $('#pc013').html(res.row1[1]);$('#pc014').html(res.row1[2]);$('#pc015').html(res.row1[3]);$('#pc016').html(res.row1[4]);$('#pc017').html(res.row1[5]);

                $('#pc022').html(res.row2[0]);$('#pc023').html(res.row2[1]);$('#pc024').html(res.row2[2]);$('#pc025').html(res.row2[3]);$('#pc026').html(res.row2[4]);$('#pc027').html(res.row2[5]);

                $('#pc032').html(res.row3[0]);$('#pc033').html(res.row3[1]);$('#pc034').html(res.row3[2]);$('#pc035').html(res.row3[3]);$('#pc036').html(res.row3[4]);$('#pc037').html(res.row3[5]);

                $('#pc042').html(res.row4[0]);$('#pc043').html(res.row4[1]);$('#pc044').html(res.row4[2]);$('#pc045').html(res.row4[3]);$('#pc046').html(res.row4[4]);$('#pc047').html(res.row4[5]);

                $('#pc062').html(res.row6[0]);$('#pc063').html(res.row6[1]);$('#pc064').html(res.row6[2]);$('#pc065').html(res.row6[3]);$('#pc066').html(res.row6[4]);$('#pc067').html(res.row6[5]);

                $('#pc072').html(res.row7[0]);$('#pc073').html(res.row7[1]);$('#pc074').html(res.row7[2]);$('#pc075').html(res.row7[3]);$('#pc076').html(res.row7[4]);$('#pc077').html(res.row7[5]);

                $('#pc082').html(res.row8[0]);$('#pc083').html(res.row8[1]);$('#pc084').html(res.row8[2]);$('#pc085').html(res.row8[3]);$('#pc086').html(res.row8[4]);$('#pc087').html(res.row8[5]);

                $('#pc092').html(res.row9[0]);$('#pc093').html(res.row9[1]);$('#pc094').html(res.row9[2]);$('#pc095').html(res.row9[3]);$('#pc096').html(res.row9[4]);$('#pc097').html(res.row9[5]);

                $('#pc102').html(res.row10[0]);$('#pc103').html(res.row10[1]);$('#pc104').html(res.row10[2]);$('#pc105').html(res.row10[3]);$('#pc106').html(res.row10[4]);$('#pc107').html(res.row10[5]);

                $('#pc112').html(res.row11[0]);$('#pc113').html(res.row11[1]);$('#pc114').html(res.row11[2]);$('#pc115').html(res.row11[3]);$('#pc116').html(res.row11[4]);$('#pc117').html(res.row11[5]);

            }

        }

    });
    
});



$('#viewtable').on('submit',(e)=>{
    e.preventDefault();
    var id=$('#vtbl_id').val();
    var type=$('#tbltype').val();
    socket.emit('viewTimetable',{
        tblid:id,
        tbltype:type
    },function(err,res){
        if(err){
            console.log(err);
        }else {
            if(res!==null){
                $('#vc012').html(res.row1[0]); $('#vc0130').html(res.row1[1]);$('#vc014').html(res.row1[2]);$('#vc015').html(res.row1[3]);$('#vc016').html(res.row1[4]);$('#vc017').html(res.row1[5]);

                $('#vc022').html(res.row2[0]);$('#vc023').html(res.row2[1]);$('#vc024').html(res.row2[2]);$('#vc025').html(res.row2[3]);$('#vc026').html(res.row2[4]);$('#vc027').html(res.row2[5]);

                $('#vc032').html(res.row3[0]);$('#vc033').html(res.row3[1]);$('#vc034').html(res.row3[2]);$('#vc035').html(res.row3[3]);$('#pc036').html(res.row3[4]);$('#vc037').html(res.row3[5]);

                $('#vc042').html(res.row4[0]);$('#vc043').html(res.row4[1]);$('#vc044').html(res.row4[2]);$('#vc045').html(res.row4[3]);$('#pc046').html(res.row4[4]);$('#vc047').html(res.row4[5]);

                $('#vc062').html(res.row6[0]);$('#vc063').html(res.row6[1]);$('#vc064').html(res.row6[2]);$('#vc065').html(res.row6[3]);$('#pc066').html(res.row6[4]);$('#vc067').html(res.row6[5]);

                $('#vc072').html(res.row7[0]);$('#vc073').html(res.row7[1]);$('#vc074').html(res.row7[2]);$('#vc075').html(res.row7[3]);$('#pc076').html(res.row7[4]);$('#vc077').html(res.row7[5]);

                $('#vc082').html(res.row8[0]);$('#vc083').html(res.row8[1]);$('#vc084').html(res.row8[2]);$('#vc085').html(res.row8[3]);$('#pc086').html(res.row8[4]);$('#vc087').html(res.row8[5]);

                $('#vc092').html(res.row9[0]);$('#vc093').html(res.row9[1]);$('#vc094').html(res.row9[2]);$('#vc095').html(res.row9[3]);$('#pc096').html(res.row9[4]);$('#vc097').html(res.row9[5]);

                $('#vc102').html(res.row10[0]);$('#vc103').html(res.row10[1]);$('#vc104').html(res.row10[2]);$('#vc105').html(res.row10[3]);$('#pc106').html(res.row10[4]);$('#vc107').html(res.row10[5]);

                $('#vc112').html(res.row11[0]);$('#vc113').html(res.row11[1]);$('#vc114').html(res.row11[2]);$('#vc115').html(res.row11[3]);$('#pc116').html(res.row11[4]);$('#vc117').html(res.row11[5]);


            }

        }

    });






});

//new timetable  add function
// function addTable() {
//     var id = $('#inputID').val();
//     var type = $('#ttype').val();
//
//     if (id === '' || id.trim() === '') {
//         console.log('id not entered');
//     }
//     else {
//         socket.emit('addNewTable', {
//             tbltype: type,
//             tblid: id,
//             row1: [$('#ac012').text(), $('#ac013').text(), $('#ac014').text(), $('#ac015').text(), $('#ac016').text(), $('#ac017').text()],
//             row2: [$('#ac022').text(), $('#ac023').text(), $('#ac024').text(), $('#ac025').text(), $('#ac026').text(), $('#ac027').text()],
//             row3: [$('#ac032').text(), $('#ac033').text(), $('#ac034').text(), $('#ac035').text(), $('#ac036').text(), $('#ac037').text()],
//             row4: [$('#ac042').text(), $('#ac043').text(), $('#ac044').text(), $('#ac045').text(), $('#ac046').text(), $('#ac047').text()],
//             row6: [$('#ac062').text(), $('#ac063').text(), $('#ac064').text(), $('#ac065').text(), $('#ac066').text(), $('#ac067').text()],
//             row7: [$('#ac072').text(), $('#ac073').text(), $('#ac074').text(), $('#ac075').text(), $('#ac076').text(), $('#ac077').text()],
//             row8: [$('#ac082').text(), $('#ac083').text(), $('#ac084').text(), $('#ac085').text(), $('#ac086').text(), $('#ac087').text()],
//             row9: [$('#ac092').text(), $('#ac093').text(), $('#ac094').text(), $('#ac095').text(), $('#ac096').text(), $('#ac097').text()],
//             row10: [$('#ac102').text(), $('#ac103').text(), $('#ac104').text(), $('#ac105').text(), $('#ac106').text(), $('#ac107').text()],
//             row11: [$('#ac112').text(), $('#ac113').text(), $('#ac114').text(), $('#ac115').text(), $('#ac116').text(), $('#ac117').text()]
//         });
//
//     }
// }
//
///function loadTable() {
//     var id = $('#selectID').val();
//     var type = $('#type').val();
// //console.log(id,type);
//     socket.emit('loadTimetable', {
//         tbltype: type,
//         tblid: id,
//     });
// }
