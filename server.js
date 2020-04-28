var express= require('express');
var app = express();
PORT= process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
},{
	id: 2,
	description: 'Go to market',
	completed: false
},
{
	id: 3, 
	description: 'Feth new code',
	completed: true
}];


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