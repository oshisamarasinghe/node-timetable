/**
 * Created by oshadi on 7/12/2017.
 */

const {mongoose} = require('./../server/db/mongoose');
const {SemTimeTable} = require('./../model/sem-time-table');
const {LecTimeTable} = require('./../model/lec-time-table');
const {LabTimeTable} = require('./../model/lab-time-table');


    var addNewSemTimeTable = (timetable) => {

    return SemTimeTable(timetable).save();
   };

    var addNewLecTimeTable = (timetable) => {

    return new LecTimeTable(timetable).save();
    };

    var addNewLabTimeTable = (timetable) => {

        return new LabTimeTable(timetable).save();
    } ;


    var viewSemTimeTable = (timetable) => {


        return SemTimeTable.findOne(timetable);
    };
    var viewLecTimeTable = (timetable) => {
        return LecTimeTable.findOne(timetable);
    };

    var viewLabTimeTable = (timetable) => {
            return LabTimeTable.findOne(timetable);
   };
    var updateSemTimeTable = (timetable) => {

        return SemTimeTable.findOneAndUpdate({_id:timetable._id},timetable);
    };
    var updateLabTimeTable = (timetable) => {

    return LabTimeTable.findOneAndUpdate(timetable);
};
    var updateLecTimeTable = (timetable) => {

    return LecTimeTable.findOneAndUpdate(timetable);
};

var loadAvailableSemTimeTables=(doc)=>{
    //console.log(doc)
    return SemTimeTable.find();
}


    module.exports = {
        addNewSemTimeTable,
        addNewLabTimeTable,
        addNewLecTimeTable,
        viewSemTimeTable,
        viewLabTimeTable,
        viewLecTimeTable,
        updateSemTimeTable,
        updateLabTimeTable,
        updateLecTimeTable,
        loadAvailableSemTimeTables

    }
