$(document).ready(function(){
	/*$("#redBox").draggable({
		snap: true
		
	});

	$("#blueBox").draggable({
		stack: ".products"
	});*/

	$("#redBox").draggable().resizable({
		alsoResize: "#blueBox, #dropHere"
	});
	$("#blueBox").draggable({
		snap: true
	});

	$("#dropHere").droppable({
		accept: "#redBox",
		classes: {
			"ui-droppable-active": "ui-state-active",
        	"ui-droppable-hover": "ui-state-hover"
		},
		drop: function(event, ui){
			$(this).find("p").html("Correct");
			$("#dropHere").css("background-color", "green");
		},
		out: function(event, ui){
			$("#dropHere").css("background-color", "yellow");
			$(this).find("p").html("Drop the red one here");
		}
	});
	$("#selectable").selectable();
});

goToListview=function(){
	location.href="views/listView.html";
}
accordianImplement=function(){
	location.href="secondView.html";
}

