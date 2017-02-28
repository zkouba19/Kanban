var UserController = require('./../controllers/userController.js');
var ProjectController = require('./../controllers/projectController.js');
var TaskController = require('./../controllers/taskController.js')
module.exports = function(app){
	app.get('/users', function(req, res){
		UserController.index(req, res);
	});
	app.post('/users', function(req, res){
		UserController.create(req, res);
	});	
}