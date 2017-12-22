const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const engine = require('ejs-locals');

let PORT = 3000;
let remindersController = require('./controllers/reminders');

mongoose.connect('mongodb://localhost/reminders_db');
process.on('exit', function() { mongoose.disconnect(); });

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(express.static(__dirname + '/public'));


// - Routes
app.get('/reminders', remindersController.index);
app.get("/reminders/new", remindersController.new);
app.post("/reminders", remindersController.create);

app.listen(PORT, function() {
	console.log('port:', PORT);
});