/**
 * Created by oshadi on 7/12/2017.
 */
const timetableController = require('./../controller/timetable-controller');

class ReceptionTimeTableSocket {
    constructor(io, socket) {
        socket.on('addNewTable', (timetable, callback) => {
            //console.log(timetable);
            timetableController.addNewTimeTable(timetable).then((res) => {
                console.log(res);
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });
        });

        /*socket.on('addLecNewTable', (timetable, callback) => {
            timetableController.addNewLecTimeTable(timetable).then((res) => {
                console.log(res);
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });
        });

        socket.on('addLabNewTable', (timetable, callback) => {
            timetableController.addNewLabTimeTable(timetable).then((res) => {
                callback(undefined, res);
            }, (err) => {
                callback(err);

            });
        });*/

        socket.on('LoadTimetable', (timetable, callback) => {

                timetableController.loadTimeTable(timetable).then((res) => {
                    console.log(res);
                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });

        });



        socket.on('viewTimetable',(timetable,callback)=> {

            timetableController.viewTimeTable(timetable).then((res) => {
                console.log(res);
                callback(undefined, res);

            }, (err) => {
                callback(err);
            });
        });



    }
}

module.exports = {ReceptionTimeTableSocket};