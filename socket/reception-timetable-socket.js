/**
 * Created by oshadi on 7/12/2017.
 */
const timetableController = require('./../controller/timetable-controller');

class ReceptionTimeTableSocket {
    constructor(io, socket) {
        socket.on('addNewTable', (timetable, callback) => {
            if (timetable.timeTableType == 'sem') {
                timetableController.addNewSemTimeTable(timetable).then((res) => {
                    callback(undefined, res);
                }, (err) => {
                    callback(err);
                });

            } else if (timetable.timeTableType == 'lab') {
                timetableController.addNewLabTimeTable(timetable).then((res) => {
                    callback(undefined, res);
                }, (err) => {
                    callback(err);
                });

            }else if (timetable.timeTableType == 'lec') {
                timetableController.addNewLecTimeTable(timetable).then((res) => {
                    callback(undefined, res);
                }, (err) => {
                    callback(err);
                });

            }
        });



       socket.on('LoadTimetable', (timetable, callback) => {

           if (timetable.timeTableType == 'sem') {
               timetableController.viewSemTimeTable(timetable).then((res) => {
                   console.log(res);
                   callback(undefined, res);

               }, (err) => {
                   callback(err);
               });
           } else if (timetable.timeTableType == 'lab') {
               timetableController.viewLabTimeTable(timetable).then((res) => {
                   console.log(res);
                   callback(undefined, res);

               }, (err) => {
                   callback(err);
               });
           }else if (timetable.timeTableType == 'lec') {
               timetableController.viewLecTimeTable(timetable).then((res) => {
                   console.log(res);
                   callback(undefined, res);

               }, (err) => {
                   callback(err);
               });
           }
        });



        socket.on('viewTimetable',(timetable,callback)=> {
            console.log(timetable.timeTableType);
            if (timetable.timeTableType == 'sem') {

                timetableController.viewSemTimeTable(timetable).then((res) => {

                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });
            } else if (timetable.timeTableType == 'lab') {
                timetableController.viewLabTimeTable(timetable).then((res) => {
                    console.log(res);
                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });
            }else if (timetable.timeTableType == 'lec') {
                timetableController.viewLecTimeTable(timetable).then((res) => {
                    console.log(res);
                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });
            }
        });

        socket.on('SaveUpdate', (timetable, callback) => {

            if (timetable.timeTableType == 'sem') {
                timetableController.updateSemTimeTable(timetable).then((res) => {

                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });
            } else if (timetable.timeTableType == 'lab') {
                timetableController.updateLabTimeTable(timetable).then((res) => {
                    console.log(res);
                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });
            }else if (timetable.timeTableType == 'lec') {
                timetableController.updateLecTimeTable(timetable).then((res) => {
                    console.log(res);
                    callback(undefined, res);

                }, (err) => {
                    callback(err);
                });
            }
        });


    }
}

module.exports = {ReceptionTimeTableSocket};