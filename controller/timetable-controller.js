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
        console.log(timetable);

        return SemTimeTable.findOneAndUpdate({timeTableId:timetable.timeTableId},{$set:
            {
                
                row1: [timetable.row1[0], timetable.row1[1], timetable.row1[2],timetable.row1[3],timetable.row1[4],timetable.row1[5]],
                /*row2: [$('#pc022').text(), $('#pc023').text(), $('#pc024').text(), $('#pc025').text(), $('#pc026').text(), $('#pc027').text()],
                row3: [$('#pc032').text(), $('#pc033').text(), $('#pc034').text(), $('#pc035').text(), $('#pc036').text(), $('#pc037').text()],
                row4: [$('#pc042').text(), $('#pc043').text(), $('#pc044').text(), $('#pc045').text(), $('#pc046').text(), $('#pc047').text()],
                row6: [$('#pc062').text(), $('#pc063').text(), $('#pc064').text(), $('#pc065').text(), $('#pc066').text(), $('#pc067').text()],
                row7: [$('#pc072').text(), $('#pc073').text(), $('#pc074').text(), $('#pc075').text(), $('#pc076').text(), $('#pc077').text()],
                row8: [$('#pc082').text(), $('#pc083').text(), $('#pc084').text(), $('#pc085').text(), $('#pc086').text(), $('#pc087').text()],
                row9: [$('#pc092').text(), $('#pc093').text(), $('#pc094').text(), $('#pc095').text(), $('#pc096').text(), $('#pc097').text()],
                row10: [$('#pc102').text(), $('#pc103').text(), $('#pc104').text(), $('#pc105').text(), $('#pc106').text(), $('#pc107').text()],
                row11: [$('#pc112').text(), $('#pc113').text(), $('#pc114').text(), $('#pc115').text(), $('#pc116').text(), $('#pc117').text()]
                    */

            }}, {new:true});
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
};
var loadAvailableLabTimeTables=(doc)=>{
    return LabTimeTable.find();
};
var loadAvailableLecTimeTables=(docs)=>{
    return LecTimeTable.find();
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
        loadAvailableSemTimeTables,
        loadAvailableLabTimeTables,
        loadAvailableLecTimeTables
    }



  //  xxxx.findByIdAndUpdate(id, {$set:{}}, {new:true});