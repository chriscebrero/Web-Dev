// Check off specific Todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");

});

//Click on X to delete Todo
$("span").click(function (event) {
	$(this).parent().remove();
	event.stopPropagation();
});
