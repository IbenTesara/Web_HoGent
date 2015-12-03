
var mongoose = require('mongoose');

var EventPostSchema = new mongoose.Schema({

	title: String,
	date: Date,	
	playDate : Date,
	played : Boolean
})

mongoose.model('EventPost',EventPostSchema)