var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"OpenDoorIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open door" )
	},
	"RunAwayIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "run away" )
	},
	"StairsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Stairs" )
	},
	"LivingRoomIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Living Room" )
	},
	"ContinueUpTheStairsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Continue up the stairs" )
	},
	"WalkToTheFireplaceIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "walk to the Fireplace" )
	},
	"LookAtTheDeskIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "look at the Desk" )
	},
	"OtherRoomIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Other Room" )
	},
	"GoToTheBasementIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Go to the Basement" )
	},
	"LookInTheOvenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Look in the Oven" )
	},
	"TheNextRoomIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "The Next Room" )
	},
	"DownTheStairsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Down the Stairs" )
	},
	"NextRoomIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Next room" )
	},
	"SitAtTheTableIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Sit at the table" )
	},
	"ClosetIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Closet" )
	},
	"FrontDoorIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Front door" )
	},
	"StaircaseIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Staircase" )
	},
}