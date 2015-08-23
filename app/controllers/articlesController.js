var Article = require("../models/Article")

function index(request, response){
	Article.find(function(error, articles){
		if(error){
			console.error(error);
		}
		response.json(articles)
	})
}

function create(request, response){
		console.log(request.body);
		var article = new Article(request.body);

		article.save(function(error){
			if(error){
				console.error(error)
			}

			response.json({message: "Article saved"})
		})
	}


function show(request, response){
	Article.findById(request.params.article_id, function(error, article){
		if(error){
			console.error("waah waah: " + error)
		}
		response.json(article);
	})
}

function update(request, response){
	Article.findById(request.params.article_id, function(error, article){
		if(error){
			console.error(error);
		}
		Object.keys(request.body).forEach(function(key){
			article.set(key, request.body[key]);
		})

		article.save(function(error){
			if(error){
				console.error(error);
			}
			response.json({message: "article successfully updated"})
		})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update
}


