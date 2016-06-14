(function(){

	angular
		.module("animeApp")
		.service('animeService', ['$q', '$http', 'constants', animeService]);


	function animeService($q, $http, constants){

		this.data = {};

		return $http({
		 		method: 'GET',
		 		url: constants.API_URL + '/anime/6589'
		 	}).then(function successCallback(response){
				this.data = response.data
				console.log(this.data);
				// console.log('data received!', response.data)
			}, function errorCallback(response){
				console.log('data not received', response.status);
		 	});
				console.log(this.data);
	}
	

})();