const app = require('express')();
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');

// routers
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const restRouter = require('./routes/rest');

// const db_username = 'diwang_hichat_capstone';
// const db_password = '88888888';
// mongoose.connect(`mongodb://${db_username}:${db_password}@ds141454.mlab.com:41454/hichat-capstone`);

// connect mongodb
require('./models/main').connect(config.mongoDbUri);


app.use(express.static(path.join(__dirname, '../public')));

// Load passport strategies
app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// remove this after development is done.
app.use(cors());

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1', restRouter);


app.use(function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send('404 Not Found');
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