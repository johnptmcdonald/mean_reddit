angular.module("mean-reddit")

.config(config)

function config ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('articles', {
			url: "/articles",
			templateUrl: "../views/articles.html",
			controller: "articleController as vm"
		})

		.state('new', {
			url: "/new",
			templateUrl: "../views/new.html",
			controller: "newArticleController as vm"
		})

	$urlRouterProvider.otherwise('/articles');
}

