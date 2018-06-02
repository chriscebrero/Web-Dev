var todos = [];

var input = prompt("What would you like to do?")

while(input !== "quit"){
	if(input === "list") {
		console.log("**********");
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("**********");
} else if(input === "new") {
	// ask for new todos
	var newTodo = prompt("Enter a new todo");
	todos.push(newTodo);
	}
	input = prompt("What would you like to do?")
}
console.log("Ok, you quit the application")