
	var main;
	app.controller('PageController', function($http, $location, $routeParams, $scope){
		main = this;
		console.log('PageController running...');
		this.results = [];
		this.error = false;
		this.tag = "";
		this.tempTag = "";
		this.prevTag = "";
		this.requesting = false;
		this.noTag = true;
		this.toggle_noTag = function(){
			this.noTag = !this.noTag;
			if (this.noTag) {
				this.tempTag = "";
				this.tag = "";
				// window.history.pushState({"html":'index.html'},"Flickr | Search by Tag", '#');
				$location.path('');
			}
		};
		this.enter_tag = function(e) {
			if (e.keyCode == 13)
				this.initilize_request();
		};
		this.search_tag = function() {
			this.initilize_request();
		};
		this.initilize_request = function() {
			if (this.tempTag) {
				this.tag = this.tempTag;
				$location.path(this.tag);
				this.flickr(this.tag);
			}
			/*else {	//if no tag entered
				this.tag = "inspection";
				this.tempTag = "inspection";
				this.flickr(this.tag);
			}*/
		};
		this.flickr = function(tag) {
			// if (tag != this.prevTag) {
				// this.results = [];
				this.requesting = true;
				$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags='+encodeURIComponent(tag))
					.then(function(success){
						console.log(success.statusText);
						main.results = success.data.items;
						main.requesting = false;
						main.noTag = false;
						window.scrollTo(0,0);
					}.bind(this),
					function(error){
						console.log(error.statusText);
						this.error = true;
						main.errorCode = error.status;
						main.errorTitle = "Sorry"
						main.errorMessage = "Please check your internet connection."
						main.requesting = false;
						main.noTag = false;
					}.bind(this));
				this.prevTag = tag;
			// }
		};
	});

	app.controller('TagController', function($routeParams, $location){
		console.log('TagController running...');
		console.log($routeParams.tag);
		if ($routeParams.tag) {
			main.tag = $routeParams.tag;
			console.log(main.tag);
			main.tempTag = $routeParams.tag;
			main.flickr($routeParams.tag);
		}
		else {
			main.tempTag = "";
			main.tag = "";
			main.noTag = true;
		}
			// $location.path("inspection");
	});

	app.controller('SearchController', function(){
		console.log('SearchController running...');
	});

	app.controller('ResultsController', function(){
		console.log('ResultsController running...');
	});

	app.controller('ResultController', function(){
		console.log('ResultController running...');
	});