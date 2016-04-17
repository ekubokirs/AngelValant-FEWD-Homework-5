//A user types in a string of text and clicks on the submit button
//If the text aligns with any of the strings below it will trigger
//the corresponding photo background stored in a class in the css file

$(document).ready(function() {

	//The button on the HTML document will start the js function "userCity"
	$("#submit-btn").click(userCity);

	function userCity() {
		event.preventDefault();

		//The variable "city" will hold the user input from the textbox labeled "city-type"
		var city = $("#city-type").val();

		//This is a conditional statement comparing the user input to a variety of text triggers
		if(city == "NYC" || "New York" || "New York City") {
			$("body").removeClass();
			$("body").addClass("nyc");
		} else if(city == "San Francisco" || "SF" || "Bay Area") {
			$("body").removeClass();
			$("body").addClass("sf");
		} else if(city == "Los Angeles" || "LA" || "LAX") {
			$("body").removeClass();
			$("body").addClass("la");
		} else if(city == "Austin" || "ATX") {
			$("body").removeClass();
			$("body").addClass("austin");
		} else if(city == "Sydney" || "SYD") {
			$("body").removeClass();
			$("body").addClass("sydney");
		}

	}

});