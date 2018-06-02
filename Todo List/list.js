var todos = [];

var input = prompt("What would you like to do?")

while(input !== "quit"){
	if(input === "list") {
	console.log(todos);
} else if(input === "new") {
	// ask for new todos
	var newTodo = prompt("Enter a new todo");
	todos.push(newTodo);
	}
	input = prompt("What would you like to do?")
}
console.log("Ok, you quit the application")