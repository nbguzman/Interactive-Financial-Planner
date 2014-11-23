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

	// reached here, all fields are good, add event
	userEvents.push({
		'type': currentEventMode,
		'amount': amount,
		'date': date,
		'description': description
	});
	localStorage.setItem("userEvents", JSON.stringify(userEvents));
};
