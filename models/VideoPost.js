var mongoose = require('mongoose');

var VideoPostSchema = new mongoose.Schema({

	title: String,
	date: Date,
	link : String,
	artist: String,
	description: String,
	id: Number,
})

mongoose.model('VideoPost',VideoPostSchema)