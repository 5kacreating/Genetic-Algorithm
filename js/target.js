function Target(x,y)
{
	this.location = new Vector(x,y);

	this.draw = function()
	{
		ctx.beginPath();
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.arc(this.location.x,this.location.y,15,0,2*Math.PI);
		ctx.fill();
	}
}