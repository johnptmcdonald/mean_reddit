var express = require("express"); // requires the express module and assigns it to the variable express;
var app = express(); // defining our app as an instance of express
var bodyParser = require("body-parser")
var mongoose = require("mongoose");
var apiRouter = require("./app/config/routes")
var config = require("./app/config/config");
var environmentSettings = config.config();

mongoose.connect(environmentSettings.db)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public")

app.get("/", function(request, response){
	response.sendfile("./public/views/index.html")
})

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Server running on port 3000");
