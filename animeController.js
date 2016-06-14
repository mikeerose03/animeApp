(function(){

	angular
		.module("animeApp")
		.controller('animeController', ['$timeout','$q','animeService', animeController]);

		function animeController($timeout, $q, animeService){
			var vm = this;
			var defer = $q.defer();

			console.log("controller", this);

			$timeout(function() {
		      if(animeService) {
		        defer.resolve('data received!')
		        vm.data = animeService.data;
		        console.log('data received', animeService)
		      } else {
		        defer.reject('oh no an error! try again')
		      }
		    }, 2000)

		    return 

		    console.log(vm.data);
		 }
	
})();