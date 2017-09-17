const app = require('express')();
const express = require('express');
const config = require('./config/config.json');
const mongoose = require('mongoose');
const path = require('path');

const indexRouter = require('./routes/index');
const restRouter = require('./routes/rest');

// const db_username = 'diwang_hichat_capstone';
// const db_password = '88888888';
// mongoose.connect(`mongodb://${db_username}:${db_password}@ds141454.mlab.com:41454/hichat-capstone`);

// connect mongodb
require('./models/main').connect(config.mongoDbUri);


app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.use(function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();

// const editorSocketSerivce = require('./Services/editorSocketService')(io);

const server = http.createServer(app);
// io.attach(server);
server.listen(3000); 
server.on('error', onError);
server.on('listening', onListening);

function onError() {
  throw error;
}

function onListening() {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
  console.log('Listening on ' + bind);
}
