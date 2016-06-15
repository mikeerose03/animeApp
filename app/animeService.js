(function(){

	angular
		.module("animeApp")
		.service('animeService', ['$q', '$http', 'constants', animeService]);


	function animeService($q, $http, constants){

		this.data = {};
		return;
		// return $http({
		//  		method: 'GET',
		//  		url: "/request"
		//  	}).then(function successCallback(response){
		// 		this.data = JSON.parse(response.data)
		// 		console.log(this.data);
		// 		// console.log('data received!', response.data)
		// 	}, function errorCallback(response){
		// 		console.log('data not received', response.status);
		//  	});
				console.log(this.data);
	}


})();