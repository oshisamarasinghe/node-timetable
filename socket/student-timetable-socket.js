
const timetableController = require('./../controller/timetable-controller');

class StudentTimeTableSocket {

    constructor(io, socket) {
        socket.on('viewSemTimeTable', (timetable, callback) => {

            timetableController.viewSemTimeTable(timetable).then((res) => {
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });


        });


        socket.on('viewLabTimeTable', (timetable, callback) => {
            timetableController.viewLabTimeTable(timetable).then((res) => {
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });


        });
        socket.on('loadAllSemOptions', (timetable, callback) => {
            timetableController.loadAvailableSemTimeTables(timetable).then((res) => {
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });


        });
        socket.on('loadAllLabOptions',(timetable,callback)=>{
            timetableController.loadAvailableLabTimeTables(timetable).then((res)=>{
                callback(undefined, res);
            },(err)=>{
                callback(err);
            });
        });
    };
}
module.exports={StudentTimeTableSocket};