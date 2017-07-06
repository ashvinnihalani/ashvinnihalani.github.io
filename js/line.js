//Set up 
var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d"); 
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
if (canvasHeight< canvasWidth){ //Laptops etc 
	mainContext.beginPath();
	mainContext.moveTo(canvasWidth*.6, -10);
	mainContext.lineTo(canvasWidth*.3, canvasHeight+10);
	mainContext.lineWidth = canvasWidth/100;
	mainContext.strokeStyle = 'blue';
	mainContext.stroke();
	mainContext.closePath();
	mainContext.beginPath();
	mainContext.moveTo(canvasWidth*.6+canvasWidth/100*5, -10);
	mainContext.lineTo(canvasWidth*.3+canvasWidth/100*5, canvasHeight+10);
	mainContext.lineWidth = canvasWidth/100;
	mainContext.strokeStyle = '#ff0000';
	mainContext.stroke();
	mainContext.closePath();
	mainContext.beginPath();
	mainContext.moveTo(canvasWidth*.6+2*canvasWidth/100*5, -10);
	mainContext.lineTo(canvasWidth*.3+2*canvasWidth/100*5, canvasHeight+10);
	mainContext.lineWidth = canvasWidth/100;
	mainContext.strokeStyle = '#00ff00';
	mainContext.stroke();
	mainContext.closePath();
}
