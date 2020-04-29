var express= require('express');
var bodyParser = require('body-parser');

var app = express();
PORT= process.env.PORT || 3000;
var todos = [];
var todoNextId=1;

app.use(bodyParser.json());



app.get('/', function (req, res) {
	res.send('Todo API Root ');
});
app.get('/todos', function(req, res){
	res.json(todos);
});
app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchedIdTodos;

	todos.forEach(function(todo){
		if (todoId === todo.id){
			matchedIdTodos = todo;
		}
	});
	if (matchedIdTodos){
		res.json(matchedIdTodos);
	}else{
		res.status(404).send();

	}

});
app.post('/todos', function(req, res){
	var body = req.body;
	body.id = todoNextId;
	todoNextId++;

	todos.push(body);
	res.json(body);

});
// app.get('/todos/:id', function(req, res){
// 	var todoId = parseInt(req.params.id, 10);
// 	var matchedId;
// 	todos.forEach(function(todo){
// 		if(todoId=== todo.id){
// 			matchedId = todoId;
// 		}
// 	});
// 	if(matchedId){
// 		res.json(matchedId);
// 	}else{
// 		res.status(404).send();
// 	}
// });



app.listen(PORT, function(){
	console.log('Express listening the port: ' +  PORT + '!!!');
});