app.factory('userFactory', ['$http', function($http){
	var factory = {};
	factory.user = {};
	factory.findAllUsers = function(callback){

	};
	factory.register = function(user, callback){
		console.log(user)
		console.log('made it to register factory')
		$http.post('/users', user).then(function(returned_data){
			console.log("**********************")
			console.log(returned_data);
			console.log("**********************")
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	};
	factory.login = function(user, callback){
		console.log(user);
		$http.post('/login', user).then(function(returned_data){
			console.log("**********************")
			console.log(returned_data);
			console.log("**********************")
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	return factory
}])