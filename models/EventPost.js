var mongoose = require('mongoose');

var EvenPostSchema = new mongoose.Schema({

	title : String,
	date : Date,
	playDate : Date,
	played : boolean,
	upvotes: {type : Number, default:0}

})

mongoose.model('EventPost','EventPostSchema')