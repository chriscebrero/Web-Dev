function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}



// Factorial Question
// 

function factorial(num) {
	// Define a result variable
	var result = 1;
	// 
	// Return the result Variable
	for (var i = 1; i <= num; i++){
		result = result * i;
	}
	return result
}

//Replace "_" with "-"
function kebabToSnake(str) {
	var newString = str.replace("-","_");
	return newString
}

