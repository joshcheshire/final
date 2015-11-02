var mongoose = require('mongoose')

var showSchema = mongoose.Schema({
	artist		: {type :String},
	song		: {type :String},
	venue		: {type :String},
	city		: {type :String},
	state		: {type :String},

});

module.exports = mongoose.model('Show', showSchema);	

