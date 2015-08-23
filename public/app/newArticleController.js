angular.module("mean-reddit")

.controller("newArticleController", newArticleController)

newArticleController.$inject = ["articleFactory", "$state"]

function newArticleController(articleFactory, $state){
	var vm = this;
	vm.addArticle = addArticle

	function addArticle(){
		articleFactory.post(vm.newArticle)
		$state.go("articles")
	}

}
