var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: String,
	create_date: Date,
	votes: Number,
	author: String
});

module.exports = mongoose.model("Article", ArticleSchema)