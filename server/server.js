/*
 * oshadhi-2017/07/11
 */
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
// const MongoClient = require('mongodb').MongoClient;

const {ReceptionTimeTableSocket} = require('./../socket/reception-timetable-socket');
const timetableController = require('./../controller/timetable-controller');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Connection is established');
    socket.on('disconnect', () => {
        console.log('Connection is interrupted');
    });
    new ReceptionTimeTableSocket(io, socket);
});

server.listen(3000, () => {
    console.log('Server is up on 3000');
});


//local imports
// var {mongoose} = require('./db/mongoose.js');


//var {TimeTable}= require('./models/timetableModel.js');

//lec timetable model
// var LecTimeTable= mongoose.model('LecTimeTable',{
// _id:{
//   type: String,
//   min:5
// },
// tbltype:{
//   type:String,
//   //enum:['lec'],
//   default:'lec'
// },
// row1:{
//    type:[String]
// },
// row2:{
//   type:[String]
// },
// row3:{
//   type:[String]
// },
// row4:{
//   type:[String]
// },
// row6:{
//    type:[String]
// },
// row7:{
//  type:[String]
// },
// row8:{
//    type:[String]
// },
// row9:{
//    type:[String]
// },
// row10:{
//  type:[String]
// },
// row11:{
//    type:[String]
// }
// });
//
//
// //lab model
// var LabTimeTable= mongoose.model('LabTimeTable',{
// _id:{
//   type: String,
//   min:5
// },
// tbltype:{
//   type:String,
//   //enum:['lab'],
//   default:'lab'
// },
// row1:{
//    type:[String]
// },
// row2:{
//   type:[String]
// },
// row3:{
//   type:[String]
// },
// row4:{
//   type:[String]
// },
// row6:{
//    type:[String]
// },
// row7:{
//  type:[String]
// },
// row8:{
//    type:[String]
// },
// row9:{
//    type:[String]
// },
// row10:{
//  type:[String]
// },
// row11:{
//    type:[String]
// }
// });
//
//
//
//
// MongoClient.connect('mongodb://localhost:27017/TimeTable',(err,db)=>{
//   if(err){
//     return console.log('unable to connect to the mongoDB server'); //return out if there is an error
//   }
//   console.log('connected to the mongoDB server');
//
// });
//
// const port=process.env.PORT || 3000;
// const publicPath =path.join(__dirname,'../public');
//
// var app=express();
// var server=http.createServer(app);
// var io=socketIO(server);
//
// app.use(express.static(publicPath));
//
// io.on('connection',(socket)=>{
//   console.log('new user connected');
//
//   socket.on('addNewTable',(timeTable)=>{
//
//     if(timeTable.tbltype==="sem"){
//       var newtable= new SemTimeTable({
//        _id     : timeTable.tblid,
//        row1    : timeTable.row1,
//        row2    : timeTable.row2,
//        row3    : timeTable.row3,
//        row4    : timeTable.row4,
//        row6    : timeTable.row6,
//        row7    : timeTable.row7,
//        row8    : timeTable.row8,
//        row9    : timeTable.row9,
//        row10   : timeTable.row10,
//        row11   : timeTable.row11
//
//      });
//      newtable.save();
//     }
//     else if (timeTable.tbltype==="lec") {
//
//         var newtable= new LecTimeTable({
//          _id     : timeTable.tblid,
//          row1    : timeTable.row1,
//          row2    : timeTable.row2,
//          row3    : timeTable.row3,
//          row4    : timeTable.row4,
//          row6    : timeTable.row6,
//          row7    : timeTable.row7,
//          row8    : timeTable.row8,
//          row9    : timeTable.row9,
//          row10   : timeTable.row10,
//          row11   : timeTable.row11
//
//        });
//        newtable.save();
//       }
//
//     else if (timeTable.tbltype==="lab") {
//
//         var newtable= new LabTimeTable({
//          _id     : timeTable.tblid,
//          row1    : timeTable.row1,
//          row2    : timeTable.row2,
//          row3    : timeTable.row3,
//          row4    : timeTable.row4,
//          row6    : timeTable.row6,
//          row7    : timeTable.row7,
//          row8    : timeTable.row8,
//          row9    : timeTable.row9,
//          row10   : timeTable.row10,
//          row11   : timeTable.row11
//
//        });
//        newtable.save();
//       }
//
//
//     //console.log(timeTable.tblid);
//   });
//
//   socket.on('loadTimetable',(timetable)=>{
//     MongoClient.connect('mongodb://localhost:27017/TimeTable',(err,db)=>{
//       if(err){
//         return console.log('unable to connect to the mongoDB server'); //return out if there is an error
//       }
//
//       console.log('connected to the mongoDB server in function');
//       console.log(timetable);
//       if(timetable.tbltype==='sem'){
//           db.collection('SemTimeTable').findOne({_id:timetable.tblid}).toArray().then((docs)=>{
//
//           console.log(docs);
//           },(err)=>{
//           console.log('unable to find');
//         });
//     }
//     else if (timetable.tbltype==='lab') {
//
//         db.collection('LabTimeTable').find({_id:timetable.tblid}).toArray().then((docs)=>{
//         console.log(JSON.stringify(docs,undefined,2));
//         },(err)=>{
//         console.log('unable to find');
//   });
//   }
//     });
//
//   });
//
//   socket.on('disconnect',()=>{
//       console.log('user disconnect');
//   });
// });
//
// server.listen(3000,()=>{
//   console.log('server is up on port',port);
// });
