const mongoose = require('mongoose');

let ReminderSchema = new mongoose.Schema( {
	title: String,
	message: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
} );

let Reminder = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminder;