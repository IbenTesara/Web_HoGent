
var mongoose = require('mongoose');

var EventPostSchema = new mongoose.Schema({

	title: String,
	date: Date,	
	playDate : String,
	description: String,
	
})

mongoose.model('EventPost',EventPostSchema)