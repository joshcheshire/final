var Artist = require('../models/submit')
var fs = require('fs')


var apiController = {
	createArtist : function(req, res){
		// res.send(req.body)

		fs.writeFile('./public/music/'+ req.body.songName + '.mp3', req.body.song,  function(err){

			if (err)
				console.log('error')
		})


			var newArtist = new Artist({

				name       :   req.body.name,
				songName   :   req.body.songName,
				song       :   './public/music/'+req.body.songName,
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
}

module.exports = apiController;