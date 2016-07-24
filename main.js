// JavaScript goes here

$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	// draw stuff with paper.js

	// var c = Shape.Circle(200, 200, 100);
	// c.fillColor = 'red';

	// draw 64 circles in a grid

	// var c;
	// for(var x=25; x<400; x+=50) {
	// 	for(var y=25; y<400; y+=50) {
	// 		c = Shape.Circle(x, y, 20);
	// 		c.fillColor = 'red';
	// 	}
	// }

	// use paper.js tool
	var tool = new Tool();

	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'white';

	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'blue';
	text.fontSize = 20;
	text.content = 'hello world';


	tool.onMouseDown = function(event) {
		// var c = Shape.Circle(event.point.x, event.point.y, 20);
		var c = Shape.Circle(event.point, 20);
		c.fillColor = 'green';
	}

	paper.view.draw();

	console.log('main.js loaded');
});
