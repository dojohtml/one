$(document).ready(function(){
	var colors = [" #ffb3ff", "#d6d6f5", "Khaki", "Aquamarine", "Pink"];
	var index = 0;
	$("button").click(function(){
		$("body").css("background-color", colors[index++]);
		if (index == colors.length) {
			index = 0;
		}
	});
});