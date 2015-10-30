var Artist = require('../models/artists')
var Show = require('../models/shows')
// var fs = require('fs')


var apiController = {
	createArtist : function(req, res){
		// console.log(req.body.song)

		// fs.writeFile('./public/music/'+ req.body.songName + '.mp3', req.body.song,  function(err){

		// 	if (err)
		// 		console.log('error')
		// })


			var newArtist = new Artist({

				name       :   req.body.name,
				songName   :   req.body.songName,
				song       :   req.body.song, 
				bio        :   req.body.bio,

			})

			newArtist.save(function(err, doc){
				res.send(doc)
			})
	},
	getArtist:function(req, res){

		Artist.find({}, function(err, docs){
			res.send(docs)
		})
	}
};



var showController ={
	createShow :function(req,res){

		var newShow = new Show({

			date :  req.body.date,
			venue:  req.body.venue,
			city:   req.body.city,
			state:  req.body.state,

		})

		newShow.save(function(err, doc){
			res.send(doc)
		})
	},

	getShow:function(req, res){

		Show.find({}, function(err, docs){
			res.send(docs)
		})
	}
};

module.exports = {

				apiController : apiController,
				showController: showController,
			}
