var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
module.exports = {
	index: function(req, res){
		User.find({}, function(err, users){
			if(err){
				console.log("could not find users");
			} else {
				console.log("Found users");
				res.json({users: users});
			}
		})
	},
	register: function(req, res){
		console.log('running the register function')
		var data = req.body;
		User.find({email: data.email}, function(err, user){
			if(!user){
				res.json({messages: ["email is already registered. Please login or use a different email to register"]})
			} else {
				var encryptedPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8));
				var newUser = new User({firstName: data.firstName, lastName: data.lastName, email: data.email, password: encryptedPassword})
				newUser.save(function(err){
					if(err){
						console.log('unable to register new user');
						res.json({messages: ['error in creating user. Please try again.']});
					} else {
						console.log('*********************')
						console.log(newUser);
						console.log('*********************')
						res.json({user: newUser, messages: ['success']});
					}
				})
			}
		})
	},
	login: function(req, res){
		var data = req.body;
		User.find({email: data.email}, function(err, user){
			if(err){
				console.log(err);
				res.json({messages: ['Email has not been registered. Please create an account.']});
			} else {
				if(bcrypt.comapreSync(data.password, user.password)){
					res.json({user: user, messages: ['success']})
				} else {
					res.json({messages: ['Incorrect Password']})
				}
			}
		})
	}
}