(function(){

	angular
		.module("animeApp")
		.controller('animeController', ['$scope', '$http', function($scope, $http) {
			$http({
		 		method: 'GET',
		 		url: "/request"
		 	}).then(function successCallback(response){
				var data = JSON.parse(response.data)
				$scope.data = JSON.parse(data)
			}, function errorCallback(response){
				console.log('data not received', response.status);
		 	});
		}]);
		// function animeController($timeout, $q, animeService){
		// 	var vm = this;
		// 	var defer = $q.defer();

		// 	console.log("controller", this);

		// 	$timeout(function() {
		//       if(animeService) {
		//         defer.resolve('data received!')
		//         vm.data = animeService.data;
		//         console.log('data received', animeService)
		//       } else {
		//         defer.reject('oh no an error! try again')
		//       }
		//     }, 2000)

		//     return 

		//     console.log(vm.data);
		//  }
	
})();