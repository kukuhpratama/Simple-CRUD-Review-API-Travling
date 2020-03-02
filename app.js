var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());


// database config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://SimpleApiTravling:12345@simpleapitravling-sqdb7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => console.log('successfully connected  mongodb.'))
  .catch(err => console.error(err))

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
