//model


var mongoose = require('mongoose')

var artistSchema = mongoose.Schema({

	name       : {type :String},
	songName   : {type :String},
	song       : {type :String},
	bio        : {type :String},

});

var showSchema = mongoose.Schema

module.exports = mongoose.model('Artist', artistSchema);