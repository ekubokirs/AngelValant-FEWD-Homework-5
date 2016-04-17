$(document).ready(function() {

	function userCity() {
		event.preventDefault();

		var city = $('#city-type').val();

		if (city == 'New York' || city == 'New York City' || city =='NYC') {
			$('body').css('background-image', 'url(../images/nyc.jpg)');
		}
	}

	$('#submit-btn').click(userCity);

});