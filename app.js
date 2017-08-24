const express = require('express');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const items = require('./routes/items');


const app = express();

const port = process.env.PORT || 8080;


//middleware
app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/items', items);
app.use(express.static(__dirname + '/public')); //static loc access



//db connection
mongoose.connect(config.database, function(err) {
  if (err) {
    console.log('Not connected to the database: ' + err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});

// get index
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// });


//server port
app.listen(port, function(){
  console.log('Server: OK --- Port: ' + port);
});
