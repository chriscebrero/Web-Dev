function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--)
		console.log(arr[i]);
}

//*** isUniform() ***
//

function isUniform(arr) {
	var first = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}