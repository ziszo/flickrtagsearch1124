	
	app.directive('tagSearch', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/tag-search.html',
			controller: 'SearchController',
			controllerAs: 'searchCtrl'
		};
	});

	app.directive('searchResults', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/search-results.html',
			controller: 'ResultsController',
			controllerAs: 'resultsCtrl'
		};
	});

	app.directive('resultItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/result-item.html',
			controller: 'ResultController',
			controllerAs: 'resultCtrl'
		};
	});

	/*app.directive('tagGetter', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/tag-getter.html',
			controller: 'TagController',
			controllerAs: 'tagCtrl'
		};
	});*/