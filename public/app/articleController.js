angular.module("mean-reddit")

.controller("articleController", articleController)

articleController.$inject = ["articleFactory"]

function articleController(articleFactory){
	var vm = this;

	vm.add = add;

	articleFactory.get()
		.then(function(response){
			vm.articles = response.data
		})

	function add(article){
		console.log(article)
	}
}
