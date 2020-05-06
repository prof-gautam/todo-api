// var Sequelize = require('sequelize');
// var sequelize = new Sequelize(undefined, undefined, undefined, {
// 	'dialect': 'sqlite',
// 	'storage': 'basic-sqlite-database.sqlite'
// });
// sequelize.sync().then(function () {
// 	console.log('Everything is synced');
// })


var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname +'/basic-sqlite-database.sqlite'
});
const Op = Sequelize.Op;


var Todo = sequelize.define('todo',{
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate:{
			len: [1, 250]
		}


	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false

	}
});
sequelize.sync().then(function(){
	console.log('Everty thing is synced!!');
	Todo.findByPk(3).then(function(todo){
		if (tdo) {
			console.log(todo.toJSON());

		}else{
			console.log('no todo found!')
		}
	});
	// Todo.create({
	// 	description: 'Walk a dog',
	// 	completed: false
	// }).then (function(todo){
	// 	return Todo.create({
	// 		description: 'Clean my room',
	// 	});
	// }).then(function(){
	// 	return Todo.findAll({
	// 		where:{
	// 			description: {
	// 				[Op.like]: '%dog%'
	// 			}
	// 		}
	// 	})
	// }).then(function(todos){
	// 	if(todos){
	// 		todos.forEach(function(todo){
	// 			console.log(todo.toJSON());
	// 		});
			
	// 	}else{
	// 		console.log('No data found!!');
	// 	}

	// })
	// .catch(function (e) {
	// 	console.log(e);
	// });
});