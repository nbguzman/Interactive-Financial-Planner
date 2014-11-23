// global js var holding sample data
data = [
	{date:"1-May-12",close:"58.13"},
	{date:"30-Apr-12",close:"53.98"},
	{date:"27-Apr-12",close:"67.00"},
	{date:"26-Apr-12",close:"89.70"},
	{date:"25-Apr-12",close:"99.00"}
];

var EVENT_MODE = {
	SPENDING: {VALUE: 0, name: "SPENDING"},
	SAVING: {VALUE: 0, name: "SAVING"},
	ROR: {VALUE: 0, name: "ROR"}
};
var newEventMode = EVENT_MODE.ROR;
