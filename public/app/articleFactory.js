angular.module("mean-reddit")

.factory("articleFactory", articleFactory)

articleFactory.$inject = ["$http"]

function articleFactory($http) {
	var articleFactory = {
		get: get,
		post: post
	};

	return articleFactory;

	function get(){
		return $http.get("/api/articles").then(console.log("inside factory"))
	}

	function post(article) {
		return $http.post("/api/articles", article)
	};
}