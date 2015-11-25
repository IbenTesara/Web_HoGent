var mongoose = require('mongoose');

var VideoPostSchema = new mongoose.Schema({

	title: String,
	date: Date,
	link : String,
	upvotes: {type: Number, default:0}
})

mongoose.model('VideoPost',VideoPostSchema)