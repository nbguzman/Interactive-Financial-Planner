// global js var holding sample data
data = [
	{date:"1-May-12",close:"58.13"},
	{date:"30-Apr-12",close:"53.98"},
	{date:"27-Apr-12",close:"67.00"},
	{date:"26-Apr-12",close:"89.70"},
	{date:"25-Apr-12",close:"99.00"}
];

var EVENT_MODE = {
	SPENDING: 0,
	SAVING: 1,
	ROR: 2,
};
var EVENT_MODE_NAME = [
	"SPENDING",
	"SAVING",
	"ROR"
];

var modeChoice = function() {
	var currentEventMode = (localStorage.getItem("currentEventMode"));
	if(currentEventMode == null || currentEventMode=="null"){
		console.log("event mode is null");
		console.log("going to store");
		console.log(EVENT_MODE.SPENDING);
		localStorage.setItem("currentEventMode", EVENT_MODE.SPENDING);
	}
};
