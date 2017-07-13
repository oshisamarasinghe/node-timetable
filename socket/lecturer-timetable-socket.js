const timetableController = require('./../controller/timetable-controller');

class LecturerTimeTableSocket{

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

        socket.on('viewUserTimeTable', (timetable, callback) => {
            timetableController.viewLecTimeTable(timetable).then((res) => {
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });


        });
    };
}
module.exports={LecturerTimeTableSocket}