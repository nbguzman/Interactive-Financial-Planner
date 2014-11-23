// global js var holding sample data
data = [
	{date:"1-May-12",close:"58.13"},
	{date:"30-Apr-12",close:"53.98"},
	{date:"27-Apr-12",close:"67.00"},
	{date:"26-Apr-12",close:"89.70"},
	{date:"25-Apr-12",close:"99.00"}
];

var EVENT_MODE = {
	SPENDING: {value: 0, name: "SPENDING"},
	SAVING: {value: 1, name: "SAVING"},
	ROR: {value: 2, name: "ROR"}
};
var currentEventMode = EVENT_MODE.ROR;
