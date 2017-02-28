var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html'
	})
	.when('/projects', {
		templateUrl: 'partials/dashboard.html', 
	})
	.when('/projects/:id', {
		templateUrl: 'partials/project.html',
		// controller: 'projectController'
	})
	.when('/projects/:id/task', {
		templateUrl: 'partials/task.html',
		// controller: 'taskController'
	})
	.when('/projects/:projectId/task/:taskId', {
		templateUrl: 'partials/task.html',
		// controller: 'taskController'
	})
	.otherwise({
		redirectTo: '/'
	})
})