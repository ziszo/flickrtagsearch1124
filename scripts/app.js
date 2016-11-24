			var app = angular.module('flickrApp', ['ngAnimate', 'ngRoute']);

			app.config(function($locationProvider, $routeProvider){
				$routeProvider
				.when('/:tag', {
					templateUrl: '/templates/tag-getter.html',
					controller: 'TagController',
					controllerAs: 'tagCtrl'
				})
				.otherwise({
					templateUrl: '/templates/tag-getter.html',
					controller: 'TagController',
					controllerAs: 'tagCtrl'
				})

				// $locationProvider.html5Mode({
				//   enabled: true,
				//   requireBase: true
				// });
			});