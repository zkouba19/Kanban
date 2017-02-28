var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TaskSchema = new mongoose.Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	dueDate: {type: Date},
	owner: {type: Schema.Types.ObjectId, ref: "User"},
	priority: {type: Number, required: true},
	status: {type: String, required: true}
}, {timestamps: true})

var Task = mongoose.model('Task', TaskSchema)