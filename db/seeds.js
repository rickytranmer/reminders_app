const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reminders_db');

let Reminder = require('../models/reminder');
Reminder.remove({}, function(err) {
	if (err) document.log(err);
});

let reminders = [
	{
		title: 'Dust',
		message: 'Dust living area'
	},
	{
		title: 'Fart',
		message: 'Relieve some pressure'
	},
	{
		title: 'Gym',
		message: 'Time to get swole'
	}
];

Reminder.create(reminders, function(err, docs) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(docs);
		mongoose.connection.close();
	}
});