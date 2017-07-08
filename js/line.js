//Set up 
var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var spacing = canvasWidth / 100 * 5
console.log("Setup Done");
window.onresize = function () {
	location.reload();
}
//Set up for drawing Blue Line
var tempy = -10;
var tempx = canvasWidth * .6;
var speed = 100; //Change this for longer animations
var yslope = canvasHeight / speed;
var xslope = canvasWidth * .3 / speed;

function drawLines() {
	mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
	mainContext.beginPath();
	mainContext.moveTo(canvasWidth * .6, -10);
	mainContext.lineTo(tempx, tempy);
	mainContext.lineWidth = canvasWidth / 100;
	mainContext.strokeStyle = 'blue';
	mainContext.stroke();
	mainContext.closePath();
	mainContext.beginPath();
	mainContext.moveTo(canvasWidth * .6 + spacing, -10);
	mainContext.lineTo(tempx + spacing, tempy);
	mainContext.lineWidth = canvasWidth / 100;
	mainContext.strokeStyle = 'red';
	mainContext.stroke();
	mainContext.closePath();
	mainContext.beginPath();
	mainContext.moveTo(canvasWidth * .6 + spacing * 2, -10);
	mainContext.lineTo(tempx + spacing * 2, tempy);
	mainContext.lineWidth = canvasWidth / 100;
	mainContext.strokeStyle = 'green';
	mainContext.stroke();
	mainContext.closePath();
	if (tempy < canvasHeight + 10 && tempx > canvasHeight * .3) {
		tempy += yslope;
		tempx -= xslope;
		requestAnimationFrame(drawLines);
	} else {
		document.querySelector("#A").style.WebkitAnimationName = "fadeIn";
		document.querySelector("#A").style.animationName = "fadeIn";
		console.log("finished");
	}

}
drawLines();