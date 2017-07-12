/**
 * Created by oshadi on 7/12/2017.
 */

const {mongoose} = require('./../server/db/mongoose');
const {SemTimeTable} = require('./../model/sem-time-table');
const {LecTimeTable} = require('./../model/lec-time-table');
const {LabTimeTable} = require('./../model/lab-time-table');


var addNewTimeTable = (timetable) => {
    if (timetable.tbltype == 'sem') {
        return SemTimeTable(timetable).save();
    } else if (timetable.tbltype == 'lec') {
        return new LecTimeTable(timetable).save();
    } else if (timetable.tbltype == 'lab') {
        return new LabTimeTable(timetable).save();
    } else {
        return alert('unable to add time table');
    }
};


var loadTimeTable = (timetable) => {
    if (timetable.tbltype == 'sem') {
        return SemTimeTable.findOne(timetable);
    } else if (timetable.tbltype == 'lec') {
        return LecTimeTable.findOne(timetable);
    } else if (timetable.tbltype == 'lab') {
        return LabTimeTable.findOne(timetable);
    } else {
        return alert('unable to load time table');
    }
};


    var viewTimeTable = (timetable) => {
        console.log(timetable);
        if (timetable.tbltype == 'sem') {
            return SemTimeTable.findOne(timetable);
        } else if (timetable.tbltype == 'lec') {
            return LecTimeTable.findOne(timetable);
        } else if (timetable.tbltype == 'lab') {
            return LabTimeTable.findOne(timetable);
        } else {
            return alert('unable to view time table');
        }
    };


    module.exports = {
        addNewTimeTable,
        loadTimeTable,
        viewTimeTable
    }
