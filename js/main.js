var canvas;
var ctx;
var cWidth = 500;
var cHeight = 400;
var ball;
var gravity;
var wind;
var gNumb = 24;
var time = 0;
var balls = [];
var b = 10;
var population;
var genes = 200;
var target;
var ss = 0;

window.onload = function () 
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = cWidth;
	canvas.height = cHeight;
	population = new Population(20);
	target = new Target(cWidth/2, 50);


	setInterval(function(){update();}, 5);
}

function update()
{
	


	time++;

	if(time == genes)
	{	
		population.evaluate();
		population.selection();
		time = 0;
	}

	ctx.clearRect(0,0,cWidth,cHeight);
	target.draw();
	population.update();
	

}

document.onkeydown = checkKey;

function checkKey(e)
{
	if (e.keyCode == 32)
	{
		ball.addForce(wind);
	}
}



