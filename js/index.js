//a user types in text and if the text matches the options to generate a new background
//the new background will load upon submission
//I'm not sure how to use the $.attr() in this code

$(document).ready(function() {

	//This defines the default textbox as blank

	$('#city-type').val('');

	//The submit button when clicked on will trigger the function userCity

	$('#submit-btn').click(userCity);

	//This is the function userCity which uses user input to generate a background image
	function userCity() {

		event.preventDefault();

		//The variable city takes the text input from city-type and switches it to lowercase text and removes any spacing before and after the input text
		var city = $.trim($('#city-type').val().toLowerCase());
		// Great job helping to normalize your inputs

		//These are conditional statements comparing user input to a number of text inputs to generate a background.
		//The previous class is removed and current class background added. The textbook is restored to its default.
		if (city == 'nyc' || city == 'new york' || city == 'new york city') {
			$('body').removeClass();
			$('body').addClass('nyc');
			$('#city-type').val('');
		} else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
			$('body').removeClass();
			$('body').addClass('sf');
			$('#city-type').val('');
		} else if (city == 'los angeles' || city == 'la' || city == 'lax') {
			$('body').removeClass();
			$('body').addClass('la');
			$('#city-type').val('');
		} else if (city == 'austin' || city == 'atx') {
			$('body').removeClass();
			$('body').addClass('austin');
			$('#city-type').val('');
		} else if (city == 'sydney' || city == 'syd') {
			$('body').removeClass();
			$('body').addClass('sydney');
			$('#city-type').val('');
		}
		// It would be nice to but an else statement here too to catch the inputs that arent nice and pretty
	}
	

});