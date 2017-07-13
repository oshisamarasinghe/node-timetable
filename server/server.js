/*
 * oshadhi-2017/07/11
 */
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
// const MongoClient = require('mongodb').MongoClient;

const {ReceptionTimeTableSocket} = require('./../socket/reception-timetable-socket');
const {StudentTimeTableSocket} =require('./../socket/student-timetable-socket');
const {LecturerTimeTableSocket}=require('./../socket/lecturer-timetable-socket');
//const timetableController = require('./../controller/timetable-controller');

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
    new StudentTimeTableSocket(io,socket);
    new LecturerTimeTableSocket(io,socket);

});

server.listen(3000, () => {
    console.log('Server is up on 3000');
});

