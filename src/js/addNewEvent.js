var addUserEvent = function(){
	var amount = description = date = null;
	try{
		amount = parseFloat(document.getElementById('eventAmount').value);
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

		if (typeof amount === "undefined" || amount === null || isNaN(amount)) {
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
};
var changeEventType = function(context) {
	localStorage.setItem("currentEventMode", EVENT_MODE_NAME.indexOf(context));
	location.reload();
};
