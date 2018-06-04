var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.backgroundColor = colors[i];

	//add clickListeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of pickedSquare
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedSquare
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#98ff98";
			messageDisplay.textContent = "Try Again";
		}
	});
};

function changeColors(color) {
	// loop through all squares
	// change each color to match given color
	for (var i= 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}