var button = document.querySelector("button");
var isMint = false;


button.addEventListener("click", function () {
	if (isMint) {
		document.body.style.background = "white";
		isMint = false;
	} else {
		document.body.style.background = "#98ff98";
		isMint = true;
	}
});

