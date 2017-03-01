console.log('made it to the routes');
var UserController = require('./../controllers/userController.js');
var ProjectController = require('./../controllers/projectController.js');
var TaskController = require('./../controllers/taskController.js')
module.exports = function(app){
	app.get('/users', function(req, res){
		UserController.index(req, res);
	});
	app.post('/users', function(req, res){
		console.log('made it to register route')
		UserController.register(req, res);
	});	
	app.post('/login', function(req, res){
		UserController.login(req, res);
	});
	app.get('/projects', function(req, res){
		ProjectController.index(req, res);
	});
	app.get('/projects/:id', function(req, res){
		ProjectController.find(req, res);
	})
}