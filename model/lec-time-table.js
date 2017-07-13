/**
 * Created by oshadi on 7/12/2017.
 */
const mongoose = require('mongoose');

var LecTimeTable = mongoose.model('LecTimeTable', {
    timeTableId: {
        type: String,
        //minlength: 5
    },
    timetableType: {
        type: String,
        default: 'lec'
    },
    timeTableName:{
        type:String
    },
    row1: {
        type: [String]
    },
    row2: {
        type: [String]
    },
    row3: {
        type: [String]
    },
    row4: {
        type: [String]
    },
    row6: {
        type: [String]
    },
    row7: {
        type: [String]
    },
    row8: {
        type: [String]
    },
    row9: {
        type: [String]
    },
    row10: {
        type: [String]
    },
    row11: {
        type: [String]
    },
    updated:{
        type:Boolean,
        default:false
    }
});

module.exports = {LecTimeTable};