var addUserEvent = function(){
	var amount = description = date = null;
	try{
		amount = stripSymbolAndGetFloat(document.getElementById('eventAmount').value);
		description = document.getElementById('eventDescription').value;
		date = $("#datepicker").datepicker('getDate');

		if ( Object.prototype.toString.call(date) === "[object Date]" ) {
			// it is a date
			if ( isNaN( date.getTime() ) ) {  // d.valueOf() could also work
				date = null;
				throw "Invalid Date"
			}
			else {
				// date is valid
			}
		} else {
			date = null;
			throw "Invalid Date"
		}

		if (amount === null) {
			amount = null;
			throw "Invalid amount"
		}

		if (description.length <= 0 || (!description.trim()) || (/^\s*$/.test(description))) {
			description = null;
			throw "Invalid description. Cannot be empty."
		}

	} catch(error) {
		// display error
		alert(error);
		return;
	}
	console.log(amount);
	console.log(description);
	console.log(date);

	// change date to d3 date
	// we have Sun Nov 23 2014 00:00:00 GMT-0500 (Eastern Standard Time)
	// d3 wants 25-Apr-12
	date = (date.toString().substr(8,2)+'-'+date.toString().substr(4,3)+'-'+date.toString().substr(13,2)).toString();

	// reached here, all fields are good, add event
	var userEvents = JSON.parse(localStorage.getItem("userEvents")) || [];
	userEvents.push({
		'type': localStorage.getItem("currentEventMode"),
		'amount': amount,
		'date': date,
		'description': description
	});
	localStorage.setItem("userEvents", JSON.stringify(userEvents));

	document.getElementById('eventAmount').value = null;
	document.getElementById('eventDescription').value = null;
	$('#newEventComplete').toggleClass('hidden');
	// scroll to bottom of window, to show new dialog
	$('html, body').animate({scrollTop: $(document).height()}, 'slow');
	// set focus to first input field
	document.getElementById('eventAmount').focus();
};
var changeEventType = function(context) {
	localStorage.setItem("currentEventMode", EVENT_MODE_NAME.indexOf(context));
	location.reload();
};
var addAnotherEvent = function() {
	// hide dialog
	$("#newEventComplete").toggleClass("hidden");
	// scroll to top
	$('html, body').animate({scrollTop:0}, 'slow');
	// set focus to first input field
	document.getElementById('eventAmount').focus();
};
var addStartingNumbers = function() {
	var startingAmount = stripSymbolAndGetFloat(document.getElementById('startingAmount').value);
	var interestRate = stripSymbolAndGetFloat(document.getElementById('interestRate').value);
	if (startingAmount !== null && interestRate !== null) {
		localStorage.setItem("startingAmount", startingAmount);
		localStorage.setItem("interestRate", interestRate);
		window.location.href = './planner.html';
	}
	console.log("error");
};
var stripSymbolAndGetFloat = function(value) {
	if (typeof value === "undefined" || value === null) {
		return null;
	}
	result = value.replace(/[`\[A-Z\]~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
	if (isNaN(result)) {
		return null;
	}
	return result;
};
