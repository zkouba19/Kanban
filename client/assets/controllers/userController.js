app.controller('userController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){
	$scope.users = [];
	$scope.messages = [];
	$scope.index = function(){
		userFactory.findAllUsers(function(data){
			$scope.users = data.users
		})
	};
	$scope.register = function(){
		console.log('made it to register controller')
		userFactory.register($scope.registerUser, function(data){
			if(data.messages[0] === "success"){
				$location.url('/projects')	
			} else {
				$scope.messages = data.messages
				$location.url('/')
			}
		})	
	};
	$scope.login = function(){
		userFactory.login($scope.loginUser, function(data){
			console.log(data);
			if(data.messages[0] === "success"){
				$location.url('/projects')	
			} else {
				$scope.messages = data.messages
				$location.url('/')
			}
		})
	};
	
}]);